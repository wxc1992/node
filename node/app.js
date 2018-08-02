const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const app = express()

// 配置post请求的参数查询
app.use(bodyParser.urlencoded({extended:true}))
// 允许跨域
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    next()
})
// 配置模板引擎
app.engine('html',require('express-art-template'))

app.use(router)
app.listen(9999,()=>{
    console.log('hacknews今天终于是最后一天了')
})