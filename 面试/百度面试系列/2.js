function myPromise(fn) {
  this.state = "pending";
  this.value = undefined;
  this.reason = undefined;
  const resolve = (value) => {
    if (this.state === "pending") {
      this.state = "fulfilled";
      this.value = value;
    }
  };
  const reject = (reason) => {
    if (this.state === "pending") {
      this.state = "rejected";
      this.reason = reason;
    }
   
  };
  fn(resolve, reject);
}
