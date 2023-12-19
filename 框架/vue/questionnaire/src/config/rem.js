//自执行函数包裹,作用域,源码不干扰其它js文件
// doc.documentElement 获取页面根节点

(function (doc,win) {
   var docEl = doc.documentElement 
   var resizeEvt = 'orientationchange' in Window?orientationchange: 'resize'
   var recalc = function(){
    var clientWidth = docEl.clientWidth  //设备宽度
    if(!clientWidth) return
    docEl.style.fontSize = 20*(clientWidth /320)+'px'
   }
   win.addEventListener(resizeEvt, recalc) //设备尺寸变更实时重置根字体大小
   doc.addEventListener('DOMContentLoaded',recalc)
})(document, window)