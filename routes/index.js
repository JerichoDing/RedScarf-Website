const router = require('koa-router')();
const EndSkin = require('endskin');
const fs = require('fs');
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
	const { backurl, type = 'base' } = ctx.query;
	// type: base(静默授权) userinfo(授权)
	ctx.redirect(
		`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(
			backurl
		)}&response_type=code&scope=snsapi_${type}&state=STATE&connect_redirect=1#wechat_redirect`
	);
});

//获取授权后的用户信息，必须有一个返回页面
router.get('/getUserInfo', async (ctx, next) => {
	//获取code值
	let { code, backurl = domain, type = 'base' } = ctx.query;

	const authUrl = `${domain}/auth?type=${type}&backurl=${encodeURIComponent(
		backurl
	)}`;
	console.log('授权参数', domain, JSON.stringify(ctx.query), authUrl, code);
	if (!code) {
		ctx.redirect(`${authUrl}`);
	}
});




var pathName = path.resolve(__dirname, '../pages/application-cases/')
var successRoute = []
// 写一个函数来解析需要遍历的文件，然后把遍历到的文件路径push到一个数组中，如遇到文件夹则继续递归调用，并返回这个数组
function fileDisplay(filePath){
	//根据文件路径读取文件，返回文件列表
	var files = fs.readdirSync(filePath);
	//遍历读取到的文件列表
	files.forEach(function(filename){
		//获取当前文件的绝对路径
		var filedir = path.join(filePath,filename);
		//根据文件路径获取文件信息，返回一个fs.Stats对象
		var stats = fs.statSync(filedir);
		var isFile = stats.isFile();//是文件
		var isDir = stats.isDirectory();//是文件夹
		if(isFile){
			// 读取文件内容
			successRoute.push(filedir.replace(pathName,'').replace('.html',''))
		}
		if(isDir){
			fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
		}
	});
	return successRoute
}

const filesPath = fileDisplay(pathName);
let fileNameObj = {}
const successRoutes = filesPath.map((el) =>{
	const name = el.substring(1,el.lastIndexOf('/')) 
	let resultRoute = `application-cases/${encodeURIComponent(name)}/index`;
	fileNameObj[resultRoute] = `application-cases/${name}/index`;
	return resultRoute
})

//TODO: 手动添加前端路由
let frontRouters = [
	'', //首页
	'index',
	'successful-cases',
	'academic-appeals',
	'non-academic-appeals',
	'third-appeals',
	'contact-us',
	'404',
	'common',
	'course-guidance',// 课程预习
	'course-guidance/Preview',// 课程预习
	'course-guidance/Course', // 课程辅导
	'course-guidance/CoursePaper', // 论文辅导
	'course-guidance/Assignment', // 作业辅导
	'course-guidance/Exam', // 考试辅导
	'course-guidance/Proofreading', // Proofreading
	'course-guidance/Selection', // 选课指导
	'course-guidance/Turnitin', // Turnitin查重
	'course-guidance/ArtTutorial', // 艺术类课业辅导
	'course-guidance/PhDRp', // 博士RP辅导
	'course-guidance/ModelEssay', // 高分范文
	...successRoutes
];
frontRouters.forEach((el) => {
	router.get(`/${el}`, async (ctx) => {
		// 微信的请求路由，不做处理
		if (ctx.query.signature) {
			return;
		}
		let fileName = '';
		switch (el) {
			case '':
				fileName = 'index'
				break;
			case 'course-guidance':
				fileName = 'course-guidance/Course'
				break;
			default:
				fileName = el
		}
		EndSkin.setRoot(path.resolve(__dirname, '../pages/components/'));

		const Template = EndSkin.create(
			path.resolve(__dirname, `../pages/${fileNameObj[fileName] || fileName}.html`)
		);
		let isPrd = domain.indexOf('redscarfappeal') > 0? 1:0
		Template.assign({
			// 传给html的变量
			domain: domain,
			isPrd,
			version: new Date().getTime(),
		});
		ctx.body = Template.html();
	});
});


module.exports = router;
