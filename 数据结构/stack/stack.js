let stack=[]//只是使用数组的pop和push方法,数组完全包含栈这种数据结构

stack.push('东北大串')
stack.push('巧乐兹')
stack.push('钟薛高')
stack.push('小布丁')
stack.push('绿舌头')
stack.push('可爱多')

//出栈
while(stack.length)//强制转换,除了0其他值都为true
{
    const top=stack[stack.length-1]
    console.log('我正在吃',top)
    stack.pop()
}