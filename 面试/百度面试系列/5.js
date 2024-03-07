// 斐波那契数列 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765

//递归时间复杂度

function fb(n){
    if(n<=2){
        return 1
    }else if(n>2){
        return fb(n-2)+fb(n-1)
    }
    return 0
}

console.log(fb(10))
//dp

function dp(n){
   let a = 1
   let b = 1
   for(let i=2;i<n;i++){
    [a,b] = [b,a+b]
   }
   return b
}
console.log(dp(10));