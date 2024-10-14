const arr = [21,324,234,4,24,-34,345,1,3,4,5,6,7,8,9,10];
function bubbleSort(arr){
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
    }
}}

// 2，1，3，4，5
// 1，2，3，4，5


console.log(bubbleSort(arr));