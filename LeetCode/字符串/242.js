var isAnagram = function(s, t) {

    if(s.length!=t.length)return false
    const len = s.length
    //按照定义可以知道两个单词的组成字符类型及数量相同
    //通过asc2码表的值之和来判断二者是否符合题意
    const charCount = new Array(26).fill(0)
        let sum = 0
        for(let i = 0; i<len ; i++){
            charCount[s.charCodeAt(i)-97]++
            
        }
        console.log(charCount);
        for(let i = 0; i<len ; i++){
           
            charCount[t.charCodeAt(i)-97]--
        }
        console.log(charCount);
        console.log(len);
        for(let i = 0; i<26 ; i++){
            console.log(charCount[i]);
           if(charCount[i]!==0) 
           {
               return false
           }

        }
        console.log("跳出循环");
        return true
    };
    console.log(isAnagram('nl','cx'))
   