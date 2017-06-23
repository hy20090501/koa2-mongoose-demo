// DB Connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employeeDB');
exports.mongoose = mongoose;
