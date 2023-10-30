let s='{[()]}'
var isValid=function(s){
    const stack=[]
    const len=s.length
    const data={
        '(':')',
        '[':']',
        '{':'}'
    }
    if(s.length%2!=0) return false
    for(let i=0;i<len;i++)
    {
        const item=s[i]
        if(item=='('||item=='{'||item=='('){
            stack.push(item)
        }
        else{
          
                if(stack.length===0||data[stack.pop()]!==item){
                return false
                }
            
        }
    }
    return stack.length === 0
}
console.log(isValid(s))