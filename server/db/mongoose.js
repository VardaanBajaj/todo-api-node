const mongoose = require('mongoose');

// promises are used in mongoose
// mongoose supports callbacks by default but we'll use promises

//built in proomise library
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports={
  mongoose  // in ES6 configuration
};
