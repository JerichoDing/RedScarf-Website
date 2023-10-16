const rooter = require('koa-router')();



const userController = require('../controller/user.js');


rooter.prefix('/api/user');
rooter.get('/addUser', async (ctx, next) => {
	return userController.createOneUser(ctx);
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
