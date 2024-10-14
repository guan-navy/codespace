export class User<T>{
    constructor(public name:T){
        
    }
    getName():T{
        return this.name;
    }
}
export function fn<T>(arg:T):T{
    return arg;
}