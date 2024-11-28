function test() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log(111);
    }, 1000);
  });
}

async function main() {
  await test();
  console.log(777);
}
main();
setTimeout(() => {
  console.log(222);
}, 0);
console.log(888);
// 888 222 111 777