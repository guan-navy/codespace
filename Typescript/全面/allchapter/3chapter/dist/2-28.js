"use strict";
{
    class people {
        constructor(name) {
            this.age = 0; //给定初始值
            this.name = name;
            this.habbit = '';
            this.height = 0;
        }
        eat() {
            console.log('eat');
        }
    }
    people.isHuman = true;
    let miike = new people('miike');
    miike.height = 1.7;
    //静态属性和静态方法
    // 每一个实例对象访问到的该属性都是相同的
}
