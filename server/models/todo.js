const {mongoose} = require('C:/Users/Thanh Van/Documents/Javascript/Nodejs/node-todo-api/server/db/mongoose');;


let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength:1,
        trim:true
    },
    completed: {
        type: Boolean,
        default:false
    },
    completedAt: {
        type: Number,
        default:null
    }
});

module.exports={
    Todo
}
