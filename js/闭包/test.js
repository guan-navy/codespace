var arr = [];
for (var i = 0; i < 10; i++) {
  arr[i] = function(){
    console.log(i);
  }
   
}
console.log(i)
console.log("下一个循环");
for (var j = 0; j < arr.length; j++) {
arr[j]()
}