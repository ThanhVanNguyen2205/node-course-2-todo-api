
const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
     if(err){
         return console.log("Unable to connect to MongoDB server");
     }
     console.log("Connected to MongoDB server");
    //delete many
    // db.collection("Todos").deleteMany({text:"Eat Lunch"}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection("Todos").deleteOne({text:"Eat Lunch"}).then(result=>{
    //     console.log(result);
    // })

    //find One and Delete

    db.collection("Todos").findOneAndDelete({completed: false}).then((result)=>{
            console.log(result);
        });
    //   db.close();
});