var mongoose = require('mongoose');
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost','helloworld'); //创建一个数据库连接
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
    console.log("connection success...");
    // schema -->> model -->> document
    /**
     * schema
     *
     **/
    var stuSchema = mongoose.Schema({
        id: String,
        name: String,
        age: Number
    });
    // NOTE: methods must be added to the schema before compiling it with mongoose.model()
    stuSchema.methods.print = function() {
        console.log("id:" + this.id + "\t" + "name:" + this.name + "\t" + "age:" + this.age);
    }

    /**
     * model
     *
     **/
    var stuModel = mongoose.model('stu', stuSchema);


    /**
     * document
     *
     **/
    // var stuDocument = new stuModel({ id: "1001", name: 'stu1', age: 33 });
    // // var stuDocument = new stuModel({ id: "1001", name: 'stu1', age: 33 }, { id: "1002", name: 'stu2', age: 33 });
    //     //stuInstance.print();

    // stuDocument.save(function(err, stuDocument) {
    //     if (err) return console.error(err);
    //     stuDocument.print();
    // });
});

