

new Promise((resolve, reject) => {
    for (let i = 0; i < 10000; i++) {
       console.log(1);
        
    }
    setTimeout(() => {
        resolve('success')
    }, 1)
}).then((res) => { 
    console.log(res);
})