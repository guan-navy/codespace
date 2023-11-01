var arr=[]
for(var i=0;i<10;i++){
    (function a(j){
        // var j=i私有化变量j
        arr[i]=function b(){
            console.log(j)
        }
    })(i)//使用参数
    
}
for(var j=0;j<arr.length;i++){
    arr[j]()
}//解法1:9个10,改成let,函数可以正常执行,而且每个i都有自己的块级作用域,也就有自己的值
// 立即执行函数+闭包 1.var j=i私有化变量j 2.使用立即调用函数的传入参数
