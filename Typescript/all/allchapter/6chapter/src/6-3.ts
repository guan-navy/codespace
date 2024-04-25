//泛型在类当中的使用

class ArrayList<T>{
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