//assign 和create
let a = {
    name : '俊熙',
    like : {
        n : 'coding'
    }
}
let b =Object.create(a)
console.log(b.name)
let c = Object.assign({},a) // 浅拷贝,普通原始属性值不能更改,包括引用类型的地址值
a.like = {}
console.log(c)
a.like.n = 'running'//修改
console.log(c)
