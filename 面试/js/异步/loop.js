console.log("hello"),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("定时2s");
      console.log('这是promise中的宏任务');
    }, 1000);
   
    resolve("你好");
  }).then(() => {
    setTimeout(() => {
      console.log("定时2s");
      console.log("这是then中的宏任务");
    }, 1000);
   
    console.log("最后");
  });
