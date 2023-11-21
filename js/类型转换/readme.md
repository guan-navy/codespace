# 基本数据类型的转换
1. 转布尔值
2. 转数字
3. 转字符串
4. 转对象

# 对象转
1. 转字符串,调用的就是object.prototype.toString()
  1. {}.toSring 返回由"[Object"和class和"]"组成的字符串
  2. [].toString 返回由数组内部元素以逗号拼接的字符串
  3. xx.toString 直接返回字符串变量

2. 转数字
 1. 包装类对象转数字valueOf
# toprimitive
ToPrimitive(obj,Number)
1. 如果obj是基本类型,直接返回
2. 否则,调用valueOf方法如果得到原始值则返回
3. 否则,调用tostring方法,如果得到原始值则返回
4. 否则报错
ToPrimitive(obj,String)
1. 如果obj是基本类型,直接返回
2. 否则,调用tostring方法,如果得到原始值则返回
3. 否则,调用valueOf方法如果得到原始值则返回
4. 否则报错
所有的对象转布尔值统一是true


# 一元运算符+往number类型转
# 二元运算符+
1. 当加号两边有一个为字符串,则按字符串进行拼接
2. 否则转到number进行计算


# ==
- console.log(NaN==NaN)//返回false,只要一边是false
- 两边有number类型优先非number类型转化为数字

