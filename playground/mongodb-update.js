const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    db.collection('User').findOneAndUpdate({
        _id: new ObjectID('5a0efe6e44831c0a44f23a50'),
    }, {
        $set: {
            name: "Andrew"
        },
        $inc: {
            age: 1
        }
    },{returnOriginal:false}).then(result => {
        console.log(result);
    });
})