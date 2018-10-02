const express=require('express');
const bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/todo');

var app=express();
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
  res.send({todos});  // to ad this on the server
  },(e)=>{
    res.status(400).send(e);
  });
});

app.listen(3000, ()=> {
  console.log('Started on port 3000');
});

module.exports={app};
