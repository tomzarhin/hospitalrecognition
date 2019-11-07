var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://admin:admin@cluster0.mongodb.net:27017/test");
console.log(mongoose);
module.exports = {mongoose};
