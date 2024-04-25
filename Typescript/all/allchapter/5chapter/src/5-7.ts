//自定义类型守卫

class Dog {
  dogName: string;
  constructor(name: string) {
    this.dogName = name;
  }
}
class Cat {
  catName: string;
  constructor(name: string) {
    this.catName = name;
  }
}
//自定义类型守卫
function isDog(viriety: Dog | Cat ):  viriety is Dog {
    return viriety instanceof Dog;
}

function getName57(mypet: Dog | Cat){
    if(isDog(mypet)){
      mypet.dogName
    }
}

//也可以在三元运算符当中使用这个
function test57(mypet: Dog | Cat){
   return isDog(mypet)? mypet.dogName:mypet.catName
}