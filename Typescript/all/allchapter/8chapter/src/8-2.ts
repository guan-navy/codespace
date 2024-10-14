//infer 获取到Set<Subject>中的Subject类型
class Subject{
    constructor(public subid:number,public subname:string){}
}
let chineseSubject = new Subject(100,"语文");
let mathSubject = new Subject(101,"数学");
let englishSubject = new Subject(102,"英语");
let setZhangSanSubject = new Set ([chineseSubject,mathSubject,englishSubject]);
// todo:使用infer获取到Set<Subject>中的Subject类型
type SetType<T> = T extends Set<infer U> ? U : never;
//使用 typeof获取到变量的类型,因为这里是一个变量,所以需要加typeof
type SubjectType = SetType<typeof setZhangSanSubject>;