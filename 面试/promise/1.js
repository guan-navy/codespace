const promise = () => {
    return new Promise((resolve) => {
        console.log('1');
        setTimeout(() => {
            console.log('2');
            setTimeout(() => {
                console.log('3');
            });
        });
        resolve('4')
        console.log('5');
    })
  
}
console.log(6);
setTimeout(() => {
    console.log('7');
}, 0);
promise().then((res) => {
    console.log(res);
});
console.log(8);