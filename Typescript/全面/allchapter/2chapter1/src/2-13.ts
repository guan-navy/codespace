//any类型的数据任何类型的子类都可以赋值,any类型变量的值也可以赋值给其他类型
let num:Array<string>  = ['']
let num2:any = num
let num3:number[] = num2
let num4:null = num2
let  num5:undefined = num2
let num6:{ } = num2

//前后端交互作为子类应用
//后端传给前端一个book类型但是传递得到的时候是any,这个时候我们可以将any类型转换为book类型

//父类类型应用,自定义守卫


//unkonw
let num7:unknown= 1
if(typeof num7 === 'number'){
    let num8:number = num7
    console.log(num8);
    
}
else{
    throw new Error('类型错误')
}

