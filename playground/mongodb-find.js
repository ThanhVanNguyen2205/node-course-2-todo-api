
const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
     if(err){
         return console.log("Unable to connect to MongoDB server");
     }
     console.log("Connected to MongoDB server");
     db.collection("Todos").find({_id: '5a0efe6e44831c0a44f23a4f'}).toArray().then((docs)=>{
         console.log("Todo list");
         console.log(JSON.stringify(docs,undefined,2));

     },(err)=>{
         console.log('Unable to fetch to do',err);
     })
      

     db.collection("User").find({name:'Thanh Van Nguyen'}).toArray().then((docs)=>{
        console.log("User list");
        console.log(JSON.stringify(docs,undefined,2));

    },(err)=>{
        console.log('Unable to fetch to do',err);
    }) 
    //   db.close();
});