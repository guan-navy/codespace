function foo(n,m){
    console.log(this.a,n)
}
var obj={
    a:2
}
//foo.call(obj,100,1000)//强行把foo函数的this指向改为后面括号中的第一个参数
//foo.apply(obj,[100,1000])//apply强行把foo函数的this指向,接受参数的时候需要数组
var bar=foo.bind(obj,200)//强行把强行把foo函数的this指向obj,并可以传入函数所需的参数,也可以在返回函数里面传入,不够再到返回函数的传入参数里面找
bar(100,200)