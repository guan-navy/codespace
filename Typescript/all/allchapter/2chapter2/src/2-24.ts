// 函数参数的解构

  type TypStuobj = { usernanme: string; age: number };
  function fn224(stuObj: TypStuobj) {
    console.log(stuObj.usernanme, stuObj.age);
  }
  //解构的写法,我并不需要获取整个的一个对象
  function fn2241({usernanme,age}:TypStuobj) {
    console.log(usernanme, age);
  }
  //使用
  fn224({usernanme:'zhangsan',age:18});
  fn2241({age:18,usernanme:'zhangsan'});
  

