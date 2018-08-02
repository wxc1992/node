const db = require('./db')
module.exports = {
    showIndex(req,res){
        db.findNews(data=>{
            res.render('index.html',{list:data})
        })
      
    }, 
    showdetails(req,res){
        let id = req.query.id
        db.finddetail(id,data=>{
           res.render('details.html',data)
        })
    },
    showsubmit(req,res){
        res.render('submit.html')
    },
    showGet(req,res){
        let obj = req.query
        db.addInfo(obj,callback=>{
           res.redirect('/')
         })
    },
    showPost(req,res){
        let obj = req.body
        db.addInfo(obj,callback=>{
           res.redirect('/')
         })
    }

}