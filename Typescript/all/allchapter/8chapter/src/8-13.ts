type BaseType = string | number | boolean | null | undefined;


function deepCopy(data :any){
    const result = {}
    //要递归的函数
    Rcwork(data)
    //自定义守卫函数
    function isPlainONbject(data:any):data is Exclude<Record<string, any>,Array<any>|Function> {
        return Object.prototype.toString.call(data) === '[object Object]'
    }
    function isObj(data:any):data is Record<string, any>{
        return typeof data === 'object' && data !== null
    }
    function isArray(data:any):data is Array<any>{
        return Object.prototype.toString.call(data) === '[object Array]' 
    }
    function isFunction(data:any):data is Function{
        return Object.prototype.toString.call(data) === '[object Funcition]' 
    }

    function Rcwork(data:any){
        
        if(isObj(data )){ //引用类型
            if( isPlainONbject(data )){ //纯对象
                for (const key in data  ) { //获取对象上的属性
                    if (data?.hasOwnProperty(key)) {
                        Object.defineProperty(result, key, {
                            enumerable: true,
                            configurable: true,
                            writable: true,
                            value:  Rcwork ( data[key])
                        })
                    }
                }
            }
            else if(isArray(data) ){ //数组
                return 
             }
            else if(isFunction(data) ){ //函数
                 //copy一个新的函数
                 const copyFun = (fun:Function)=>{
                     
                     return new Function(`return${fun.toString()}`).call(fun)
                 }
                 return  copyFun(data)
             }
            
        }else{ //基本数据类型
           return data
        }
    }
}


   

