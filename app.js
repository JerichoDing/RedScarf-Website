const Koa = require('koa');
const app = new Koa();
const path = require('path');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
// const logger = require('koa-logger');
const middleConfig = require('./middlewares/db.js');
const userMiddleware = require('./middlewares/user.js');
var staticCache = require('koa-static-cache');
const cors = require('koa2-cors');
const router = require('./routes/index');
const apiRouter = require('./routes/api');
const adminRouter = require('./routes/admin');
const reply = require('./reply');


console.log('env->',process.env.ENV, process.env.NODE_ENV);
// logger
app.use(async (ctx, next) => {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// error handler
onerror(app);
// 跨域支持
app.use(cors());

app.use(middleConfig());
// middlewares
app.use(
	bodyparser({
		enableTypes: ['json', 'form', 'text'],
	})
);
app.use(json());
// app.use(logger());

//接收处理所有消息
app.use(reply());
// 静态目录

app.use(
	staticCache(path.join(__dirname, 'public'), {
		// maxAge: 365 * 24 * 60 * 60,
		maxAge: 10,
	})
);



// routes
app.use(userMiddleware);
app.use(router.routes(), router.allowedMethods());
app.use(apiRouter.routes(), apiRouter.allowedMethods());
app.use(adminRouter.routes(), adminRouter.allowedMethods());






// error-handling
app.on('error', (err, ctx) => {
	console.error('server error', err, ctx);
});

module.exports = app;
