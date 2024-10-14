function FirstDecorator(target:any){
    console.log(target.prototype.constructor.name);
    Object.keys(target.prototype).forEach(key=>{
        console.log(key)
    })
    let targetObj = new target()
    console.log("target",targetObj.name)
   console.log('你好');
   targetObj.buy()
    console.log("target",target);
    
}
//将我们的类交给了装饰器
@FirstDecorator
class CustomerService{
    name:string = "下单"
    constructor(){
        console.log("构造函数执行")
    }
    buy(){
        console.log("购买")
    }
    placeOrder(){
        console.log("下单")
    }
}