let arr = [1, [2, 3], [4, [5, 6, [7, 8]]]];

function flatten(arr,depth=Infinity){
let result = []
for(let i= 0 ;i<arr.length;i++){
    if(Array.isArray(arr[i])&&depth>0){
        result = result.concat(flatten(arr[i],depth-1))
    }else{
        result.push(arr[i])
    }
}
return result
}
console.log(flatten(arr));