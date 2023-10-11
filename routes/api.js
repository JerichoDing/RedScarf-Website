const apiRouter = require('koa-router')();

const userHandler = require('../controller/user.js')



apiRouter.prefix('/api/user')
apiRouter.get('/addUser', async (ctx, next) => {
    const user = {
		name: 'jericho Smith',
		openid: 'xyz789',
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
	}
    return userHandler.createUser(ctx, user)
})
apiRouter.get('/deleteItem/:id', userHandler.deleteUser)
apiRouter.get('/allUserInfo', userHandler.getInfo)


module.exports =  apiRouter

