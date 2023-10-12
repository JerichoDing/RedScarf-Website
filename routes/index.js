const router = require('koa-router')();
const EndSkin = require('endskin');
const path = require('path');
const menu = require('../wechat/menu');
const sha1 = require('sha1');
const { appid, domain } = require('../config/config').wechat;

// 创建实例对象
const Wechat = require('../wechat/wechat');
const wechatApi = new Wechat();

//menu.js文件重新配置菜单
router.get('/updateMenu', async (ctx, next) => {
	let result = await wechatApi.createMenu(menu);
	ctx.body = result;
});
// 测试JS-SDK使用权限签名算法
router.get('/jssdk', async (ctx) => {
	const testTemplate = EndSkin.create(
		path.resolve(__dirname, '../public/test.html')
	);
	testTemplate.assign({
		domain: domain,
	});
	ctx.body = testTemplate.html();
});

//用于JS-SDK使用权限签名算法
router.get('/jsapi', async (ctx, next) => {
	/* JS-SDK使用权限(签名算法)
          签名生成规则如下：参与签名的字段包括noncestr（随机字符串）,
          有效的jsapi_ticket, timestamp（时间戳）, url（当前网页的URL，不包含#及其后面部分） 。
    */
	//获取传入的url
	let url = ctx.query.url;
	const { ticket } = await wechatApi.fetchTicket();
	const nonceStr = Math.random().toString().split('.')[1];
	const timestamp = Date.now();
	const arr = [
		`jsapi_ticket=${ticket}`,
		`noncestr=${nonceStr}`,
		`timestamp=${timestamp}`,
		`url=${url}`,
	];
	const str = arr.sort().join('&');
	const signature = sha1(str);

	ctx.body = {
		appId: appid,
		signature,
		nonceStr,
		timestamp,
	};
});

//微信网页授权 获取用户信息
router.get('/auth', async (ctx, next) => {
	let redirect_uri = ctx.query.callbackUrl || domain``;
	ctx.redirect(
		`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=code&scope=snsapi_userinfo&state=666&connect_redirect=1#wechat_redirect`
	);
});
//微信网页授权 静默
router.get('/oauth', async (ctx, next) => {
	let redirect_uri = ctx.query.callbackUrl || domain``;
	ctx.redirect(
		`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=code&scope=snsapi_base&state=7777&connect_redirect=1#wechat_redirect`
	);
});

//获取授权后的用户信息，必须有一个返回页面
router.get('/getUserInfo', async (ctx, next) => {
	//获取code值
	let { code, callbackUrl, isForce }  = ctx.query;
	callbackUrl = decodeURIComponent(callbackUrl || domain);
	const authType = isForce ? 'snsapi_userinfo' : 'snsapi_base';
	if (!code) {
		ctx.redirect(`${domain}/${authType}`);
	}
	let result = await wechatApi.getOauthAccessToken(code);
	let data = await wechatApi.getOauthUserinfo(
		result.access_token,
		result.openid
	);
	
	const { openid, nickname, headimgurl } = data;
	//TODO： 保存用户信息
	// console.log(data);

	ctx.redirect(`${callbackUrl}`);
});

//TODO: 核心渲染前端路由
const routers = ['', 'index', 'academic-appeals',  'portfolio-details','login'];
routers.forEach((el) => {
	router.get(`/${el}`, async (ctx) => {
		// 微信的请求路由
		if (ctx.query.signature) {
			return;
		}
		const fileName = el === '' ? 'index' : el;
		EndSkin.setRoot(path.resolve(__dirname, '../pages/components/'));

		const Template = EndSkin.create(
			path.resolve(__dirname, `../pages/${fileName}.html`)
		);
		Template.assign({
			// 传给html的变量
			domain: domain,
		});
		ctx.body = Template.html();
	});
});

module.exports = router;
