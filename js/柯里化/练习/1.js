function currify(fn,argsNum){
return function curried(...args){
    if(args.length>=argsNum){
        return fn.apply(this,args)
    }else{
        return function(...nextArgs){
            return curried.apply(this,args.concat(nextArgs))
        }
    }

}
}
function test(a,b,c,d){
    console.log(a+b+c+d);
    
}
const a= currify(test,4)
a(1,3,5,6)