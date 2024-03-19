

## 从vue源码中学到了什么
代码之美封装抽象 性能 严谨
原来vue也可以写出来的,调用api也可以完成业务,未来更对写出这样的高质量代码,甚至是开源项目有着憧憬

- 正则表达式
- 闭包的高级使用
  - 在vue源码中学习到了闭包的使用
  - compiler 模块 由 template 字符串转虚拟DOM 时,我们先tokenizer
  在tokenizer 函数内部会闭包一个push方法,用于收集token的关键信息
  比如标签 属性 文本 等
  - 私有化,不影响外界 ,可读性很好

[\s]
\d是数字,\s是空格
- 模块化
 - reactivity 响应式
  effect track trigger  WeackMap
  proxy 
  baseHandler

  - compiler
  template -> ast -> VDOM


  parse 函数负责 template 字符串的解析

  逐一字符分词
    比如说在分析一个div标签
    以一个<开始,然后>结束
  每个模块的内部功能分工很明确

模版字符串->token数组 -> 虚拟DOM(AST walk递归) - > helper (位运算)
