const express = require('express');
const db = require('./db')
const router =express.Router();

//渲染首页
router.get('/indexList',function(req,res){
   db.findNews((data)=>{
        res.send({
            status:200,
            msg:'获取数据成功',
            data:data
        })
   })
})

//渲染详情页
router.get('/details',(req,res)=>{
    let id = req.query.id
    db.finddetail(id,data=>{
        res.send({
            status:200,
            msg:'获取数据成功',
            data:data
        })
    }) 
})

//渲染post请求的
router.post('/addInfo',(req,res)=>{
    let obj = req.body
   db.addInfo(obj,()=>{
        res.send({
            status:200,
            msg:'添加数据成功',
        })
   })
})
router.get('/add',(req,res)=>{
   

})



module.exports =router