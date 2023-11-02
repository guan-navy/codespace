//数组是个对象
var arr=[1,2,3,4,5]
arr.length=2
console.log(arr)

//字符串并不是,所以说并不能通过lenth更改字符串的长度,因为二者数据类型不同
var str='abcd'
str.length=2
/* 实际的执行过程,原始值不能有属性和方法
    var str=new String('abcd)   str.length=2    访问完这个值之后就删掉了 
*/
console.log(str.length)//var str=new String('abcd)   str.length=4   访问完这个值之后就删掉了 


//阿里面试题
 var str='abc'
 str +=1 //abc1
 var test=typeof(str)//内置函数判断变量类型 用法typeof(变量)  或者typeof 变量名
 if(test.length==6){ //new一个对象删除
    test.sign='typeof 的返回结果可能为String'
    //再new再添加再删除
 }
 console.log(test.sign)//再new再添加可以访问值,再删除