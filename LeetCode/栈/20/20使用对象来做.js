/* 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。 */


var isValid = function(s) {
    //判断长度,长度不为偶数直接bk
    const len = s.length
    if(len%2!=0) return false
    
    const refer ={
        ')':'(',
        '}':'{',
        ']':'['
    }
    let stack = []
    for(let i=0; i<len; i++){
        if(s[i]==='('||s[i]==='{'||s[i]==='['){
            stack.push(s[i]) //左括号入栈
        }else{
           
            if( refer[s[i]] == stack[stack.length-1]){
                stack.pop()
            }
            else return false
        }
    }
    return true
    };

    let array =['()[]{}', "(]",'{{{','{{()}}']
    for (let index = 0; index < array.length; index++) {
        console.log(isValid(array[index]));
        
    }