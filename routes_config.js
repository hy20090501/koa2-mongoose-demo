const Router = require('koa-router')

let home = require('./routes/home.js');
let page = require('./routes/page.js');
let topic = require('./routes/topic.js');
let employee = require('./routes/list.js');

// 装载所有子路由
let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/topic', topic.routes(), topic.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())
router.use('/employee', employee.routes(), employee.allowedMethods())

module.exports = router;