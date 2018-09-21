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

    // deleteMany: lets us target many docs and remove them
    // deleteOne: removes one doc
    // findOneAndDelete: deletes and notifies user

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=> {
    //   console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=> {
    //   console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
      console.log(result);
    });

    // db.close();
  });
