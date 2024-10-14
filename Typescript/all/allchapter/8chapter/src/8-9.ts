//先拿前面当中的类型到后面类型中进行比较,满足就输出
// type Extract<T, U> = T extends U ? T : never;
type TestExtract = Extract<string, string|number>;

type o891 = { c: number; b: string };
type o892 = { c: number; d: string };
type o893 = { c: number; e: string };


let O891:o891 = {
  b: "2",
  c: 3,
};
let O892: o892 = {
  d: "2",
  c: 5,
};
let O893: o893 = {
  e: "2",
  c: 5,
};
// 使用条件类型优化
type CrosTyp89<T> = T extends object ? T : never;
// 条件类型优化还可以继续优化,使用extract类型
//这样只需要修改第二个参数就行了,增强可读性
type extractTyp89<T> = Extract<T, object>;
//两个对象的合并
//这里不使用泛型而是使用object 是因为不同的类型可以合并,但是相同的是不行的
function cross89<T , U >(O891:extractTyp89<T>, O892:extractTyp89<U>): T & U
function cross89<T , U , Z >(O891:extractTyp89<T>, O892:extractTyp89<U>,O893:extractTyp89<Z>): T & U&Z
function cross89<T , U , Z >(O891:extractTyp89<T>, O892:extractTyp89<U>,O893?:extractTyp89<Z>): T & U&Z{
 
  const combine = {} as T & U & Z;
 //for循环改进
 union89(combine, O891);
 union89(combine, O892);
 union89(combine, O893);
  return combine;
}
function union89(combine: any, curobj: any) {
  //any类型索引的话就不会有限制了
  for (let k in curobj) combine[k] = curobj[k];
  return combine;
}
console.log( cross89( O891,O892,O893));






