const Browser = require('bowser');
const md5 = require('md5');
const TOOL = require('./tool');

const UserTools = {
	getRole(role) {
		const roles = ['admin', 'tourist', 'parent', 'student'];
		return roles.includes(role) ? role : 'tourist';
	},
	// 用户来源，定义的是业务来源，比如广告投放、活动、渠道等
	getSource(ctx, source) {
		const sc =
			ctx.query.source || ctx.query.sc || ctx.request.body.source || '';
		return source || sc;
	},
	// 定义的是访问平台
	getSourceFrom(ctx) {
		const BrowserInfo = Browser.parse(ctx.headers['user-agent']);
		const { browser, os, platform } = BrowserInfo;
		// 端_系统_浏览器
		return `${platform.type}_${os.name}_${browser.name}`;
	},
	getClientIP(ctx) {
		return (
			ctx.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
			ctx.headers['x-real-ip'] ||
			(ctx.request && ctx.request.ip) ||
			''
		);
	},
	getUserDeviceInfo(ctx) {
		const uniqueName =
			ctx.headers['user-agent'] +
			'_RedScarfAppeal_' +
			UserTools.getClientIP(ctx);
		return md5(uniqueName);
	},
	getEncryptOpenId(ctx) {
		return TOOL.encrypt(UserTools.getUserDeviceInfo(ctx));
	},
	getDecryptOpenId(str) {
		return TOOL.decrypt(str);
	},
	setCookie(ctx, key, val, extra) {
		// 用户有关的cookie有效期30天
		const expires = new Date();
		expires.setTime(expires.getTime() + 60 * 60 * 24 * 1000 * 30);
		ctx.cookies.set(key, val, {
			expires, // cookie失效时间
			httpOnly: false, // 是否只用于http请求中获取
			overwrite: false, // 是否允许重写
			...extra,
		});
	},
	getCookie(ctx, key) {
		return ctx.cookies.get(key);
	},
	// 获取默认用户
	getDefaultUser(ctx) {
		const BrowserInfo = Browser.parse(ctx.headers['user-agent']);
		const { browser, os, platform } = BrowserInfo;
		return {
			name: TOOL.getUUID(
				`uid_${platform.type}_${os.name}_${browser.name}_`,
				10
			),
			openid: TOOL.getUUID(`openid_`, 16), // 生成唯一的openid
			phone: '',
			password: '',
			email: '',
			avatar: '',
			role: UserTools.getRole(),
			description: '',
			unionid: UserTools.getUserDeviceInfo(ctx),
			source: UserTools.getSource(ctx),
			sourcefrom: UserTools.getSourceFrom(ctx),
		};
	},
};

module.exports = UserTools;
