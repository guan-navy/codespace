# 块级
1. 默认占据一整行
2. 可以设置宽高

# 行内快
1. 可以同行显示
2. 可以设置宽高

# 行内
span也是行内标签
1. 可以同行显示
2. 不可以设置宽高

但是以上元素都可以通过css转化

# 浮动
1. 脱离文档流,不占据位置,父容器高度不会计算浮动元素的高度
2. 文字环绕
3. 让块级元素同行显示
4. 让行内元素设置宽高
5. 可以使用margin但是不能使用margin 0 auto;

# 清除浮动 
clear :both 清除左右浮动,left,right
1. 父容器塌陷直接影响父容器后面的元素布局,直接给父容器设置宽高
2. 在最后一个浮动元素之后添加新的元素,在新的元素上做清除浮动
3. 在容器伪元素after上做清除浮动,
4. 在下方被浮动影响的容器上做清楚浮动
5. BFC 容器:添加属性overflow :auto

# BFC 容器Block  Formatting Context 块级格式化上下文
- 哪些属性可以创建bfc:
1. float:right||left
2. postion:absolute||fixed
3. display:inline-block

4. display:table-cell...   表格布局 除了table column
5. overflow:hidden ||auto ||overlay
6. 弹性盒子(display:flex || inline-flex)
- BFC的特点
 1.  BFC容器在高度计算时会将浮动元素的高度也考虑在内
  -  父子容器都被设置为浮动,父容器会有高度
 2. 用于解决内外margin 重叠问题
