const USER_ACTION = require('../controller/userAction');
const UserTools = require('../utils/user-tools');
const Tool = require('../utils/tool');
const fancyURI = require('../utils/url');

const Wechat = require('../wechat/wechat');
const wechatApi = new Wechat();

const { domain } = require('../config/config').wechat;

// 创建用户并种cookie
const createUserAndSetCookie = async (ctx, user) => {
	await USER_ACTION.createUser(ctx, user);
	console.log('用户创建成功', user);
	UserTools.setCookie(ctx, 'uuid', user.unionid);
	console.log('set cookie -->', user.unionid);
};

// 检查用户是否存在
const checkUserByCookieId = async (ctx, uuid) => {
	const { data } = await USER_ACTION.findOneUser(ctx, {
		unionid: uuid,
	});
	if (data && data.id) {
		return true;
	}
	return false;
};

module.exports = async (ctx, next) => {
	console.log('是否微信环境----', Tool.isWxBrowser(ctx), `${domain}${ctx.url}`);
	const callbackUrl = `${domain}${ctx.url}`;
	const cookieId = UserTools.getCookie(ctx, 'uuid');
	const unionid = UserTools.getUserDeviceInfo(ctx);
	if (cookieId) {
		const isUserExist = await checkUserByCookieId(ctx, cookieId);
		if (isUserExist) {
			return next();
		}
	}
	// 微信用户组注册逻辑
	if (Tool.isWxBrowser(ctx)) {
		const { code } = ctx.query;
		if (code) {
			try {
				let result = await wechatApi.getOauthAccessToken(code);
				let data = await wechatApi.getOauthUserinfo(
					result.access_token,
					result.openid
				);
				// 保存用户信息
				console.log('微信用户信息' + JSON.stringify(data), callbackUrl);
				// 创建微信用户
				await createUserAndSetCookie(ctx, {
					openid: data.openid,
					unionid:data.unionid,
					name: data.nickname,
					avatar: data.headimgurl,
				});
				ctx.redirect(`${fancyURI.removeSearch('code', callbackUrl)}`);
				return next();
			} catch (error) {}
		} else {
			ctx.redirect(`/getUserInfo?backurl=${encodeURIComponent(callbackUrl)}`);
			return next();
		}
	}
	// 判断该用户是否在数据库中
	const isUserExist = await checkUserByCookieId(ctx, unionid);
	if (isUserExist) {
		return next();
	}

	// 创建非微信用户
	await createUserAndSetCookie(ctx, { unionid });
	return next();
};
