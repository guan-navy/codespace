//递归实现深拷贝
let arr = [1, 1, '2', 3, 1, 2,
  { name: '张三', id: { n: 1 } },
  { name: '张三', id: { n: 1 } },
  { name: '张三', id: { n: 2 } },
]

//解决问题克隆函数
//解决循环引用的问题
//克隆对象
let obj = {
    a: 1,
    b: {
      n: 2
    },
    c:[1,2,{a:1}]
  }
  
  function deepCopy(obj) {
    let objClone = Array.isArray(obj) ? [] : {}
  
    for (let key in obj) {//遍历属性包括原型链上的
      if (obj.hasOwnProperty(key)) {
  
        if (typeof obj[key] === 'object' && obj[key] !== null) { //如果还是对象的话，递归
          objClone[key] = deepCopy(obj[key])
        } else {
          objClone[key] = obj[key]
        }
  
      }
      
    }
  
    return objClone
  }
  
  let newObj = deepCopy(obj)
  obj.b.n = 20
  
  console.log(newObj);