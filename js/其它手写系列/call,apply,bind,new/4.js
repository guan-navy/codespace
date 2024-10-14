
/* 
new 的实现
1. 创建一个空对象
2. 将空对象的原型指向构造函数的原形
3. 将构造函数当中this指向这个对象
4. 执行构造函数
5. 返回这个对象

细节就是
1. 构造函数当中return 了另一个一个对象 那么就返回这个对象
2. 如果构造函数当中没有return 那么就返回新建的这个对象
*/
function myNew(constructor,...args){
    if(typeof constructor!=='function'){
        throw new TypeError('not a function')
    }
    const newObj = Object.create(constructor.prototype)
    const ret = constructor.apply(newObj,args)
    return ret instanceof Object? ret:newObj

}
function Person(name,age){
    this.name = name
    this.age = age
    return {
        name:'1234',
        age:1234

    }
    // return '123'
}
const obj = myNew(Person,'123',123)
console.log(obj)