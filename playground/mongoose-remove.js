const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

// // Todo.remove({}) // empty argument will delete nothing unlike findOne()
// Todo.remove({}).then((result)=>{
//   console.log(result);
// }); // we don't get the removed docs back

//another way
//Todo.findOneAndRemove() // we get the removed docs back
// Todo.findByIdAndRemove() also returns removed docs

// Todo.findOneAndRemove({_id:'5bb4fb510ba295f841ba62dc'}).then((todo)=>{
//   console.log(todo);
// });


Todo.findByIdAndRemove('5bb4fb510ba295f841ba62dc').then((todo)=>{
    console.log(todo);
});
