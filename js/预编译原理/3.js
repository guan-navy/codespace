function foo(a,b){
 console.log(a)//输出1
 c=0//创建全局变量
 var c
 a=3
 b=2//被覆盖为2
 console.log(b)//输出2
 function b(){}
 function d(){}
 console.log(b)//输出2
}
foo(1)//执行该语句时↓
//创建对象
/* 
 - 1.编译一个函数都会为函数创建一个AO对象(action object)
 - 2.找形参和变量声明,将变量声明和形参的作为AO的属性名,值为undefined
 - 3.将形参和和实参的值统一
 - 4.在函数体内找函数声明,将函数名作为AO对象的属性名,值赋予函数体
 1    2     3      4       执行
AO{              
    a : u   u->1           1->3
    b : u          u->f    f->2
    c : u                  u->0
                    d:f  
}
 */
