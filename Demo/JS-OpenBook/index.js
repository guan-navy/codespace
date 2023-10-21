var front = document.getElementsByClassName('front-cover')[0]
var hlod = false
console.log(front)
//得到右半本书
var book = document.getElementsByClassName('book')[0]
console.log(book)
var shadow=document.getElementsByClassName('shadow')[0]
console.log(shadow)
var card=document.getElementsByClassName('card')[0]
console.log(card)


var clamp = function(val, min, max) {
  return Math.max(min, Math.min(val, max))
}

// 鼠标是否按下
front.onmousedown = function() {
  hlod = true
}
// 鼠标松开
window.onmouseup = function() {
  hlod = false
}

window.onmousemove = function(e) {
  if (hlod) {
    // console.log(e.x);

    // 修改左半本书的角度，卡片旋转，阴影倾斜
    var deg = clamp((window.innerWidth / 2 - e.x + 300) / 300 * -90, -180, 0)
    front.style.transform = `rotateY(${deg}deg)`
   // 整本书立起来 60+deg /8
   book.style.transform = `rotateX(${60 + deg / 8}deg)`
   //卡片 deg / 2
   card.style.transform = `rotateX(${deg / 2.5}deg)`
   // 阴影倾斜 deg/8
   shadow.style.transform =`skew(${deg/8}deg)`

  }
}

// console.log(front);