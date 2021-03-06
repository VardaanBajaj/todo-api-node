const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');


var password='123abc!';

// we need to salt passwords adding some random characters to the passwords
bcrypt.genSalt(10, (err, salt)=>{
  bcrypt.hash(password,salt,(err,hash)=>{
    console.log(hash);
  });
});    // 10=number of rounds taken to generate the salt

var hashedPassword='$2a$10$w5pBVHGtjy/A3Ffoku491OMsx9LjKJwxOCK5LQ4.L5i7gjstvK/v2';

bcrypt.compare(password,hashedPassword,(err,res)=>{
  console.log(res);
});

// var data={
//   id: 10
// };
// var token=jwt.sign(data, '123abc');  // takes the object and returns it's hash value
// console.log(token);
//
// var decoded=jwt.verify(token, '123abc'); // takes the token and verifies that it wasn't manipulated
// console.log(decoded);

// // to hash a value, pass it into SHA256 function
//
// var message="I'm user number 1";
// var hash=SHA256({message}).toString();
//
// console.log('Message: ',message);
// console.log('Hash: ',hash);
//
// var data={
//   id: 4// user's id
// }; // we want to sent this to client but don't want him to maipulate this
//
// var token={
//   data,
//   hash: SHA256(JSON.stringify(data)+" something random to make hashing succesful").toString()
// } // sp, this will be sent to the user
//
// // this token is not useful as it can be changed by rehashing by changing the data, so we sort the hashed value
// token.data.id=5;
// token.hash=SHA256(JSON.stringify(token.data)).toString();
// // how to get to know that the token was not manipulated
// var resultHash=SHA256(JSON.stringify(token.data)+" something random to make hashing succesful").toString();
//
// if(resultHash===token.hash)
//   console.log("Data wasn't changed");
// else {
//   console.log("Data was changed");
// }
//
// // the above hashing standard is the json web token
