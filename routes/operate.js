var employee = require('./../models/employee.js');
var express = require('express');
var router = express.Router();

router.post('/operate/add', function(req, res, next) {
  	//console.log(req.body);
	var obj = req.body;
	employee.save(obj, function(err) {
		if (err) {
			res.send({ 'success': false, 'err': err });
		} else {
			res.send({ 'success': true });
		}
	});
});

router.post('/operate/find', function(req, res, next) {
	//console.log(req.body);
	var obj = req.body;
	//console.log(obj.id);
	employee.findById(obj.id, function(err, obj) {
        if(err) {
        	res.send({ 'success': false, msg: "" });
        } else {
        	res.send({ 'success': true, obj: obj });
        }
    });
});

router.post('/operate/findAll', function(req, res, next) {
	employee.findAll(function(err, obj) {
        if(err) {
        	res.send({ 'success': false, msg: "" });
        } else {
        	res.send({ 'success': true, obj: obj });
        }
    });
});

router.post('/operate/update', function(req, res, next) {
	var id = req.body.id;
	employee.findByIdAndUpdate(id, function(err, obj) {
        if(err) {
        	console.error(err);
        	res.send({ 'success': false, msg: "" });
        } else {
        	res.send({ 'success': true, obj: obj });
        }
    });
});

module.exports = router;


