var employee = require('./../models/employee.js');

exports.employeeAddPage = function(req, res) {
	return res.render('employeeAdd', {
		title: '员工新增',
		label: '新增加员工',
		employee: false
	});
};

exports.doEmployeeAdd = function(req, res) {
	console.log(req.body);
	var json = req.body;
	if (json._id) { //update

	} else { //insert
		employee.save(json, function(err) {
			if (err) {
				res.send({ 'success': false, 'err': err });
			} else {
				res.send({ 'success': true });
			}
		});
	}
};

