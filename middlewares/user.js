const USER_ACTION = require('../controller/userAction');
const UserTools = require('../utils/user-tools');
const Tool = require('../utils/tool');

const { domain } = require('../config/config').wechat;


module.exports = async (ctx, next) => {
		console.log('是否微信环境----',Tool.isWxBrowser(ctx), `${domain}${ctx.url}`);
		const callbackUrl = `${domain}${ctx.url}`;
		if(Tool.isWxBrowser(ctx)) {
			// 走微信自动授权注册逻辑
			// ctx.redirect(`/auth?type=snsapi_userinfo&callbackUrl=${encodeURIComponent(callbackUrl)}`);
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
		await USER_ACTION.createUser(ctx, { unionid });
		console.log('非微信用户创建成功');
	};
