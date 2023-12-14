var minimumTotal = function (triangle) {

    let res = +Infinity
    let count = 0
    function recursion(arrN, i, j, temp) {//1.数组某一项 2.3.数组下标 4.上一层之和 
        let curTmep = temp + arrN
        console.log(arrN, curTmep)
        if (i < triangle.length - 1) {
            recursion(triangle[i + 1][j],i+1,j,curTmep)
            recursion(triangle[i + 1][j + 1],i+1,j+1,curTmep)
        } else {
            console.log(++count)
            res = curTmep < res ? curTmep : res
        }
    }
    recursion(triangle[0][0], 0, 0, 0)
    return res
};
let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
console.log(minimumTotal(triangle));
