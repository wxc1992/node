const path = require('path')
const MongoClient = require('mongodb')
const ObjectID = require('mongodb').ObjectID
const url = "mongodb://localhost:27017/"
function connectDB(fn){
    MongoClient.connect(url, function(err, db) {
        if (err) console.log(err) 
        console.log("数据库已创建!")
        var dbo = db.db('hacknews')
        fn(dbo)
        db.close();
    })
}
module.exports ={
    findNews(callback){
        connectDB(dbo=>{
            dbo.collection("news").find().sort({_id:-1}).toArray((err,result)=>{
               if(err)return console.log('数据库查询失败')
                callback(result)
            })
        })
    },
    finddetail(id,callback){
        connectDB(dbo=>{
            dbo.collection("news").findOne({_id:new ObjectID(id)},(err,result)=>{
                if(err)return console.log('数据库查询失败')
                callback(result)
            })
        })
    },
    addInfo(obj,callback){
        connectDB(dbo=>{
            dbo.collection("news").insert(obj,(err,result)=>{
                if(err)return console.log('数据库添加失败')
                callback()
            })
        })
    }

}