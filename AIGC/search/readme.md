# 搜索

- 项目亮点
    搜索比较难 ，但是又是项目当中基本要做的 可以在面试中讲出来

- 全栈  
  - 前端 防抖和节流
  - 后端
      - SQL posts LIKE `%${keyword}%`
      - 各种数据放入hadop flink
      - Elastic search  使用node直接把它干起来

  - AIGC


- 数据？从哪里来？
    - python 爬虫
    - 利用 AIGC帮我们生成数据
          get_response
          prompt 电商网站 手机  生成50条


# 数据清洗
- pandas 来处理AIGC 生成的text文本
    - split('\n')按换行符切割
    - pandas 提供了DataFrame实例
        pd.DataFrame({"product_name"})  列名  column_name
    - pd.head()
        默认给5条数据


- 文本 如何转成向量 通过数学表达  在openai中提供了embedding 接口
    cosin 值

- openai Completion \ chat \ embedding
- embedding
    openai 的新接口
    查询 keyword + 数据 都进行向量计算
    cosine_similarity  两个向量的相似度 =>>> 0  说明相同  或相似的
    相反的话 负值