!function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}({0:function(t,e,r){var n=r(38);!function(t){"use strict";t.config("https://caa5edd9fc344ff69a3e0bd4c05a5a91@sentry.eff.org/20").install()}(n),function(){function t(){document.body.classList.toggle("active")}[].forEach.call(document.querySelectorAll(".js-only"),function(t){console.log("setting visibility"),t.style.visibility="visible"}),[].forEach.call(document.querySelectorAll(".no-js-only"),function(t){t.style.visibility="hidden"});var e=document.getElementById("hamburger"),r=document.getElementById("close");e.addEventListener("click",t,!1),r.addEventListener("click",t,!1)}()},38:function(t,e,r){(function(e){var n=r(39),a="undefined"!=typeof window?window:"undefined"!=typeof e?e:"undefined"!=typeof self?self:{},o=a.Raven,i=new n;i.noConflict=function(){return a.Raven=o,i},i.afterLoad(),t.exports=i}).call(e,function(){return this}())},39:function(t,e,r){(function(e){function n(){return+new Date}function a(t,e){return d(e)?function(r){return e(r,t)}:e}function o(){this._hasJSON=!("object"!=typeof JSON||!JSON.stringify),this._hasDocument=!p(L),this._hasNavigator=!p(N),this._lastCapturedException=null,this._lastData=null,this._lastEventId=null,this._globalServer=null,this._globalKey=null,this._globalProject=null,this._globalContext={},this._globalOptions={release:U.SENTRY_RELEASE&&U.SENTRY_RELEASE.id,logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],headers:null,collectWindowErrors:!0,maxMessageLength:0,maxUrlLength:250,stackTraceLimit:50,autoBreadcrumbs:!0,instrument:!0,sampleRate:1},this._fetchDefaults={method:"POST",keepalive:!0,referrerPolicy:"origin"},this._ignoreOnError=0,this._isRavenInstalled=!1,this._originalErrorStackTraceLimit=Error.stackTraceLimit,this._originalConsole=U.console||{},this._originalConsoleMethods={},this._plugins=[],this._startTime=n(),this._wrappedBuiltIns=[],this._breadcrumbs=[],this._lastCapturedEvent=null,this._keypressTimeout,this._location=U.location,this._lastHref=this._location&&this._location.href,this._resetBackoff();for(var t in this._originalConsole)this._originalConsoleMethods[t]=this._originalConsole[t]}var i=r(40),s=r(42),l=r(43),c=r(41),u=c.isError,h=c.isObject,f=c.isErrorEvent,p=c.isUndefined,d=c.isFunction,g=c.isString,_=c.isArray,v=c.isEmptyObject,m=c.each,b=c.objectMerge,y=c.truncate,E=c.objectFrozen,x=c.hasKey,k=c.joinRegExp,S=c.urlencode,w=c.uuid4,O=c.htmlTreeAsString,C=c.isSameException,R=c.isSameStacktrace,T=c.parseUrl,j=c.fill,F=c.supportsFetch,D=r(44).wrapMethod,I="source protocol user pass host port path".split(" "),B=/^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,U="undefined"!=typeof window?window:"undefined"!=typeof e?e:"undefined"!=typeof self?self:{},L=U.document,N=U.navigator;o.prototype={VERSION:"3.22.3",debug:!1,TraceKit:i,config:function(t,e){var r=this;if(r._globalServer)return this._logDebug("error","Error: Raven has already been configured"),r;if(!t)return r;var n=r._globalOptions;e&&m(e,function(t,e){"tags"===t||"extra"===t||"user"===t?r._globalContext[t]=e:n[t]=e}),r.setDSN(t),n.ignoreErrors.push(/^Script error\.?$/),n.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),n.ignoreErrors=k(n.ignoreErrors),n.ignoreUrls=!!n.ignoreUrls.length&&k(n.ignoreUrls),n.whitelistUrls=!!n.whitelistUrls.length&&k(n.whitelistUrls),n.includePaths=k(n.includePaths),n.maxBreadcrumbs=Math.max(0,Math.min(n.maxBreadcrumbs||100,100));var a={xhr:!0,console:!0,dom:!0,location:!0,sentry:!0},o=n.autoBreadcrumbs;"[object Object]"==={}.toString.call(o)?o=b(a,o):o!==!1&&(o=a),n.autoBreadcrumbs=o;var s={tryCatch:!0},l=n.instrument;return"[object Object]"==={}.toString.call(l)?l=b(s,l):l!==!1&&(l=s),n.instrument=l,i.collectWindowErrors=!!n.collectWindowErrors,r},install:function(){var t=this;return t.isSetup()&&!t._isRavenInstalled&&(i.report.subscribe(function(){t._handleOnErrorStackInfo.apply(t,arguments)}),t._patchFunctionToString(),t._globalOptions.instrument&&t._globalOptions.instrument.tryCatch&&t._instrumentTryCatch(),t._globalOptions.autoBreadcrumbs&&t._instrumentBreadcrumbs(),t._drainPlugins(),t._isRavenInstalled=!0),Error.stackTraceLimit=t._globalOptions.stackTraceLimit,this},setDSN:function(t){var e=this,r=e._parseDSN(t),n=r.path.lastIndexOf("/"),a=r.path.substr(1,n);e._dsn=t,e._globalKey=r.user,e._globalSecret=r.pass&&r.pass.substr(1),e._globalProject=r.path.substr(n+1),e._globalServer=e._getGlobalServer(r),e._globalEndpoint=e._globalServer+"/"+a+"api/"+e._globalProject+"/store/",this._resetBackoff()},context:function(t,e,r){return d(t)&&(r=e||[],e=t,t=void 0),this.wrap(t,e).apply(this,r)},wrap:function(t,e,r){function n(){var n=[],o=arguments.length,i=!t||t&&t.deep!==!1;for(r&&d(r)&&r.apply(this,arguments);o--;)n[o]=i?a.wrap(t,arguments[o]):arguments[o];try{return e.apply(this,n)}catch(e){throw a._ignoreNextOnError(),a.captureException(e,t),e}}var a=this;if(p(e)&&!d(t))return t;if(d(t)&&(e=t,t=void 0),!d(e))return e;try{if(e.__raven__)return e;if(e.__raven_wrapper__)return e.__raven_wrapper__}catch(t){return e}for(var o in e)x(e,o)&&(n[o]=e[o]);return n.prototype=e.prototype,e.__raven_wrapper__=n,n.__raven__=!0,n.__orig__=e,n},uninstall:function(){return i.report.uninstall(),this._unpatchFunctionToString(),this._restoreBuiltIns(),this._restoreConsole(),Error.stackTraceLimit=this._originalErrorStackTraceLimit,this._isRavenInstalled=!1,this},captureException:function(t,e){e=b({trimHeadFrames:0},e?e:{});var r=!u(t),n=!f(t),a=f(t)&&!t.error;if(r&&n||a)return this.captureMessage(t,b(e,{stacktrace:!0,trimHeadFrames:e.trimHeadFrames+1}));f(t)&&(t=t.error),this._lastCapturedException=t;try{var o=i.computeStackTrace(t);this._handleStackInfo(o,e)}catch(e){if(t!==e)throw e}return this},captureMessage:function(t,e){if(!this._globalOptions.ignoreErrors.test||!this._globalOptions.ignoreErrors.test(t)){e=e||{};var r,n=b({message:t+""},e);try{throw new Error(t)}catch(t){r=t}r.name=null;var a=i.computeStackTrace(r),o=_(a.stack)&&a.stack[1],s=o&&o.url||"";if((!this._globalOptions.ignoreUrls.test||!this._globalOptions.ignoreUrls.test(s))&&(!this._globalOptions.whitelistUrls.test||this._globalOptions.whitelistUrls.test(s))){if(this._globalOptions.stacktrace||e&&e.stacktrace){e=b({fingerprint:t,trimHeadFrames:(e.trimHeadFrames||0)+1},e);var l=this._prepareFrames(a,e);n.stacktrace={frames:l.reverse()}}return this._send(n),this}}},captureBreadcrumb:function(t){var e=b({timestamp:n()/1e3},t);if(d(this._globalOptions.breadcrumbCallback)){var r=this._globalOptions.breadcrumbCallback(e);if(h(r)&&!v(r))e=r;else if(r===!1)return this}return this._breadcrumbs.push(e),this._breadcrumbs.length>this._globalOptions.maxBreadcrumbs&&this._breadcrumbs.shift(),this},addPlugin:function(t){var e=[].slice.call(arguments,1);return this._plugins.push([t,e]),this._isRavenInstalled&&this._drainPlugins(),this},setUserContext:function(t){return this._globalContext.user=t,this},setExtraContext:function(t){return this._mergeContext("extra",t),this},setTagsContext:function(t){return this._mergeContext("tags",t),this},clearContext:function(){return this._globalContext={},this},getContext:function(){return JSON.parse(s(this._globalContext))},setEnvironment:function(t){return this._globalOptions.environment=t,this},setRelease:function(t){return this._globalOptions.release=t,this},setDataCallback:function(t){var e=this._globalOptions.dataCallback;return this._globalOptions.dataCallback=a(e,t),this},setBreadcrumbCallback:function(t){var e=this._globalOptions.breadcrumbCallback;return this._globalOptions.breadcrumbCallback=a(e,t),this},setShouldSendCallback:function(t){var e=this._globalOptions.shouldSendCallback;return this._globalOptions.shouldSendCallback=a(e,t),this},setTransport:function(t){return this._globalOptions.transport=t,this},lastException:function(){return this._lastCapturedException},lastEventId:function(){return this._lastEventId},isSetup:function(){return!!this._hasJSON&&(!!this._globalServer||(this.ravenNotConfiguredError||(this.ravenNotConfiguredError=!0,this._logDebug("error","Error: Raven has not been configured.")),!1))},afterLoad:function(){var t=U.RavenConfig;t&&this.config(t.dsn,t.config).install()},showReportDialog:function(t){if(L){t=t||{};var e=t.eventId||this.lastEventId();if(!e)throw new l("Missing eventId");var r=t.dsn||this._dsn;if(!r)throw new l("Missing DSN");var n=encodeURIComponent,a="";a+="?eventId="+n(e),a+="&dsn="+n(r);var o=t.user||this._globalContext.user;o&&(o.name&&(a+="&name="+n(o.name)),o.email&&(a+="&email="+n(o.email)));var i=this._getGlobalServer(this._parseDSN(r)),s=L.createElement("script");s.async=!0,s.src=i+"/api/embed/error-page/"+a,(L.head||L.body).appendChild(s)}},_ignoreNextOnError:function(){var t=this;this._ignoreOnError+=1,setTimeout(function(){t._ignoreOnError-=1})},_triggerEvent:function(t,e){var r,n;if(this._hasDocument){e=e||{},t="raven"+t.substr(0,1).toUpperCase()+t.substr(1),L.createEvent?(r=L.createEvent("HTMLEvents"),r.initEvent(t,!0,!0)):(r=L.createEventObject(),r.eventType=t);for(n in e)x(e,n)&&(r[n]=e[n]);if(L.createEvent)L.dispatchEvent(r);else try{L.fireEvent("on"+r.eventType.toLowerCase(),r)}catch(t){}}},_breadcrumbEventHandler:function(t){var e=this;return function(r){if(e._keypressTimeout=null,e._lastCapturedEvent!==r){e._lastCapturedEvent=r;var n;try{n=O(r.target)}catch(t){n="<unknown>"}e.captureBreadcrumb({category:"ui."+t,message:n})}}},_keypressEventHandler:function(){var t=this,e=1e3;return function(r){var n;try{n=r.target}catch(t){return}var a=n&&n.tagName;if(a&&("INPUT"===a||"TEXTAREA"===a||n.isContentEditable)){var o=t._keypressTimeout;o||t._breadcrumbEventHandler("input")(r),clearTimeout(o),t._keypressTimeout=setTimeout(function(){t._keypressTimeout=null},e)}}},_captureUrlChange:function(t,e){var r=T(this._location.href),n=T(e),a=T(t);this._lastHref=e,r.protocol===n.protocol&&r.host===n.host&&(e=n.relative),r.protocol===a.protocol&&r.host===a.host&&(t=a.relative),this.captureBreadcrumb({category:"navigation",data:{to:e,from:t}})},_patchFunctionToString:function(){var t=this;t._originalFunctionToString=Function.prototype.toString,Function.prototype.toString=function(){return"function"==typeof this&&this.__raven__?t._originalFunctionToString.apply(this.__orig__,arguments):t._originalFunctionToString.apply(this,arguments)}},_unpatchFunctionToString:function(){this._originalFunctionToString&&(Function.prototype.toString=this._originalFunctionToString)},_instrumentTryCatch:function(){function t(t){return function(e,n){for(var a=new Array(arguments.length),o=0;o<a.length;++o)a[o]=arguments[o];var i=a[0];return d(i)&&(a[0]=r.wrap(i)),t.apply?t.apply(this,a):t(a[0],a[1])}}function e(t){var e=U[t]&&U[t].prototype;e&&e.hasOwnProperty&&e.hasOwnProperty("addEventListener")&&(j(e,"addEventListener",function(e){return function(n,o,i,s){try{o&&o.handleEvent&&(o.handleEvent=r.wrap(o.handleEvent))}catch(t){}var l,c,u;return a&&a.dom&&("EventTarget"===t||"Node"===t)&&(c=r._breadcrumbEventHandler("click"),u=r._keypressEventHandler(),l=function(t){if(t){var e;try{e=t.type}catch(t){return}return"click"===e?c(t):"keypress"===e?u(t):void 0}}),e.call(this,n,r.wrap(o,void 0,l),i,s)}},n),j(e,"removeEventListener",function(t){return function(e,r,n,a){try{r=r&&(r.__raven_wrapper__?r.__raven_wrapper__:r)}catch(t){}return t.call(this,e,r,n,a)}},n))}var r=this,n=r._wrappedBuiltIns,a=this._globalOptions.autoBreadcrumbs;j(U,"setTimeout",t,n),j(U,"setInterval",t,n),U.requestAnimationFrame&&j(U,"requestAnimationFrame",function(t){return function(e){return t(r.wrap(e))}},n);for(var o=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],i=0;i<o.length;i++)e(o[i])},_instrumentBreadcrumbs:function(){function t(t,r){t in r&&d(r[t])&&j(r,t,function(t){return e.wrap(t)})}var e=this,r=this._globalOptions.autoBreadcrumbs,n=e._wrappedBuiltIns;if(r.xhr&&"XMLHttpRequest"in U){var a=XMLHttpRequest.prototype;j(a,"open",function(t){return function(r,n){return g(n)&&n.indexOf(e._globalKey)===-1&&(this.__raven_xhr={method:r,url:n,status_code:null}),t.apply(this,arguments)}},n),j(a,"send",function(r){return function(){function n(){if(a.__raven_xhr&&4===a.readyState){try{a.__raven_xhr.status_code=a.status}catch(t){}e.captureBreadcrumb({type:"http",category:"xhr",data:a.__raven_xhr})}}for(var a=this,o=["onload","onerror","onprogress"],i=0;i<o.length;i++)t(o[i],a);return"onreadystatechange"in a&&d(a.onreadystatechange)?j(a,"onreadystatechange",function(t){return e.wrap(t,void 0,n)}):a.onreadystatechange=n,r.apply(this,arguments)}},n)}r.xhr&&F()&&j(U,"fetch",function(t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;++n)r[n]=arguments[n];var a,o=r[0],i="GET";if("string"==typeof o?a=o:"Request"in U&&o instanceof U.Request?(a=o.url,o.method&&(i=o.method)):a=""+o,a.indexOf(e._globalKey)!==-1)return t.apply(this,r);r[1]&&r[1].method&&(i=r[1].method);var s={method:i,url:a,status_code:null};return t.apply(this,r).then(function(t){return s.status_code=t.status,e.captureBreadcrumb({type:"http",category:"fetch",data:s}),t})}},n),r.dom&&this._hasDocument&&(L.addEventListener?(L.addEventListener("click",e._breadcrumbEventHandler("click"),!1),L.addEventListener("keypress",e._keypressEventHandler(),!1)):(L.attachEvent("onclick",e._breadcrumbEventHandler("click")),L.attachEvent("onkeypress",e._keypressEventHandler())));var o=U.chrome,i=o&&o.app&&o.app.runtime,s=!i&&U.history&&history.pushState&&history.replaceState;if(r.location&&s){var l=U.onpopstate;U.onpopstate=function(){var t=e._location.href;if(e._captureUrlChange(e._lastHref,t),l)return l.apply(this,arguments)};var c=function(t){return function(){var r=arguments.length>2?arguments[2]:void 0;return r&&e._captureUrlChange(e._lastHref,r+""),t.apply(this,arguments)}};j(history,"pushState",c,n),j(history,"replaceState",c,n)}if(r.console&&"console"in U&&console.log){var u=function(t,r){e.captureBreadcrumb({message:t,level:r.level,category:"console"})};m(["debug","info","warn","error","log"],function(t,e){D(console,e,u)})}},_restoreBuiltIns:function(){for(var t;this._wrappedBuiltIns.length;){t=this._wrappedBuiltIns.shift();var e=t[0],r=t[1],n=t[2];e[r]=n}},_restoreConsole:function(){for(var t in this._originalConsoleMethods)this._originalConsole[t]=this._originalConsoleMethods[t]},_drainPlugins:function(){var t=this;m(this._plugins,function(e,r){var n=r[0],a=r[1];n.apply(t,[t].concat(a))})},_parseDSN:function(t){var e=B.exec(t),r={},n=7;try{for(;n--;)r[I[n]]=e[n]||""}catch(e){throw new l("Invalid DSN: "+t)}if(r.pass&&!this._globalOptions.allowSecretKey)throw new l("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");return r},_getGlobalServer:function(t){var e="//"+t.host+(t.port?":"+t.port:"");return t.protocol&&(e=t.protocol+":"+e),e},_handleOnErrorStackInfo:function(){this._ignoreOnError||this._handleStackInfo.apply(this,arguments)},_handleStackInfo:function(t,e){var r=this._prepareFrames(t,e);this._triggerEvent("handle",{stackInfo:t,options:e}),this._processException(t.name,t.message,t.url,t.lineno,r,e)},_prepareFrames:function(t,e){var r=this,n=[];if(t.stack&&t.stack.length&&(m(t.stack,function(e,a){var o=r._normalizeFrame(a,t.url);o&&n.push(o)}),e&&e.trimHeadFrames))for(var a=0;a<e.trimHeadFrames&&a<n.length;a++)n[a].in_app=!1;return n=n.slice(0,this._globalOptions.stackTraceLimit)},_normalizeFrame:function(t,e){var r={filename:t.url,lineno:t.line,colno:t.column,function:t.func||"?"};return t.url||(r.filename=e),r.in_app=!(this._globalOptions.includePaths.test&&!this._globalOptions.includePaths.test(r.filename)||/(Raven|TraceKit)\./.test(r.function)||/raven\.(min\.)?js$/.test(r.filename)),r},_processException:function(t,e,r,n,a,o){var i=(t?t+": ":"")+(e||"");if(!this._globalOptions.ignoreErrors.test||!this._globalOptions.ignoreErrors.test(e)&&!this._globalOptions.ignoreErrors.test(i)){var s;if(a&&a.length?(r=a[0].filename||r,a.reverse(),s={frames:a}):r&&(s={frames:[{filename:r,lineno:n,in_app:!0}]}),(!this._globalOptions.ignoreUrls.test||!this._globalOptions.ignoreUrls.test(r))&&(!this._globalOptions.whitelistUrls.test||this._globalOptions.whitelistUrls.test(r))){var l=b({exception:{values:[{type:t,value:e,stacktrace:s}]},culprit:r},o);this._send(l)}}},_trimPacket:function(t){var e=this._globalOptions.maxMessageLength;if(t.message&&(t.message=y(t.message,e)),t.exception){var r=t.exception.values[0];r.value=y(r.value,e)}var n=t.request;return n&&(n.url&&(n.url=y(n.url,this._globalOptions.maxUrlLength)),n.Referer&&(n.Referer=y(n.Referer,this._globalOptions.maxUrlLength))),t.breadcrumbs&&t.breadcrumbs.values&&this._trimBreadcrumbs(t.breadcrumbs),t},_trimBreadcrumbs:function(t){for(var e,r,n,a=["to","from","url"],o=0;o<t.values.length;++o)if(r=t.values[o],r.hasOwnProperty("data")&&h(r.data)&&!E(r.data)){n=b({},r.data);for(var i=0;i<a.length;++i)e=a[i],n.hasOwnProperty(e)&&n[e]&&(n[e]=y(n[e],this._globalOptions.maxUrlLength));t.values[o].data=n}},_getHttpData:function(){if(this._hasNavigator||this._hasDocument){var t={};return this._hasNavigator&&N.userAgent&&(t.headers={"User-Agent":navigator.userAgent}),U.location&&U.location.href&&(t.url=U.location.href),this._hasDocument&&L.referrer&&(t.headers||(t.headers={}),t.headers.Referer=L.referrer),t}},_resetBackoff:function(){this._backoffDuration=0,this._backoffStart=null},_shouldBackoff:function(){return this._backoffDuration&&n()-this._backoffStart<this._backoffDuration},_isRepeatData:function(t){var e=this._lastData;return!(!e||t.message!==e.message||t.culprit!==e.culprit)&&(t.stacktrace||e.stacktrace?R(t.stacktrace,e.stacktrace):!t.exception&&!e.exception||C(t.exception,e.exception))},_setBackoffState:function(t){if(!this._shouldBackoff()){var e=t.status;if(400===e||401===e||429===e){var r;try{r=F()?t.headers.get("Retry-After"):t.getResponseHeader("Retry-After"),r=1e3*parseInt(r,10)}catch(t){}this._backoffDuration=r?r:2*this._backoffDuration||1e3,this._backoffStart=n()}}},_send:function(t){var e=this._globalOptions,r={project:this._globalProject,logger:e.logger,platform:"javascript"},a=this._getHttpData();if(a&&(r.request=a),t.trimHeadFrames&&delete t.trimHeadFrames,t=b(r,t),t.tags=b(b({},this._globalContext.tags),t.tags),t.extra=b(b({},this._globalContext.extra),t.extra),t.extra["session:duration"]=n()-this._startTime,this._breadcrumbs&&this._breadcrumbs.length>0&&(t.breadcrumbs={values:[].slice.call(this._breadcrumbs,0)}),this._globalContext.user&&(t.user=this._globalContext.user),e.environment&&(t.environment=e.environment),e.release&&(t.release=e.release),e.serverName&&(t.server_name=e.serverName),Object.keys(t).forEach(function(e){(null==t[e]||""===t[e]||v(t[e]))&&delete t[e]}),d(e.dataCallback)&&(t=e.dataCallback(t)||t),t&&!v(t)&&(!d(e.shouldSendCallback)||e.shouldSendCallback(t)))return this._shouldBackoff()?void this._logDebug("warn","Raven dropped error due to backoff: ",t):void("number"==typeof e.sampleRate?Math.random()<e.sampleRate&&this._sendProcessedPayload(t):this._sendProcessedPayload(t))},_getUuid:function(){return w()},_sendProcessedPayload:function(t,e){var r=this,n=this._globalOptions;if(this.isSetup()){if(t=this._trimPacket(t),!this._globalOptions.allowDuplicates&&this._isRepeatData(t))return void this._logDebug("warn","Raven dropped repeat event: ",t);this._lastEventId=t.event_id||(t.event_id=this._getUuid()),this._lastData=t,this._logDebug("debug","Raven about to send:",t);var a={sentry_version:"7",sentry_client:"raven-js/"+this.VERSION,sentry_key:this._globalKey};this._globalSecret&&(a.sentry_secret=this._globalSecret);var o=t.exception&&t.exception.values[0];this._globalOptions.autoBreadcrumbs&&this._globalOptions.autoBreadcrumbs.sentry&&this.captureBreadcrumb({category:"sentry",message:o?(o.type?o.type+": ":"")+o.value:t.message,event_id:t.event_id,level:t.level||"error"});var i=this._globalEndpoint;(n.transport||this._makeRequest).call(this,{url:i,auth:a,data:t,options:n,onSuccess:function(){r._resetBackoff(),r._triggerEvent("success",{data:t,src:i}),e&&e()},onError:function(n){r._logDebug("error","Raven transport failed to send: ",n),n.request&&r._setBackoffState(n.request),r._triggerEvent("failure",{data:t,src:i}),n=n||new Error("Raven send failed (no additional details provided)"),e&&e(n)}})}},_makeRequest:function(t){var e=t.url+"?"+S(t.auth),r=null,n={};if(t.options.headers&&(r=this._evaluateHash(t.options.headers)),t.options.fetchParameters&&(n=this._evaluateHash(t.options.fetchParameters)),F()){n.body=s(t.data);var a=b({},this._fetchDefaults),o=b(a,n);return r&&(o.headers=r),U.fetch(e,o).then(function(e){if(e.ok)t.onSuccess&&t.onSuccess();else{var r=new Error("Sentry error code: "+e.status);r.request=e,t.onError&&t.onError(r)}}).catch(function(){t.onError&&t.onError(new Error("Sentry error code: network unavailable"))})}var i=U.XMLHttpRequest&&new U.XMLHttpRequest;if(i){var l="withCredentials"in i||"undefined"!=typeof XDomainRequest;l&&("withCredentials"in i?i.onreadystatechange=function(){if(4===i.readyState)if(200===i.status)t.onSuccess&&t.onSuccess();else if(t.onError){var e=new Error("Sentry error code: "+i.status);e.request=i,t.onError(e)}}:(i=new XDomainRequest,e=e.replace(/^https?:/,""),t.onSuccess&&(i.onload=t.onSuccess),t.onError&&(i.onerror=function(){var e=new Error("Sentry error code: XDomainRequest");e.request=i,t.onError(e)})),i.open("POST",e),r&&m(r,function(t,e){i.setRequestHeader(t,e)}),i.send(s(t.data)))}},_evaluateHash:function(t){var e={};for(var r in t)if(t.hasOwnProperty(r)){var n=t[r];e[r]="function"==typeof n?n():n}return e},_logDebug:function(t){this._originalConsoleMethods[t]&&this.debug&&Function.prototype.apply.call(this._originalConsoleMethods[t],this._originalConsole,[].slice.call(arguments,1))},_mergeContext:function(t,e){p(e)?delete this._globalContext[t]:this._globalContext[t]=b(this._globalContext[t]||{},e)}},o.prototype.setUser=o.prototype.setUserContext,o.prototype.setReleaseContext=o.prototype.setRelease,t.exports=o}).call(e,function(){return this}())},40:function(t,e,r){(function(e){function n(){return"undefined"==typeof document||null==document.location?"":document.location.href}var a=r(41),o={collectWindowErrors:!0,debug:!1},i="undefined"!=typeof window?window:"undefined"!=typeof e?e:"undefined"!=typeof self?self:{},s=[].slice,l="?",c=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;o.report=function(){function t(t){f(),m.push(t)}function e(t){for(var e=m.length-1;e>=0;--e)m[e]===t&&m.splice(e,1)}function r(){p(),m=[]}function u(t,e){var r=null;if(!e||o.collectWindowErrors){for(var n in m)if(m.hasOwnProperty(n))try{m[n].apply(null,[t].concat(s.call(arguments,2)))}catch(t){r=t}if(r)throw r}}function h(t,e,r,i,s){var h=null,f=a.isErrorEvent(s)?s.error:s,p=a.isErrorEvent(t)?t.message:t;if(E)o.computeStackTrace.augmentStackTraceWithInitialElement(E,e,r,p),d();else if(f&&a.isError(f))h=o.computeStackTrace(f),u(h,!0);else{var g,v={url:e,line:r,column:i},m=void 0;if("[object String]"==={}.toString.call(p)){var g=p.match(c);g&&(m=g[1],p=g[2])}v.func=l,h={name:m,message:p,url:n(),stack:[v]},u(h,!0)}return!!_&&_.apply(this,arguments)}function f(){v||(_=i.onerror,i.onerror=h,v=!0)}function p(){v&&(i.onerror=_,v=!1,_=void 0)}function d(){var t=E,e=b;b=null,E=null,y=null,u.apply(null,[t,!1].concat(e))}function g(t,e){var r=s.call(arguments,1);if(E){if(y===t)return;d()}var n=o.computeStackTrace(t);if(E=n,y=t,b=r,setTimeout(function(){y===t&&d()},n.incomplete?2e3:0),e!==!1)throw t}var _,v,m=[],b=null,y=null,E=null;return g.subscribe=t,g.unsubscribe=e,g.uninstall=r,g}(),o.computeStackTrace=function(){function t(t){if("undefined"!=typeof t.stack&&t.stack){for(var e,r,a,o=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,i=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,s=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,c=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,u=/\((\S*)(?::(\d+))(?::(\d+))\)/,h=t.stack.split("\n"),f=[],p=(/^(.*) is undefined$/.exec(t.message),0),d=h.length;p<d;++p){if(r=o.exec(h[p])){var g=r[2]&&0===r[2].indexOf("native"),_=r[2]&&0===r[2].indexOf("eval");_&&(e=u.exec(r[2]))&&(r[2]=e[1],r[3]=e[2],r[4]=e[3]),a={url:g?null:r[2],func:r[1]||l,args:g?[r[2]]:[],line:r[3]?+r[3]:null,column:r[4]?+r[4]:null}}else if(r=s.exec(h[p]))a={url:r[2],func:r[1]||l,args:[],line:+r[3],column:r[4]?+r[4]:null};else{if(!(r=i.exec(h[p])))continue;var _=r[3]&&r[3].indexOf(" > eval")>-1;_&&(e=c.exec(r[3]))?(r[3]=e[1],r[4]=e[2],r[5]=null):0!==p||r[5]||"undefined"==typeof t.columnNumber||(f[0].column=t.columnNumber+1),a={url:r[3],func:r[1]||l,args:r[2]?r[2].split(","):[],line:r[4]?+r[4]:null,column:r[5]?+r[5]:null}}!a.func&&a.line&&(a.func=l),f.push(a)}return f.length?{name:t.name,message:t.message,url:n(),stack:f}:null}}function e(t,e,r,n){var a={url:e,line:r};if(a.url&&a.line){if(t.incomplete=!1,a.func||(a.func=l),t.stack.length>0&&t.stack[0].url===a.url){if(t.stack[0].line===a.line)return!1;if(!t.stack[0].line&&t.stack[0].func===a.func)return t.stack[0].line=a.line,!1}return t.stack.unshift(a),t.partial=!0,!0}return t.incomplete=!0,!1}function r(t,i){for(var s,c,u=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,h=[],f={},p=!1,d=r.caller;d&&!p;d=d.caller)if(d!==a&&d!==o.report){if(c={url:null,func:l,line:null,column:null},d.name?c.func=d.name:(s=u.exec(d.toString()))&&(c.func=s[1]),"undefined"==typeof c.func)try{c.func=s.input.substring(0,s.input.indexOf("{"))}catch(t){}f[""+d]?p=!0:f[""+d]=!0,h.push(c)}i&&h.splice(0,i);var g={name:t.name,message:t.message,url:n(),stack:h};return e(g,t.sourceURL||t.fileName,t.line||t.lineNumber,t.message||t.description),g}function a(e,a){var i=null;a=null==a?0:+a;try{if(i=t(e))return i}catch(t){if(o.debug)throw t}try{if(i=r(e,a+1))return i}catch(t){if(o.debug)throw t}return{name:e.name,message:e.message,url:n()}}return a.augmentStackTraceWithInitialElement=e,a.computeStackTraceFromStackProp=t,a}(),t.exports=o}).call(e,function(){return this}())},41:function(t,e){(function(e){function r(t){return"object"==typeof t&&null!==t}function n(t){switch({}.toString.call(t)){case"[object Error]":return!0;case"[object Exception]":return!0;case"[object DOMException]":return!0;default:return t instanceof Error}}function a(t){return h()&&"[object ErrorEvent]"==={}.toString.call(t)}function o(t){return void 0===t}function i(t){return"function"==typeof t}function s(t){return"[object Object]"===Object.prototype.toString.call(t)}function l(t){return"[object String]"===Object.prototype.toString.call(t)}function c(t){return"[object Array]"===Object.prototype.toString.call(t)}function u(t){if(!s(t))return!1;for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function h(){try{return new ErrorEvent(""),!0}catch(t){return!1}}function f(){if(!("fetch"in F))return!1;try{return new Headers,new Request(""),new Response,!0}catch(t){return!1}}function p(t){function e(e,r){var n=t(e)||e;return r?r(n)||n:n}return e}function d(t,e){var r,n;if(o(t.length))for(r in t)m(t,r)&&e.call(null,r,t[r]);else if(n=t.length)for(r=0;r<n;r++)e.call(null,r,t[r])}function g(t,e){return e?(d(e,function(e,r){t[e]=r}),t):t}function _(t){return!!Object.isFrozen&&Object.isFrozen(t)}function v(t,e){return!e||t.length<=e?t:t.substr(0,e)+"…"}function m(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function b(t){for(var e,r=[],n=0,a=t.length;n<a;n++)e=t[n],l(e)?r.push(e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")):e&&e.source&&r.push(e.source);return new RegExp(r.join("|"),"i")}function y(t){var e=[];return d(t,function(t,r){e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}),e.join("&")}function E(t){if("string"!=typeof t)return{};var e=t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/),r=e[6]||"",n=e[8]||"";return{protocol:e[2],host:e[4],path:e[5],relative:e[5]+r+n}}function x(){var t=F.crypto||F.msCrypto;if(!o(t)&&t.getRandomValues){var e=new Uint16Array(8);t.getRandomValues(e),e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;var r=function(t){for(var e=t.toString(16);e.length<4;)e="0"+e;return e};return r(e[0])+r(e[1])+r(e[2])+r(e[3])+r(e[4])+r(e[5])+r(e[6])+r(e[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,r="x"===t?e:3&e|8;return r.toString(16)})}function k(t){for(var e,r=5,n=80,a=[],o=0,i=0,s=" > ",l=s.length;t&&o++<r&&(e=S(t),!("html"===e||o>1&&i+a.length*l+e.length>=n));)a.push(e),i+=e.length,t=t.parentNode;return a.reverse().join(s)}function S(t){var e,r,n,a,o,i=[];if(!t||!t.tagName)return"";if(i.push(t.tagName.toLowerCase()),t.id&&i.push("#"+t.id),e=t.className,e&&l(e))for(r=e.split(/\s+/),o=0;o<r.length;o++)i.push("."+r[o]);var s=["type","name","title","alt"];for(o=0;o<s.length;o++)n=s[o],a=t.getAttribute(n),a&&i.push("["+n+'="'+a+'"]');return i.join("")}function w(t,e){return!!(!!t^!!e)}function O(t,e){return o(t)&&o(e)}function C(t,e){return!w(t,e)&&(t=t.values[0],e=e.values[0],t.type===e.type&&t.value===e.value&&(!O(t.stacktrace,e.stacktrace)&&R(t.stacktrace,e.stacktrace)))}function R(t,e){if(w(t,e))return!1;var r=t.frames,n=e.frames;if(r.length!==n.length)return!1;for(var a,o,i=0;i<r.length;i++)if(a=r[i],o=n[i],a.filename!==o.filename||a.lineno!==o.lineno||a.colno!==o.colno||a.function!==o.function)return!1;return!0}function T(t,e,r,n){var a=t[e];t[e]=r(a),t[e].__raven__=!0,t[e].__orig__=a,n&&n.push([t,e,a])}function j(t,e){if(!c(t))return"";for(var r=[],n=0;n<t.length;n++)try{r.push(String(t[n]))}catch(t){r.push("[value cannot be serialized]")}return r.join(e)}var F="undefined"!=typeof window?window:"undefined"!=typeof e?e:"undefined"!=typeof self?self:{};t.exports={isObject:r,isError:n,isErrorEvent:a,isUndefined:o,isFunction:i,isPlainObject:s,isString:l,isArray:c,isEmptyObject:u,supportsErrorEvent:h,supportsFetch:f,wrappedCallback:p,each:d,objectMerge:g,truncate:v,objectFrozen:_,hasKey:m,joinRegExp:b,urlencode:y,uuid4:x,htmlTreeAsString:k,htmlElementAsString:S,isSameException:C,isSameStacktrace:R,parseUrl:E,fill:T,safeJoin:j}}).call(e,function(){return this}())},42:function(t,e){function r(t,e){for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}function n(t,e,r,n){return JSON.stringify(t,o(e,n),r)}function a(t){var e={stack:t.stack,message:t.message,name:t.name};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function o(t,e){var n=[],o=[];return null==e&&(e=function(t,e){return n[0]===e?"[Circular ~]":"[Circular ~."+o.slice(0,r(n,e)).join(".")+"]"}),function(i,s){if(n.length>0){var l=r(n,this);~l?n.splice(l+1):n.push(this),~l?o.splice(l,1/0,i):o.push(i),~r(n,s)&&(s=e.call(this,i,s))}else n.push(s);return null==t?s instanceof Error?a(s):s:t.call(this,i,s)}}e=t.exports=n,e.getSerialize=o},43:function(t,e){function r(t){this.name="RavenConfigError",this.message=t}r.prototype=new Error,r.prototype.constructor=r,t.exports=r},44:function(t,e,r){var n=r(41),a=function(t,e,r){var a=t[e],o=t;if(e in t){var i="warn"===e?"warning":e;t[e]=function(){var t=[].slice.call(arguments),s=n.safeJoin(t," "),l={level:i,logger:"console",extra:{arguments:t}};"assert"===e?t[0]===!1&&(s="Assertion failed: "+(n.safeJoin(t.slice(1)," ")||"console.assert"),l.extra.arguments=t.slice(1),r&&r(s,l)):r&&r(s,l),a&&Function.prototype.apply.call(a,o,t)}}};t.exports={wrapMethod:a}}});