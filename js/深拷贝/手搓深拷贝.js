let obj={
    name:'海军',
    age:18,
    like:{
       a: 'coding'
    },
    b:null,
    //拷贝不了函数体,undefined,bigint,symbol
    a:undefined,
    c:function(){},
    d:Symbol('hello'),
    e:{},
    f:123n
}


//还是处理不了循环引用
function deepCopy(obj){
    let objCopy = {}
    for (let key in obj){
        if( obj.hasOwnProperty(key)){
            if(obj[key] instanceof Object ){//obj[key]是引用类型 
                objCopy[key] = deepCopy(obj[key])
            }
            else{
                objCopy[key] = obj[key]
            }
        }
        
    }
    return objCopy
}