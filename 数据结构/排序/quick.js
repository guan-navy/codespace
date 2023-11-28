let arr = [1,5,7,8,3,4,2]
function quickSort(arr){
    if(arr.length<=1) return arr
    //定义左右数组
    let left = []
    let right = []
    //基准量
    let base = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i]<arr[0]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
            
        }
    }
    return [...quickSort(left),base,...quickSort(right)]
}
console.log(quickSort(arr));