/**
 * @format
 */

/**
 * @see http://medialize.github.io/URI.js/docs.html
 * @file 基于urijs封装的zktURI接口，最底层的基础工具函数,后期可封装基于原生URL及URLSearchParams方法
 *               origin
       __________|__________
      /                     \
                         authority
     |             __________|_________
     |            /                    \
              userinfo                host                          resource
     |         __|___                ___|___                 __________|___________
     |        /      \              /       \               /                      \
         username  password     hostname    port     path & segment      query   fragment
     |     __|___   __|__    ______|______   |   __________|_________   ____|____   |
     |    /      \ /     \  /             \ / \ /                    \ /         \ / \
    foo://username:password@www.example.com:123/hello/world/there.html?name=ferret#foo
    \_/                     \ / \       \ /    \__________/ \     \__/
     |                       |   \       |           |       \      |
  scheme               subdomain  \     tld      directory    \   suffix
                                   \____/                      \___/
                                      |                          |
                                    domain                   filename
 * 
 */

const URI = require('urijs');

/**
 * @exports zkt.uri
 */
const zktURI = {
	getUrl(url) {
		return url || window.location.href;
	},
	uri(url) {
		const _url = zktURI.getUrl(url);
		return new URI(_url);
	},
	callURIFunc(url, methodName, ...args) {
		let uri = zktURI.uri(url);
		const result = uri[methodName](...args);
		uri = null;
		return result;
	},
	callURIStaticFunc(methodName, ...args) {
		return URI[methodName](...args);
	},
	search(key, url) {
		const searchs = zktURI.callURIFunc(url, 'search', true);
		// const uri = zktURI.uri(url);
		// const searchs = uri.search(key);
		if (key) {
			return searchs[key];
		}
		return searchs;
	},
	/**
	 * @example addSearch('a',1, 'http://www.zhiketong.com')  增加一个query
	 * @example addSearch('a',1)  当前链接增加一个query
	 * @example addSearch('a',[1,2])  当前链接增加一个query且包含多个值
	 * @example addSearch('a')  当前链接增加一个空query
	 * @example addSearch({a:1},'http://www.zhiketong.com')  增加多个query
	 * @example addSearch({a:1})  当前链接增加多个query
	 */
	addSearch(key, value, url) {
		let _url = url;
		let _value = value;
		if (typeof key !== 'string') {
			_url = value;
			_value = undefined;
		}
		const result = zktURI.callURIFunc(_url, 'addSearch', key, _value);
		return result;
	},
	removeSearch(key, url) {
		const result = zktURI.callURIFunc(url, 'removeSearch', key);
		// let uri = zktURI.uri(url);
		// uri.removeSearch(key);
		// const result = uri.toString();
		// uri = null;
		return result;
	},
	directory(url) {
		const result = zktURI.callURIFunc(url, 'directory');
		// const uri = zktURI.uri(url);
		// return uri.directory();
		return result;
	},
	pathWithRiskControl(url) {
		const result = zktURI.callURIFunc(url, 'pathname');
		return result;
	},
	path(url) {
		let uri = zktURI.uri(url);
		const filename = uri.filename();
		let result = '';
		if (filename.startsWith('appid_')) {
			result = uri.directory();
		} else {
			result = uri.path();
		}
		uri = null;
		return result;
	},
	projectPath(url) {
		const result = zktURI.callURIFunc(url, 'segment', 0);
		return result;
	},
	parse(url) {
		const _url = zktURI.getUrl(url);
		const result = zktURI.callURIStaticFunc('parse', _url);
		return result;
	},
	/**
	 * 替换originalUrl域名
	 * @param originalUrl 需要被替换的域名
	 * @param origin  目标域名
	 * @returns 返回替换后的url
	 */
	replaceOrigin(originalUrl = location.href, origin = window.location.origin) {
		return zktURI.callURIFunc(originalUrl, 'origin', origin).toString();
	},
	/**
	 * 替换pathname
	 * @param originalUrl 需要被替换的域名
	 * @param origin  目标pathname
	 * @returns 返回替换后的url
	 */
	replaceRouter(originalUrl = location.href, origin = zktURI.path()) {
		return zktURI.callURIFunc(originalUrl, 'pathname', origin).toString();
	},
};

module.exports = zktURI();
