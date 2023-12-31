const USER_ACTION = require('./userAction');
const STATUS = require('../config/error');
const UserTools = require('../utils/user-tools');
const tool = require('../utils/tool.js');


async function createOneUser(ctx, user = {}) {
	
	let params = {
		...ctx.query,
		...user,
	};
	params = tool.removeEmptyValues(params)
	params.password = '';// 不支持添加密码，需要手动添加

	const newUser = {
		...UserTools.getDefaultUser(ctx),
		...params,
	};

	if (newUser.id) {
		return (ctx.body = {
			...STATUS.FAIL,
			data: false,
			msg: 'id不能存在',
		});
	}

	return USER_ACTION.createUser(ctx, newUser)
		.catch((err) => {
			return (ctx.body = {
				...STATUS.FAIL,
				data: false,
				msg: '创建失败',
				message: JSON.stringify(err),
			});
		})
		.then((data) => {
			return (ctx.body = {
				...STATUS.SUCCESS,
				data: data,
				msg: '创建成功',
			});
		});
}
// 删除单个用户
async function deleteUser(ctx) {
	const data = await USER_ACTION.deleteUser(ctx);
	return (ctx.body = data);
}

// 更新单个用户信息,
// TODO: 不存在则创建
async function updateUser(ctx, inquire = {}, target = {}) {
	// 判断是否存在该用户
	const user = await USER_ACTION.findOneUser(ctx, { where: inquire });
	if (user && user.id) {
		const data = USER_ACTION.updateUser(ctx, target, { where: inquire });
		return (ctx.body = data);
	} else {
		return (ctx.body = {
			...STATUS.FAIL,
			data: false,
			msg: '用户不存在',
		});
	}
}

// 查询所有用户信息, 分页由调用者处理
async function findAllUsers(ctx) {
	const data = await USER_ACTION.findAllUsers(ctx);
	return (ctx.body = data);
}
// 查询单个用户信息
async function findOneUser(ctx, inquire = {}) {
	const data = await USER_ACTION.findOneUser(ctx, { where: inquire });
	return (ctx.body = data);
}

module.exports = {
	createOneUser,
	deleteUser,
	updateUser,
	findAllUsers,
	findOneUser,
};
