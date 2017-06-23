var express = require('express');
var router = express.Router();
var topicList = [
	{
		id: 1001,
		img: '/img/test.jpg',
		title: '中国最大的JavaScript开发者大会JSConf China 2016即宁JS 售票啦！',
		replyCount: 23,
		clickCount: 567
	},
	{
		id: 1002,
		img: '/img/test.jpg',
		title: '跟我一起部署和定制 CNPM——基础部署！',
		replyCount: 56,
		clickCount: 567
	},
	{
		id: 1003,
		img: '/img/test.jpg',
		title: '中国最大的JavaScript开发者大会JSConf China 2016即宁JS 售票啦.！',
		replyCount: 23,
		clickCount: 5677
	}
];
/* GET home page. */
router.get('/publish', function(req, res, next) {
    res.render('publish_topic', { topicList: topicList });
});

//如果我们希望限制用户id为数字，可以这样写  “/user/:id(\d+)”
router.get('/publish/:id', function(req, res) {
    //console.log(req.params.id);
    res.send('user ' + req.params.id);
});

/**
 * 	some route example
 *	
**/
// "/user/:id"
// /user/12

// "/users/:id?"
// /users/5
// /users

// "/files/*"
// /files/jquery.js
// /files/javascripts/jquery.js

// "/file/*.*"
// /files/jquery.js
// /files/javascripts/jquery.js

// "/user/:id/:operation?"
// /user/1
// /user/1/edit

// "/products.:format"
// /products.json
// /products.xml

// "/products.:format?"
// /products.json
// /products.xml
// /products

// "/user/:id.:format?"
// /user/12
// /user/12.json
module.exports = router;
