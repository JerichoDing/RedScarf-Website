const USER_ACTION = require('../controller/userAction');
const UserTools = require('../utils/userTools');
module.exports = () => {
	// 以ip + ua信息 自动创建新用户
	// 并种下该用户的唯一cookie 在后续不再创建该用户
	return async (ctx, next) => {
		const deviceInfo = UserTools.getUserDeviceInfo(ctx);
		const uuid = ctx.cookies.get('uuid');
		// 判断该用户是否在数据库中
		if (uuid) {
			const realUUid = UserTools.getDecryptOpenId(uuid);
			const existUser = await USER_ACTION.findOneUser(ctx, {
				where: {
					unionid: realUUid,
				},
			});

			console.log(12121, realUUid, existUser);
		} else {
			const encryptDeviceInfo = UserTools.getEncryptOpenId(ctx);
			const expires = new Date();
			// 有效期30天
			expires.setTime(expires.getTime() + 60 * 60 * 24 * 1000 * 30);
			console.log(11111, expires, encryptDeviceInfo);
			ctx.cookies.set('uuid', encryptDeviceInfo, {
				expires, // cookie失效时间
				httpOnly: false, // 是否只用于http请求中获取
				overwrite: false, // 是否允许重写
			});
		}
	};
};
