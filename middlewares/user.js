const USER_ACTION = require('../controller/userAction');
const USER = require('../controller/user');
const UserTools = require('../utils/user-tools');
const Tool = require('../utils/tool');
module.exports = () => {
	// 以ip + ua信息 自动创建新用户
	// 并种下该用户的唯一cookie 在后续不再创建该用户
	return async (ctx, next) => {
		console.log('是否微信环境',Tool.isWxBrowser(ctx), ctx.url);
		if(Tool.isWxBrowser(ctx)) {
			// 走微信自动授权注册逻辑
			// ctx.redirect('/auth')
			return next();
		}
		const cookieId = UserTools.getCookie(ctx, 'uuid');
		const unionid = UserTools.getUserDeviceInfo(ctx);
		console.log('cookieId----->', cookieId, unionid);
		// 判断该用户是否在数据库中
		const { data } = await USER_ACTION.findOneUser(ctx, {
			unionid,
		});
		// cookie不存在，种下cookie
		if (!cookieId || cookieId !== unionid) {
			UserTools.setCookie(ctx, 'uuid', unionid);
		}
		// 存在该用户，不再创建新用户
		if (data && data.id) {
			return next();
		}
		// 不存在该用户则创建
		await USER.createOneUser(ctx, { unionid });
		console.log('非微信用户创建成功');
	};
};
