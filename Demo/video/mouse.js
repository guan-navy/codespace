//获取滑块调元素
var speed= document.querySelector(".speed");
var bar=document.querySelector(".speed-bar");
var video=document.querySelector('.flex')

// console.log(speed);测试有没有获取该元素
speed.addEventListener('mousemove', function(e) {
    //speed.offsetTop元素距离顶端的距离
    var y=e.y-speed.offsetTop;
    //offsetHeight得到该容器的高度
    var percent=y/speed.offsetHeight;
    //math.floor向下取整
    var Height=Math.round(percent*100)+'%' ;
    console.log(Height);
    bar.style.height=Height;

    //播放速度
    var min=0.4
    var max=4
    var playbackRate=percent*(max-min)+min;
    //.toFixed()保留小数
    bar.textContent =playbackRate.toFixed(2)+'x';
    video.playbackRate=playbackRate;
    
})
