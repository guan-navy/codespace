# 解决移动端适配问题 
1.  rem解决 相对单位,是页面根字体大小
     - 设置html内字体的大小就是rem的大小
     - 通过媒体查询@media
     - 
html {
  font-size: 20px;
}
// 媒体查询
 @media(min-width: 400px) {
  html{
    font-size: 25px;
  }
 }

2. 