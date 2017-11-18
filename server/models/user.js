const {mongoose} = require('C:/Users/Thanh Van/Documents/Javascript/Nodejs/node-todo-api/server/db/mongoose');;
let User=mongoose.model('User',{
    email:{
        type:String,
        require:true,
        trim:true,
        minlength:10
    }
})
module.exports={
    User
}