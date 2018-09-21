// we have installed a mongodb library
// mongo client lets you connect ot mongo server

// const MongoClient=require('mongodb').MongoClient;

const {MongoClient, ObjectID/* helps createnew objects*/}=require('mongodb');
var obj=new ObjectID(); // constructor function
console.log(obj);

// object de structuring(helps us get values from ibjects
// as variables).
// var user={name: 'Vardaan', age: 20};
// var {name}=user;
// console.log(name);

// connect to database

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {

    if(err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // findOneAndUpdate

    db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5ba558aaa9bf454f82df8b53')
  }, {
    $set: { //search mongodb update operators on google
      completed: true
    }
  } , {
      returnOriginal: false
    }).then((result) =>{
    console.log(result);
  });



    // db.close();
  });
