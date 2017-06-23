const koa = require('koa');
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const path = require('path')
const static = require('koa-static')

const app = new koa();

// 使用ctx.body解析中间件
app.use(bodyParser())

//静态资源目录设置
app.use(static(
    path.join(__dirname, './public')
))

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))
const routes_config = require('./routes_config.js');
// 加载路由中间件
app.use(routes_config.routes()).use(routes_config.allowedMethods())
app.listen(3000);
console.log('[demo] start-quick is starting at port 3000')