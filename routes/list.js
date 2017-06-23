const Router = require('koa-router')

let employee = require('./../models/employee.js');
let employeeList = new Router()


employeeList.get('/', async(ctx) => {
    var result = await employee.findAll();
    await ctx.render('list', {
        employeeList: result
    })
})

module.exports = employeeList;