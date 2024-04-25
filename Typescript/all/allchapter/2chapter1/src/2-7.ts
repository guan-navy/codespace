
{
    let data:Object = new Set<string>()
    // data = null
    console.log(data);
    
    // data = undefined
    function test():never{
        while (true) {}
    }
    data = test
    let data1:string|number = '123'
    data1 = 123
    // data1 = '123'
    console.log(data1);

    //交叉类型
    type Obj1= {
        name:string
    }
    type Obj2= {
        age:number
    }
    type Obj3 = Obj1 & Obj2
    let obj:Obj3 = {
        name:'123',
        age:123
    }
    console.log(obj);
    //字面量类型
    // 限制函数使用的时候传入参数的范围
    type num = 1 | 2 | 3
    function isStartUp(increase:boolean|num){
        if(increase){
            return 1
        }else{
            return 2
        }
    }
    isStartUp(2)
    
}