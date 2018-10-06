var {User}=require('./../models/user');

// making middleware for this authorize code
var authenticate =(req,res,next)=>{ //middleware has 3 arguments, actual route does not work until middleware 'next' is called
  var token=req.header('x-auth'); // similar to res.header(), it is getting the header value, so we only need to pass the key, lke x-auth

  User.findByToken(token).then((user)=>{
    if(!user) {
        return res.status(401).send();
    }
    req.user=user;
    req.token=token;
    next(); // so that code in below function executes
  }).catch((e)=>{
    res.status(401).send();
  });  // finds apt user and returns to associated callbacks
};

module.exports={authenticate};
