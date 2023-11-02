 let obj={
    name: '丁真',
    age:18

 }
 /* console.log(obj['name'])
 obj.girlFriend='翠花'//没有则添加 */
 let girl='girlfriend'
 //obj.girl='小红'两种增加变量的方式不同比较
 obj[girl]='小红'

 //移除属性

 delete obj.girlFriend//delete obj[girl]删除两个效果一样

 console.log(obj)