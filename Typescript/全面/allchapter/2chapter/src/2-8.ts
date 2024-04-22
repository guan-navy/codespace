type DataFlow = string | number

//这个函数穷尽了所有的DataFlow类型的可能类型
//使用never 避免未来扩展新的类没有对应的类型实现,目的就是写出类型绝对安全的代码
function dataFlowAnalysisWithNever(data: DataFlow) {
    if (typeof data === 'string') {
        console.log(data.toUpperCase())
    } else if (typeof data === 'number') {
        console.log(data.toFixed(2))
    } else {
        // never,预留出来的类型的区间
       let data1  = data
    }

}
dataFlowAnalysisWithNever('免税')