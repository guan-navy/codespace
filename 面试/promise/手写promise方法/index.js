class MyPromise {
  constructor(excutor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.Fcbs = []; //状态为fulfilled的回调函数数组
    this.Rcbs = []; //状态为rejected的回调函数数组
    const resolve = (value) => {
      if (this.state == "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.Fcbs.forEach((cb) => cb(value)); //then中的回调函数获取到resolve传递的值
      }
    };
    const reject = (reason) => {
      if (this.state == "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.Rcbs.forEach((cb) => cb(reason)); //then中的第二个回调接受到的reject传递的值
      }
    };
    excutor(resolve, reject);
  }

  //在then方法中没有去做判断返回对象如果是普通值就将pending状态改为fulfilled状态
  // 而是直接通过一开始的promise对象中执行then方法的回调函数,如果成功就fulfilled,失败则reject

  then(onFcb, onRcb) {
    onFcb = typeof onFcb === "function" ? onFcb : (value) => value;
    onRcb = typeof onRcb === "function" ? onRcb : (reason) => reason;
    return new MyPromise((resolve, reject) => {
      if (this.state == "fulfilled") {
        //如果前面的promise对象如果是fulfilled状态的话,那么直接执行回调函数,并传递值给下一个then
        //这里需要setTimeout来模拟一下微任务,我们没有办法制造微任务,只能通过宏任务来模拟达到效果
        setTimeout(() => { // 官方是微任务，我们宏任务简化一下
          try {
            const result = onFcb(this.value)
            resolve(result) // 应该放result里面的resolve中的参数
          } catch (error) {
            reject(error)
          }
        })
      } else if (this.state == "rejected") {
        setTimeout(() => {
          try {
            const result = onRcb(this.reason)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        })
      } else { //如果还是pending状态的话将回调保存起来
        this.Fcbs.push((value) => {
          setTimeout(() => {
            try {
              resolve(onFcb(value));
            } catch(err) {
              reject(err);
            }
          });
        });
        this.Rcbs.push((reason) => {
          setTimeout(() => {
            try {
              resolve(onRcb(reason));
            } catch(err) {
              reject(err);
            }
          });
        });
      }
    });
  }
}

