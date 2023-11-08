# 机器学习任务
transformer huggingface的核心库
- pipeline 分发任务
 pipeline(task,model)

- 数组和hashTable|Dict
  - 相同点
    数据容器 线性
    非线性 树 图
  - 区别
    数组,Dict和栈队列 链表 连续和不连续 内存空间
    非线性 树 图
    查找线性容器里 5?

- transformer 支持哪些nlp任务
    SUPPORTED_TASKS 常量
    items 值是一个Dict JS JSON
    for k,v in     for计数循环(更快)
    图解http协议
    计算机组成原理
- 读/写 操作系统 I/O操作 input output
Output 硬盘
    同步代码 I/O 远程->内存|硬盘 网络传输的耗时
    for() ms 结束 多进程切换 轮循功能
    阻塞
- 人生苦短,我用python
 - requests 网络请求
  requests.get(url,stream=True).raw
  http 请求的方法 get 文明请求
  post 提交表单

 - PIL库 图片的读写等
    Image  r
    ImageDraw  w
 - object