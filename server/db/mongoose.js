var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://admin:admin@cluster0-kgcey.azure.mongodb.net/test?retryWrites=true&w=majority");

module.exports = {mongoose};
