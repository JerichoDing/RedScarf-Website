const Koa = require('koa');
const app = new Koa();
const path = require('path');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
// const logger = require('koa-logger');
const cors = require('koa2-cors');
const EndSkin = require('endskin');
const router = require('./routes/index');
const reply = require('./reply');
const { url } = require('./config/config').wechat;


// error handler
onerror(app);

app.use(cors());
// middlewares
app.use(
	bodyparser({
		enableTypes: ['json', 'form', 'text'],
	})
);
app.use(json());
// app.use(logger());


// logger
// app.use(async (ctx, next) => {
// 	const start = new Date();
// 	await next();
// 	const ms = new Date() - start;
// 	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });

//接收处理所有消息
app.use(reply());
// 静态目录
app.use(require('koa-static')(__dirname + '/public'));

// routes
app.use(router.routes(), router.allowedMethods());

app.use(async (ctx, next) => {
    await next();
    console.log(111,ctx.status);
    if(parseInt(ctx.status) === 404 ){
      ctx.response.redirect("/404")
    }
  })




// error-handling
app.on('error', (err, ctx) => {
	console.error('server error', err, ctx);
});

module.exports = app;
