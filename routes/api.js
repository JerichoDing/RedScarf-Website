const rooter = require('koa-router')();
const userController = require('../controller/user.js');

rooter.prefix('/api/user');
rooter.get('/addUser', async (ctx, next) => {
	const user = {
		name: 'RedScarfAppeal',
		openid: 'RedScarfAppeal',
		phone: '9876543210',
		password: 'RedScarfAppeal',
		createAt: '2023-10-09 09:12:34',
		updateAt: '2023-10-09 09:12:34',
		gender: 'Female',
		age: 30,
		address: '456 Elm Street',
		email: 'janesmith@example.com',
		avatar: 'avatar.jpg',
		status: 'Active',
		role: 'Admin',
		description: 'Lorem ipsum dolor sit amet',
		unionid: 'uvw123',
		source: 'Mobile App',
		sourcefrom: 'app.example.com',
	};
	return userController.createUser(ctx, user);
});
// rooter.get('/deleteItem/:id', userController.deleteUser)
rooter.get('/findAllUser', async (ctx, next) => {
	return userController.findAllUser(ctx, { name: 'jericho' });
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
