const mongoose = require('mongoose');

// promises are used in mongoose
// mongoose supports callbacks by default but we'll use promises

//built in proomise library
mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports={
  mongoose  // in ES6 configuration
};

// setting up test database
