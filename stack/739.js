let temperatures = [73,74,75,71,69,72,76,73]

//[1,1,4,2,1,1,0]
var dailyTemperatures = function(temperatures) {
    const len=temperatures.length
    const stack=[]
    //数组当中放了8个0
    const res=new Array(len).fill(0)
    for(let i=0; i<len; i++){

        //第一遍的while进不来stack.length
        //存在打破递减趋势的温度
        while(stack.length&&temperatures[i]>temperatures[stack[stack.length-1]]){
            const top=stack.pop()
            res[top]=i-top
        }
        stack.push(i)
    }
    return res
}
console.log(dailyTemperatures(temperatures))