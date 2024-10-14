const arr = [1, 2, [3, [4, 5, 6, [7, 8, [9, 10]]]]];
function flatten(arr) {
  const result = [];
  const stack = [...arr];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.unshift(next);
    }
  }
  return result;
}
console.log(flatten(arr)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
