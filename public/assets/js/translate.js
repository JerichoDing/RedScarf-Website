/*

	鍥介檯鍖栵紝缃戦〉鑷姩缈昏瘧銆�
	浣滆€咃細绠￠浄楦�
	寮€鍘熶粨搴擄細https://github.com/xnx3/translate

 */
    var translate={version:"2.8.3.20231009",useVersion:"v1",setUseVersion2:function(){translate.useVersion="v2"},translate:null,includedLanguages:"zh-CN,zh-TW,en",resourcesUrl:"//res.zvo.cn/translate",selectLanguageTag:{show:!0,languages:"",alreadyRender:!1,selectOnChange:function(e){var t=e.target.value;translate.changeLanguage(t)},render:function(){if(!translate.selectLanguageTag.alreadyRender&&(translate.selectLanguageTag.alreadyRender=!0,translate.selectLanguageTag.show)){if(null==document.getElementById("translate")){var e=document.getElementsByTagName("body")[0],t=document.createElement("div");t.id="translate",e.appendChild(t)}else if(null!=document.getElementById("translateSelectLanguage"))return;translate.request.post(translate.request.api.language,{},function(e){if(0!=e.result){var t=function(e){translate.selectLanguageTag.selectOnChange(e)},a=document.createElement("select");a.id="translateSelectLanguage",a.className="translateSelectLanguage";for(var n=0;n<e.list.length;n++){var r=document.createElement("option");if(r.setAttribute("value",e.list[n].id),translate.selectLanguageTag.languages.length>0){var l=(","+translate.selectLanguageTag.languages+",").toLowerCase();if(console.log(l),l.indexOf(","+e.list[n].id.toLowerCase()+",")<0)continue}null!=translate.to&&void 0!==translate.to&&translate.to.length>0?translate.to==e.list[n].id&&r.setAttribute("selected","selected"):e.list[n].id==translate.language.getLocal()&&r.setAttribute("selected","selected"),r.appendChild(document.createTextNode(e.list[n].name)),a.appendChild(r)}window.addEventListener?a.addEventListener("change",t,!1):a.attachEvent("onchange",t),document.getElementById("translate").appendChild(a)}else console.log("load language list error : "+e.info)})}}},localLanguage:"zh-CN",googleTranslateElementInit:function(){var e="";null!=document.getElementById("translate")&&(e="translate"),translate.translate=new google.translate.TranslateElement({pageLanguage:"zh-CN",includedLanguages:translate.selectLanguageTag.languages,layout:0},e)},init:function(){var e=window.location.protocol;"file:"==window.location.protocol&&(e="http:"),-1==this.resourcesUrl.indexOf("://")&&(this.resourcesUrl=e+this.resourcesUrl)},execute_v1:function(){if(null==document.getElementById("translate")&&translate.selectLanguageTag.show){var e=document.getElementsByTagName("body")[0],t=document.createElement("div");t.id="translate",e.appendChild(t)}""==translate.includedLanguages&&(translate.selectLanguageTag.languages=translate.includedLanguages),console.log("translate.js tip: translate.includedLanguages obsolete, please use the translate.selectLanguageTag.languages are set");var a=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.src=this.resourcesUrl+"/js/element.js",a.appendChild(n)},setCookie:function(e,t){var a=e+"="+escape(t);document.cookie=a},getCookie:function(e){for(var t=document.cookie.split("; "),a=0;a<t.length;a++){var n=t[a].split("=");if(n[0]==e)return unescape(n[1])}return""},currentLanguage:function(){var e=translate.getCookie("googtrans");return e.length>0?e.substr(e.lastIndexOf("/")+1,e.length-1):translate.localLanguage},changeLanguage:function(e){if(",en,de,hi,lt,hr,lv,ht,hu,zh-CN,hy,uk,mg,id,ur,mk,ml,mn,af,mr,uz,ms,el,mt,is,it,my,es,et,eu,ar,pt-PT,ja,ne,az,fa,ro,nl,en-GB,no,be,fi,ru,bg,fr,bs,sd,se,si,sk,sl,ga,sn,so,gd,ca,sq,sr,kk,st,km,kn,sv,ko,sw,gl,zh-TW,pt-BR,co,ta,gu,ky,cs,pa,te,tg,th,la,cy,pl,da,tr,".indexOf(","+e+",")>-1){console.log(),translate.check();var t="/"+translate.localLanguage+"/"+e,a=document.location.host.split(".");if(a.length>2){var n=a[a.length-2]+"."+a[a.length-1];document.cookie="googtrans=;expires="+new Date(1)+";domain="+n+";path=/",document.cookie="googtrans="+t+";domain="+n+";path=/"}return translate.setCookie("googtrans",""+t),void location.reload()}if(translate.setUseVersion2(),null!=translate.to&&translate.to.length>0&&translate.to!=translate.language.getLocal())var r=!0;translate.to=e,translate.storage.set("to",e),r?location.reload():translate.execute()},check:function(){"file:"==window.location.protocol&&console.log()},to:"",autoDiscriminateLocalLanguage:!1,documents:[],ignore:{tag:["style","script","link","pre","code"],class:["ignore","translateSelectLanguage"],id:[],isIgnore:function(e){if(null==e||void 0===e)return!1;for(var t=e,a=100;a-- >0;){if(null==t||void 0===t)return!1;var n=translate.element.getNodeName(t).toLowerCase();if(n.length>0){if("body"==n||"html"==n||"#document"==n)return!1;if(translate.ignore.tag.indexOf(n)>-1)return!0}if(null!=t.className){var r=t.className;if(null==r||"string"!=typeof r)continue;r=r.trim().split(" ");for(var l=0;l<r.length;l++)if(null!=r[l]&&r[l].trim().length>0&&translate.ignore.class.indexOf(r[l])>-1)return!0}if(null!=t.id&&void 0!==t.id&&translate.ignore.id.indexOf(t.id)>-1)return!0;t=t.parentNode}return!1}},nomenclature:{data:new Array,old_Data:[],set:function(e){alert("璇峰皢 translate.nomenclature.set 鏇存崲涓� append锛屽叿浣撲娇鐢ㄥ彲鍙傝€冿細 https://github.com/xnx3/translate ")},append:function(e,t,a){void 0===translate.nomenclature.data[e]&&(translate.nomenclature.data[e]=new Array),void 0===translate.nomenclature.data[e][t]&&(translate.nomenclature.data[e][t]=new Array);for(var n=a.split("\n"),r=0;r<n.length;r++){var l=n[r].trim();if(!(l.length<1)){var s=l.split("=");if(2==s.length){var o=s[0].trim(),u=s[1].trim();0!=o.length&&0!=u.length&&(translate.nomenclature.data[e][t][o]=u)}}}translate.nomenclature.data[e][t]=translate.util.objSort(translate.nomenclature.data[e][t])},get:function(){return translate.nomenclature.data},dispose:function(e){if(null==e||0==e.length)return e;if(void 0===translate.nomenclature.data[translate.language.getLocal()]||void 0===translate.nomenclature.data[translate.language.getLocal()][translate.to])return e;for(var t in translate.nomenclature.data[translate.language.getLocal()][translate.to]){var a=translate.nomenclature.data[translate.language.getLocal()][translate.to][t];if("function"!=typeof a){var n=e.indexOf(t);if(n>-1)if("english"==translate.language.getLocal()){var r="";if(0==n);else if(r=e.substr(n-1,1),"english"==translate.language.getCharLanguage(r))continue;var l="";if(n+t.length==e.length);else if(l=e.substr(n+t.length,1),"english"==translate.language.getCharLanguage(l))continue;e=e.replace(new RegExp(r+t+l,"g"),r+a+l)}else e=e.replace(new RegExp(t,"g"),a)}}return e}},office:{export:function(){if(translate.language.getLocal()!=translate.language.getCurrent()){var e="";for(var t in translate.nodeQueue){translate.nodeQueue[t];for(var a in translate.nodeQueue[t].list)if(!("string"!=typeof a||a.length<1))for(var n in translate.nodeQueue[t].list[a])e=e+"\n"+translate.nodeQueue[t].list[a][n].original+"="+translate.storage.get("hash_"+translate.language.getCurrent()+"_"+n)}e.length>0?(e="translate.office.append('"+translate.language.getCurrent()+"',`"+e+"\n`);",translate.util.loadMsgJs(),msg.popups({text:'<textarea id="msgPopupsTextarea" style="width:100%; height:100%;">loaing...</textarea>',width:"750px",height:"600px",padding:"1px"}),document.getElementById("msgPopupsTextarea").value=e):msg.alert("鏃犳湁鏁堝唴瀹�")}},showPanel:function(){let e=document.createElement("div");e.setAttribute("id","translate_export"),e.setAttribute("class","ignore");let t=document.createElement("button");t.onclick=function(){translate.office.export()},t.innerHTML="瀵煎嚭閰嶇疆淇℃伅",t.setAttribute("style","margin-left: 72px; margin-top: 30px; margin-bottom: 20px; font-size: 25px;"),e.appendChild(t);let a=document.createElement("div");a.innerHTML='1. 棣栧厛灏嗗綋鍓嶈绉嶅垏鎹负浣犺缈昏瘧鐨勮绉�<br/>2. 鐐瑰嚮瀵煎嚭鎸夐挳锛屽皢缈昏瘧鐨勯厤缃俊鎭鍑�<br/>3. 灏嗗鍑虹殑閰嶇疆淇℃伅绮樿创鍒颁唬鐮佷腑锛屽嵆鍙畬鎴�<br/><a href="asd" target="_black" style="color: aliceblue;">鐐规杩涜鏌ラ槄璇︾粏浣跨敤璇存槑</a>',a.setAttribute("style","font-size: 14px; padding: 12px;"),e.appendChild(a),e.setAttribute("style","background-color: black; color: #fff; width: 320px; height: 200px; position: fixed; bottom: 50px; right: 50px;"),document.body.appendChild(e),translate.util.loadMsgJs()},append:function(e,t){for(var a=t.split("\n"),n=0;n<a.length;n++){var r=a[n].trim();if(!(r.length<1)){var l=r.split("=");if(2==l.length){var s=l[0],o=l[1];0!=s.length&&0!=o.length&&translate.storage.set("hash_"+e+"_"+translate.util.hash(s),o)}}}}},setAutoDiscriminateLocalLanguage:function(){translate.autoDiscriminateLocalLanguage=!0},nodeQueue:{},setDocuments:function(e){null!=e&&void 0!==e&&(void 0===e.length?translate.documents[0]=e:translate.documents=e,translate.nodeQueue={},console.log("set documents , clear translate.nodeQueue"))},getDocuments:function(){return null!=translate.documents&&void 0!==translate.documents&&translate.documents.length>0?translate.documents:document.all},listener:{isStart:!1,start:function(){translate.temp_linstenerStartInterval=setInterval(function(){"complete"==document.readyState&&(clearInterval(translate.temp_linstenerStartInterval),translate.listener.addListener())},300)},addListener:function(){translate.listener.isStart=!0;const e={attributes:!0,childList:!0,subtree:!0},t=new MutationObserver(function(e,t){var a=[];for(let t of e)"childList"===t.type&&t.addedNodes.length>0&&a.push.apply(a,t.addedNodes);a.length>0&&setTimeout(function(){translate.execute(a)},10)});for(var a=translate.getDocuments(),n=0;n<a.length;n++){var r=a[n];null!=r&&t.observe(r,e)}},renderTaskFinish:function(e){}},renderTask:class{constructor(){this.taskQueue=[],this.nodes=[]}add(e,t,a,n){var r=translate.element.nodeAnalyse.get(e,n),l=translate.util.hash(r.text);void 0===this.nodes[l]&&(this.nodes[l]=new Array),this.nodes[l].push(e);var s=this.taskQueue[l];null!=s&&void 0!==s||(s=new Array);var o=new Array;" "==t.substr(0,1)&&" "!=a.substr(0,1)&&(a=" "+a)," "===t.substr(t.length-1,1)&&" "!=a.substr(0,1)&&(a+=" "),o.originalText=t,o.resultText=a,o.attribute=n,s.push(o),this.taskQueue[l]=s}execute(){for(var e in this.taskQueue){"function"!=typeof(t=this.taskQueue[e])&&(t.sort((e,t)=>t.originalText.length-e.originalText.length),this.taskQueue[e]=t)}for(var e in this.nodes)for(var t=this.taskQueue[e],a=0;a<this.nodes[e].length;a++)for(var n=0;n<t.length;n++){var r=t[n];"function"!=typeof t&&translate.element.nodeAnalyse.set(this.nodes[e][n],r.originalText,r.resultText,r.attribute)}if(void 0!==this.taskQueue&&Object.keys(this.taskQueue).length>0){var l=this;setTimeout(function(){for(var e in l.nodes)for(var t in l.nodes[e]){var a=translate.element.nodeAnalyse.get(l.nodes[e][0]),n=nodeuuid.uuid(a.node);0!=n.length&&(translate.nodeHistory[n]={},translate.nodeHistory[n].node=a.node,translate.nodeHistory[n].translateText=a.text)}translate.listener.renderTaskFinish(l)},50)}}},execute:function(e){"undefined"!=typeof doc&&(translate.useVersion="v2"),"v1"==translate.useVersion&&(console.log(''),translate.useVersion="v2");var t=translate.util.uuid();if(null==translate.to||""==translate.to){var a=translate.storage.get("to");null!=a&&void 0!==a&&a.length>0&&(translate.to=a)}try{translate.selectLanguageTag.render()}catch(e){console.log(e)}if(null!=translate.to&&void 0!==translate.to&&0!=translate.to.length){if(translate.to!=translate.language.getLocal()){var n;if(translate.images.execute(),void 0!==e){if(null==e)return void console.log("translate.execute(...) 涓紶鍏ョ殑瑕佺炕璇戠殑鐩爣鍖哄煙涓嶅瓨鍦ㄣ€�");void 0===e.length?(n=new Array)[0]=e:n=e}else n=translate.getDocuments();for(var r=0;r<n.length&r<20;r++){var l=n[r];translate.element.whileNodes(t,l)}for(var s in translate.nodeQueue[t].list){for(var o in translate.nodeQueue[t].list[s]){for(var u=translate.nodeQueue[t].list[s][o].nodes.length-1;u>-1;u--){var i=translate.element.nodeAnalyse.get(translate.nodeQueue[t].list[s][o].nodes[u].node),g=nodeuuid.uuid(i.node);void 0!==translate.nodeHistory[g]&&translate.nodeHistory[g].translateText==i.text&&translate.nodeQueue[t].list[s][o].nodes.splice(u,1)}0==translate.nodeQueue[t].list[s][o].nodes.length&&delete translate.nodeQueue[t].list[s][o]}0==Object.keys(translate.nodeQueue[t].list[s]).length&&delete translate.nodeQueue[t].list[s]}var d={},c={},f={};for(var s in translate.nodeQueue[t].list){if(null==s||void 0===s||0==s.length||"undefined"==s)continue;d[s]=[],c[s]=[];let e=new translate.renderTask;for(var o in f[s]=[],translate.nodeQueue[t].list[s])if("function"!=typeof translate.nodeQueue[t].list[s][o]){var h=translate.nodeQueue[t].list[s][o].original,p=translate.nodeQueue[t].list[s][o].translateText,v=h==p?o:translate.util.hash(p);translate.nodeQueue[t].list[s][o].cacheHash=v;var m=translate.storage.get("hash_"+translate.to+"_"+v);if(null!=m&&m.length>0)for(var x=0;x<translate.nodeQueue[t].list[s][o].nodes.length;x++){e.add(translate.nodeQueue[t].list[s][o].nodes[x].node,h,translate.nodeQueue[t].list[s][o].nodes[x].beforeText+m+translate.nodeQueue[t].list[s][o].nodes[x].afterText,translate.nodeQueue[t].list[s][o].nodes[x].attribute);var y=-1;for(r=0;r<f[s].length;r++)translate.nodeQueue[t].list[s][o].nodes[x].node.isSameNode(f[s][r].node)&&(y=r);-1==y&&(y=f[s].length,f[s][y]={},f[s][y].node=translate.nodeQueue[t].list[s][o].nodes[x].node,f[s][y].array=[]);var T=f[s][y].array.length;f[s][y].array[T]=translate.nodeQueue[t].list[s][o].nodes[x].beforeText+m+translate.nodeQueue[t].list[s][o].nodes[x].afterText}else d[s].push(p),c[s].push(o)}e.execute()}for(var s in f){var w=Object.keys(translate.nodeQueue[t].list[s]),Q=w.length;for(r=0;r<f[s].length;r++){f[s][r].array.sort(function(e,t){return t.length-e.length});for(var b=translate.element.nodeAnalyse.get(f[s][r].node),C=b.text,L=0;L<f[s][r].array.length;L++)f[s][r].array[L]<1||(C=C.replace(new RegExp(translate.util.regExp.pattern(f[s][r].array[L]),"g"),translate.util.regExp.resultText("\n")));for(var E=C.split("\n"),N=0;N<E.length;N++)E[N]<1||translate.addNodeToQueue(t,b.node,E[N])}var A=Object.keys(translate.nodeQueue[t].list[s]);if(Q-A.length!=0)for(var k=0;k<A.length;k++)if(twoHash=A[k],-1==w.indexOf(twoHash)){var q=translate.nodeQueue[t].list[s][twoHash];v=q.original==q.translateText?twoHash:translate.util.hash(q.translateText);translate.nodeQueue[t].list[s][twoHash].cacheHash=v,d[s].push(q.translateText),c[s].push(twoHash)}}var D=[];for(var s in translate.nodeQueue[t].list)void 0!==d[s]&&(d[s].length<1||D.push(s));if(0!=D.length)for(var R in D){s=D[R];if(void 0===d[s]||d[s].length<1)return;var _=translate.request.api.translate,O={from:s,to:translate.to,text:encodeURIComponent(JSON.stringify(d[s]))};translate.request.post(_,O,function(e){if(0==e.result)return console.log("=======ERROR START======="),console.log(d[e.from]),console.log("response : "+e.info),void console.log("=======ERROR END  =======");let a=new translate.renderTask;for(var n=0;n<c[e.from].length;n++){var r=e.from,l=e.text[n],s=c[e.from][n],o=translate.nodeQueue[t].list[r][s].cacheHash,u="";try{u=translate.nodeQueue[t].list[r][s].original}catch(e){console.log("uuid:"+t+", originalWord:"+u+", lang:"+r+", hash:"+s+", text:"+l+", queue:"+translate.nodeQueue[t]),console.log(e);continue}for(var i=0;i<translate.nodeQueue[t].list[r][s].nodes.length;i++)a.add(translate.nodeQueue[t].list[r][s].nodes[i].node,u,translate.nodeQueue[t].list[r][s].nodes[i].beforeText+l+translate.nodeQueue[t].list[r][s].nodes[i].afterText,translate.nodeQueue[t].list[r][s].nodes[i].attribute);translate.storage.set("hash_"+e.to+"_"+o,l)}a.execute()})}}}else translate.autoDiscriminateLocalLanguage&&translate.executeByLocalLanguage()},nodeHistory:{},element:{nodeAnalyse:{get:function(e,t){return translate.element.nodeAnalyse.analyse(e,"","",t)},set:function(e,t,a,n){translate.element.nodeAnalyse.analyse(e,t,a,n)},analyse:function(e,t,a,n){var r=new Array;r.node=e,r.text="";var l=translate.element.getNodeName(e);if(null!=n&&"string"==typeof n&&n.length>0)return r.text=e[n],void 0!==t&&t.length>0&&(void 0!==e[n]?e[n]=e[n].replace(new RegExp(translate.util.regExp.pattern(t),"g"),translate.util.regExp.resultText(a)):console.log(e)),r;"#text"==l&&(void 0!==e.parentNode&&"TEXTAREA"==translate.element.getNodeName(e.parentNode)&&(l="TEXTAREA",e=e.parentNode));if("INPUT"==l||"TEXTAREA"==l){if(null==e.attributes||void 0===e.attributes)return r.text="",r;if("INPUT"==l&&void 0!==e.attributes.type&&null!=typeof e.attributes.type.nodeValue&&("button"==e.attributes.type.nodeValue.toLowerCase()||"submit"==e.attributes.type.nodeValue.toLowerCase())){var s=e.attributes.value;if(null!=s&&void 0!==s&&void 0!==s.nodeValue&&s.nodeValue.length>0)return void 0!==t&&t.length>0&&(s.nodeValue=s.nodeValue.replace(new RegExp(translate.util.regExp.pattern(t),"g"),translate.util.regExp.resultText(a))),r.text=s.nodeValue,r.node=s,r}return void 0!==e.attributes.placeholder?(void 0!==t&&t.length>0&&(e.attributes.placeholder.nodeValue=e.attributes.placeholder.nodeValue.replace(new RegExp(translate.util.regExp.pattern(t),"g"),translate.util.regExp.resultText(a))),r.text=e.attributes.placeholder.nodeValue,r.node=e.attributes.placeholder,r):(r.text="",r)}if("META"==l){if(void 0!==e.name&&null!=e.name){var o=e.name.toLowerCase();if("keywords"==o||"description"==o)return void 0!==t&&null!=t&&t.length>0&&(e.content=e.content.replace(new RegExp(translate.util.regExp.pattern(t),"g"),translate.util.regExp.resultText(a))),r.text=e.content,r}return r.text="",r}return"IMG"==l?void 0===e.alt||null==e.alt?(r.text="",r):(void 0!==t&&t.length>0&&(e.alt=e.alt.replace(new RegExp(translate.util.regExp.pattern(t),"g"),translate.util.regExp.resultText(a))),r.text=e.alt,r):(null==e.nodeValue||void 0===e.nodeValue?r.text="":0==e.nodeValue.trim().length?r.text="":(void 0!==t&&null!=t&&t.length>0&&(e.nodeValue=e.nodeValue.replace(new RegExp(translate.util.regExp.pattern(t),"g"),translate.util.regExp.resultText(a))),r.text=e.nodeValue),r)}},getNodeName:function(e){return null==e||void 0===e?"":null==e.nodeName||void 0===e.nodeName?"":e.nodeName},whileNodes:function(e,t){if(null!=t&&void 0!==t){void 0!==translate.nodeQueue[e]&&null!=translate.nodeQueue[e]||(translate.nodeQueue[e]=new Array,translate.nodeQueue[e].expireTime=Date.now()+12e4,translate.nodeQueue[e].list=new Array),"object"==typeof t&&"string"==typeof t.title&&t.title.length>0&&(translate.ignore.isIgnore(t)||translate.addNodeToQueue(e,t,t.title,"title"));var a=t.childNodes;if(a.length>0)for(var n=0;n<a.length;n++)translate.element.whileNodes(e,a[n]);else translate.element.findNode(e,t)}},findNode:function(e,t){if(null!=t&&void 0!==t&&null!=t.parentNode){var a=translate.element.getNodeName(t.parentNode);if(""!=a&&!(translate.ignore.tag.indexOf(a.toLowerCase())>-1||translate.ignore.isIgnore(t))){var n=translate.element.nodeAnalyse.get(t);n.text.length>0&&translate.addNodeToQueue(e,n.node,n.text)}}}},addNodeToQueue:function(e,t,a,n){if(null!=t&&null!=a&&0!=a.length&&"#comment"!=translate.element.getNodeName(t).toLowerCase()){translate.util.hash(a);if(translate.util.findTag(a)){if(null==t.parentNode)return;var r=translate.element.getNodeName(t.parentNode);if("SCRIPT"==r||"STYLE"==r)return}var l=translate.language.get(a);for(var s in void 0!==l[translate.to]&&delete l[translate.to],l){null!=translate.nodeQueue[e].list[s]&&void 0!==translate.nodeQueue[e].list[s]||(translate.nodeQueue[e].list[s]=new Array);for(var o=0;o<l[s].length;o++)if(void 0!==l[s][o]&&void 0!==l[s][o].text){var u=l[s][o].text,i=l[s][o].beforeText,g=l[s][o].afterText,d=translate.util.hash(u);null!=translate.nodeQueue[e].list[s][d]&&void 0!==translate.nodeQueue[e].list[s][d]||(translate.nodeQueue[e].list[s][d]=new Array,translate.nodeQueue[e].list[s][d].nodes=new Array,translate.nodeQueue[e].list[s][d].original=u,translate.nodeQueue[e].list[s][d].translateText=translate.nomenclature.dispose(u));var c=!1;if(void 0!==t.isSameNode)for(var f=0;f<translate.nodeQueue[e].list[s][d].nodes.length;f++)t.isSameNode(translate.nodeQueue[e].list[s][d].nodes[f].node)&&(c=!0);if(!c){var h=translate.nodeQueue[e].list[s][d].nodes.length;translate.nodeQueue[e].list[s][d].nodes[h]=new Array,translate.nodeQueue[e].list[s][d].nodes[h].node=t,translate.nodeQueue[e].list[s][d].nodes[h].attribute=n,translate.nodeQueue[e].list[s][d].nodes[h].beforeText=i,translate.nodeQueue[e].list[s][d].nodes[h].afterText=g}}}}},language:{local:"",setLocal:function(e){translate.setUseVersion2(),translate.language.local=e},getLocal:function(){return(null==translate.language.local||translate.language.local.length<1)&&translate.language.autoRecognitionLocalLanguage(),translate.language.local},getCurrent:function(){var e=translate.storage.get("to");return null!=e&&void 0!==e&&e.length>0?e:translate.language.getLocal()},setDefaultTo:function(e){var t=translate.storage.get("to");null!=t&&void 0!==t&&t.length>0||(translate.storage.set("to",e),translate.to=e)},setUrlParamControl:function(e){(void 0===e||e.length<1)&&(e="language");var t=translate.util.getUrlParam(e);void 0!==t&&""!=t&&"null"!=t&&"undefined"!=t&&(translate.storage.set("to",t),translate.to=t)},autoRecognitionLocalLanguage:function(){if(!(null!=translate.language.local&&translate.language.local.length>2)){var e=document.body.outerText;if(null==e||void 0===e||e.length<1)translate.language.local="chinese_simplified";else{e=e.replace(/\n|\t|\r/g,"");for(var t=new Array,a=0;a<e.length;a++){var n=e.charAt(a),r=translate.language.getCharLanguage(n);""==r&&(r="unidentification"),t.push(r)}var l=translate.util.arrayFindMaxNumber(t),s=l.indexOf("specialCharacter");s>-1&&l.splice(s,1),l.length>0?translate.language.local=l[0]:translate.language.local="chinese_simplified"}}},get:function(e){for(var t=new Array,a=new Array,n=[],r=[],l=0;l<e.length;l++){var s=e.charAt(l),o=translate.language.getCharLanguage(s);""==o&&(o="unidentification");var u=translate.language.analyse(o,a,n,r,s);a=u.langStrs,void 0!==n.language&&(r.language=n.language,r.charstr=n.charstr,r.storage_language=n.storage_language),n.language=u.storage_language,n.charstr=s,n.storage_language=u.storage_language,t.push(o)}return void 0!==a.unidentification&&delete a.unidentification,void 0!==a.specialCharacter&&delete a.specialCharacter,void 0!==a.number&&delete a.number,a},getCharLanguage:function(e){return null==e||void 0===e?"":this.english(e)?"english":this.specialCharacter(e)?"specialCharacter":this.number(e)?"number":this.chinese_simplified(e)?"chinese_simplified":this.japanese(e)?"japanese":this.korean(e)?"korean":(console.log("not find is language , char : "+e+", unicode: "+e.charCodeAt(0).toString(16)),"")},analyse:function(e,t,a,n,r){void 0===t[e]&&(t[e]=new Array);var l=0;void 0===a.storage_language||(translate.language.connector(r)&&(e=a.storage_language),l=a.storage_language==e?t[e].length-1:t[e].length),void 0===t[e][l]&&(t[e][l]=new Array,t[e][l].beforeText="",t[e][l].afterText="",t[e][l].text=""),t[e][l].text=t[e][l].text+r,0==translate.language.wordBlankConnector(translate.language.getLocal())&&translate.language.wordBlankConnector(translate.to)&&null!=a.storage_language&&void 0!==a.storage_language&&a.storage_language.length>0&&"specialCharacter"!=a.storage_language&&(0==translate.language.wordBlankConnector(a.storage_language)&&translate.language.wordBlankConnector(e)?t[a.storage_language][t[a.storage_language].length-1].afterText=" ":"english"==a.storage_language&&"english"!=e&&(t[e][l].beforeText=" "));var s=new Array;return s.langStrs=t,s.storage_language=e,s},connector:function(e){return!!/.*[\u0020\u00A0\u202F\u205F\u3000]+.*$/.test(e)||(!!/.*[\u0030-\u0039]+.*$/.test(e)||(!!/.*[\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u002C\u002D\u002E\u003A\u003B\u003F\u0040]+.*$/.test(e)||!!/.*[\u3002\uFF1F\uFF01\uFF0C\u3001\uFF1B\uFF1A\u300C\u300D\u300E\u300F\u2018\u2019\u201C\u201D\uFF08\uFF09\u3014\u3015\u3010\u3011\u2014\u2026\u2013\uFF0E\u300A\u300B\u3008\u3009\u00b7]+.*$/.test(e)))},wordBlankConnector:function(e){if(null==e||void 0===e)return!0;switch(e.trim().toLowerCase()){case"chinese_simplified":case"chinese_traditional":case"korean":case"japanese":return!1}return!0},chinese_simplified:function(e){return!!/.*[\u4e00-\u9fa5]+.*$/.test(e)},english:function(e){return!!/.*[\u0041-\u005a]+.*$/.test(e)||!!/.*[\u0061-\u007a]+.*$/.test(e)},japanese:function(e){return!!/.*[\u0800-\u4e00]+.*$/.test(e)},korean:function(e){return!!/.*[\uAC00-\uD7AF]+.*$/.test(e)},number:function(e){return!!/.*[\u0030-\u0039]+.*$/.test(e)},specialCharacter:function(e){return!!/.*[\u2460-\u24E9]+.*$/.test(e)||(!!/.*[\u2500-\u25FF]+.*$/.test(e)||(!!/.*[\u3200-\u33FF]+.*$/.test(e)||(!!/.*[\uFF00-\uFF5E]+.*$/.test(e)||(!!/.*[\u2000-\u22FF]+.*$/.test(e)||(!!/.*[\u3001-\u3036]+.*$/.test(e)||(!!/.*[\u0020-\u002F]+.*$/.test(e)||(!!/.*[\u003A-\u007E]+.*$/.test(e)||(!!/.*[\u0009\u000a\u0020\u00A0\u1680\u180E\u202F\u205F\u3000\uFEFF]+.*$/.test(e)||(!!/.*[\u2000-\u200B]+.*$/.test(e)||(!!/.*[\u00A1-\u0105]+.*$/.test(e)||!!/.*[\u2C60-\u2C77]+.*$/.test(e)))))))))))}},executeByLocalLanguage:function(){translate.request.post(translate.request.api.ip,{},function(e){0==e.result?(console.log("==== ERROR 鑾峰彇褰撳墠鐢ㄦ埛鎵€鍦ㄥ尯鍩熷紓甯� ===="),console.log(e.info),console.log("==== ERROR END ====")):(translate.setUseVersion2(),translate.storage.set("to",e.language),translate.to=e.language,translate.selectLanguageTag,translate.execute())})},util:{uuid:function(){var e=(new Date).getTime();return window.performance&&"function"==typeof window.performance.now&&(e+=performance.now()),"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var a=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?a:3&a|8).toString(16)})},findTag:function(e){return/<[^>]+>/g.test(e)},arrayFindMaxNumber:function(e){for(var t={},a=[],n=0,r=0,l=e.length;r<l;r++)t[e[r]]?t[e[r]]++:t[e[r]]=1,t[e[r]]>n&&(n=t[e[r]]);for(var s in t)t[s]===n&&a.push(s);return a},hash:function(e){if(null==e||void 0===e)return e;var t,a=0;if(0===e.length)return a;for(t=0;t<e.length;t++)a=(a<<5)-a+e.charCodeAt(t),a|=0;return a+""},charReplace:function(e){return null==e?"":e=(e=e.trim()).replace(/\t|\n|\v|\r|\f/g,"")},regExp:{pattern:function(e){return e=(e=(e=(e=(e=e.replace(/\"/g,'\\"')).replace(/\?/g,"\\?")).replace(/\$/g,"\\$")).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")},resultText:function(e){return e}},getUrlParam:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),a=window.location.search.substr(1).match(t);return null!=a?unescape(a[2]):""},synchronizesLoadJs:function(e){var t=null;if(window.ActiveXObject)try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){t=new ActiveXObject("Microsoft.XMLHTTP")}else window.XMLHttpRequest&&(t=new XMLHttpRequest);if(t.open("GET",e,!1),t.send(null),4==t.readyState){if(t.status>=200&&t.status<300||0==t.status||304==t.status){var a=document.getElementsByTagName("HTML")[0],n=document.createElement("script");n.language="javascript",n.type="text/javascript";try{n.appendChild(document.createTextNode(t.responseText))}catch(e){n.text=t.responseText}return a.appendChild(n),!0}return!1}return!1},loadMsgJs:function(){"undefined"==typeof msg&&translate.util.synchronizesLoadJs("http://res.zvo.cn/msg/msg.js")},objSort:function(e){var t=Array.from(Object.keys(e));t.sort(function(e,t){return t.length-e.length});var a=new Array;for(var n of t)a[n]=e[n];return a}},request:{api:{host:["https://api.translate.zvo.cn/","https://api2.translate.zvo.cn/","https://apihwcdn.translate.zvo.cn/","https://apiqiniucdn.translate.zvo.cn/"],language:"language.json",translate:"translate.json",ip:"ip.json",connectTest:"connectTest.json"},speedDetectionControl:{hostQueue:[],hostQueueIndex:-1,getHostQueue:function(){if(0==translate.request.speedDetectionControl.hostQueue.length){var e=translate.storage.get("speedDetectionControl_hostQueue");if(null==e||void 0===e){"string"==typeof translate.request.api.host&&(translate.request.api.host=[""+translate.request.api.host]),translate.request.speedDetectionControl.hostQueue=[];for(var t=0;t<translate.request.api.host.length;t++){var a=translate.request.api.host[t];translate.request.speedDetectionControl.hostQueue[t]={host:a,time:0}}}else translate.request.speedDetectionControl.hostQueue=JSON.parse(e);var n=translate.storage.get("speedDetectionControl_lasttime");null!=n&&void 0!==n||(n=0);(new Date).getTime()-n>6e4&&translate.request.speedDetectionControl.checkResponseSpeed()}return translate.request.speedDetectionControl.hostQueue},checkResponseSpeed:function(){var e={"content-type":"application/x-www-form-urlencoded"};translate.request.speedDetectionControl.checkHostQueue=[],translate.request.speedDetectionControl.checkHostQueueMap=[],"string"==typeof translate.request.api.host&&(translate.request.api.host=[""+translate.request.api.host]);for(var t=0;t<translate.request.api.host.length;t++){var a=translate.request.api.host[t];translate.request.speedDetectionControl.checkHostQueueMap[a]={start:(new Date).getTime()};try{translate.request.send(a+translate.request.api.connectTest,{host:a},function(e){var t=e.info,a=translate.request.speedDetectionControl.checkHostQueueMap[t],n=(new Date).getTime()-a.start;translate.request.speedDetectionControl.checkHostQueue.push({host:t,time:n}),translate.request.speedDetectionControl.checkHostQueue.sort((e,t)=>e.time-t.time),translate.storage.set("speedDetectionControl_hostQueue",JSON.stringify(translate.request.speedDetectionControl.checkHostQueue)),translate.storage.set("speedDetectionControl_lasttime",(new Date).getTime()),translate.request.speedDetectionControl.hostQueue=translate.request.speedDetectionControl.checkHostQueue},"post",!0,e,function(e){},!1)}catch(e){}}},getHostQueueIndex:function(){if(translate.request.speedDetectionControl.hostQueueIndex<0){var e=translate.storage.get("speedDetectionControl_hostQueueIndex");void 0===e||null==e?(translate.request.speedDetectionControl.hostQueueIndex=0,translate.storage.set("speedDetectionControl_hostQueueIndex",0)):translate.request.speedDetectionControl.hostQueueIndex=e}return translate.request.speedDetectionControl.hostQueueIndex},getHost:function(){var e=translate.request.speedDetectionControl.getHostQueue(),t=translate.request.speedDetectionControl.getHostQueueIndex();return e.length>t||(console.log(),t=e.length-1),e[t].host}},getUrl:function(e){return translate.request.speedDetectionControl.getHost()+e+"?v="+translate.version},post:function(e,t,a){this.send(e,t,a,"post",!0,{"content-type":"application/x-www-form-urlencoded"},null,!0)},send:function(e,t,a,n,r,l,s,o){var u="";if(null!=t)for(var i in t)u.length>0&&(u+="&"),u=u+i+"="+t[i];0==e.indexOf("https://")||0==e.indexOf("http://")||(e=translate.request.getUrl(e));var g=null;try{g=new XMLHttpRequest}catch(e){g=new ActiveXObject("Microsoft.XMLHTTP")}if(g.open(n,e,r),null!=l)for(var i in l)g.setRequestHeader(i,l[i]);g.send(u),g.onreadystatechange=function(){if(4==g.readyState)if(200==g.status){var r=null;try{r=JSON.parse(g.responseText)}catch(e){console.log(e)}a(null==r?g.responseText:r)}else o&&(console.log("------- translate.js service api response error --------"),console.log("    http code : "+g.status),console.log("    response : "+g.response),console.log("    request url : "+e),console.log("    request data : "+JSON.stringify(t)),console.log("    request method : "+n),console.log("---------------------- end ----------------------")),null!=s&&s(g)}},translateText:function(e,t){"string"==typeof e&&(e=[e]);var a=translate.request.api.translate,n={from:translate.language.getLocal(),to:translate.language.getCurrent(),text:encodeURIComponent(JSON.stringify(e))};translate.request.post(a,n,function(a){0==a.result&&(console.log("=======ERROR START======="),console.log("from : "+a.from),console.log("to : "+a.to),console.log("translate text array : "+e),console.log("response : "+a.info),console.log("=======ERROR END  =======")),t(a)})}},storage:{set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}},images:{queues:[],add:function(e){for(var t in e)translate.images.queues[t]=e[t]},execute:function(){if(!(Object.keys(translate.images.queues).length<1)){for(var e=document.getElementsByTagName("img"),t=0;t<e.length;t++){var a=e[t];if(void 0!==a.src&&null!=a.src&&0!=a.src.length)for(var n in translate.images.queues){var r=n,l=translate.images.queues[n];r==a.src&&(l=l.replace(new RegExp("{language}","g"),translate.to),a.src=l)}}var s=document.getElementsByTagName("*");for(t=0;t<s.length;t++){var o=s[t],u=window.getComputedStyle(o,null).backgroundImage;if("none"!=u){var i=translate.images.gainCssBackgroundUrl(u);if(void 0!==translate.images.queues[i])l=(l=translate.images.queues[i]).replace(new RegExp("{language}","g"),translate.to),o.style.backgroundImage='url("'+l+'")'}}}},gainCssBackgroundUrl:function(e){var t=e.indexOf('"'),a=e.lastIndexOf('"');return-1!=t&&-1!=a?e.substring(t+1,a):e}},reset:function(){var e=translate.language.getCurrent();for(var t in translate.nodeQueue)for(var a in translate.nodeQueue[t].list)for(var n in translate.nodeQueue[t].list[a]){var r=translate.nodeQueue[t].list[a][n];for(var l in r.nodes){var s=translate.storage.get("hash_"+e+"_"+n);void 0!==s&&(null!=s&&0!=s.length&&translate.element.nodeAnalyse.analyse(r.nodes[l].node,s,r.original,r.nodes[l].node.attribute))}}translate.storage.set("to",""),translate.to=null,translate.selectLanguageTag.render()},selectionTranslate:{selectionX:0,selectionY:0,callTranslate:function(e){let t=window.getSelection();if(t.anchorOffset==t.focusOffset)return;let a=window.getSelection().toString();var n=translate.request.api.translate,r={from:translate.language.getLocal(),to:translate.to,text:encodeURIComponent(JSON.stringify([a]))};translate.request.post(n,r,function(e){if(0==e.result)return;let t=document.querySelector("#translateTooltip");t.innerText=e.text[0],t.style.top=selectionY+20+"px",t.style.left=selectionX+50+"px",t.style.display=""})},start:function(){let e=document.createElement("span");e.innerText="",e.setAttribute("id","translateTooltip"),e.setAttribute("style","background-color:black;color:#fff;text-align:center;border-radius:6px;padding:5px;position:absolute;z-index:999;top:150%;left:50%; "),document.body.appendChild(e),document.addEventListener("mousedown",e=>{selectionX=e.pageX,selectionY=e.pageY},!1),document.addEventListener("mouseup",translate.selectionTranslate.callTranslate,!1),document.addEventListener("click",e=>{document.querySelector("#translateTooltip").style.display="none"},!1)}}},nodeuuid={index:function(e){var t,a=e.parentNode;if(null==a)return"";t=void 0===e.tagName?a.childNodes:a.querySelectorAll(e.tagName);var n=Array.prototype.indexOf.call(t,e);return e.nodeName+""+(n+1)},uuid:function(e){for(var t="",a=e;null!=a;){var n=nodeuuid.index(a);""!=n&&(""!=t&&(t="_"+t),t=n+t),a=a.parentNode}return t}};console.log("------ translate.js ------\nTwo lines of js html automatic translation, page without change, no language configuration file, no API Key, SEO friendly! Open warehouse : https://github.com/xnx3/translate \n涓よjs瀹炵幇html鍏ㄨ嚜鍔ㄧ炕璇戙€� 鏃犻渶鏀瑰姩椤甸潰銆佹棤璇█閰嶇疆鏂囦欢銆佹棤API Key銆佸SEO鍙嬪ソ锛佸畬鍏ㄥ紑婧愶紝浠ｇ爜浠撳簱锛歨ttps://gitee.com/mail_osc/translate");try{translate.init()}catch(e){console.log(e)}