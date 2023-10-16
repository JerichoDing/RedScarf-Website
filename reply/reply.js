/**
 * 处理用户发送的消息和内容，返回不同的内容给用户
 */
module.exports = async (message) => {
	let replyBody = '您在说什么，我听不懂！';

	if (message.MsgType === 'text') {
		let content = message.Content;
		if (content === '热门') {
			replyBody = '热门';
		} else if (content === '2') {
			replyBody = '落地成盒';
		} else if (content.match('爱')) {
			replyBody = '我爱你~';
		}
	} else if (message.MsgType === 'voice') {
		options.msgType = 'voice';
		options.mediaId = message.MediaId;
		console.log(message.Recognition);
	} else if (message.MsgType === 'event') {
		console.log('Event', message);
		if (message.Event === 'subscribe') {
			replyBody =
				'你好呀同学/家长[玫瑰]\n' +
				'欢迎关注红领巾留学申诉\n' +
				'我们有13年留学申诉经验\n' +
				'项目覆盖英国/美国/加拿大/澳洲/新西兰/中国香港等地区\n\n' +
				'主要服务\n' +
				'挂科申诉｜学术不端｜退课撤课\n' +
				'论文延期｜退学申诉｜学位申诉\n' +
				'分数申诉｜休学申请｜offer申诉\n' +
				'咨询请加老师vx️：honglingjin02\n' +
				'添加备注“公众号”\n';
		} else if (message.Event === 'unsubscribe') {
			console.log('用户取消关注了！');
		} else if (message.Event === 'CLICK') {
			replyBody =
				'您可以按照以下提示来进行操作~\n' +
				'回复 首页 查看电影预告片页面\n' +
				'回复 热门 查看最新热门电影\n' +
				'回复 文本 查看指定电影信息\n' +
				'回复 语音 查看指定电影信息\n' +
				'也可以点击下面的菜单按钮来了解其它信息~';
		}
	}

	return replyBody;
};
