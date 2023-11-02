//1.对象的创建
var obj1={}//对象字面量

//2.构造函数
 let obj2=new Object()

//3. 自定义构造函数
 function Car(color){
    this.name='BMW'
    this.height=1400
    this.lan=4900
    this.weight=1000
    this.color=color
 }

 //普通函数直接调用
 //构造函数就像工厂可以批量化生成对象
 let car1=new Car('pink')//实例对象
 let car2=new Car('green')
 car1.name='玛莎'
 console.log(car1)
 console.log(car2)

 //4. Object.create({}),调用自带函数