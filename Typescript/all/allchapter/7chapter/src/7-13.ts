//合并多个对象
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
function combine<T extends object[]>(...unionObj: T):UnionToIntersection<T[number]>
function combine<T extends object[]>(...unionObj: T) {
return unionObj.reduce((acc, obj) => ({
...acc,
...obj
}), {});
}
const crossResult2 = combine({ count: 2, price: 4, name: { ownName: "kate" } },
{ price: 2 }, { address: "beijing" })
crossResult2.address//success
crossResult2.count//success
