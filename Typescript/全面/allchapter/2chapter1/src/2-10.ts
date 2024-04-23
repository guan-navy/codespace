//数字枚举
enum week{ //是一个数据类型也是一个变量,底层的话其实是一个对象
    //初始化第一项就行,后面的值都是递增
    sunday=1,
    monday=2,
    tuesday=3,
    wednesday=4,
    thursday=5,
    friday=6,
    saturday=7
 }
 //字符串枚举
 enum weekCn{ //是一个数据类型也是一个变量,底层的话其实是一个对象
    //初始化第一项就行,后面的值都是递增
    sunday='星期天',
    monday='星期一',
    tuesday='星期二',
    wednesday='星期三',
    thursday='星期四',
    friday='星期五',
    saturday='星期六'
 }
 //取值方式
 console.log(week.sunday);
 console.log(week['monday']);
 console.log(week[2]);
 console.log(weekCn.sunday);
 console.log(weekCn['monday']);
 //字符串枚举不能反向取属性
//  console.log(weekCn['星期天']);
 
 