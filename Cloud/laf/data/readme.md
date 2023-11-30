# 后端数据逻辑

- 查询
 - 数据库查询公式.collection(name).get()
 - where{}条件
 - count 计算满足条件的条数
    注册 name +password
    {total} = await where ({name}).count()
    if(total >= 0 ){return}
 - limit 数量
  - 获取第几页的数据
   比如我想获取第五页的数据
   .offset((page-1)*size).limit(size)