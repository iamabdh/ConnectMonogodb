const mongoose = require('mongoose')
const express = require('express')
const MyDataSchema = require('./models/schemaData')
const app = express()

require('dotenv').config();
const url = process.env.MONGODB_ACCESS 

console.log(process.env)
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((data)=> {
        app.listen(3000, ()=> {console.log("app is listening to port 3000")})
    })
    .catch(err=> console.log(err));

let obj = {
    name : "someone",
    text : "lorem  upslkdsngk snrgkbn"
}
app.get('/', (req, res)=> {

    // upload new item to monogodb

    const item = new MyDataSchema(obj)
    item.save()
    .then(
        MyDataSchema.find()
        .then((result)=> {
            res.json(result)
        })
        .catch(err=> {console.log(err)})
    )
    .catch(err=> console.log(err))
})
/* 

read selected result

MyDataSchema.findById(id , (err, result)=>{
    if(err) console.log(err)
    else console.log(result)
    });
*/

/*
edit selected item

 MyDataSchema.findById(id, (err, result)=>{
       if (err) {console.log(err)}
       else {
           MyDataSchema.findByIdAndUpdate(req.params.id, 
            obj,
             {new: true}, 
             (err, docs)=> {
               if (err) {console.log(err)}
               else {
                   console.log("Updated blog to : ", docs);
               }
           })
       }
   });

*/



/*

delete selected item

 MyDataSchema.findByIdAndDelete(id)
        .then(result=> {
            console.log(result);
        })
        .catch(err=>{console.log(err)})

*/