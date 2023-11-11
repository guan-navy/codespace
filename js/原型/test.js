//直接对构造函数Car的prototype创建属性并赋值,说明prototype是函数自带的
Car.prototype.height=1400
Car.prototype.lan=4900
Car.prototype.name='BMW'
function Car(owner,color){
    
    this.owner=owner
    this.color=color
}
var car1 = new Car('user1','red')
var car2 = new Car('user2','black')
car1.color='pink'
console.log("car1"+car1)
console.log("car2"+car2)
//打印隐式继承公共属性,说明实例对象可以访问函数原型的属性
console.log(car1.height)
console.log(car2.height)
//更改原型属性
car1.height=0
console.log(car1.height)//height的值不发生变化说明实例对象无法去修改函数原型的属性
Car.prototype.height=1500//通过函数原型修改属性
console.log(car1.height)//修改成功
console.log(car2.height)
//同样删除原型属性也只能通过原型来删除
delete car1.height
console.log(car1.height)
delete Car.prototype.height
console.log(car1.height)