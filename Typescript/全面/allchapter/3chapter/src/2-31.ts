
  //单例模式：1. 在类当中定义一个静态属性，这个属性指向实例对象，这个类的构造函数私有化
  console.log('第一条代码...');
  class DateUtil1 {
    //私有化构造函数类
    private constructor() {}
    //
    static getIntance(){
        if(!this.instance){
            this.instance = new DateUtil1();
        }
        return this.instance;
    }
    //声明荆静态属性
    static instance: DateUtil1 
     formatDate() {}
     diffDateByDay() {} //两个日期之间的天数差
     duffDateByHour() {} //两个日期之间的小时差
     timeConversion() {}
  }

  
  //但是如果我只需要某一个方法
  //如果实例化的对象的话，就引入了所有的方法
  //解决方法就是将其改为静态方法
  DateUtil1.instance.formatDate();

