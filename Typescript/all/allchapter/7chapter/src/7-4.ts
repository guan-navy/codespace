//泛型函数的定义
//快排场景的使用
export function quickSort<E>(arr: Array<E>): Array<E>{
    if(arr.length <= 1){
        return arr;
    }
    var left: Array<E> = [];
    var right: Array<E> = [];
    var mid =  arr.splice(Math.floor(arr.length/2),1)[0]
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < mid){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(mid,quickSort(right));
}
// var testArr = [ 3,1,32, 2334,4,56,7,8,90]
// var charArr = [ 'a','b','c','d','e','v','w','x','y','z','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u']
// var result = quickSort(testArr);

// result.forEach((item)=>{
//     console.log(item);
// })
// console.log(quickSort<number>(testArr));
// console.log(quickSort<string>(charArr));


