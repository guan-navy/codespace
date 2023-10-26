import openai
openai.api_key="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"
COMPLETION_MODEL="text-davinci-003"#模型常量 达芬奇 完成
# 字符串模版
#   换行
#描述细节需求
# 分布去执行1.2...
#输出的格式
prompt="""
Consideration product:工厂现货pvc充气青蛙夜市地摊热卖充气玩具发光蛙儿儿童水上玩具

1.Compose human readable product title used
on Amazon in English within 20 words

2.Write 5 selling points for the products in Amazon

3.Evaluat a price range for this products in U.S

output the result in json format with three properties called title,
selling_points and price_range
"""
#定义函数
def get_resopnse(prompt):
    completions=openai.Completion.create(
        #大模型很值钱
        engine=COMPLETION_MODEL, # 选择模型
        prompt=prompt, # 提示词
        max_tokens=512,#省点
        n=1,# 一条建议
        stop=None,#不要停下来
        temperature=0.0 #自由发挥度0-2,值越大就越随意
    )
    message=completions.choices[0].text#
    return message
print (get_resopnse(prompt))

# {
#     title:"",
#     selling_points:"",
#     price_range:,
# }