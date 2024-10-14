type MouseEvent820 ={
    type: 'mouse';
    x: number;
    y: number;
}
type KeyboardEvent820 ={
    type: 'keyboard';
    key: string;
}

//keyof 联合类型存在的问题,两个接口的相同属性会被拿出来,类型会组成一个联合类型
type keys820  = keyof (MouseEvent820| KeyboardEvent820)
type MK = MouseEvent820 | KeyboardEvent820
// let mk: MK 
// mk.

//通用
//events这里是联合之后的接口类型MouseEvent820|KeyboardEvent820
//key为联合类型的共同的属性名type
//in后面要接的是类型string,symbol,number,否则报错,但是在有这段代码之后就可以正常执行了
//Event extends Events? Event[Key]: never 表示一次从exvents,拿出一个类型出来
type EventFunction<Events extends Record<string ,any>, Key extends keyof Events> =
{
    // [Event in Events as Event extends Events? Event[Key]: never]: (event: Event) => any
    //简写
    [Event in Events as Event[Key]]: (event: Event) => any
}


// 将接口当中的属性类型作为新类型的属性,类型定义为函数
type EventRec820 =  EventFunction<MouseEvent820|KeyboardEvent820,'type'>
