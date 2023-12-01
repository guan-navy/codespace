var firstUniqChar = function(s) {
    let len =s.length
    let obj={}
    for(let i=0;i<len;i++){
        if( obj[s[i]]==undefined ) obj[s[i]] =0
        obj[s[i]]=obj[s[i]]+1
        
    }
    for(let i=0;i<len;i++)
    {
        console.log(i,obj[s[i]])
        if( obj[s[i]]==1)return i
    }
    return -1
    };
    let s = "leetcode"
    console.log(firstUniqChar(s));