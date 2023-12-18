var isValid = function(s) {
    const len = s.length
    if(len%2!=0) return false
    if(s[0]==')'||s[0]==']'||s[0]=='}') return false
    let map = new Map()
    map.set('(',')')
    map.set('{','}')
    map.set('[',']')
    
    
    let stack = []
    for(let i=0;i<len;i++){
        if(s[i]=='('||s[i]=='['||s[i]=='{'){
            stack.push(s[i])
        }
        else{
            console.log('进入else');
            let str = stack.pop()
            if(map.get(str)==s[i]){
                console.log(map.get(str),s[i])
            }
            else {
                return false
            }
        }
    }
    if(stack.length) {
        return false
    }
    return true
    };
    let s ='{{'
    console.log(isValid(s))