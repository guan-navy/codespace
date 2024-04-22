//interface和type的区别

// type还可以定义多个联合接口

interface Person {
  name: string;
  age: number;
}
interface Student {
  name: string;
  age: number;
  grade: number;
}
type PersonOrStudent = Person | Student;
let personOrStudent: PersonOrStudent = {
  name: "Tom",
  age: 25,
  grade: 1,
};