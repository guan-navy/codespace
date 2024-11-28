function test() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(111);
    }, 1000);
  });
}

async function main() {
  await test();
//   如果前面的promise没有resolve后面的代码就不会执行
  console.log(777);
}
main();
setTimeout(() => {
  console.log(222);
}, 1000);
console.log(888);
