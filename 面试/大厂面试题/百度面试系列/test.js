const obj={a:1,b:2}
obj[Symbol.iterator] = function* () {
    const keys = Object.keys(this)
    for (const  k of keys) {
        yield [k,this[k]]
    }
}
for (const [k,v] of obj) {
    console.log(k,v)
}
    
