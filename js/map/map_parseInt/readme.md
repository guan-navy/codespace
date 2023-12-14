# map + parseInt 经典题

- 简单题慢慢讲讲详细一点
- 查了MDN文档,map和paseInt
    map callback 返回值是由callback的每一项组成的新数组
    callback 会接受到 item当前项 index下标 Array数组本身
    parseInt 就是当前的 callback item ,可选的参数radix进制表达

    第二个参数radix没填的话会默认为10进制,
    0是无效进制,还会使用默认的10进制