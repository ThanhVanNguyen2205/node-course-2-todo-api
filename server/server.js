const express=require('express');
const bodyParser=require('body-parser');

const {mongoose} = require('C:/Users/Thanh Van/Documents/Javascript/Nodejs/node-todo-api/server/db/mongoose');
const {Todo}=require('./models/todo');
const {User}=require('./models/user')

let app=express();
app.use(bodyParser.json());
app.post('/todo',(req,res)=>{
    let todo=new Todo({text:req.body.text});
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{res.status(400).send(e)});
})
app.listen(3000,()=>{
    console.log("Started on port 3000");
})

module.exports={app};

