//类型注解
let myName: string = 'Tom';
myName = 'Tom';
console.log(myName);

//类型推导
let myName2 = 'Tom';
console.log(myName2);


interface Person24 {
  name: string;
  age: number;
}
let tom: Person24 = {
  name: 'Tom',
  age: 25
};
let tom2= {
  name: 'Tom2',
  age: 25
};
console.log(tom);
console.log(tom2);

