// temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
let temperatures = [73,74,75,71,69,72,76,73]
let ans=[]

var dailyTemperatures = function(temperatures) {
 const len=temperatures.length
 for(let i=0; i<len-1; i++) {
    let flag=false
    const item = temperatures[i]
    for(let j=i+1; j<len; j++) {
        if(temperatures[j]>item){
            ans.push(j-i)
            flag=true
            break
        } 
 }
 if(!flag)ans.push(0)
 
}
ans.push(0)
};
dailyTemperatures(temperatures)
console.log(ans)