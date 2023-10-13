const USER = require('../models/user');
const STATUS = require('../config/error');
const dayjs = require('dayjs');

// 创建单个用户 注意openid是唯一的, 不能重复
async function createUser(ctx, user) {
	await ctx.sequelize.sync();
	const UserModel = USER(ctx.sequelize);
	const userinfo = await UserModel.findOne({ where: { openid: user.openid } });
	// 判断是否存在该用户
	if (userinfo && userinfo.openid) {
		return {
			...STATUS.FAIL,
			data: false,
			toastMsg: '用户已存在',
		};
	}
	try {
		await UserModel.create(user, { returning: true });
		return {
			...STATUS.SUCCESS,
			data:true,
			toastMsg: '创建成功',
		};
	} catch (error) {
		return {
			...STATUS.FAIL,
			data: res,
			toastMsg: '创建失败',
			message: JSON.stringify(err),
		};
	}
}
async function deleteUser(ctx) {
	const UserModel = USER(ctx.sequelize);
	const id = ctx.params.id;
	return UserModel.destroy({
		where: { id: id },
	})
		.then((res) => {
			return {
				...STATUS.SUCCESS,
				data: true,
				toastMsg: '删除成功',
			};
		})
		.catch((err) => {
			return {
				...STATUS.FAIL,
				data: false,
				toastMsg: '删除失败',
				message: JSON.stringify(err),
			};
		});
}
// 更新单个用户信息
async function updateUser(ctx, inquire = {}, target = {}) {
	//  查询 example:
	//  await UserModel.update( { name: "Jericho" }, {  where: { id: 3 } });
	const UserModel = USER(ctx.sequelize);
	// 判断是否存在该用户
	const user = await UserModel.findOne({ where: inquire });
	if (user && user.id) {
		// 不能更新openid
		if (target.openid) {
			delete target.openid;
		}
		return UserModel.update(target, { where: inquire })
			.then((res) => {
				return {
					...STATUS.SUCCESS,
					data: true,
					toastMsg: '更新成功',
				};
			})
			.catch((err) => {
				return {
					...STATUS.FAIL,
					data: false,
					toastMsg: '更新失败',
					message: JSON.stringify(err),
				};
			});
	} else {
		return {
			...STATUS.FAIL,
			data: false,
			toastMsg: '用户不存在',
		};
	}
}

// 查询所有用户信息, 分页由调用者处理
async function findAllUsers(ctx) {
	const UserModel = USER(ctx.sequelize);
	// 约束返回的字段
	return UserModel.findAll({
		attributes: [
			'id',
			'name',
			'openid',
			'unionid',
			'phone',
			'createAt',
			'updateAt',
			'avatar',
			'role',
			'sourcefrom',
			'source',
			'description',
		],
	})
		.then((res) => {
			return {
				...STATUS.SUCCESS,
				data: res,
				toastMsg: '查询成功',
			};
		})
		.catch((err) => {
			return {
				...STATUS.FAIL,
				data: false,
				toastMsg: '查询失败',
				message: JSON.stringify(err),
			};
		});
}
// 查询单个用户信息  登录的时候可以用到
async function findOneUser(ctx, inquire = {}) {
	const UserModel = USER(ctx.sequelize);
	return UserModel.findOne({ where: inquire })
		.then((res) => {
			return {
				...STATUS.SUCCESS,
				data: res,
				toastMsg: '查询成功',
			};
		})
		.catch((err) => {
			return {
				...STATUS.FAIL,
				data: false,
				toastMsg: '查询失败',
				message: JSON.stringify(err),
			};
		});
}

module.exports = {
	createUser,
	deleteUser,
	updateUser,
	findAllUsers,
	findOneUser,
};
