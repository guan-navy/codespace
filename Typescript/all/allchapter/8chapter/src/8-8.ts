//inkeyof 实战,扁平模块化属性名 

type Moudules = {
    menu:{
        setActiveIndex:(index:string)=>string
        setCollapse:(index :string) =>string
    }
    tabs:{
        setditableTabsValue:(editValue:string)=>void
        setTabs:(index:string)=>void
        setTabsList:(index:string) =>void
    }
}


 
// 1. 模版字符类型,使用&string防止报错
type MB<T,U> = `${T&string}/${U&string} `
type TestMB = MB<  'menu' ,'setActiveIndex'     |   'setCollapse' >
// 2. 拿到父模块的属性名
type ModuleSpliceKeys<T> ={
        [key in keyof T]:T[key]
}
type TestModuleSpliceKeys = ModuleSpliceKeys<Moudules>
// 3. 父子模块联合
type ModuleSpliceMixed<T> = {
    //使用模版类型,将父模块的类型拼接
    //keyof T[key] 的作用是拿到属性名
    [key in keyof T]:MB<key,keyof T[key]>
}[keyof T]

type TestModuleSpliceMixed=ModuleSpliceMixed<Moudules>

// 4.在对象后面增加[keyof T],去掉属性名,变成联合类型