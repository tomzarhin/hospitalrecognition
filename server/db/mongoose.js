var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://admin:admin@cluster0-gyzrb.azure.mongodb.net/test?retryWrites=true&w=majority/hospitaldb");
console.log(mongoose);
module.exports = {mongoose};
