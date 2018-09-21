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

    // db.collection('Todos').find(/*{completed: false}*/{
    //   _id: new ObjectID('5b996fea5b86f38b0c8e859d')})
    //   .toArray().then((docs)=> {
    //   console.log('Todos:');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=> {
    //   console.log('Unable to fetch todos', err);
    // }); // find returns a mongo db pointer/cursor

    // db.collection('Todos').find().count().then((count)=>{
    //   console.log('Todos count:'+count);
    // }, (err)=> {
    //   console.log('Unable to fetch todos', err);
    // }); // find returns a mongo db pointer/cursor


    db.collection('Users').find({name: 'Vardaan'}).toArray().then((docs)=> {
      console.log(JSON.stringify(docs, undefined, 2));
    },(err)=> {
      console.log('Could not fetch', err);
    });

    // db.close();
  });
