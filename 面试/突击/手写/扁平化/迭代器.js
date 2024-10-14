
let arr = [1, [2, 3], [4, [5, 6, [7, 8]]]];
function flatten(arr,depth) {
  let count = 0
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)&&depth>0) {
      return [...acc,...flatten(cur,depth - 1)];
    } else {
      return [...acc,cur]
    }
  }, []);
}

// 仅展开一层
console.log(flatten(arr,1)); // [1, 2, 3, [4, [5, 6, [7, 8]]]]