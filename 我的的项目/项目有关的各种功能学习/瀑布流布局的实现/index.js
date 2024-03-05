window.onload = () => {
  imgLayout("container", "img");
};
function imgLayout(container, imgBox) {
  var parent = document.getElementById(container);

  var imgBoxArr = parent.getElementsByClassName(imgBox);
  console.log(parent, imgBoxArr);
  //获取到当前父容器的宽度
  var parentWidth = parent.offsetWidth;
  //获取到当前图片的宽度
  var imgWidth = imgBoxArr[0].offsetWidth;
  //    console.log(parentWidth,imgWidth);
  // 获取一行可以放多少张图片
  const num = Math.floor(parentWidth / imgWidth);
  console.log(num);

  //开始放置操作
  startLayout(imgBoxArr, num,imgWidth);
}
function startLayout(arr, num,imgW) {
  //定义一个高度数组来存储高度
  var heightArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (index < num) {
      //第一行的图片只要将高度存到数组当中就可以
      heightArr.push(arr[index].offsetHeight);
    } else {
      //其他行的图片
      var min = Math.min.apply(null, heightArr);
      const minIndex = heightArr.indexOf(min);
      arr[index].style.position='absolute'
      arr[index].style.top = min + "px";
      arr[index].style.left =  minIndex*imgW + "px";
      heightArr[minIndex] = arr[index].offsetHeight+min;
      
    }
  }
}
