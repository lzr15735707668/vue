module.exports={
    devServer:{
        before(app){
            app.get('/list',(req,res)=>{
                let data = require('./src/mock/list.json')
                res.send({code:200,values:data})
            })
            app.get('/detail',(req,res)=>{
                let id=req.query.id;
                let data = require('./src/mock/list.json')
                let da=data.find(item=>item.id==id)
                res.send({code:200,values:da})
            })
        }
    }
}