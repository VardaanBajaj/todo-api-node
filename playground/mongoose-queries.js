const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

// var id='5bb3d62af63c2d37aca77838';
var id='5bb23ea99e9d2236dcad12e6';
// if(!ObjectID.isValid(id))
// {
//   console.log('Id not valid');
// }
// find does not throw error when id is not in database

// //method 1
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos ', todos);
// });
//
// //method 2
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo ',todo);
// });

// if we know we want only one value, use find() over findOne()

// Todo.findById(id).then((todo)=>{
//   if(!todo)
//     console.log('Id not found');
//   console.log('Todo By Id', todo);
// }).catch((e)=>console.log(e));  //validation for invalid id

User.findById(id).then((user)=>{
  if(!user)
    return console.log('Unable to find user');
  console.log('User',user);
}).catch((e)=>console.log(e));
