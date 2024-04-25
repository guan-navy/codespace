import { log } from "console";

type o1 = { c: number; b: string };
type o2 = { c: number; d: string };
type o3 = o1 & o2;
const o4: o3 = {
  b: "2",
  c: 3,
  d: "4",
};
type S = string[] & string;
let O1: o1 = {
  b: "2",
  c: 3,
};
let O2: o2 = {
  d: "2",
  c: 5,
};
// type S2 = string&number

//两个对象的合并
//这里不使用泛型而是使用object 是因为不同的类型可以合并,但是相同的是不行的

function cross<T extends object, U extends object>(o1: T, o2: U): T & U {
  //因为{}是任何对象的祖先类型可以断言为任何类型除了undefined和null
  const combine = {} as T & U;
  //------for循环重复代码改进一下-------
  // for(const key in o1) {
  //     //因为key不属于combine 所以需要断言为any
  //    (combine as any) [key] = o1[key]
  // }
  // for(const key in o2) {
  //     (combine as any) [key] = o2[key]
  //  }

  union(combine, o1);
  union(combine, o2);
  return combine;
}
function union(combine: any, curobj: any) {
  //any类型索引的话就不会有限制了
  for (let k in curobj) combine[k] = curobj[k];
  return combine;
}

console.log(cross(O1, O2));
