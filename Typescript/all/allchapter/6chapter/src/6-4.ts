//泛型的默认值,加个等号,后面给默认的类型

class ArrayList64<T=any>{
    arr:Array<T> 
    constructor(){
        this.arr = []
    }
    add(ele:T):void{
        this.arr.push(ele);
    }
    get(index:number):T{
        return this.arr[index];
    }
}