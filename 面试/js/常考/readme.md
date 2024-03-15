# 数组上的一些方法

1. 增加元素 push unshift  splice concat 不影响原数组
2. 删除元素 pop shift splice slice不影响原数组,修改掉数组的
3. 改 reverse sort ,fill
4. 查 indexOf lastIndexOf 找不到元素返回-1,返回的下标并不会

includes
find遍历数组 ,返回第一个符合条件的元素

5. 遍历数组的方法

forEach map filter every some reduce

every要所有满足  ---> 联想到promise 的all方法,全部的promise对象都是fullfilled,才执行

- forEach 和 map 的区别
forEach  修改不了原数组,
return无法终止map的循环,
forEach中也没有break也没有continue


map  进行的过程中,会生成一个等长的原数组,每一次return的值为新数组的每一个元素,没有return的值为undefined


reduce((pre,item,i,arr)=>{
    return pre + item
},0)

返回值为pre的最终值,return 的值为返回的值,


6. 转换

转化为字符串,join()


对象的toString方法和数组的tostring方法不是同一个方法,对象的toString方法返回的是[object Object],数组的toString方法返回的是数组的字符串


# 字符串

1. 增加 concat  拼接两个字符串 padStart padEnd  前面和后面填充字符串 
2. 删除 substr  slice  subString

subString (start,end)切下标的范围是左闭右开
substr (start,num)切下标范围是左闭右闭,num为切割的数量

3. 改 replace (要修改的,修改之后的值)  
repeate(重复字符串的字数num) 
trim 只会去掉前后的空格  tirmLeft  trimRight  

toLocaleLowerCase()  toLowerCase() 
toLowerCase() toUpperCase()


4. 查 includes indexOf lastIndexOf s.charAt(index)  endsWith

5. 转化 charCodeAt 直接将字符转换为对应的unicode码
split(' '),去寻找到相应的字符,隔开,返回一个数组,如果是空格返回一个数组一个元素就是改数组




# 3. == 和 === 的比较


