/**
 *	数据库配置
 **/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/adminDB');
exports.mongoose = mongoose;