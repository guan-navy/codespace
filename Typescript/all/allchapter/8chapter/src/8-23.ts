interface Todo823{
    readonly title: string;
   description: string;
    completed: boolean;
    publisher?: string;
    date?: Date;

}
//所有属性变成必选
type Required823<T>={
    [P in keyof T]-?:T[P]
}
//所有属性变成可选
type Optional823<T>={
    [P in keyof T]+?:T[P]
}
//所有属性变成只读  readonly
//去掉只读-
type Readonly823<T>={
    +readonly [P in keyof T]:T[P]
}
//测试
type TodoReadonly823 = Readonly823<Todo823>

type TodoRequired823 = Required823<Todo823>

type TodoOptional823 = Optional823<Todo823>

let testReadonly823:TodoReadonly823={
    title:'123',
    description:'123',
    completed:true
}
//只读无法修改
// testReadonly823.title='123'
// type test<T> = Partial<T>


