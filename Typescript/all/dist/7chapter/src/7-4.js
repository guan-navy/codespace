export function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var left = [];
    var right = [];
    var mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < mid) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(mid, quickSort(right));
}
