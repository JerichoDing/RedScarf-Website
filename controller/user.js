const USER = require('../models/user');

async function createUser(ctx, user) {
	const UserModel = USER(ctx.sequelize);
	await UserModel.create(user)
		.then((res) => {
			console.log('创建', JSON.parse(JSON.stringify(res)));
			const data = {
				errCode: 0,
				errMsg: '添加数据库成功',
				data: res,
			};
			ctx.body = data;
		})
		.catch((err) => {
			console.log(111, err.name);
		});
}
async function deleteUser(ctx) {
  const UserModel = USER(ctx.sequelize);
  const id = ctx.params.id
  await UserModel.destroy({
      where: { id: id }
    })
	const data = {
		errCode: 0,
		errMsg: '删除成功',
	};
	ctx.body = data;
}

async function getInfo(ctx) {
  const UserModel = USER(ctx.sequelize);
  const data = await UserModel.findAll()
  // return new Promise((resolve, reject) => {
  //   UserModel.findAll().then(res => {
  //     resolve(res)
  //   }).catch(err => {
  //     reject(err)
  //   })
  // })

	
	ctx.body = data;
}

module.exports = {
	createUser,
	deleteUser,
	getInfo,
};
