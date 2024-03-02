function foo() {
    return new Promise( (resolve, reject)=> {
        resolve(123)
    })
}
Promise.resolve(foo()).then((res)=>{
    console.log(res)
})