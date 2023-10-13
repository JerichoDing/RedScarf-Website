const rooter = require('koa-router')();
const userController = require('../controller/user.js');
const USE_ACTION = require('../controller/userAction.js');
const EndSkin = require('endskin');
const path = require('path');
const { domain } = require('../config/config').wechat;


rooter.prefix('/admin');

rooter.get('/users', async (ctx, next) => {
	const template = EndSkin.create(
		path.resolve(__dirname, '../pages/admin/users.html')
	);
	const list = await USE_ACTION.findAllUsers(ctx);
	template.assign({ domain, list: JSON.stringify(list)} );
	ctx.body = template.html();
});
rooter.get('/login', async (ctx, next) => {
	const template = EndSkin.create(
		path.resolve(__dirname, '../pages/admin/login.html')
	);
	template.assign({ domain });
	ctx.body = template.html();
});








rooter.get('/updateUser', async (ctx, next) => {
	return userController.updateUser(ctx, { id: 3 }, { name: 'Jericho4444' });
});
// 只匹配第一个满足条件的

rooter.get('/findUser', async (ctx, next) => {
	return userController.findUser(ctx, { name: 'jericho' });
});



// 后台登录接口
rooter.get('/login', async (ctx, next) => {
	const {account, password, openid  } = ctx.query
	return userController.findUser(ctx, {name:account, password, openid });
});

module.exports = rooter;
