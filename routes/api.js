const rooter = require('koa-router')();
const Browser = require('bowser');


const userController = require('../controller/user.js');
const tool = require('../utils/tool.js');
const userTools = require('../utils/userTools.js');
const user = require("../models/user.js");
rooter.prefix('/api/user');
rooter.get('/addUser', async (ctx, next) => {
	const BrowserInfo = Browser.parse(ctx.headers['user-agent']);
	const { browser, os, platform }  = BrowserInfo;
	const {  name, openid, phone , password, email, unionid, avatar, description} = ctx.query;
	const user = {
		name: name || tool.getUUID(`uid_${platform.type}_${os.name}_${browser.name}_`, 6),
		openid: openid || tool.getUUID(`openid_`,16),// 生成唯一的openid
		phone: phone|| '',
		password: password || '',
		email: email || '',
		avatar: avatar || '',
		role: userTools.getRole(),
		description:description || '',
		unionid: unionid || userTools.getUserDeviceInfo(ctx),
		source: userTools.getSource(ctx),
		sourcefrom: userTools.getSourceFrom(ctx),
	}
	return userController.createOneUser(ctx, user);
});
// rooter.get('/deleteItem/:id', userController.deleteUser)
rooter.get('/findAllUser', async (ctx, next) => {
	return userController.findAllUsers(ctx);
});
// TODO:
rooter.get('/updateUser', async (ctx, next) => {
	return userController.updateUser(ctx, { id: 3 }, { name: 'Jericho4444' });
});
//TODO: 只匹配第一个满足条件的 
rooter.get('/findUser', async (ctx, next) => {
	return userController.findOneUser(ctx, { name: 'jericho' });
});

// 后台登录接口
rooter.get('/login', async (ctx, next) => {
	const {account, password, openid  } = ctx.query
	return userController.findOneUser(ctx, {name:account, password, openid });
});


// 后台分页查询接口
rooter.get('/queryAllUserByLimit', async (ctx, next) => {
	const {account, password, openid  } = ctx.query
	return userController.findAllUsers(ctx, {name:account, password, openid });
});



module.exports = rooter;
