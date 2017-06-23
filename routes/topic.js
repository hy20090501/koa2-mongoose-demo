const Router = require('koa-router')

let topic = new Router()
let topicList = [{
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

topic.get('/', async(ctx) => {
    await ctx.render('index', {
        topicList
    })
})

module.exports = topic;