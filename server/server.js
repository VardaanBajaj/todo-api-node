require('./config/config.js');
const express=require('express');
const bodyParser=require('body-parser');
const _=require('lodash');
var {ObjectID}=require('mongodb');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/todo');

var app=express();

// for deploying to heroku
const port=process.env.PORT;
// making routes
// inside of a rest api, we have
// C-Create using post http method
// R-Read
// U-Update
// D-Delete

app.use(bodyParser.json()); // takes middleware, getting sent data
// return value is a middleware function we need to give to express
app.post('/todos', (req,res)=>{ // for creating todos
    console.log(req.body); // body stored by body parser

    var todo=new Todo({
      text:req.body.text
    });
    todo.save().then((doc)=> {
      res.send(doc);
    }, (e)=> {
      res.status(400).send(e);
    });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
//    res.send(todos);
  res.send({todos});  // to add this on the server
  },(e)=>{
    res.status(400).send(e);
  });
});
app.get('/todos/:id', (req,res)=>{
  var id=req.params.id;
//  res.send(req.params); /*also an object*/

   //Validate id suing isValid
  // change status code to 404 if not found/invalid
  //query the database

    if(!ObjectID.isValid(id))
      return res.status(404).send();

    Todo.findById(id).then((todo)=>{
      if(!todo)
        return res.status(404).send();
      res.send({todo}); //passing as object gves flexibility to pass more parameers in future
    }).catch((e)=>{
      res.status(400).send();
    });

}); // url parameters follow ':'

app.delete('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id))
    return res.status(404).send();

  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo)
      return res.status(404).send();
    res.send({todo});
    }).catch((e)=>{
      res.status(400).send();
    });
});

// http PATCH method helps to update queries
app.patch('/todos/:id',(req,res)=>{
  var id=req.params.id;
  var body=_.pick(req.body,['text','completed']); // to store updates

  if(!ObjectID.isValid(id))
    return res.status(404).send();

    if(_.isBoolean(body.completed)&&body.completed)
    {
      body.completedAt=new Date().getTime();  // getTime() is javascript time format
    }
    else {
      body.completed=false;
      body.completedAt=null;
    }

    Todo.findByIdAndUpdate(id,{$set: body},{new: true}).then((todo)=>{
      if(!todo) {
        return res.status(404).send();
      }
      res.send({todo});
    }).catch((e)=>{
      res.status(400).send();
    });  // check mongo-db update.js
});

app.listen(3000, ()=> {
  console.log('Started on port ',port);
});

module.exports={app};
