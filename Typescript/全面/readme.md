# 环境配置
初始化文件
npm init -y
安装
npm Typescript -d
配置文件
tsc -init 
# 插件

tsc ./index.ts 会将ts文件编译为js文件,后面需要手动运行js文件
tsc-node ./index.ts 会编译ts文件并运行js文件


# ts文件的编译问题
因为ts文件设置根目录之后,以及编译输出的目录之后,其他文件夹不允许有ts文件,所以需要设置tsconfig.json的exclude属性,将不需检查的文件夹添加进去

rootDir 表示ts所在的文件目录
outDir 表示编译后的文件目录
注意在其他目录下不允许有ts文件
target 表示编译之后的js的版本es2016表示编译为es6版本

# TS面试问题

1. 根类型
2. 两种单例模式
3. undefined可以赋值给哪些类型
4. 判断一个数据类型的方法Object.prototype.toString.call(data).slice(8, -1)

# 作业
1. 使用方法拦截器实现对所有类的方法的拦截
2. 使用继承关键字实现的继承,之后编译为js文件之后运行