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

    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, ( err, result) => {
    //   if(err) {
    //     return console.log('Unable to insert todo', err);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2));
   // ops stores
   //    all documents that were inserted

   // db.collection('Users').insertOne({
   //   // _id: 123,
   //   name: 'Vardaan',
   //   age: 20,
   //   location: 'Chandigarh'
   // }, (err, result) => {
   //   if(err)
   //   {
   //     return console.log('Unable to insert user', err);
   //   }
   //   else
   //   {
   //     console.log(JSON.stringify(result.ops, undefined,2));
   //     console.log(result.ops[0]._id.getTimestamp());
   //   }
   // });
   // result[0].ops prints the object id
   // result.ops is the array of all
   //the documents that got inseted

    // db.close(); // connection with mongodb server
  }); // 2 urls, first is a
// url of the database, 2nd argument is a callback
// function that handles connection and failure

// mongo doesn't create a database until we start adding to it
