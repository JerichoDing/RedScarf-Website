const Browser = require('bowser');


	


const userTools = {
	getRole(role) {
		const roles = ['admin', 'tourist', 'parent', 'student'];
		return roles.includes(role) ? role : 'tourist';
	},
	// 用户来源，定义的是业务来源，比如广告投放、活动、渠道等
	getSource(ctx,source) {
        const sc = ctx.query.source || ctx.query.sc || ctx.request.body.source || '';
		return source || sc;
	},
	// 定义的是访问平台
	getSourceFrom(ctx) {
        const BrowserInfo = Browser.parse(ctx.headers['user-agent']);
        const { browser, os, platform }  = BrowserInfo;
        // 端_系统_浏览器
		return `${platform.type}_${os.name}_${browser.name}`;
	},
};

module.exports = userTools;
