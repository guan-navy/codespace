
{
    type myNumber = number;
    // type Person = {
    //   name: string;
    //   age: number;
    // };
    interface Person  {
        name: string;
        age: number;
      };
    class Student implements Person {
      name: string;
      age: number;
    }
    let person: Person = {
      name: 'John',
      age: 30,
    };
}