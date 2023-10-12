const apiRouter = require('koa-router')();
const userController = require('../controller/user.js');

apiRouter.prefix('/api/user');
apiRouter.get('/addUser', async (ctx, next) => {
	const user = {
		name: 'RedScarfAppeal',
		openid: 'RedScarfAppeal',
		phone: '9876543210',
		password: 'pass321',
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
// apiRouter.get('/deleteItem/:id', userController.deleteUser)
apiRouter.get('/findAllUser', async (ctx, next) => {
	return userController.findAllUser(ctx, { name: 'jericho' });
});
apiRouter.get('/updateUser', async (ctx, next) => {
	return userController.updateUser(ctx, { id: 3 }, { name: 'Jericho4444' });
});
// 只匹配第一个满足条件的
apiRouter.get('/login', async (ctx, next) => {
	console.log(111122, ctx.query);
	return userController.findUser(ctx, { name: 'jericho' });
});
apiRouter.get('/findUser', async (ctx, next) => {
	return userController.findUser(ctx, { name: 'jericho' });
});

module.exports = apiRouter;
