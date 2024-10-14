let arr = [1, [2, 3], [4, [5, 6, [7, 8]]]];

//数组扁平化
function flatten(arr, depth = 1) {
    let  result = []
    //遍历数组当中的每一个元素,发现如果是数组的话,而且深度还有的话,就递归调用
  for (let i = 0; i < arr.length; i++) {
    if( Array.isArray(arr[i])===true && depth>0){//如果说这个元素还是数组的话,而且需要遍历的深度还没结束,就会先执行完这个
result = result.concat(flatten(arr[i],depth-1))
    }else{
        result.push(arr[i])
    }
  }
  return result
}

console.log(flatten(arr,2));
