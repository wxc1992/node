# 获取新闻列表

+ 接口地址：`http://localhost:9999/getNewsList`
+ 请求方式：GET
+ 请求参数
  + 无
+ 响应结果
  + status: 响应的状态，200表示成功
  + msg: 响应的提示消息
  + list: 响应的数据，所有的新闻
+ 响应的示例

```js
{
    "status":200,
    "msg":"查询数据成功",
    "list":[
        {
            "_id":"5b612eda22444c3d3071b859",
            "title":"大家现在都晕了么",
            "url":"333",
            "text":"原来是饿晕的"
        },
        {
            "_id":"5b612eeb22444c3d3071b85a",
            "title":"近朱者赤",
            "url":"嘻嘻",
            "text":"近你者甜"
        }
    ]
}
```



# 获取新闻详情

- 接口地址：`http://localhost:9999/getNewsInfo`
- 请求方式：GET
- 请求参数
  - id: 新闻的id值
- 响应结果
  - status: 响应的状态，200表示成功
  - msg: 响应的提示消息
  - data: 响应的数据，新闻的详细数据
- 响应的示例

```js
{
    "status":200,
    "msg":"获取详情成功",
    "data":{
        "_id":"5b612eda22444c3d3071b859",
        "title":"大家现在都晕了么",
        "url":"333",
        "text":"原来是饿晕的"
    }
}
```

# 添加新闻

- 接口地址：`http://localhost:9999/addNews`
- 请求方式：POST
- 请求参数
  - title: 标题
  - url: 地址
  - text: 内容
- 响应结果
  - status: 响应的状态，200表示成功
  - msg: 响应的提示消息
- 响应的示例

```js
{
    "status": 200,
    "msg": "添加成功"
}
```

# 删除新闻

- 接口地址：`http://localhost:9999/deleteNews`
- 请求方式：GET
- 请求参数
  - id: 删除的新闻id
- 响应结果
  - status: 响应的状态，200表示成功
  - msg: 响应的提示消息
- 响应的示例

```js
{
    "status": 200,
    "msg": "删除成功"
}
```

