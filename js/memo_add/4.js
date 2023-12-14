//动态规划
function fibonacci(n){
let a = 1
let b = 1
for(let i=2;i<n;i++){
    // let temp
    // temp =b
    // b =a+b
    // a = temp
    [a,b] = [b,a+b]
}
return b
}
console.log(fibonacci(7));