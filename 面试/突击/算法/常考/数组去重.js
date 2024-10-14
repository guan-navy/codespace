let arr = [1, 1, '2', 3, 1, 2,
  { name: '张三', id: { n: 1 } },
  { name: '张三', id: { n: 1 } },
  { name: '张三', id: { n: 2 } },
]
//set这种数据结构是通过===来判断是否相同的
const strArr = arr.map((item)=>{
  return JSON.stringify(item)
})
console.log(strArr);
let res = [...new Set(strArr)]
res = res.map((item)=>JSON.parse(item))
console.log(res);