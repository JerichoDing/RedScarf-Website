const Koa = require('koa')
const app = new Koa()
const path = require("path");
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors');
const EndSkin = require("endskin");
const router = require('./routes/index')
const reply = require("./reply")

// error handler
onerror(app)


app.use(cors());
// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))

// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

//接收处理所有消息
app.use(reply());
// 静态目录
app.use(require('koa-static')(__dirname + '/public'))
app.use(require('koa-static')(__dirname + '/pages'))

// routes
app.use(router.routes(), router.allowedMethods())


router.get("/test", async (ctx) => {
      const testTemplate =  EndSkin.create(path.resolve(__dirname, "./public/oauth.html"));
      testTemplate.assign({
        domain:url
      })
      ctx.body = testTemplate.html()
})

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app