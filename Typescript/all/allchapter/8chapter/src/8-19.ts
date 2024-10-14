interface Todo819 {
  title: string;
  description: string;
  completed: boolean;
  add():number;
  delete():number;
  update():number;
}
//capitalize测试
type test819= 'do'
//将属性名大写
type Todo819Capitalize = Capitalize<test819>

//二次封装exclude,除去数组和函数
type Exclude_<T> = Exclude< T, Array<any >|Function>
type Degree <T extends Record<string,any>>={//获取属性名
    //修改属性名
    //满足前面的条件又要满足后面的条件
    // 模版字符串可以来修改键名
    [P in keyof Exclude_<T> as Exclude_<T>[P] extends Function ?  `${Capitalize< P&string>}`:never ]:Exclude_<T>[P]
}

type Todo819Degree = Degree<Todo819>

//对泛型进行一个约束,约束只能传递对象,但是对象又有问题,要是传递是数组怎么办
//结果是什么
type testArray =  Degree<Array<any>>

type clearkeys<T> = T extends any ? T:never
type testArraykeys =clearkeys<keyof Array<any>> 
