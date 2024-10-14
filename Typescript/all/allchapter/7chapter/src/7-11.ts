

type o1 = { c: number; b: string };
type o2 = { c: number; d: string };
type o3 = { c: number; e: string };
type o1o2 = o1 & o2;
const o4: o1o2 = {
  b: "2",
  c: 3,
  d: "4",
};

let O1: o1 = {
  b: "2",
  c: 3,
};
let O2: o2 = {
  d: "2",
  c: 5,
};
let O3: o3 = {
  e: "2",
  c: 5,
};
// 使用条件类型优化
type CrosTyp<T> = T extends object ? T : never;

//两个对象的合并
//这里不使用泛型而是使用object 是因为不同的类型可以合并,但是相同的是不行的
function cross<T , U >(o1: CrosTyp<T>, o2: CrosTyp<U>): T & U
function cross<T , U , Z >(o1: CrosTyp<T>, o2: CrosTyp<U>,o3: CrosTyp<Z>): T & U&Z
function cross<T , U , Z >(o1: CrosTyp<T>, o2: CrosTyp<U>,o3?: CrosTyp<Z>): T & U&Z{
 
  const combine = {} as T & U & Z;
 //for循环改进
  union(combine, o1);
  union(combine, o2);
  union(combine, o3);
  return combine;
}
function union(combine: any, curobj: any) {
  //any类型索引的话就不会有限制了
  for (let k in curobj) combine[k] = curobj[k];
  return combine;
}

console.log(cross(O1, O2));
console.log(cross(O1, O2,O3));

// function cross<T extends object, U extends object>(o1: T, o2: U): T & U
// function cross<T extends object, U extends object, Z extends object>(o1: T, o2: U,o3: Z): T & U&Z
// function cross<T extends object, U extends object, Z extends object>
// (o1: T, o2: U,o3?: Z):  T & U&Z{
 
//   const combine = {} as T & U & Z;
//  //for循环改进
//   union(combine, o1);
//   union(combine, o2);
//   union(combine, o3);
//   return combine;
// }
// function union(combine: any, curobj: any) {
//   //any类型索引的话就不会有限制了
//   for (let k in curobj) combine[k] = curobj[k];
//   return combine;
// }
