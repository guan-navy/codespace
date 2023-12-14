// let num = 123
// let str = 'hello world'
// let un =  undefined
// let nu = null

// let sy = Symbol(123)
// let big = 123n


//基本数据类型转布尔值
// console.log("1转化为布尔值:"+Boolean(1))
// console.log('---------------------------------------');
// console.log("-1转化为布尔值:"+Boolean(-1));
// console.log('---------------------------------------');
// console.log("0转化为布尔值:"+Boolean(0));
// console.log('---------------------------------------');
// console.log("null转化为布尔值:"+Boolean(null));
// console.log('---------------------------------------');
// console.log("undefined转化为布尔值:"+Boolean(undefined));
// console.log('---------------------------------------');
// console.log("字符串转化为布尔值:"+Boolean('hello world'));
// console.log('---------------------------------------');
// console.log("空字符串转化为布尔值:"+Boolean(''));
// console.log('---------------------------------------');
// console.log("空格转化为布尔值:"+Boolean(' '));

//转数字
// console.log('字符串123转数字'+Number('123'));
// console.log('---------------------------------------');
// console.log('字符串123.123转数字'+Number('123.123'));
// console.log('---------------------------------------');
// console.log('字符串003.123转数字'+Number('003.123'));
// console.log('---------------------------------------');
// console.log('普通字符串hello'+Number('hello'));
// console.log('---------------------------------------');
// console.log('null转数字'+Number(null));
// console.log('---------------------------------------');
// console.log('undefined转数字'+Number(undefined));
// console.log('---------------------------------------');
// console.log('布尔值true转数字'+Number(true));
// console.log('---------------------------------------');
// console.log('布尔值false转数字'+Number(false));


//转字符串
// console.log('123转字符串'+String(123));
// console.log('---------------------------------------');
// console.log('NaN转字符串'+String(NaN));
// console.log('---------------------------------------');
// console.log('-infinity转字符串'+String(-Infinity));
// console.log('---------------------------------------');
// console.log('null转字符串'+String(null));
// console.log('---------------------------------------');
// console.log('undefined转字符串'+String(undefined));



//转对象
// //通过Object()方法
// // 或者直接通过类型对应的构造函数 new Number new Boolean
let a = new Number(1234)
console.log(a)
console.log(Object(123));

// 对象转布尔
//  function a(){}
// console.log(Boolean(a));
// console.log(Boolean({}));
// console.log(Boolean([]))
// //对象转数字
// console.log('空对象转数字'+Number({}));
// console.log('数组转数字'+Number([]));

// //转字符串对像都有 tostring方法
// //arr的tostring方法
// let a=[1,2,3,4]
// console.log(a.toString());
// let b = {}
// console.log(b.toString());
// let time = new Date()
// console.log(time.toString());
// console.log(JSON.stringify(a));
