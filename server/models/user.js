const mongoose=require('mongoose');
const validator = require('validator');
const jwt=require('jsonwebtoken');
const _=require('lodash');
// {
//   email: 'vardaanbajaj26@gmail.com',
//   password: 'qwfqiuwuefvBCLI',
//   tokens: [{
//     access: 'auth',
//     token: 'sdjvbuyhvseciwhvwiu',
//   }]
//
// }

var UserSchema=new mongoose.Schema({
  // this function takes an object and we define all attributes on that object
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

UserSchema.methods.toJSON=function() { // to determine what is sent baack on firing the query
  var user=this;
  var userObject=user.toObject()  // responsible for taking mongoose variable 'user' and converts it into the regular object where properties of document exist
  return _.pick(userObject, ['_id','email']);
};

UserSchema.methods.generateAuthToken=function() {
  var user = this;
  //access
  var access='auth';
  //token
  var token=jwt.sign({_id: user._id.toHexString(), access},'abc123').toString();

  user.tokens.push({access,token}); // which is usuallyy empty before the push

  user.save().then(()=>{
    return token; // success argument for next then() call
  })  // this statement will execute in server js
};  // instance methods
// instance methods have access to individual documents
var User = mongoose.model('User', UserSchema);

module.exports = {User}
