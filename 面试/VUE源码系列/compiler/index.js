let template = `
    <div id="#app">
        <div @click="()=>console.log('xx')" :id="name">{{name}}</div>
        <h1 :name="title">玩转Vue3</h1>
        <p>编译原理</p>
    </div>
`;

function tokenizer(input) {
    let tokens = []
    let type = '' // 标签 属性 ....
    let val = ''
    // 逐一字符分词 
    for (let i = 0; i < input.length; i++) {
        let ch = input[i] // 每个字符 
        if (ch === '<') {
            push()
            if (input[i + 1] === '/') {
                type = 'tagend'
            } else {
                type= 'tagstart'
            }
        }

        if (ch === '>') {
            if (input[i-1] == '=') {
                // 箭头函数
            } else{
                push()
                type="text"
                continue
            }
        } else if (/[\s]/.test(ch)) {
            push() 
            type='props' 
            continue // div 拿完了 不需要再加ch 
        }

        val += ch 

    }
    
    return tokens;

    function push() {
        if (val) {
            // <div 
            if (type === 'tagstart') val = val.slice(1) // <div  div
            if (type === 'tagend') val = val.slice(2) // </div  div 
            tokens.push({
                type,
                val
            })
            val = ''
        }
    }

    

}
// 解析template字符串
function parse(template) {
    // 分词
    const tokens = tokenizer(template);
    // console.log(tokens);
    let cur = 0
    let ast = {
        type: 'root',
        props: [],
        children: []
    }
    while(cur < tokens.length) {
        ast.children.push(walk())
    }
    return ast
    function walk() {
        let token = tokens[cur]
        if (token.type == 'tagstart') {
            let node = {
                type: 'element',
                tag: token.val,
                props: [],
                children: []
            }
            token = tokens[++cur]
            while (token.type !== 'tagend') {
                if (token.type == 'props') {
                    node.props.push(walk())
                } else {
                    node.children.push(walk())
                }
                token = tokens[cur]
            }
            cur++
            return node
        }

        if (token.type === 'tagend') {
            cur++
        } 
        if (token.type === 'text') {
            cur++ 
            return token
        }
        if (token.type === 'props') {
            cur++
            const [key,val] = token.val.replace('=', '~').split('~')
            return {
                key,
                val
            }
        }
    }
}

function compiler(template) {
    const ast = parse(template)
    console.log(ast);
}
const renderFunction = compiler(template);

