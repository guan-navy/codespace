//历史弹幕
let data=[
    {value:'火钳刘明',color:'red',fontsize:22,time:5},
    {value:'优雅',color:'green',fontsize:30,time:19},
    {value:'周董好帅',color:'black',fontsize:25,time:20}
]
CanvasBarrage.prototype.render=function(){
    //清楚画布
    this.clear()
    this.renderBarrage()//弹幕绘制在画布上
    if(!this.isPaused){//播放状态
        requestAnimationFrame(this.render.bind(this))
    }
}
//整理弹幕数据
function CanvasBarrage(canvas,video,opts={}){
   if(!canvas||!video) return
   this.video=video
   this.canvas=canvas


   //canvas设置为和视屏保持一致的宽高
   this.canvas.width=video.width
   this.canvas.height=video.height

   //获取画布
   this.ctx=canvas.getContext('2d') 

   //初始化弹幕的默认对象
   let defOpts={
    color:'#e91e63',
    fontSzie:20,
    speed:1.5,
    opacity:0.5,
    data:[]
   }
//将弹幕的完整属性都挂到this对象上面
   Object.assign(this,defOpts,opts)
// 视屏播放弹幕才出现
this.isPaused=true
//获取到所有的弹幕
this.barrages=data
//移动弹幕
this.render()


}
// new CanvasBarrage(canvas,video,)