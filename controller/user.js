const USER = require('../models/user');
const STATUS = require('../config/error');

async function createUser(ctx, user) {
	const UserModel = USER(ctx.sequelize);
	await UserModel.create(user)
		.then((res) => {
			console.log('创建', JSON.parse(JSON.stringify(res)));
			ctx.body = {
				...STATUS.SUCCESS,
				data: res,
			};
		})
		.catch((err) => {
			console.log(111, err.name);
		});
}
async function deleteUser(ctx) {
	const UserModel = USER(ctx.sequelize);
	const id = ctx.params.id;
	await UserModel.destroy({
		where: { id: id },
	});
	ctx.body = {
		...STATUS.SUCCESS,
		data: null,
	};
}
// 更新单个用户信息
async function updateUser(ctx, inquire = {}, target = {}) {
	//  查询 example:
	//  await UserModel.update( { name: "Jericho" }, {  where: { id: 3 } });
	const UserModel = USER(ctx.sequelize);
	// 判断是否存在该用户
	const user = await UserModel.findOne({ where: inquire });
	if (user && user.id) {
		await UserModel.update(target, { where: inquire });
		ctx.body = {
			...STATUS.SUCCESS,
			msg: '更新成功',
			data: null,
		};
	} else {
		ctx.body = {
			...STATUS.FAIL,
			data: null,
			msg: '用户不存在',
		};
	}
}
// 查询所有用户信息
async function findAllUser(ctx, inquire = {}) {
	const UserModel = USER(ctx.sequelize);
	const data = await UserModel.findAll({
		where: inquire,
	});
	ctx.body = {
		...STATUS.SUCCESS,
		data,
	};
}
// 查询单个用户信息
async function findUser(ctx, inquire = {}) {
	const UserModel = USER(ctx.sequelize);
	const data = await UserModel.findOne({ where: inquire });
	if (data && data.id) {
		ctx.body = {
			...STATUS.SUCCESS,
			data,
		};
	}else{
		ctx.body = {
			...STATUS.FAIL,
			data:null,
			msg:'用户不存在'
		};
	}
}

module.exports = {
	createUser,
	deleteUser,
	updateUser,
	findAllUser,
	findUser,
};
