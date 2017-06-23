var mongodb = require('../config.js');
var Schema = mongodb.mongoose.Schema;

/**
 *  schema
 **/
var departmentSchema = new Schema({
    id: String, //部门编号
    name: String //名称
});


/**
 *  schemao
 **/
var employeeSchema = new Schema({
    id: Number, //工号
    name: String, //姓名
    sex: Number, //性别
    age: Number, //年龄
    // dep_id: String //部门
    dep: {
        type: Schema.Types.ObjectId,
        ref: 'department'
    }
});


// Instances of Models are documents. 
// Documents have many of their own built-in instance methods. 
// We may also define our own custom document instance methods too.
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
employeeSchema.methods.printInfo = function() {
    var greeting = this.name;
    console.log("Testing methods defined in schema:" + greeting);
}

/**
 *  model
 **/
var employee = mongodb.mongoose.model("employee", employeeSchema);
var department = mongodb.mongoose.model('department', departmentSchema);

var employeeDAO = function() {};


// employeeDAO.prototype.save = function(obj, callback) {
//     /**
//      *  document
//      **/
//     var instance = new employee(obj);
//     instance.printInfo();
//     //Each document can be saved to the database by calling its save method. The first argument to the callback will be an error if any occured.
//     instance.save(function(err) {
//         callback(err);
//     });
// }

// employeeDAO.prototype.findByIdAndUpdate = function(obj, callback) {
//     var _id = obj._id;
//     delete obj._id;
//     employee.findOneAndUpdate(_id, obj, function(err, obj) {
//         callback(err, obj);
//     });
// }


// employeeDAO.prototype.findById = function(id, callback) {
//     //console.log("查询参数：" + id);
//     employee.findOne({ id: id }, function(err, obj) {
//         // console.log("-----------------------" + obj);
//         //if (err) return handleError(err);
//         callback(err, obj);
//     });
// }

//We can access all of the employee documents through our employee model.
employeeDAO.prototype.findAll = async function(callback) {
    let list = await employee.find({}).populate({ path: 'dep', select: { name: 1 } }).exec(); //如何捕捉异常？
    return list
}

// employeeDAO.prototype.findByIdAndUpdate = function(id, callback) {

//     //employee.update({ _id: id }, { $set: { id: 2002 }}, callback);

//     // update collections employees where id = id, ??? if employees collection has many documents with same id, now this below code only
//     // can update the first document. why?
//     employee.update({ id: id }, { $set: { name: 'new name' } }, callback);

//     //If we do need the document(being updated documents)) ---returned--- in our application
//     // employee.findByIdAndUpdate(id, { $set: { id: 2004 } }, function(err, obj) {
//     //     callback(err, obj);
//     // });
// }

module.exports = new employeeDAO();