// 历史弹幕
let data = [
    { value: '今天你听妈妈的话了嘛？', color: 'red', fontSize: 22, time: 5 },
    { value: '不听不听，就要恋爱', color: 'green', fontSize: 30, time: 10 },
    { value: '周董我男神', color: '#00a1f5', fontSize: 26, time: 13 }
  ]
  
  // 整理弹幕数据
  CanvasBarrage.prototype.render = function() {
    // 清除画布
    this.clear()
    this.renderBarrage() // 弹幕绘制在画布上
    if (!this.isPaused) { // 播放状态
      requestAnimationFrame(this.render.bind(this))
    }
  }
  CanvasBarrage.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  CanvasBarrage.prototype.renderBarrage = function() {
    // 拿到视频播放的时间
    let time = this.video.currentTime
  
    // 遍历所有的弹幕
    this.barrages.forEach(function(barrage) {
      if (time >= barrage.time && !barrage.flag) {
        // 被初始化过的弹幕对象就不再操作
        if (!barrage.isInit) {
          barrage.init()
          barrage.isInit = true
        }
  
        // 控制弹幕左移
        barrage.x -= barrage.speed
        barrage.renderEach()
  
        if (barrage.x < -barrage.width) { // 从左边出屏幕
          barrage.flag = true
        }
      }
    })
  
  }
  CanvasBarrage.prototype.add = function(obj) { // 添加新的弹幕
    this.barrages.push(new Barrage(obj, this))
  }
  
  function CanvasBarrage(canvas, video, opts = {}) {
    if (!canvas || !video) return
  
    this.video = video
    this.canvas = canvas
    // 设置canvas宽高和video保持一致
    this.canvas.width = video.width
    this.canvas.height = video.height
  
    // 获取画布
    this.ctx = canvas.getContext('2d')
    // 初始化弹幕
    let defOpts = {
      color: '#e91e63',
      fontSize: 20,
      speed: 1.5,
      opacity: 0.5,
      data: []
    }
    Object.assign(this, defOpts, opts)
  
    // 视屏播放，弹幕才出现
    this.isPaused = true
    // 获取到所有的弹幕
    this.barrages = this.data.map((item) => new Barrage(item, this)) // 将每一条弹幕都修饰一下
    // 移动弹幕
    this.render()
  
  }
  
  
  
  
  // 修饰一条弹幕
  Barrage.prototype.init = function() {
    this.color = this.obj.color || this.context.color
    this.speed = this.obj.speed || this.context.speed
    this.opacity = this.obj.opacity || this.context.opacity
    this.fontSize = this.obj.fontSize || this.context.fontSize
  
    // 每条弹幕的宽度
    let p = document.createElement('p')
    p.style.fontSize = this.fontSize + 'px'
    p.innerHTML = this.value
    document.body.appendChild(p)
  
    this.width = p.offsetWidth
    document.body.removeChild(p)
  
    // 设置弹幕的位置
    this.x = this.context.canvas.width
    this.y = this.context.canvas.height * Math.random()
    // 上下方超出边界
    if (this.y < this.fontSize) {
      this.y = this.fontSize
    } else if (this.y > this.context.canvas.height - this.fontSize) {
      this.y = this.context.canvas.height - this.fontSize
    }
  
  }
  Barrage.prototype.renderEach = function() {// 这条弹幕绘制在画布上
    // 设置画布的文字字体和字号
    // 设置画布的文字颜色
    // 绘制文字
    this.context.ctx.font = `${this.fontSize}px Arial`
    this.context.ctx.fillStyle = this.color
    this.context.ctx.fillText(this.value, this.x, this.y)
  }
  function Barrage(obj, context) { // context == this
    // console.log(context);
    this.value = obj.value // 新弹幕的内容
    this.time = obj.time
  
    this.obj = obj
    this.context = context
  }
  
  
  // 发送弹幕
  let canvas = document.getElementById('canvas')
  let video = document.getElementById('video')
  let $text = document.getElementById('text')
  let $btn = document.getElementById('btn')
  let $color = document.getElementById('color')
  let $range = document.getElementById('range')
  
  
  // $btn.onclick = function() {
  //   console.log(123);
  // }
  
  // 创建整理弹幕的实例对象
  let canvasBarrage = new CanvasBarrage(canvas, video, {data});
  video.addEventListener('play', function() {
    canvasBarrage.isPaused = false
    canvasBarrage.render() // 处理每一条弹幕
  })
  
  
  function send() {
    // 读取文本内容
    let value = $text.value
    // 当前视频播放时间
    let time = video.currentTime
    let color = $color.value
    let fontSize = $range.value
    let obj = {value: value, color: color, fontSize: fontSize, time: time}
  
    // 添加弹幕数据
    canvasBarrage.add(obj)
  }
  $btn.addEventListener('click', send)
  $text.addEventListener('keyup', function(e) {
    // console.log(e);
    if (e.keyCode === 13) {
      send()
    }
  })