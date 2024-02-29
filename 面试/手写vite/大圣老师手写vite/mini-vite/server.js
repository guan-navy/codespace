const fs = require("fs");
const path = require("path");
const Koa = require("koa");
const app = new Koa(); //创建koa的实例

const compilerSfc = require('@vue/compiler-sfc') // .vue 
const compilerDom = require('@vue/compiler-dom') // 模板

app.use(async (ctx) => {
  const {
    request: { url, query },
  } = ctx;
  if (url === "/") {
    ctx.type = "text/html";
    let content = fs.readFileSync("./index.html", "utf-8");
    // 入口文件 加入环境变量
    content = content.replace(
      "<script",
      `
    <script>
        window.process = {env: { NODE_ENV: 'dev' }}
    </script>
    <script
    `
    );
    ctx.body = content;
  }else if (url.endsWith(".js")) {
    // js文件
    const p = path.resolve(__dirname, url.slice(1));
    ctx.type = "application/javascript";
    const content = fs.readFileSync(p, "utf-8");
    ctx.body = rewriteImport(content);
  }else if(url.startsWith('/@modules/')){ 
    // 这是一个node_module里的东西 
    //下面是要补充完整的代码
    const prefix = path.resolve(__dirname,'node_modules', url.replace("/@modules/", ""))
    const module = require(prefix+'/package.json').module 
    const p = path.resolve(prefix,module) 
    const ret = fs.readFileSync(p,'utf-8') 
    ctx.type = 'application/javascript' 
    ctx.body = rewriteImport(ret) 
  }
   // 支持SFC组件  单文件组件
  // /*.vue =>
  else if (url.indexOf(".vue") > -1) {
    // /*.vue?type=template
    const p = path.resolve(__dirname, url.split("?")[0].slice(1));
    const { descriptor } = compilerSfc.parse(fs.readFileSync(p, "utf-8"));
    // console.log("descriptor", descriptor);
    if (!query.type) {
      // 第一步 vue文件 => template script  (compiler-sfc)
      // descriptor.script => js + template生成render部分
      ctx.type = "application/javascript";
      // 借用vue自导的compile框架 解析单文件组件，其实相当于vue-loader做的事情
      ctx.body = `
  ${rewriteImport(
    descriptor.script.content.replace("export default ", "const __script = ")
  )}
  import { render as __render } from "${url}?type=template"
  __script.render = __render
  export default __script
      `;
    } else {
      // 第二步 template模板 => render函数   (compiler-dom)
      const template = descriptor.template;
      const render = compilerDom.compile(template.content, { mode: "module" });
      ctx.type = "application/javascript";
      // console.log('render',render)
      ctx.body = rewriteImport(render.code);
    }
  }
    // css文件
    else if (url.endsWith(".css")) {
      const p = path.resolve(__dirname, url.slice(1));
      const file = fs.readFileSync(p, "utf-8");
  
      // css 转化为 js代码
      // 利用js 添加一个 style标签
      const content = `
      const css = "${file.replace(/\n/g, "")}"
      let link = document.createElement('style')
      link.setAttribute('type', 'text/css')
      document.head.appendChild(link)
      link.innerHTML = css
      export default css
      `;
      ctx.type = "application/javascript";
      ctx.body = content;
    }
});
function rewriteImport(content) {
  return content.replace(/ from ['|"]([^'"]+)['|"]/g, function (s0, s1) {
    // . ../ /开头的，都是相对路径
    if (s1[0] !== "." && s1[1] !== "/") {
      return ` from '/@modules/${s1}'`;
    } else {
      return s0;
    }
  });
}

app.listen(3000, () => {
  console.log("server is running at 3000");
});
