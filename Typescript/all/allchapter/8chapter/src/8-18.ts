interface ToDo818{
    title:string;
    description:string;
    completed:boolean;
}
type Omit_<T,K > = {
   [P in keyof T as P extends K ?never:P] :T[P]
}
type test8181 = Omit_<ToDo818,'completed'>
type  test8182 = Omit<ToDo818,'title'|'completed'>
