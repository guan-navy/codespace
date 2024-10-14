function fn(nums) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(nums * 2)
      }, 1000)
    })
  }
  function* gen() {
    const num1 = yield fn(1)
    const num2 = yield fn(num1)
    const num3 = yield fn(num2)
    return num3
  }
  const g = gen()
//   获取到第一个暂停处的值
  const next1 = g.next()
  next1.value.then((res)=>{
  console.log(res)
    // 给第一个暂停处传值
  const next2 = g.next(res)
  next2.value.then((res)=>{
    console.log(res)
    const next3 = g.next(res)
    next3.value.then((res)=>{
      console.log(res)
    })


  })


    
  })