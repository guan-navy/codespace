// 函数参数的解构
{
  type TypStuobj = { usernanme: string; age: number };
  function fn(stuObj: TypStuobj) {
    console.log(stuObj.usernanme, stuObj.age);
  }
  //解构的写法,我并不需要获取整个的一个对象
  function fn1({usernanme,age}:TypStuobj) {
    console.log(usernanme, age);
  }
  //使用
  fn({usernanme:'zhangsan',age:18});
  fn1({age:18,usernanme:'zhangsan'});
  
}
