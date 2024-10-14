class Person{
    constructor(name:string, age:number){
        this.age = age;
        this.name = name;
    }
    name:string;
    protected age:number; //只有子类和本身可以访问 
}
class Student extends Person{
    constructor(name:string,age:number, grade:number){super(name,age)}
    
    private grade:number;
    getGrade(){
        return this.grade;
    }
    
}
let lihua = new Student("lihua", 18, 1);
console.log(lihua.name);