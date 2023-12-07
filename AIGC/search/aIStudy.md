!pip install openai==0.28 //在python环境安装包工具

-------------------------------------------------------------------------------------

# 做数据

import openai //安装openai的
openai.api_key = "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"

def generate_data_by_prompt(prompt):
  response = openai.Completion.create(
      engine = "text-davinci-003",
      prompt = prompt,
      temperature = 0.5,
      max_tokens =2048,
      top_p = 1  # 只返回一条结果
  )
  return response.choices[0].text

prompt = """ 
请你生成50条淘宝网里的商品的标题，每条在30个字左右，品类是3C数码产品，标题里往往也会有一些促销类的信息，每行一条。
"""
data = generate_data_by_prompt(prompt)

print(data)


结果：
1.【新品】苹果AirPods Pro无线蓝牙耳机降噪充电盒
2.【限时特价】小米Redmi K30 Pro 5G 8GB+128GB全网通手机
3.【新款上市】华为Mate 40 Pro+ 12GB+256GB 5G手机
4.【热卖】荣耀MagicBook Pro 16.1英寸轻薄笔记本电脑
5.【热销】华硕TUF Gaming FX505DT 15.6英寸游戏本
6.【新品】Apple iPad Pro 11英寸平板电脑256G Wifi版
7.【限时特惠】联想Legion Y540 15.6英寸游戏笔记本
8.【新款上市】华为MatePad Pro 10.8英寸平板电脑
9.【热卖】华为P40 Pro 5G 8GB+256GB全网通手机
10.【热销】Apple Watch Series 6 GPS智能手表
11.【新品】小米MIX Alpha折叠屏智能手机
12.【限时特价】华为MateBook X Pro 13.9英寸超轻薄笔记本
13.【新款上市】苹果MacBook Pro 16英寸笔记本电脑
14.【热卖】小米Redmi K30 5G 6GB+128GB全网通手机
15.【热销】华为FreeBuds 3无线蓝牙耳机
16.【新品】荣耀MagicBook 14英寸轻薄笔记本电脑
17.【限时特惠】三星Galaxy Tab S7 11英寸平板电脑
18.【新款上市】苹果iPhone 11 Pro Max 512GB全网通手机
19.【热卖】苹果AirPods Pro MAX无线蓝牙耳机
20.【热销】华为MatePad T 10.4英寸平板电脑
21.【新品】华为MateBook 13英寸超轻薄笔记本
22.【限时特价】荣耀MagicBook Pro 14英寸轻薄笔记本
23.【新款上市】华为Mate 40 Pro 8GB+256GB 5G手机
24.【热卖】苹果iPhone 11 Pro Max 256GB全网通手机
25.【热销】三星Galaxy Watch Active2智能手表
26.【新品】荣耀V30 Pro 5G 8GB+128GB全网通手机
27.【限时特惠】华为FreeBuds Pro无线蓝牙耳机
28.【新款上市】联想ThinkBook Plus 14英寸轻薄笔记本
29.【热卖】三星Galaxy Note20 5G 8GB+256GB全网通手机
30.【热销】苹果MacBook Air 13.3英寸超轻薄笔记本
31.【新品】华为MatePad Pro 12.6英寸平板电脑
32.【限时特价】联想ThinkBook 13s 13.3英寸轻薄笔记本
33.【新款上市】华为Mate 40 5G 8GB+128GB全网通手机
34.【热卖】华为MateBook X Pro 13.9英寸超轻薄笔记本
35.【热销】小米MIX 3 5G 8GB+128GB全网通手机
36.【新品】华为FreeBuds Studio无线蓝牙耳机
37.【限时特惠】荣耀MagicBook 14英寸轻薄笔记本电脑
38.【新款上市】三星Galaxy S20 Ultra 5G 12GB+128GB全网通手机
39.【热卖】苹果iPad Pro 12.9英寸平板电脑128G Wifi版
40.【热销】Apple Watch SE GPS智能手表
41.【新品】联想ThinkBook 13s 13.3英寸轻薄笔记本
42.【限时特价】华为MatePad T 10.4英寸平板电脑
43.【新款上市】苹果iPhone 11 64GB全网通手机
44.【热卖】苹果AirPods 2无线蓝牙耳机
45.【热销】华为MateBook D 14英寸轻薄笔记本
46.【新品】荣耀V30 5G 8GB+128GB全网通手机
47.【限时特惠】联想Legion Y540 15.6英寸游戏本
48.【新款上市】三星Galaxy Note20 Ultra 5G 12GB+256GB全网通手机
49.【热卖】华为MateBook D 15.6英寸轻薄笔记本
50.【热销】苹果MacBook Pro 13.3英寸笔记本电脑

----------------------------------------------------------------------------------------
# python 专业数据分析库
import pandas as pd 
# 由txt文件变成一个数组
product_names = data.strip().split('\n')
print(product_names)
# 二维的execl表
df = pd.DataFrame({'product_name':product_names})
df.head()


结果：
['1.【新品】苹果AirPods Pro无线蓝牙耳机降噪充电盒', '2.【限时特价】小米Redmi K30 Pro 5G 8GB+128GB全网通手机', '3.【新款上市】华为Mate 40 Pro+ 12GB+256GB 5G手机', '4.【热卖】荣耀MagicBook Pro 16.1英寸轻薄笔记本电脑', '5.【热销】华硕TUF Gaming FX505DT 15.6英寸游戏本', '6.【新品】Apple iPad Pro 11英寸平板电脑256G Wifi版', '7.【限时特惠】联想Legion Y540 15.6英寸游戏笔记本', '8.【新款上市】华为MatePad Pro 10.8英寸平板电脑', '9.【热卖】华为P40 Pro 5G 8GB+256GB全网通手机', '10.【热销】Apple Watch Series 6 GPS智能手表', '11.【新品】小米MIX Alpha折叠屏智能手机', '12.【限时特价】华为MateBook X Pro 13.9英寸超轻薄笔记本', '13.【新款上市】苹果MacBook Pro 16英寸笔记本电脑', '14.【热卖】小米Redmi K30 5G 6GB+128GB全网通手机', '15.【热销】华为FreeBuds 3无线蓝牙耳机', '16.【新品】荣耀MagicBook 14英寸轻薄笔记本电脑', '17.【限时特惠】三星Galaxy Tab S7 11英寸平板电脑', '18.【新款上市】苹果iPhone 11 Pro Max 512GB全网通手机', '19.【热卖】苹果AirPods Pro MAX无线蓝牙耳机', '20.【热销】华为MatePad T 10.4英寸平板电脑', '21.【新品】华为MateBook 13英寸超轻薄笔记本', '22.【限时特价】荣耀MagicBook Pro 14英寸轻薄笔记本', '23.【新款上市】华为Mate 40 Pro 8GB+256GB 5G手机', '24.【热卖】苹果iPhone 11 Pro Max 256GB全网通手机', '25.【热销】三星Galaxy Watch Active2智能手表', '26.【新品】荣耀V30 Pro 5G 8GB+128GB全网通手机', '27.【限时特惠】华为FreeBuds Pro无线蓝牙耳机', '28.【新款上市】联想ThinkBook Plus 14英寸轻薄笔记本', '29.【热卖】三星Galaxy Note20 5G 8GB+256GB全网通手机', '30.【热销】苹果MacBook Air 13.3英寸超轻薄笔记本', '31.【新品】华为MatePad Pro 12.6英寸平板电脑', '32.【限时特价】联想ThinkBook 13s 13.3英寸轻薄笔记本', '33.【新款上市】华为Mate 40 5G 8GB+128GB全网通手机', '34.【热卖】华为MateBook X Pro 13.9英寸超轻薄笔记本', '35.【热销】小米MIX 3 5G 8GB+128GB全网通手机', '36.【新品】华为FreeBuds Studio无线蓝牙耳机', '37.【限时特惠】荣耀MagicBook 14英寸轻薄笔记本电脑', '38.【新款上市】三星Galaxy S20 Ultra 5G 12GB+128GB全网通手机', '39.【热卖】苹果iPad Pro 12.9英寸平板电脑128G Wifi版', '40.【热销】Apple Watch SE GPS智能手表', '41.【新品】联想ThinkBook 13s 13.3英寸轻薄笔记本', '42.【限时特价】华为MatePad T 10.4英寸平板电脑', '43.【新款上市】苹果iPhone 11 64GB全网通手机', '44.【热卖】苹果AirPods 2无线蓝牙耳机', '45.【热销】华为MateBook D 14英寸轻薄笔记本', '46.【新品】荣耀V30 5G 8GB+128GB全网通手机', '47.【限时特惠】联想Legion Y540 15.6英寸游戏本', '48.【新款上市】三星Galaxy Note20 Ultra 5G 12GB+256GB全网通手机', '49.【热卖】华为MateBook D 15.6英寸轻薄笔记本', '50.【热销】苹果MacBook Pro 13.3英寸笔记本电脑']
product_name
0	1.【新品】苹果AirPods Pro无线蓝牙耳机降噪充电盒
1	2.【限时特价】小米Redmi K30 Pro 5G 8GB+128GB全网通手机
2	3.【新款上市】华为Mate 40 Pro+ 12GB+256GB 5G手机
3	4.【热卖】荣耀MagicBook Pro 16.1英寸轻薄笔记本电脑
4	5.【热销】华硕TUF Gaming FX505DT 15.6英寸游戏本

-----------------------------------------------------------------------------------------------

df.product_name = df.product_name.apply(
    lambda x: x.split('.')[1].strip()
)
df.head()

结果：

product_name
0	【新品】苹果AirPods Pro无线蓝牙耳机降噪充电盒
1	【限时特价】小米Redmi K30 Pro 5G 8GB+128GB全网通手机
2	【新款上市】华为Mate 40 Pro+ 12GB+256GB 5G手机
3	【热卖】荣耀MagicBook Pro 16
4	【热销】华硕TUF Gaming FX505DT 15


# keyword 手机 如何 从50条拿出手机的数据
# 通过相似度我们可以拿到有关手机的数据  通过向量表达的
import openai
from openai.embeddings_utils import get_embeddings

-----------------------------------------------------------------------------------------------

print(get_embeddings('加菲猫','text-embedding-ada-002'))

-----------------------------------------------------------------------------------------------

from openai.embeddings_utils import get_embedding , cosine_similarity
EMBEDDING_MODEL = "text-embedding-ada-002"   # 嵌入式向量模型

positive_review = get_embedding("好评",EMBEDDING_MODEL)
# print(positive_review)
nagative_review = get_embedding("差评",EMBEDDING_MODEL)
positive_example = get_embedding("管一导管江西一流",EMBEDDING_MODEL)
nagative_example = get_embedding("管一导管江西下流",EMBEDDING_MODEL)
print(positive_example)

def get_score(sample_embedding):
  return cosine_similarity(sample_embedding,positive_review) - cosine_similarity(sample_embedding,nagative_review)

positive_score = get_score(positive_example)
nagative_score = get_score(nagative_example)

print("好评例子的评分： %f" % (positive_score))
print("差评例子的评分： %f" % (nagative_score))

-----------------------------------------------------------------------------------------------