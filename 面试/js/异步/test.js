

async function async1() {
    console.log('async1 start');
    await async2()
    console.log('async1 end') 

    
  }
  async function async2() {
    console.log('async2 end') 
  }
  
  console.log('script start') 
  
  async1()
  
  setTimeout( ()=> {
    console.log('setTimeout') 
  }, 0)
  
  
  new Promise(resolve => {
    console.log('Promise') 
    resolve()
  })
    .then(function () {
      console.log('then1') 
    })
    .then(function () {
      console.log('then2') 
    })
  console.log('script end') 
  