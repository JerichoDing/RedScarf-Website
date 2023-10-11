const { domain } = require('../config/config').wechat;

module.exports = {
	button: [
		{
			type: 'view',
			name: '个人笔记',
			domain: `${domain}`,
		},
		{
			type: 'view',
			name: '语音识别',
			domain: 'http://caorui.wicp.vip',
		},
		{
			name: '戳我~',
			sub_button: [
				{
					type: 'view',
					name: '官网',
					domain: 'http://caorui.wicp.vip/',
				},
				{
					type: 'click',
					name: '帮助',
					key: 'help',
				},
			],
		},
	],
};
