/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});
;/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.1",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.1",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.1",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.1",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.1",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.1",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})
})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.1",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);;/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function($, undefined){

	var $window = $(window);

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		this.dates = new DateArray();
		this.viewDate = UTCToday();
		this.focusDate = null;

		this._process_options(options);

		this.element = $(element);
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if (this.component && this.component.length === 0)
			this.component = false;

		this.picker = $(DPGlobal.template);
		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('tfoot th.today')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			switch (o.startView){
				case 2:
				case 'decade':
					o.startView = 2;
					break;
				case 1:
				case 'year':
					o.startView = 1;
					break;
				default:
					o.startView = 0;
			}

			switch (o.minViewMode){
				case 1:
				case 'months':
					o.minViewMode = 1;
					break;
				case 2:
				case 'years':
					o.minViewMode = 2;
					break;
				default:
					o.minViewMode = 0;
			}

			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
				else
					o.multidate = 1;
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = ((o.weekStart + 6) % 7);

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return (/^auto|left|right|top|bottom$/).test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return (/^left|right$/).test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return (/^top|bottom$/).test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
			if (this.isInput){ // single input
				this._events = [
					[this.element, {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput){ // component: input + button
				this._events = [
					// For components that are not readonly, allow keyboard nav
					[this.element.find('input'), {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			else if (this.element.is('div')){  // inline datepicker
				this.isInline = true;
			}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (!this.isInline)
				this.picker.appendTo('body');
			this.picker.show();
			this.place();
			this._attachSecondaryEvents();
			this._trigger('show');
		},

		hide: function(){
			if (this.isInline)
				return;
			if (!this.picker.is(':visible'))
				return;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (
				this.o.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this._trigger('hide');
		},

		remove: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			return new Date(this.dates.get(-1));
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			if (!this.isInput){
				if (this.component){
					this.element.find('input').val(formatted).change();
				}
			}
			else {
				this.element.val(formatted).change();
			}
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				windowWidth = $window.width(),
				windowHeight = $window.height(),
				scrollTop = $window.scrollTop();

			var zIndex = 10000;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left,
				top = offset.top;

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				// Default to left
				this.picker.addClass('datepicker-orient-left');
				if (offset.left < 0)
					left -= offset.left - visualPadding;
				else if (offset.left + calendarWidth > windowWidth)
					left = windowWidth - calendarWidth - visualPadding;
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow, bottom_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + offset.top - calendarHeight;
				bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
				if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
					yorient = 'top';
				else
					yorient = 'bottom';
			}
			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top += height;
			else
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));

			this.picker.css({
				top: top,
				left: left,
				zIndex: zIndex
			});
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.element.find('input').val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					date < this.o.startDate ||
					date > this.o.endDate ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				var cell = '<th class="cw">&nbsp;</th>';
				html += cell;
				this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
			var html = '',
			i = 0;
			while (i < 12){
				html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
				$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1){
				cls.push('disabled');
			}
			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
			}
			return cls;
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				tooltip;
			this.picker.find('.datepicker-days thead th.datepicker-switch')
						.text(dates[this.o.language].months[month]+' '+year);
			this.picker.find('tfoot th.today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot th.clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');

					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			var years = $.map(this.dates, function(d){
					return d.getUTCFullYear();
				}),
				classes;
			for (var i = -1; i < 11; i++){
				classes = ['year'];
				if (i === -1)
					classes.push('old');
				else if (i === 10)
					classes.push('new');
				if ($.inArray(year, years) !== -1)
					classes.push('active');
				if (year < startYear || year > endYear)
					classes.push('disabled');
				html += '<span class="' + classes.join(' ') + '">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			var target = $(e.target).closest('span, td, th'),
				year, month, day;
			if (target.length === 1){
				switch (target[0].nodeName.toLowerCase()){
					case 'th':
						switch (target[0].className){
							case 'datepicker-switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
								switch (this.viewMode){
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										this._trigger('changeMonth', this.viewDate);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										if (this.viewMode === 1)
											this._trigger('changeYear', this.viewDate);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.o.todayBtn === 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
							case 'clear':
								var element;
								if (this.isInput)
									element = this.element;
								else if (this.component)
									element = this.element.find('input');
								if (element)
									element.val("").change();
								this.update();
								this._trigger('changeDate');
								if (this.o.autoclose)
									this.hide();
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')){
							this.viewDate.setUTCDate(1);
							if (target.is('.month')){
								day = 1;
								month = target.parent().find('span').index(target);
								year = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(month);
								this._trigger('changeMonth', this.viewDate);
								if (this.o.minViewMode === 1){
									this._setDate(UTCDate(year, month, day));
								}
							}
							else {
								day = 1;
								month = 0;
								year = parseInt(target.text(), 10)||0;
								this.viewDate.setUTCFullYear(year);
								this._trigger('changeYear', this.viewDate);
								if (this.o.minViewMode === 2){
									this._setDate(UTCDate(year, month, day));
								}
							}
							this.showMode(-1);
							this.fill();
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							day = parseInt(target.text(), 10)||1;
							year = this.viewDate.getUTCFullYear();
							month = this.viewDate.getUTCMonth();
							if (target.is('.old')){
								if (month === 0){
									month = 11;
									year -= 1;
								}
								else {
									month -= 1;
								}
							}
							else if (target.is('.new')){
								if (month === 11){
									month = 0;
									year += 1;
								}
								else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day));
						}
						break;
				}
			}
			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}
			else if (ix !== -1){
				this.dates.remove(ix);
			}
			else {
				this.dates.push(date);
			}
			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which  === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			this._trigger('changeDate');
			var element;
			if (this.isInput){
				element = this.element;
			}
			else if (this.component){
				element = this.element.find('input');
			}
			if (element){
				element.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveMonth: function(date, dir){
			if (!date)
				return undefined;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (this.picker.is(':not(:visible)')){
				if (e.keyCode === 27) // allow escape to hide and re-show picker
					this.show();
				return;
			}
			var dateChanged = false,
				dir, newDate, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					break;
				case 37: // left
				case 39: // right
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 37 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 38: // up
				case 40: // down
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 38 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 32: // spacebar
					// Spacebar is used in manually typing dates in some formats.
					// As such, its behavior should not be hijacked.
					break;
				case 13: // enter
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					this._toggle_multidate(focusDate);
					dateChanged = true;
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				var element;
				if (this.isInput){
					element = this.element;
				}
				else if (this.component){
					element = this.element.find('input');
				}
				if (element){
					element.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker
				.find('>div')
				.hide()
				.filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName)
					.css('display', 'block');
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		$(this.inputs)
			.datepicker(options)
			.bind('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker'),
				new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[i]){
				// Date being moved earlier/left
				while (i >= 0 && new_date < this.dates[i]){
					this.pickers[i--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[i]){
				// Date being moved later/right
				while (i < l && new_date > this.dates[i]){
					this.pickers[i++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	$.fn.datepicker = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.is('.input-daterange') || opts.inputs){
					var ropts = {
						inputs: opts.inputs || $this.find('input').toArray()
					};
					$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
				}
				else {
					$this.data('datepicker', (data = new Datepicker(this, opts)));
				}
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
				if (internal_return !== undefined)
					return false;
			}
		});
		if (internal_return !== undefined)
			return internal_return;
		else
			return this;
	};

	var defaults = $.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				part, dir, i;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch (part[2]){
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();
			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(2000+v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m === p;
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev">&laquo;</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">&raquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			$this.datepicker('show');
		}
	);
	$(function(){
		$('[data-provide="datepicker-inline"]').datepicker();
	});

}(window.jQuery));
;/**
 * bootstrap-multiselect.js
 * https://github.com/davidstutz/bootstrap-multiselect
 *
 * Copyright 2012 - 2014 David Stutz
 *
 * Dual licensed under the BSD-3-Clause and the Apache License, Version 2.0.
 */
!function($) {

    "use strict";// jshint ;_;
    
    if (Array.prototype.forEach === null || Array.prototype.forEach === undefined) {
        Array.prototype.forEach = function (func) {
            var index;
            for (index = 0; index < this.length; ++index) {
                func(this[index]);
            }
        };
    }

    if (typeof ko !== 'undefined' && ko.bindingHandlers && !ko.bindingHandlers.multiselect) {
        ko.bindingHandlers.multiselect = {

            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                var listOfSelectedItems = allBindingsAccessor().selectedOptions,
                    config = ko.utils.unwrapObservable(valueAccessor());

                $(element).multiselect(config);

                if (isObservableArray(listOfSelectedItems)) {
                    // Subscribe to the selectedOptions: ko.observableArray
                    listOfSelectedItems.subscribe(function (changes) {
                        var addedArray = [], deletedArray = [];
                        changes.forEach(function (change) {
                            switch (change.status) {
                                case 'added':
                                    addedArray.push(change.value);
                                    break;
                                case 'deleted':
                                    deletedArray.push(change.value);
                                    break;
                            }
                        });
                        if (addedArray.length > 0) {
                            $(element).multiselect('select', addedArray);
                        };
                        if (deletedArray.length > 0) {
                            $(element).multiselect('deselect', deletedArray);
                        };
                    }, null, "arrayChange");
                }
            },

            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                var listOfItems = allBindingsAccessor().options,
                    ms = $(element).data('multiselect'),
                    config = ko.utils.unwrapObservable(valueAccessor());

                if (isObservableArray(listOfItems)) {
                    // Subscribe to the options: ko.observableArray incase it changes later
                    listOfItems.subscribe(function (theArray) {
                        $(element).multiselect('rebuild');
                    });
                }

                if (!ms) {
                    $(element).multiselect(config);
                }
                else {
                    ms.updateOriginalOptions();
                }
            }
        };
    }

    function isObservableArray(obj) {
        return ko.isObservable(obj) && !(obj.destroyAll === undefined);
    }

    /**
     * Constructor to create a new multiselect using the given select.
     * 
     * @param {jQuery} select
     * @param {Object} options
     * @returns {Multiselect}
     */
    function Multiselect(select, options) {

        this.options = this.mergeOptions(options);
        this.$select = $(select);

        // Initialization.
        // We have to clone to create a new reference.
        this.originalOptions = this.$select.clone()[0].options;
        this.query = '';
        this.searchTimeout = null;

        this.options.multiple = this.$select.attr('multiple') === "multiple";
        this.options.onChange = $.proxy(this.options.onChange, this);
        this.options.onDropdownShow = $.proxy(this.options.onDropdownShow, this);
        this.options.onDropdownHide = $.proxy(this.options.onDropdownHide, this);

        // Build select all if enabled.
        this.buildContainer();
        this.buildButton();
        this.buildDropdown();
        this.buildSelectAll();
        this.buildDropdownOptions();
        this.buildFilter();
        
        this.updateButtonText();
        this.updateSelectAll();
        
        this.$select.hide().after(this.$container);
    };

    Multiselect.prototype = {

        defaults: {
            /**
             * Default text function will either print 'None selected' in case no
             * option is selected or a list of the selected options up to a length of 3 selected options.
             * 
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {String}
             */
            buttonText: function(options, select) {
                if (options.length === 0) {
                    return this.nonSelectedText + ' <b class="caret"></b>';
                }
                else {
                    if (options.length > this.numberDisplayed) {
                        return options.length + ' ' + this.nSelectedText + ' <b class="caret"></b>';
                    }
                    else {
                        var selected = '';
                        options.each(function() {
                            var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).html();

                            selected += label + ', ';
                        });
                        return selected.substr(0, selected.length - 2) + ' <b class="caret"></b>';
                    }
                }
            },
            /**
             * Updates the title of the button similar to the buttonText function.
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {@exp;selected@call;substr}
             */
            buttonTitle: function(options, select) {
                if (options.length === 0) {
                    return this.nonSelectedText;
                }
                else {
                    var selected = '';
                    options.each(function () {
                        selected += $(this).text() + ', ';
                    });
                    return selected.substr(0, selected.length - 2);
                }
            },
            /**
             * Create a label.
             * 
             * @param {jQuery} element
             * @returns {String}
             */
            label: function(element){
                return $(element).attr('label') || $(element).html();
            },
            /**
             * Triggered on change of the multiselect.
             * Not triggered when selecting/deselecting options manually.
             * 
             * @param {jQuery} option
             * @param {Boolean} checked
             */
            onChange : function(option, checked) {

            },
            /**
             * Triggered when the dropdown is shown.
             * 
             * @param {jQuery} event
             */
            onDropdownShow: function(event) {
                
            },
            /**
             * Triggered when the dropdown is hidden.
             * 
             * @param {jQuery} event
             */
            onDropdownHide: function(event) {
                
            },
            buttonClass: 'btn btn-default',
            dropRight: false,
            selectedClass: 'active',
            buttonWidth: 'auto',
            buttonContainer: '<div class="btn-group" />',
            // Maximum height of the dropdown menu.
            // If maximum height is exceeded a scrollbar will be displayed.
            maxHeight: false,
            checkboxName: 'multiselect',
            includeSelectAllOption: false,
            includeSelectAllIfMoreThan: 0,
            selectAllText: ' Select all',
            selectAllValue: 'multiselect-all',
            enableFiltering: false,
            enableCaseInsensitiveFiltering: false,
            filterPlaceholder: 'Search',
            // possible options: 'text', 'value', 'both'
            filterBehavior: 'text',
            preventInputChangeEvent: false,
            nonSelectedText: 'None selected',
            nSelectedText: 'selected',
            numberDisplayed: 3,
            templates: {
                button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"></button>',
                ul: '<ul class="multiselect-container dropdown-menu"></ul>',
                filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
                li: '<li><a href="javascript:void(0);"><label></label></a></li>',
                divider: '<li class="multiselect-item divider"></li>',
                liGroup: '<li class="multiselect-item group"><label class="multiselect-group"></label></li>'
            }
        },

        constructor: Multiselect,

        /**
         * Builds the container of the multiselect.
         */
        buildContainer: function() {
            this.$container = $(this.options.buttonContainer);
            this.$container.on('show.bs.dropdown', this.options.onDropdownShow);
            this.$container.on('hide.bs.dropdown', this.options.onDropdownHide);
        },

        /**
         * Builds the button of the multiselect.
         */
        buildButton: function() {
            this.$button = $(this.options.templates.button).addClass(this.options.buttonClass);

            // Adopt active state.
            if (this.$select.prop('disabled')) {
                this.disable();
            }
            else {
                this.enable();
            }

            // Manually add button width if set.
            if (this.options.buttonWidth && this.options.buttonWidth !== 'auto') {
                $(this.$button[0]).css({
                    'width' : this.options.buttonWidth
                });
            }

            // Keep the tab index from the select.
            var tabindex = this.$select.attr('tabindex');
            if (tabindex) {
                this.$button.attr('tabindex', tabindex);
            }

            this.$container.prepend(this.$button);
        },

        /**
         * Builds the ul representing the dropdown menu.
         */
        buildDropdown: function() {

            // Build ul.
            this.$ul = $(this.options.templates.ul);

            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
            }

            // Set max height of dropdown menu to activate auto scrollbar.
            if (this.options.maxHeight) {
                // TODO: Add a class for this option to move the css declarations.
                this.$ul.css({
                    'max-height': this.options.maxHeight + 'px',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden'
                });
            }

            this.$container.append(this.$ul);
        },

        /**
         * Build the dropdown options and binds all nessecary events.
         * Uses createDivider and createOptionValue to create the necessary options.
         */
        buildDropdownOptions: function() {

            this.$select.children().each($.proxy(function(index, element) {
                
                // Support optgroups and options without a group simultaneously.
                var tag = $(element).prop('tagName')
                    .toLowerCase();

                if (tag === 'optgroup') {
                    this.createOptgroup(element);
                }
                else if (tag === 'option') {

                    if ($(element).data('role') === 'divider') {
                        this.createDivider();
                    }
                    else {
                        this.createOptionValue(element);
                    }

                }
                
                // Other illegal tags will be ignored.
            }, this));

            // Bind the change event on the dropdown elements.
            $('li input', this.$ul).on('change', $.proxy(function(event) {
                var $target = $(event.target);

                var checked = $target.prop('checked') || false;
                var isSelectAllOption = $target.val() === this.options.selectAllValue;

                // Apply or unapply the configured selected class.
                if (this.options.selectedClass) {
                    if (checked) {
                        $target.parents('li')
                            .addClass(this.options.selectedClass);
                    }
                    else {
                        $target.parents('li')
                            .removeClass(this.options.selectedClass);
                    }
                }

                // Get the corresponding option.
                var value = $target.val();
                var $option = this.getOptionByValue(value);

                var $optionsNotThis = $('option', this.$select).not($option);
                var $checkboxesNotThis = $('input', this.$container).not($target);

                if (isSelectAllOption) {
                    if (checked) {
                        this.selectall();
                    }
                    else {
                        this.deselectall();
                    }
                }

                if(!isSelectAllOption){
                    if (checked) {
                        $option.prop('selected', true);

                        if (this.options.multiple) {
                            // Simply select additional option.
                            $option.prop('selected', true);
                        }
                        else {
                            // Unselect all other options and corresponding checkboxes.
                            if (this.options.selectedClass) {
                                $($checkboxesNotThis).parents('li').removeClass(this.options.selectedClass);
                            }

                            $($checkboxesNotThis).prop('checked', false);
                            $optionsNotThis.prop('selected', false);

                            // It's a single selection, so close.
                            this.$button.click();
                        }

                        if (this.options.selectedClass === "active") {
                            $optionsNotThis.parents("a").css("outline", "");
                        }
                    }
                    else {
                        // Unselect option.
                        $option.prop('selected', false);
                    }
                }

                this.$select.change();

                this.updateButtonText();
                this.updateSelectAll();
                
                this.options.onChange($option, checked);

                if(this.options.preventInputChangeEvent) {
                    return false;
                }
            }, this));

            $('li a', this.$ul).on('touchstart click', function(event) {
                event.stopPropagation();

                var $target = $(event.target);

                if (event.shiftKey) {
                    var checked = $target.prop('checked') || false;

                    if (checked) {
                        var prev = $target.parents('li:last')
                            .siblings('li[class="active"]:first');

                        var currentIdx = $target.parents('li')
                            .index();
                        var prevIdx = prev.index();

                        if (currentIdx > prevIdx) {
                            $target.parents("li:last").prevUntil(prev).each(
                                function() {
                                    $(this).find("input:first").prop("checked", true)
                                        .trigger("change");
                                }
                            );
                        }
                        else {
                            $target.parents("li:last").nextUntil(prev).each(
                                function() {
                                    $(this).find("input:first").prop("checked", true)
                                        .trigger("change");
                                }
                            );
                        }
                    }
                }

                $target.blur();
            });

            // Keyboard support.
            this.$container.off('keydown.multiselect').on('keydown.multiselect', $.proxy(function(event) {
                if ($('input[type="text"]', this.$container).is(':focus')) {
                    return;
                }
                if ((event.keyCode === 9 || event.keyCode === 27)
                        && this.$container.hasClass('open')) {
                    
                    // Close on tab or escape.
                    this.$button.click();
                }
                else {
                    var $items = $(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");

                    if (!$items.length) {
                        return;
                    }

                    var index = $items.index($items.filter(':focus'));

                    // Navigation up.
                    if (event.keyCode === 38 && index > 0) {
                        index--;
                    }
                    // Navigate down.
                    else if (event.keyCode === 40 && index < $items.length - 1) {
                        index++;
                    }
                    else if (!~index) {
                        index = 0;
                    }

                    var $current = $items.eq(index);
                    $current.focus();

                    if (event.keyCode === 32 || event.keyCode === 13) {
                        var $checkbox = $current.find('input');

                        $checkbox.prop("checked", !$checkbox.prop("checked"));
                        $checkbox.change();
                    }

                    event.stopPropagation();
                    event.preventDefault();
                }
            }, this));
        },

        /**
         * Create an option using the given select option.
         * 
         * @param {jQuery} element
         */
        createOptionValue: function(element) {
            if ($(element).is(':selected')) {
                $(element).prop('selected', true);
            }

            // Support the label attribute on options.
            var label = this.options.label(element);
            var value = $(element).val();
            var inputType = this.options.multiple ? "checkbox" : "radio";

            var $li = $(this.options.templates.li);
            $('label', $li).addClass(inputType);
            $('label', $li).append('<input type="' + inputType + '" name="' + this.options.checkboxName + '" />');

            var selected = $(element).prop('selected') || false;
            var $checkbox = $('input', $li);
            $checkbox.val(value);

            if (value === this.options.selectAllValue) {
                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');
            }

            $('label', $li).append(" " + label);

            this.$ul.append($li);

            if ($(element).is(':disabled')) {
                $checkbox.attr('disabled', 'disabled')
                    .prop('disabled', true)
                    .parents('a')
                    .attr("tabindex", "-1")
                    .parents('li')
                    .addClass('disabled');
            }

            $checkbox.prop('checked', selected);

            if (selected && this.options.selectedClass) {
                $checkbox.parents('li')
                    .addClass(this.options.selectedClass);
            }
        },

        /**
         * Creates a divider using the given select option.
         * 
         * @param {jQuery} element
         */
        createDivider: function(element) {
            var $divider = $(this.options.templates.divider);
            this.$ul.append($divider);
        },

        /**
         * Creates an optgroup.
         * 
         * @param {jQuery} group
         */
        createOptgroup: function(group) {
            var groupName = $(group).prop('label');

            // Add a header for the group.
            var $li = $(this.options.templates.liGroup);
            $('label', $li).text(groupName);

            this.$ul.append($li);

            if ($(group).is(':disabled')) {
                $li.addClass('disabled');
            }

            // Add the options of the group.
            $('option', group).each($.proxy(function(index, element) {
                this.createOptionValue(element);
            }, this));
        },

        /**
         * Build the selct all.
         * Checks if a select all has already been created.
         */
        buildSelectAll: function() {
            var alreadyHasSelectAll = this.hasSelectAll();
            
            if (!alreadyHasSelectAll && this.options.includeSelectAllOption && this.options.multiple
                    && $('option', this.$select).length > this.options.includeSelectAllIfMoreThan) {
                
                // Check whether to add a divider after the select all.
                if (this.options.includeSelectAllDivider) {
                    this.$ul.prepend($(this.options.templates.divider));
                }

                var $li = $(this.options.templates.li);
                $('label', $li).addClass("checkbox");
                $('label', $li).append('<input type="checkbox" name="' + this.options.checkboxName + '" />');

                var $checkbox = $('input', $li);
                $checkbox.val(this.options.selectAllValue);

                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');

                $('label', $li).append(" " + this.options.selectAllText);

                this.$ul.prepend($li);

                $checkbox.prop('checked', false);
            }
        },

        /**
         * Builds the filter.
         */
        buildFilter: function() {

            // Build filter if filtering OR case insensitive filtering is enabled and the number of options exceeds (or equals) enableFilterLength.
            if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                var enableFilterLength = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);

                if (this.$select.find('option').length >= enableFilterLength) {

                    this.$filter = $(this.options.templates.filter);
                    $('input', this.$filter).attr('placeholder', this.options.filterPlaceholder);
                    this.$ul.prepend(this.$filter);

                    this.$filter.val(this.query).on('click', function(event) {
                        event.stopPropagation();
                    }).on('input keydown', $.proxy(function(event) {
                        // This is useful to catch "keydown" events after the browser has updated the control.
                        clearTimeout(this.searchTimeout);

                        this.searchTimeout = this.asyncFunction($.proxy(function() {

                            if (this.query !== event.target.value) {
                                this.query = event.target.value;

                                $.each($('li', this.$ul), $.proxy(function(index, element) {
                                    var value = $('input', element).val();
                                    var text = $('label', element).text();

                                    var filterCandidate = '';
                                    if ((this.options.filterBehavior === 'text')) {
                                        filterCandidate = text;
                                    }
                                    else if ((this.options.filterBehavior === 'value')) {
                                        filterCandidate = value;
                                    }
                                    else if (this.options.filterBehavior === 'both') {
                                        filterCandidate = text + '\n' + value;
                                    }

                                    if (value !== this.options.selectAllValue && text) {
                                        // by default lets assume that element is not
                                        // interesting for this search
                                        var showElement = false;

                                        if (this.options.enableCaseInsensitiveFiltering && filterCandidate.toLowerCase().indexOf(this.query.toLowerCase()) > -1) {
                                            showElement = true;
                                        }
                                        else if (filterCandidate.indexOf(this.query) > -1) {
                                            showElement = true;
                                        }

                                        if (showElement) {
                                            $(element).show().removeClass("filter-hidden");
                                        }
                                        else {
                                            $(element).hide().addClass("filter-hidden");
                                        }
                                    }
                                }, this));
                            }

                            this.updateSelectAll();
                        }, this), 300, this);
                    }, this));
                }
            }
        },

        /**
         * Unbinds the whole plugin.
         */
        destroy: function() {
            this.$container.remove();
            this.$select.show();
            this.$select.data('multiselect', null);
        },

        /**
         * Refreshs the multiselect based on the selected options of the select.
         */
        refresh: function() {
            $('option', this.$select).each($.proxy(function(index, element) {
                var $input = $('li input', this.$ul).filter(function() {
                    return $(this).val() === $(element).val();
                });

                if ($(element).is(':selected')) {
                    $input.prop('checked', true);

                    if (this.options.selectedClass) {
                        $input.parents('li')
                            .addClass(this.options.selectedClass);
                    }
                }
                else {
                    $input.prop('checked', false);

                    if (this.options.selectedClass) {
                        $input.parents('li')
                            .removeClass(this.options.selectedClass);
                    }
                }

                if ($(element).is(":disabled")) {
                    $input.attr('disabled', 'disabled')
                        .prop('disabled', true)
                        .parents('li')
                        .addClass('disabled');
                }
                else {
                    $input.prop('disabled', false)
                        .parents('li')
                        .removeClass('disabled');
                }
            }, this));

            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Select all options of the given values.
         * 
         * @param {Array} selectValues
         */
        select: function(selectValues) {
            if(!$.isArray(selectValues)) {
                selectValues = [selectValues];
            }

            for (var i = 0; i < selectValues.length; i++) {
                var value = selectValues[i];

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if (this.options.selectedClass) {
                    $checkbox.parents('li')
                        .addClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', true);
                $option.prop('selected', true);
            }

            this.updateButtonText();
            
        },

        /**
         * Clears all selected items
         * 
         */
        clearSelection: function () {
            this.deselectall(false);
            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Deselects all options of the given values.
         * 
         * @param {Array} deselectValues
         */
        deselect: function(deselectValues) {
            if(!$.isArray(deselectValues)) {
                deselectValues = [deselectValues];
            }

            for (var i = 0; i < deselectValues.length; i++) {

                var value = deselectValues[i];

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if (this.options.selectedClass) {
                    $checkbox.parents('li')
                        .removeClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', false);
                $option.prop('selected', false);
            }

            this.updateButtonText();
        },
        
        /**
         * Selects all enabled & visible options.
         * 
         */
        selectall: function () {
            var allCheckboxes = $("li input[type='checkbox']:enabled", this.$ul),
                visibleCheckboxes = allCheckboxes.filter(":visible"),
                allCheckboxesCount = allCheckboxes.length,
                visibleCheckboxesCount = visibleCheckboxes.length;
                
            visibleCheckboxes.prop('checked', true);
            $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").addClass(this.options.selectedClass);
            
            if (allCheckboxesCount === visibleCheckboxesCount) {
                $("option:enabled", this.$select).prop('selected', true);
            }
            else {
                var values = visibleCheckboxes.map(function() { return $(this).val() }).get();
                $("option:enabled", this.$select).filter(function(index){ return $.inArray($(this).val(), values) !== -1; }).prop('selected', true);
            }
        },

        /**
         * Deselects all options.
         * If justVisible is true or not specified, only visible options are deselected.
         * 
         * @param {Boolean} justVisible
         */
        deselectall: function (justVisible) {
            var allCheckboxes = $("li input[type='checkbox']:enabled", this.$ul),                
                justVisible = typeof justVisible === 'undefined' ? true : justVisible,
                visibleCheckboxes = void(0);
            
            if(justVisible) {
                var values = void(0);                
                visibleCheckboxes = allCheckboxes.filter(":visible");
                visibleCheckboxes.prop('checked', false);
                
                values = visibleCheckboxes.map(function() { return $(this).val() }).get();
                
                $("option:enabled", this.$select).filter(function(index){ return $.inArray($(this).val(), values) !== -1; }).prop('selected', false);
                
                $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").removeClass(this.options.selectedClass);
                
            }else {
                allCheckboxes.prop('checked', false);
                $("option:enabled", this.$select).prop('selected', false);
                $("li:not(.divider):not(.disabled)", this.$ul).removeClass(this.options.selectedClass);
            }
        },

        /**
         * Rebuild the plugin.
         * Rebuilds the dropdown, the filter and the select all option.
         */
        rebuild: function() {
            this.$ul.html('');

            // Important to distinguish between radios and checkboxes.
            this.options.multiple = this.$select.attr('multiple') === "multiple";

            this.buildSelectAll();
            this.buildDropdownOptions();
            this.buildFilter();
            
            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * The provided data will be used to build the dropdown.
         * 
         * @param {Array} dataprovider
         */
        dataprovider: function(dataprovider) {
            var optionDOM = "";
            dataprovider.forEach(function (option) {
                optionDOM += '<option value="' + option.value + '">' + option.label + '</option>';
            });

            this.$select.html(optionDOM);
            this.rebuild();
        },

        /**
         * Enable the multiselect.
         */
        enable: function() {
            this.$select.prop('disabled', false);
            this.$button.prop('disabled', false)
                .removeClass('disabled');
        },

        /**
         * Disable the multiselect.
         */
        disable: function() {
            this.$select.prop('disabled', true);
            this.$button.prop('disabled', true)
                .addClass('disabled');
        },

        /**
         * Set the options.
         * 
         * @param {Array} options
         */
        setOptions: function(options) {
            this.options = this.mergeOptions(options);
        },

        /**
         * Merges the given options with the default options.
         * 
         * @param {Array} options
         * @returns {Array}
         */
        mergeOptions: function(options) {
            return $.extend(true, {}, this.defaults, options);
        },
        
        /**
         * Checks whether a select all checkbox is present.
         * 
         * @returns {Boolean}
         */
        hasSelectAll: function() {
            return $('li.' + this.options.selectAllValue, this.$ul).length > 0;
        },
        
        /**
         * Updates the select all checkbox based on the currently displayed and selected checkboxes.
         */
        updateSelectAll: function() {
            if (this.hasSelectAll()) {
                var allBoxes = $("li:not(.multiselect-item):not(.filter-hidden) input:enabled", this.$ul),
                    allBoxesLength = allBoxes.length,
                    checkedBoxesLength = allBoxes.filter(":checked").length,
                    selectAllLi  = $("li." + this.options.selectAllValue, this.$ul),
                    selectAllInput = selectAllLi.find("input");
                
                if (checkedBoxesLength > 0 && checkedBoxesLength === allBoxesLength) {
                    selectAllInput.prop("checked", true);
                    selectAllLi.addClass(this.options.selectedClass);
                }
                else {
                    selectAllInput.prop("checked", false);
                    selectAllLi.removeClass(this.options.selectedClass);
                }
            }
        },
        
        /**
         * Update the button text and its title based on the currently selected options.
         */
        updateButtonText: function() {
            var options = this.getSelected();
            
            // First update the displayed button text.
            $('button:first-child', this.$container).html(this.options.buttonText(options, this.$select));
            
            // Now update the title attribute of the button.
            $('button:first-child', this.$container).attr('title', this.options.buttonTitle(options, this.$select));
            this.$container.removeClass("open");
        },

        /**
         * Get all selected options.
         * 
         * @returns {jQUery}
         */
        getSelected: function() {
            return $('option', this.$select).filter(":selected");
        },

        /**
         * Gets a select option by its value.
         * 
         * @param {String} value
         * @returns {jQuery}
         */
        getOptionByValue: function (value) {

            var options = $('option', this.$select);
            var valueToCompare = value.toString();

            for (var i = 0; i < options.length; i = i + 1) {
                var option = options[i];
                if (option.value === valueToCompare) {
                    return $(option);
                }
            }
        },

        /**
         * Get the input (radio/checkbox) by its value.
         * 
         * @param {String} value
         * @returns {jQuery}
         */
        getInputByValue: function (value) {

            var checkboxes = $('li input', this.$ul);
            var valueToCompare = value.toString();

            for (var i = 0; i < checkboxes.length; i = i + 1) {
                var checkbox = checkboxes[i];
                if (checkbox.value === valueToCompare) {
                    return $(checkbox);
                }
            }
        },

        /**
         * Used for knockout integration.
         */
        updateOriginalOptions: function() {
            this.originalOptions = this.$select.clone()[0].options;
        },

        asyncFunction: function(callback, timeout, self) {
            var args = Array.prototype.slice.call(arguments, 3);
            return setTimeout(function() {
                callback.apply(self || window, args);
            }, timeout);
        }
    };

    $.fn.multiselect = function(option, parameter) {
        return this.each(function() {
            var data = $(this).data('multiselect');
            var options = typeof option === 'object' && option;
            
            // Initialize the multiselect.
            if (!data) {
                data = new Multiselect(this, options);
                $(this).data('multiselect', data);
            }

            // Call multiselect method.
            if (typeof option === 'string') {
                data[option](parameter);
                
                if (option === 'destroy') {
                    $(this).data('multiselect', false);
                }
            }
        });
    };

    $.fn.multiselect.Constructor = Multiselect;

    $(function() {
        $("select[data-role=multiselect]").multiselect();
    });

}(window.jQuery);
;/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});;/*!
 * jQuery Upload File Plugin
 * version: 3.1.0
 * @requires jQuery v1.5 or later & form plugin
 * Copyright (c) 2013 Ravishanker Kusuma
 * http://hayageek.com/
 */
(function(b){if(b.fn.ajaxForm==undefined){b.getScript("http://malsup.github.io/jquery.form.js")}var a={};a.fileapi=b("<input type='file'/>").get(0).files!==undefined;a.formdata=window.FormData!==undefined;b.fn.uploadFile=function(r){var q=b.extend({url:"",method:"POST",enctype:"multipart/form-data",formData:null,returnType:null,allowedTypes:"*",fileName:"file",formData:{},dynamicFormData:function(){return{}},maxFileSize:-1,multiple:true,dragDrop:true,autoSubmit:true,showCancel:true,showAbort:true,showDone:true,showDelete:false,showError:true,showStatusAfterSuccess:true,showStatusAfterError:true,showFileCounter:true,fileCounterStyle:"). ",showProgress:false,onSelect:function(s){return true},onSubmit:function(s,t){},onSuccess:function(t,s,u){},onError:function(u,s,t){},deleteCallback:false,afterUploadAll:false,uploadButtonClass:"ajax-file-upload",dragDropStr:"<span><b>Drag &amp; Drop Files</b></span>",abortStr:"Abort",cancelStr:"Cancel",deletelStr:"Delete",doneStr:"Done",multiDragErrorStr:"Multiple File Drag &amp; Drop is not allowed.",extErrorStr:"is not allowed. Allowed extensions: ",sizeErrorStr:"is not allowed. Allowed Max size: ",uploadErrorStr:"Upload is not allowed"},r);this.fileCounter=1;this.fCounter=0;this.sCounter=0;this.tCounter=0;var d="ajax-file-upload-"+(new Date().getTime());this.formGroup=d;this.hide();this.errorLog=b("<div></div>");this.after(this.errorLog);this.responses=[];if(!a.formdata){q.dragDrop=false}var l=this;var e=b("<div>"+b(this).html()+"</div>");b(e).addClass(q.uploadButtonClass);(function j(){if(b.fn.ajaxForm){if(q.dragDrop){var s=b('<div class="ajax-upload-dragdrop" style="vertical-align:top;"></div>');b(l).before(s);b(s).append(e);b(s).append(b(q.dragDropStr));f(l,q,s)}else{b(l).before(e)}p(l,d,q,e)}else{window.setTimeout(j,10)}})();this.startUpload=function(){b("."+this.formGroup).each(function(t,s){if(b(this).is("form")){b(this).submit()}})};this.stopUpload=function(){b(".ajax-file-upload-red").each(function(t,s){if(b(this).hasClass(l.formGroup)){b(this).click()}})};this.getResponses=function(){return this.responses};var g=false;function i(){if(q.afterUploadAll&&!g){g=true;(function s(){if(l.sCounter!=0&&(l.sCounter+l.fCounter==l.tCounter)){q.afterUploadAll(l);g=false}else{window.setTimeout(s,100)}})()}}function f(v,t,u){u.on("dragenter",function(s){s.stopPropagation();s.preventDefault();b(this).css("border","2px solid #A5A5C7")});u.on("dragover",function(s){s.stopPropagation();s.preventDefault()});u.on("drop",function(w){b(this).css("border","2px dotted #A5A5C7");w.preventDefault();v.errorLog.html("");var s=w.originalEvent.dataTransfer.files;if(!t.multiple&&s.length>1){if(t.showError){b("<div style='color:red;'>"+t.multiDragErrorStr+"</div>").appendTo(v.errorLog)}return}if(t.onSelect(s)==false){return}k(t,v,s)});b(document).on("dragenter",function(s){s.stopPropagation();s.preventDefault()});b(document).on("dragover",function(s){s.stopPropagation();s.preventDefault();u.css("border","2px dotted #A5A5C7")});b(document).on("drop",function(s){s.stopPropagation();s.preventDefault();u.css("border","2px dotted #A5A5C7")})}function h(s){var u="";var t=s/1024;if(parseInt(t)>1024){var v=t/1024;u=v.toFixed(2)+" MB"}else{u=t.toFixed(2)+" KB"}return u}function n(w){var x=[];if(jQuery.type(w)=="string"){x=w.split("&")}else{x=b.param(w).split("&")}var t=x.length;var s=[];var v,u;for(v=0;v<t;v++){x[v]=x[v].replace(/\+/g," ");u=x[v].split("=");s.push([decodeURIComponent(u[0]),decodeURIComponent(u[1])])}return s}function k(G,A,t){for(var B=0;B<t.length;B++){if(!c(A,G,t[B].name)){if(G.showError){b("<div style='color:red;'><b>"+t[B].name+"</b> "+G.extErrorStr+G.allowedTypes+"</div>").appendTo(A.errorLog)}continue}if(G.maxFileSize!=-1&&t[B].size>G.maxFileSize){if(G.showError){b("<div style='color:red;'><b>"+t[B].name+"</b> "+G.sizeErrorStr+h(G.maxFileSize)+"</div>").appendTo(A.errorLog)}continue}var C=G;var v=new FormData();var z=G.fileName.replace("[]","");v.append(z,t[B]);var x=G.formData;if(x){var E=n(x);for(var y=0;y<E.length;y++){if(E[y]){v.append(E[y][0],E[y][1])}}}C.fileData=v;var D=new o(A,G);var F="";if(G.showFileCounter){F=A.fileCounter+G.fileCounterStyle+t[B].name}else{F=t[B].name}D.filename.html(F);var u=b("<form style='display:block; position:absolute;left: 150px;' class='"+A.formGroup+"' method='"+G.method+"' action='"+G.url+"' enctype='"+G.enctype+"'></form>");u.appendTo("body");var w=[];w.push(t[B].name);m(u,C,D,w,A);A.fileCounter++}}function c(v,u,x){var w=u.allowedTypes.toLowerCase().split(",");var t=x.split(".").pop().toLowerCase();if(u.allowedTypes!="*"&&jQuery.inArray(t,w)<0){return false}return true}function p(x,A,C,t){var z="ajax-upload-id-"+(new Date().getTime());var v=b("<form method='"+C.method+"' action='"+C.url+"' enctype='"+C.enctype+"'></form>");var u="<input type='file' id='"+z+"' name='"+C.fileName+"'/>";if(C.multiple){if(C.fileName.indexOf("[]")!=C.fileName.length-2){C.fileName+="[]"}u="<input type='file' id='"+z+"' name='"+C.fileName+"' multiple/>"}var y=b(u).appendTo(v);y.change(function(){x.errorLog.html("");var J=C.allowedTypes.toLowerCase().split(",");var F=[];if(this.files){for(G=0;G<this.files.length;G++){F.push(this.files[G].name)}if(C.onSelect(this.files)==false){return}}else{var H=b(this).val();var E=[];F.push(H);if(!c(x,C,H)){if(C.showError){b("<div style='color:red;'><b>"+H+"</b> "+C.extErrorStr+C.allowedTypes+"</div>").appendTo(x.errorLog)}return}E.push({name:H,size:"NA"});if(C.onSelect(E)==false){return}}t.unbind("click");v.hide();p(x,A,C,t);v.addClass(A);if(a.fileapi&&a.formdata){v.removeClass(A);var I=this.files;k(C,x,I)}else{var D="";for(var G=0;G<F.length;G++){if(C.showFileCounter){D+=x.fileCounter+C.fileCounterStyle+F[G]+"<br>"}else{D+=F[G]+"<br>"}x.fileCounter++}var s=new o(x,C);s.filename.html(D);m(v,C,s,F,x)}});v.css({margin:0,padding:0});var B=b(t).width()+10;if(B==10){B=120}var w=t.height()+10;if(w==10){w=35}t.css({position:"relative",overflow:"hidden",cursor:"default"});y.css({position:"absolute",cursor:"pointer",top:"0px",width:B,height:w,left:"0px","z-index":"100",opacity:"0.0",filter:"alpha(opacity=0)","-ms-filter":"alpha(opacity=0)","-khtml-opacity":"0.0","-moz-opacity":"0.0"});v.appendTo(t)}function o(u,t){this.statusbar=b("<div class='ajax-file-upload-statusbar'></div>");this.filename=b("<div class='ajax-file-upload-filename'></div>").appendTo(this.statusbar);this.progressDiv=b("<div class='ajax-file-upload-progress'>").appendTo(this.statusbar).hide();this.progressbar=b("<div class='ajax-file-upload-bar "+u.formGroup+"'></div>").appendTo(this.progressDiv);this.abort=b("<div class='ajax-file-upload-red "+u.formGroup+"'>"+t.abortStr+"</div>").appendTo(this.statusbar).hide();this.cancel=b("<div class='ajax-file-upload-red'>"+t.cancelStr+"</div>").appendTo(this.statusbar).hide();this.done=b("<div class='ajax-file-upload-green'>"+t.doneStr+"</div>").appendTo(this.statusbar).hide();this.del=b("<div class='ajax-file-upload-red'>"+t.deletelStr+"</div>").appendTo(this.statusbar).hide();u.errorLog.after(this.statusbar);return this}function m(y,x,t,v,z){var w=null;var u={cache:false,contentType:false,processData:false,forceSync:false,data:x.formData,formData:x.fileData,dataType:x.returnType,beforeSubmit:function(E,B,D){if(x.onSubmit.call(this,v)!=false){var A=x.dynamicFormData();if(A){var s=n(A);if(s){for(var C=0;C<s.length;C++){if(s[C]){if(x.fileData!=undefined){D.formData.append(s[C][0],s[C][1])}else{D.data[s[C][0]]=s[C][1]}}}}}z.tCounter+=v.length;i();return true}t.statusbar.append("<div style='color:red;'>"+x.uploadErrorStr+"</div>");t.cancel.show();y.remove();t.cancel.click(function(){t.statusbar.remove()});return false},beforeSend:function(A,s){t.progressDiv.show();t.cancel.hide();t.done.hide();if(x.showAbort){t.abort.show();t.abort.click(function(){A.abort()})}if(!a.formdata){t.progressbar.width("5%")}else{t.progressbar.width("1%")}},uploadProgress:function(D,s,C,B){if(B>98){B=98}var A=B+"%";if(B>1){t.progressbar.width(A)}if(x.showProgress){t.progressbar.html(A);t.progressbar.css("text-align","center")}},success:function(A,s,B){z.responses.push(A);t.progressbar.width("100%");if(x.showProgress){t.progressbar.html("100%");t.progressbar.css("text-align","center")}t.abort.hide();x.onSuccess.call(this,v,A,B);if(x.showStatusAfterSuccess){if(x.showDone){t.done.show();t.done.click(function(){t.statusbar.hide("slow");t.statusbar.remove()})}else{t.done.hide()}if(x.showDelete){t.del.show();t.del.click(function(){if(x.deleteCallback){x.deleteCallback.call(this,A,t)}})}else{t.del.hide()}}else{t.statusbar.hide("slow");t.statusbar.remove()}y.remove();z.sCounter+=v.length},error:function(B,s,A){t.abort.hide();if(B.statusText=="abort"){t.statusbar.hide("slow")}else{x.onError.call(this,v,s,A);if(x.showStatusAfterError){t.progressDiv.hide();t.statusbar.append("<span style='color:red;'>ERROR: "+A+"</span>")}else{t.statusbar.hide();t.statusbar.remove()}}y.remove();z.fCounter+=v.length}};if(x.autoSubmit){y.ajaxSubmit(u)}else{if(x.showCancel){t.cancel.show();t.cancel.click(function(){y.remove();t.statusbar.remove()})}y.ajaxForm(u)}}return this}}(jQuery));;/* jQuery Form Styler v1.6 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
(function(c){c.fn.styler=function(x){var e=c.extend({wrapper:"form",idSuffix:"-styler",filePlaceholder:"\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",fileBrowse:"\u041e\u0431\u0437\u043e\u0440...",selectPlaceholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435...",selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",selectSearchPlaceholder:"\u041f\u043e\u0438\u0441\u043a...",
selectVisibleOptions:0,singleSelectzIndex:"100",selectSmartPositioning:!0,onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}},x);return this.each(function(){function A(){var c="",p="",b="",n="";void 0!==a.attr("id")&&""!==a.attr("id")&&(c=' id="'+a.attr("id")+e.idSuffix+'"');void 0!==a.attr("title")&&""!==a.attr("title")&&(p=' title="'+a.attr("title")+'"');void 0!==a.attr("class")&&""!==a.attr("class")&&(b=" "+a.attr("class"));var d=a.data(),g;for(g in d)""!==d[g]&&
(n+=" data-"+g+'="'+d[g]+'"');this.id=c+n;this.title=p;this.classes=b}var a=c(this);if(a.is(":checkbox"))a.each(function(){if(1>a.parent("div.jq-checkbox").length){var e=function(){var e=new A,b=c("<div"+e.id+' class="jq-checkbox'+e.classes+'"'+e.title+'><div class="jq-checkbox__div"></div></div>');a.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(b).prependTo(b);b.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none",
"-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative",overflow:"hidden"});a.is(":checked")&&b.addClass("checked");a.is(":disabled")&&b.addClass("disabled");b.on("click.styler",function(){b.is(".disabled")||(a.is(":checked")?(a.prop("checked",!1),b.removeClass("checked")):(a.prop("checked",!0),b.addClass("checked")),a.change());return!1});a.closest("label").add('label[for="'+a.attr("id")+'"]').click(function(a){b.click();a.preventDefault()});a.on("change.styler",function(){a.is(":checked")?
b.addClass("checked"):b.removeClass("checked")}).on("keydown.styler",function(a){32==a.which&&b.click()}).on("focus.styler",function(){b.is(".disabled")||b.addClass("focused")}).on("blur.styler",function(){b.removeClass("focused")})};e();a.on("refresh",function(){a.off(".styler").parent().before(a).remove();e()})}});else if(a.is(":radio"))a.each(function(){if(1>a.parent("div.jq-radio").length){var s=function(){var p=new A,b=c("<div"+p.id+' class="jq-radio'+p.classes+'"'+p.title+'><div class="jq-radio__div"></div></div>');
a.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(b).prependTo(b);b.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative"});a.is(":checked")&&b.addClass("checked");a.is(":disabled")&&b.addClass("disabled");b.on("click.styler",function(){b.is(".disabled")||(b.closest(e.wrapper).find('input[name="'+a.attr("name")+'"]').prop("checked",
!1).parent().removeClass("checked"),a.prop("checked",!0).parent().addClass("checked"),a.change());return!1});a.closest("label").add('label[for="'+a.attr("id")+'"]').click(function(a){b.click();a.preventDefault()});a.on("change.styler",function(){a.parent().addClass("checked")}).on("focus.styler",function(){b.is(".disabled")||b.addClass("focused")}).on("blur.styler",function(){b.removeClass("focused")})};s();a.on("refresh",function(){a.off(".styler").parent().before(a).remove();s()})}});else if(a.is(":file"))a.css({position:"absolute",
top:0,right:0,width:"100%",height:"100%",opacity:0,margin:0,padding:0}).each(function(){if(1>a.parent("div.jq-file").length){var s=function(){var p=new A,b=a.data("placeholder");void 0===b&&(b=e.filePlaceholder);var n=a.data("browse");if(void 0===n||""===n)n=e.fileBrowse;var d=c("<div"+p.id+' class="jq-file'+p.classes+'"'+p.title+' style="display: inline-block; position: relative; overflow: hidden"></div>'),g=c('<div class="jq-file__name">'+b+"</div>").appendTo(d);c('<div class="jq-file__browse">'+
n+"</div>").appendTo(d);a.after(d);d.append(a);a.is(":disabled")&&d.addClass("disabled");a.on("change.styler",function(){var c=a.val();if(a.is("[multiple]"))for(var c="",e=a[0].files,p=0;p<e.length;p++)c+=(0<p?", ":"")+e[p].name;g.text(c.replace(/.+[\\\/]/,""));""===c?(g.text(b),d.removeClass("changed")):d.addClass("changed")}).on("focus.styler",function(){d.addClass("focused")}).on("blur.styler",function(){d.removeClass("focused")}).on("click.styler",function(){d.removeClass("focused")})};s();a.on("refresh",
function(){a.off(".styler").parent().before(a).remove();s()})}});else if(a.is("select"))a.each(function(){if(1>a.parent("div.jqselect").length){var s=function(){function p(a){a.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(a){var b=null;"mousewheel"==a.type?b=-1*a.originalEvent.wheelDelta:"DOMMouseScroll"==a.type&&(b=40*a.originalEvent.detail);b&&(a.stopPropagation(),a.preventDefault(),c(this).scrollTop(b+c(this).scrollTop()))})}function b(){for(var a=0,c=g.length;a<c;a++){var b=
"",e="",p=b="",d="",q="";g.eq(a).prop("selected")&&(e="selected sel");g.eq(a).is(":disabled")&&(e="disabled");g.eq(a).is(":selected:disabled")&&(e="selected sel disabled");void 0!==g.eq(a).attr("class")&&(p=" "+g.eq(a).attr("class"),q=' data-jqfs-class="'+g.eq(a).attr("class")+'"');var u=g.eq(a).data(),t;for(t in u)""!==u[t]&&(b+=" data-"+t+'="'+u[t]+'"');b="<li"+q+b+' class="'+e+p+'">'+g.eq(a).html()+"</li>";g.eq(a).parent().is("optgroup")&&(void 0!==g.eq(a).parent().attr("class")&&(d=" "+g.eq(a).parent().attr("class")),
b="<li"+q+' class="'+e+p+" option"+d+'">'+g.eq(a).html()+"</li>",g.eq(a).is(":first-child")&&(b='<li class="optgroup'+d+'">'+g.eq(a).parent().attr("label")+"</li>"+b));s+=b}}function n(){var d=new A,v="",k=a.data("placeholder"),h=a.data("search"),n=a.data("search-limit"),w=a.data("search-not-found"),q=a.data("search-placeholder"),u=a.data("z-index"),t=a.data("smart-positioning");void 0===k&&(k=e.selectPlaceholder);if(void 0===h||""===h)h=e.selectSearch;if(void 0===n||""===n)n=e.selectSearchLimit;
if(void 0===w||""===w)w=e.selectSearchNotFound;void 0===q&&(q=e.selectSearchPlaceholder);if(void 0===u||""===u)u=e.singleSelectzIndex;if(void 0===t||""===t)t=e.selectSmartPositioning;var f=c("<div"+d.id+' class="jq-selectbox jqselect'+d.classes+'" style="display: inline-block; position: relative; z-index:'+u+'"><div class="jq-selectbox__select"'+d.title+' style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>');
a.css({margin:0,padding:0}).after(f).prependTo(f);var E=c("div.jq-selectbox__select",f),z=c("div.jq-selectbox__select-text",f),d=g.filter(":selected");b();h&&(v='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+q+'"></div><div class="jq-selectbox__not-found">'+w+"</div>");var l=c('<div class="jq-selectbox__dropdown" style="position: absolute">'+v+'<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">'+s+"</ul></div>");f.append(l);
var r=c("ul",l),m=c("li",l),y=c("input",l),x=c("div.jq-selectbox__not-found",l).hide();m.length<n&&y.parent().hide();var B=0,F=0;m.each(function(){var a=c(this);a.css({display:"inline-block","white-space":"nowrap"});a.innerWidth()>B&&(B=a.innerWidth(),F=a.width());a.css({display:"block"})});v=f.clone().appendTo("body").width("auto");h=v.width();v.remove();h==f.width()&&z.width(F);B>f.width()&&l.width(B);""===a.val()?z.text(k).addClass("placeholder"):z.text(d.text());""===g.first().text()&&""!==a.data("placeholder")&&
m.first().hide();a.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0});var G=f.outerHeight(),C=y.outerHeight(),D=r.css("max-height"),k=m.filter(".selected");1>k.length&&m.first().addClass("selected sel");void 0===m.data("li-height")&&m.data("li-height",m.outerHeight());var H=l.css("top");"auto"==l.css("left")&&l.css({left:0});"auto"==l.css("top")&&l.css({top:G});l.hide();k.length&&(g.first().text()!=d.text()&&f.addClass("changed"),f.data("jqfs-class",k.data("jqfs-class")),
f.addClass(k.data("jqfs-class")));if(a.is(":disabled"))return f.addClass("disabled"),!1;E.click(function(){c("div.jq-selectbox").filter(".opened").length&&e.onSelectClosed.call(c("div.jq-selectbox").filter(".opened"));a.focus();if(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)){var b=c(window),q=m.data("li-height"),d=f.offset().top,k=b.height()-G-(d-b.scrollTop()),h=a.data("visible-options");if(void 0===h||""===h)h=e.selectVisibleOptions;var v=5*q,n=q*h;0<h&&6>h&&(v=n);0===h&&(n="auto");var h=
function(){l.height("auto").css({bottom:"auto",top:H});var a=function(){r.css("max-height",Math.floor((k-20-C)/q)*q)};a();r.css("max-height",n);"none"!=D&&r.css("max-height",D);k<l.outerHeight()+20&&a()},s=function(){l.height("auto").css({top:"auto",bottom:H});var a=function(){r.css("max-height",Math.floor((d-b.scrollTop()-20-C)/q)*q)};a();r.css("max-height",n);"none"!=D&&r.css("max-height",D);d-b.scrollTop()-20<l.outerHeight()+20&&a()};!0===t||1===t?k>v+C+20?(h(),f.removeClass("dropup").addClass("dropdown")):
(s(),f.removeClass("dropdown").addClass("dropup")):(!1===t||0===t)&&k>v+C+20&&(h(),f.removeClass("dropup").addClass("dropdown"));c("div.jqselect").css({zIndex:u-1}).removeClass("opened");f.css({zIndex:u});l.is(":hidden")?(c("div.jq-selectbox__dropdown:visible").hide(),l.show(),f.addClass("opened focused"),e.onSelectOpened.call(f)):(l.hide(),f.removeClass("opened dropup dropdown"),c("div.jq-selectbox").filter(".opened").length&&e.onSelectClosed.call(f));y.length&&(y.val("").keyup(),x.hide(),y.keyup(function(){var b=
c(this).val();m.each(function(){c(this).html().match(RegExp(".*?"+b+".*?","i"))?c(this).show():c(this).hide()});""===g.first().text()&&""!==a.data("placeholder")&&m.first().hide();1>m.filter(":visible").length?x.show():x.hide()}));m.filter(".selected").length&&(0!==r.innerHeight()/q%2&&(q/=2),r.scrollTop(r.scrollTop()+m.filter(".selected").position().top-r.innerHeight()/2+q));p(r);return!1}});m.hover(function(){c(this).siblings().removeClass("selected")});m.filter(".selected").text();m.filter(".selected").text();
m.filter(":not(.disabled):not(.optgroup)").click(function(){a.focus();var b=c(this),q=b.text();if(!b.is(".selected")){var d=b.index(),d=d-b.prevAll(".optgroup").length;b.addClass("selected sel").siblings().removeClass("selected sel");g.prop("selected",!1).eq(d).prop("selected",!0);z.text(q);f.data("jqfs-class")&&f.removeClass(f.data("jqfs-class"));f.data("jqfs-class",b.data("jqfs-class"));f.addClass(b.data("jqfs-class"));a.change()}l.hide();f.removeClass("opened dropup dropdown");e.onSelectClosed.call(f)});
l.mouseout(function(){c("li.sel",l).addClass("selected")});a.on("change.styler",function(){z.text(g.filter(":selected").text()).removeClass("placeholder");m.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");g.first().text()!=m.filter(".selected").text()?f.addClass("changed"):f.removeClass("changed")}).on("focus.styler",function(){f.addClass("focused");c("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",
function(){f.removeClass("focused")}).on("keydown.styler keyup.styler",function(b){var c=m.data("li-height");z.text(g.filter(":selected").text());m.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");38!=b.which&&37!=b.which&&33!=b.which&&36!=b.which||r.scrollTop(r.scrollTop()+m.filter(".selected").position().top);40!=b.which&&39!=b.which&&34!=b.which&&35!=b.which||r.scrollTop(r.scrollTop()+m.filter(".selected").position().top-r.innerHeight()+c);13==b.which&&
(b.preventDefault(),l.hide(),f.removeClass("opened dropup dropdown"),e.onSelectClosed.call(f))}).on("keydown.styler",function(a){32==a.which&&(a.preventDefault(),E.click())});c(document).on("click",function(a){c(a.target).parents().hasClass("jq-selectbox")||"OPTION"==a.target.nodeName||(c("div.jq-selectbox").filter(".opened").length&&e.onSelectClosed.call(c("div.jq-selectbox").filter(".opened")),y.length&&y.val("").keyup(),l.hide().find("li.sel").addClass("selected"),f.removeClass("focused opened dropup dropdown"))})}
function d(){var e=new A,d=c("<div"+e.id+' class="jq-select-multiple jqselect'+e.classes+'"'+e.title+' style="display: inline-block; position: relative"></div>');a.css({margin:0,padding:0}).after(d);b();d.append("<ul>"+s+"</ul>");var k=c("ul",d).css({position:"relative","overflow-x":"hidden","-webkit-overflow-scrolling":"touch"}),h=c("li",d).attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none","white-space":"nowrap"}),
e=a.attr("size"),n=k.outerHeight(),w=h.outerHeight();void 0!==e&&0<e?k.css({height:w*e}):k.css({height:4*w});n>d.height()&&(k.css("overflowY","scroll"),p(k),h.filter(".selected").length&&k.scrollTop(k.scrollTop()+h.filter(".selected").position().top));a.prependTo(d).css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0});if(a.is(":disabled"))d.addClass("disabled"),g.each(function(){c(this).is(":selected")&&h.eq(c(this).index()).addClass("selected")});else if(h.filter(":not(.disabled):not(.optgroup)").click(function(b){a.focus();
var d=c(this);b.ctrlKey||b.metaKey||d.addClass("selected");b.shiftKey||d.addClass("first");b.ctrlKey||(b.metaKey||b.shiftKey)||d.siblings().removeClass("selected first");if(b.ctrlKey||b.metaKey)d.is(".selected")?d.removeClass("selected first"):d.addClass("selected first"),d.siblings().removeClass("first");if(b.shiftKey){var e=!1,f=!1;d.siblings().removeClass("selected").siblings(".first").addClass("selected");d.prevAll().each(function(){c(this).is(".first")&&(e=!0)});d.nextAll().each(function(){c(this).is(".first")&&
(f=!0)});e&&d.prevAll().each(function(){if(c(this).is(".selected"))return!1;c(this).not(".disabled, .optgroup").addClass("selected")});f&&d.nextAll().each(function(){if(c(this).is(".selected"))return!1;c(this).not(".disabled, .optgroup").addClass("selected")});1==h.filter(".selected").length&&d.addClass("first")}g.prop("selected",!1);h.filter(".selected").each(function(){var a=c(this),b=a.index();a.is(".option")&&(b-=a.prevAll(".optgroup").length);g.eq(b).prop("selected",!0)});a.change()}),g.each(function(a){c(this).data("optionIndex",
a)}),a.on("change.styler",function(){h.removeClass("selected");var a=[];g.filter(":selected").each(function(){a.push(c(this).data("optionIndex"))});h.not(".optgroup").filter(function(b){return-1<c.inArray(b,a)}).addClass("selected")}).on("focus.styler",function(){d.addClass("focused")}).on("blur.styler",function(){d.removeClass("focused")}),n>d.height())a.on("keydown.styler",function(a){38!=a.which&&37!=a.which&&33!=a.which||k.scrollTop(k.scrollTop()+h.filter(".selected").position().top-w);40!=a.which&&
39!=a.which&&34!=a.which||k.scrollTop(k.scrollTop()+h.filter(".selected:last").position().top-k.innerHeight()+2*w)})}var g=c("option",a),s="";if(a.is("[multiple]")){var x=navigator.userAgent.match(/Android/i)?!0:!1,I=navigator.userAgent.match(/(iPad|iPhone|iPod)/i)?!0:!1;x||I||d()}else n()};s();a.on("refresh",function(){a.off(".styler").parent().before(a).remove();s()})}});else if(a.is(":reset"))a.on("click",function(){setTimeout(function(){a.closest(e.wrapper).find("input, select").trigger("refresh")},
1)})}).promise().done(function(){e.onFormStyled.call()})}})(jQuery);;/*! Projekktor v1.2.37 -jarisflash | http://www.projekktor.com | Copyright 2010, 2011, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com | GNU General Public License - http://www.projekktor.com/license/
*/
jQuery(function($){var projekktors=[];document.createElement("video").canPlayType&&function(){return;var t;var e}();function Iterator(t){this.length=t.length,this.each=function(e){$.each(t,e)},this.size=function(){return t.length}}$.fn.prop||($.fn.prop=function(t,e){return $(this).attr(t,e)}),projekktor=$p=function(){var arg=arguments[0],instances=[],plugins=[];if(!arguments.length)return projekktors[0]||null;if("number"==typeof arg)return projekktors[arg];if("string"==typeof arg){if("*"==arg)return new Iterator(projekktors);for(var i=0;projekktors.length>i;i++){try{if(projekktors[i].getId()==arg.id){instances.push(projekktors[i]);continue}}catch(e){}try{for(var j=0;$(arg).length>j;j++)projekktors[i].env.playerDom.get(0)!=$(arg).get(j)||instances.push(projekktors[i])}catch(e){}try{if(projekktors[i].getParent()==arg){instances.push(projekktors[i]);continue}}catch(e){}try{if(projekktors[i].getId()==arg){instances.push(projekktors[i]);continue}}catch(e){}}if(instances.length>0)return 1==instances.length?instances[0]:new Iterator(instances)}if(0===instances.length){var cfg=arguments[1]||{},callback=arguments[2]||{},count=0,playerA;if("string"==typeof arg)return $.each($(arg),function(){playerA=new PPlayer($(this),cfg,callback),projekktors.push(playerA),count++}),count>1?new Iterator(projekktors):playerA;if(arg)return projekktors.push(new PPlayer(arg,cfg,callback)),new Iterator(projekktors)}return null;function PPlayer(srcNode,cfg,onReady){return this.config=new projekktorConfig("1.3.09"),this.env={muted:!1,playerDom:null,mediaContainer:null,agent:"standard",mouseIsOver:!1,loading:!1,className:"",onReady:onReady},this.media=[],this._plugins=[],this._pluginCache={},this._queue=[],this._cuePoints={},this.listeners=[],this.playerModel={},this._isReady=!1,this._maxElapsed=0,this._currentItem=null,this._playlistServer="",this._id="",this._reelUpdate=function(obj){var ref=this,itemIdx=null,data=obj||[{}],files=data.playlist||data;this.env.loading=!0,this.media=[];try{for(var props in data.config)if(data.config.hasOwnProperty(props)){if(typeof data.config[props].indexOf("objectfunction")>-1)continue;this.config[props]=eval(data.config[props])}null!=data.config&&($p.utils.log("Updated config var: "+props+" to "+this.config[props]),this._promote("configModified"),delete data.config)}catch(e){}$.each(files,function(){itemIdx=ref._addItem(ref._prepareMedia({file:this,config:this.config||{},errorCode:this.errorCode||0})),$.each(this.cuepoints||[],function(){this.item=itemIdx,ref.setCuePoint(this)})}),null===itemIdx&&this._addItem(this._prepareMedia({file:"",config:{},errorCode:97})),this.env.loading=!1,this._promote("scheduled",this.getItemCount()),this._syncPlugins(function(){ref.setActiveItem(0)})},this._addItem=function(t,e,i){var s=0;return 1===this.media.length&&"NA"==this.media[0].mediaModel&&(this._detachplayerModel(),this.media=[]),void 0===e||0>e||e>this.media.length-1?(this.media.push(t),s=this.media.length-1):(this.media.splice(e,i===!0?1:0,t),s=e),this.env.loading===!1&&this._promote("scheduleModified",this.getItemCount()),s},this._removeItem=function(t){var e=0;return 1===this.media.length?"NA"==this.media[0].mediaModel?0:(this.media[0]=this._prepareMedia({file:""}),0):(void 0===t||0>t||t>this.media.length-1?(this.media.pop(),e=this.media.length):(this.media.splice(t,1),e=t),this.env.loading===!1&&this._promote("scheduleModified",this.getItemCount()),e)},this._canPlay=function(t,e,i){var s=this,n=[],a=[],r=i||"http",o="object"==typeof e?e:[e],l=t?t.replace(/x-/,""):void 0,h=s._testMediaSupport();if($.each(o,function(t,e){$.each($.extend(h[r],h["*"]||[])||[],function(t,i){return null!=e&&t!=e?!0:(n=$.merge(n,this),!0)})}),0===n.length)return!1;switch(typeof l){case"undefined":return n.length>0;case"string":if("*"==l)return n;a.push(l);break;case"array":a=l}for(var u in a)if($p.mmap.hasOwnProperty(u)){if("string"!=typeof a[u])break;if($.inArray(a[u],n)>-1)return!0}return!1},this._prepareMedia=function(t){var e=this,i=[],s=[],n=[],a={},r={},o=[],l={},h=[],u=0;for(var c in $p.mmap)$p.mmap.hasOwnProperty(c)&&(platforms="object"==typeof $p.mmap[c].platform?$p.mmap[c].platform:[$p.mmap[c].platform],$.each(platforms,function(i,s){var n=0,o="http";for(var l in t.file)if(t.file.hasOwnProperty(l)){if("config"===l)continue;if(o=t.file[l].streamType||e.getConfig("streamType")||"http",e._canPlay($p.mmap[c].type,s,o)&&n++,0===n)continue;if($p.mmap[c].level=$.inArray(s,e.config._platforms),$p.mmap[c].level=0>$p.mmap[c].level?100:$p.mmap[c].level,h.push("."+$p.mmap[c].ext),a[$p.mmap[c].ext]||(a[$p.mmap[c].ext]=[]),a[$p.mmap[c].ext].push($p.mmap[c]),null===$p.mmap[c].streamType||"*"==$p.mmap[c].streamType||$.inArray(o||[],$p.mmap[c].streamType||"")>-1){r[$p.mmap[c].type]||(r[$p.mmap[c].type]=[]),n=-1;for(var u=0,d=r[$p.mmap[c].type].length;d>u;u++)if(r[$p.mmap[c].type][u].model==$p.mmap[c].model){n=u;break}-1===n&&r[$p.mmap[c].type].push($p.mmap[c])}}else;return!0}));h="^.*.("+h.join("|")+")$","string"==typeof t.file&&(t.file=[{src:t.file}],"string"==typeof t.type&&(t.file=[{src:t.file,type:t.type}])),($.isEmptyObject(t)||t.file===!1||null===t.file)&&(t.file=[{src:null}]);for(var d in t.file)if(t.file.hasOwnProperty(d)){if("config"==d)continue;if("string"==typeof t.file[d]&&(t.file[d]={src:t.file[d]}),null==t.file[d].src)continue;if(null!=t.file[d].type&&""!==t.file[d].type)try{var p=t.file[d].type.split(" ").join("").split(/[\;]codecs=.([a-zA-Z0-9\,]*)[\'|\"]/i);null!=p[1]&&(t.file[d].codec=p[1]),t.file[d].type=p[0].replace(/x-/,""),t.file[d].originalType=p[0]}catch(m){}else t.file[d].type=this._getTypeFromFileExtension(t.file[d].src);r[t.file[d].type]&&r[t.file[d].type].length>0&&(r[t.file[d].type].sort(function(t,e){return t.level-e.level}),o.push(r[t.file[d].type][0]))}0===o.length?o=r["none/none"]:(o.sort(function(t,e){return t.level-e.level}),u=o[0].level,o=$.grep(o,function(t){return t.level==u})),i=[],$.each(o||[],function(){i.push(this.type)});var f=o&&o.length>0?o[0]:{type:"none/none",model:"NA",errorCode:11};i=$p.utils.unique(i);for(d in t.file)if(t.file.hasOwnProperty(d)){if(null==t.file[d].type)continue;if(0>$.inArray(t.file[d].type.replace(/x-/,""),i)&&"none/none"!=f.type)continue;($.isEmptyObject(t.config)||null==t.config.streamType||-1==t.config.streamType.indexOf("rtmp"))&&(t.file[d].src=$p.utils.toAbsoluteURL(t.file[d].src)),null==t.file[d].quality&&(t.file[d].quality="default"),n.push(t.file[d].quality),s.push(t.file[d])}0===s.length&&s.push({src:null,quality:"default"});var g=[];return $.each(this.getConfig("playbackQualities"),function(){g.push(this.key||"default")}),l={ID:t.config.id||$p.utils.randomId(8),cat:t.config.cat||"clip",file:s,platform:f.platform,platforms:platforms,qualities:$p.utils.intersect($p.utils.unique(g),$p.utils.unique(n)),mediaModel:f.model||"NA",errorCode:f.errorCode||t.errorCode||7,config:t.config||{}}},this._modelUpdateListener=function(t,e){var i=this,s=this.playerModel;if(this.playerModel.init)switch("time"!=t&&"progress"!=t&&$p.utils.log("Update: '"+t,this.playerModel.getSrc(),this.playerModel.getModelName(),e),t){case"state":this._promote("state",e);var n=$.map(this.getDC().attr("class").split(" "),function(t){return-1===t.indexOf(i.getConfig("ns")+"state")?t:""});switch(n.push(this.getConfig("ns")+"state"+e.toLowerCase()),this.getDC().attr("class",n.join(" ")),e){case"AWAKENING":this._syncPlugins(function(){s.getState("AWAKENING")&&s.displayItem(!0)});break;case"ERROR":this._addGUIListeners();break;case"PAUSED":this.getConfig("disablePause")===!0&&this.playerModel.applyCommand("play",0);break;case"COMPLETED":if(this._currentItem+1>=this.media.length&&!this.getConfig("loop")&&(this._promote("done",{}),this.getConfig("leaveFullscreen")))return this.reset(),void 0;this.setActiveItem("next")}break;case"modelReady":this._maxElapsed=0,this._promote("item",i._currentItem);break;case"displayReady":this._promote("displayReady",!0),this._syncPlugins(function(){i._promote("ready"),i._addGUIListeners(),s.getState("IDLE")||s.start()});break;case"availableQualitiesChange":this.media[this._currentItem].qualities=e,this._promote("availableQualitiesChange",e);break;case"qualityChange":this.setConfig({playbackQuality:e}),this._promote("qualityChange",e);break;case"volume":this.setConfig({volume:e}),this._promote("volume",e),0>=e?(this.env.muted=!0,this._promote("mute",e)):this.env.muted===!0&&(this.env.muted=!1,this._promote("unmute",e));break;case"playlist":this.setFile(e.file,e.type);break;case"config":this.setConfig(e);break;case"time":if(e>this._maxElapsed){var a=Math.round(100*e/this.getDuration()),r=!1;25>a&&(a=25),a>25&&50>a&&(r="firstquartile",a=50),a>50&&75>a&&(r="midpoint",a=75),a>75&&100>a&&(r="thirdquartile",a=100),r!==!1&&this._promote(r,e),this._maxElapsed=this.getDuration()*a/100}this._promote(t,e);break;case"fullscreen":e===!0?(this.getDC().addClass("fullscreen"),this._enterFullViewport()):(this.getDC().removeClass("fullscreen"),this._exitFullViewport()),this._promote(t,e);break;case"error":this._promote(t,e),this.getConfig("skipTestcard")&&this.getItemCount()>1?this.setActiveItem("next"):(this.playerModel.applyCommand("error",e),this._addGUIListeners());break;case"streamTypeChange":"dvr"==e&&this.getDC().addClass(this.getNS()+"dvr"),this._promote(t,e);break;default:this._promote(t,e)}},this._syncPlugins=function(t){var e=this;this.env.loading=!0,function(){try{if(e._plugins.length>0)for(var i=0;e._plugins.length>i;i++)if(!e._plugins[i].isReady())return setTimeout(arguments.callee,50),void 0;e.env.loading=!1,e._promote("pluginsReady",{});try{t()}catch(s){}}catch(s){}}()},this._MD=function(t){projekktor("#"+t.currentTarget.id.replace(/_media$/,""))._playerFocusListener(t)},this._addGUIListeners=function(){var t=this;this._removeGUIListeners(),this.getDC().get(0).addEventListener?this.getDC().get(0).addEventListener("mousedown",this._MD,!0):this.getDC().mousedown(function(e){t._playerFocusListener(e)}),this.getDC().mousemove(function(e){t._playerFocusListener(e)}).mouseenter(function(e){t._playerFocusListener(e)}).mouseleave(function(e){t._playerFocusListener(e)}).focus(function(e){t._playerFocusListener(e)}).blur(function(e){t._playerFocusListener(e)}),$(window).bind("resize.projekktor"+this.getId(),function(){t.setSize()}).bind("touchstart",function(){t._windowTouchListener(event)}),this.config.enableKeyboard===!0&&($(document).unbind("keydown.pp"+this._id),$(document).bind("keydown.pp"+this._id,function(e){t._keyListener(e)}))},this._removeGUIListeners=function(){$("#"+this.getId()).unbind(),this.getDC().unbind(),this.getDC().get(0).removeEventListener?this.getDC().get(0).removeEventListener("mousedown",this._MD,!0):this.getDC().get(0).detachEvent("onmousedown",this._MD),$(window).unbind("resize.projekktor"+this.getId())},this._registerPlugins=function(){var plugins=$.merge($.merge([],this.config._plugins),this.config._addplugins),pluginName="",pluginObj=null;if(!(this._plugins.length>0||0===plugins.length))for(var i=0;plugins.length>i;i++){pluginName="projekktor"+plugins[i].charAt(0).toUpperCase()+plugins[i].slice(1);try{typeof eval(pluginName)}catch(e){alert("Projekktor Error: Plugin '"+plugins[i]+"' malicious or not available.");continue}pluginObj=$.extend(!0,{},new projekktorPluginInterface,eval(pluginName).prototype),pluginObj.name=plugins[i].toLowerCase(),pluginObj.pp=this,pluginObj.playerDom=this.env.playerDom,pluginObj._init(this.config["plugin_"+plugins[i].toLowerCase()]||{}),null==this.config["plugin_"+pluginObj.name]&&(this.config["plugin_"+pluginObj.name]={}),this.config["plugin_"+pluginObj.name]=$.extend(!0,{},pluginObj.config||{});for(var propName in pluginObj)propName.indexOf("Handler")>1&&(null==this._pluginCache[propName]&&(this._pluginCache[propName]=[]),this._pluginCache[propName].push(pluginObj));this._plugins.push(pluginObj)}},this.removePlugins=function(t){if(0!=this._plugins.length){var e=t||$.merge($.merge([],this.config._plugins),this.config._addplugins),i=this._plugins.length;for(var s=0;e.length>s;s++)for(var n=0;i>n;n++)if(void 0!=this._plugins[n]&&this._plugins[n].name==e[s].toLowerCase()){this._plugins[n].deconstruct(),this._plugins.splice(n,1);for(var a in this._pluginCache)for(var r=0;this._pluginCache[a].length>r;r++)this._pluginCache[a][r].name==e[s].toLowerCase()&&this._pluginCache[a].splice(r,1)}}},this.getPlugins=function(){var t=[];return $.each(this._plugins,function(){t.push({name:this.name,ver:this.version||"unknown"})}),t},this._promote=function(t,e){var i=this;this._enqueue(function(){try{i.__promote(t,e)}catch(s){}})},this.__promote=function(t,e){var i=t,s={};if("object"==typeof i){if(!i._plugin)return;i="plugin_"+i._plugin+$p.utils.capitalise(i._event.toUpperCase())}if("time"!=i&&"progress"!=i&&"mousemove"!=i&&$p.utils.log("Event: ["+i+"]",e,this.listeners),this._pluginCache[i+"Handler"]&&this._pluginCache[i+"Handler"].length>0)for(var n=0;this._pluginCache[i+"Handler"].length>n;n++)if(this.getConfig("debug"))try{this._pluginCache[i+"Handler"][n][i+"Handler"](e,this)}catch(a){$p.utils.log(a)}else this._pluginCache[i+"Handler"][n][i+"Handler"](e,this);if(this._pluginCache.eventHandler&&this._pluginCache.eventHandler.length>0)for(var n=0;this._pluginCache.eventHandler.length>n;n++)if(this.getConfig("debug"))try{this._pluginCache.eventHandler[n].eventHandler(i,e,this)}catch(a){$p.utils.log(a)}else this._pluginCache.eventHandler[n].eventHandler(i,e,this);if(this.listeners.length>0)for(var n=0;this.listeners.length>n;n++)if(this.listeners[n].event==i||"*"==this.listeners[n].event)if(this.getConfig("debug"))try{this.listeners[n].callback(e,this)}catch(a){$p.utils.log(a)}else this.listeners[n].callback(e,this)},this._detachplayerModel=function(){this._removeGUIListeners();try{this.playerModel.destroy(),this._promote("detach",{})}catch(t){}},this._windowTouchListener=function(t){t.touches&&t.touches.length>0&&(($(document.elementFromPoint(t.touches[0].clientX,t.touches[0].clientY)).attr("id")||"").indexOf(this.getDC().attr("id"))>-1?(0==this.env.mouseIsOver&&this._promote("mouseenter",{}),this.env.mouseIsOver=!0,this._promote("mousemove",{}),t.stopPropagation()):this.env.mouseIsOver&&(this._promote("mouseleave",{}),this.env.mouseIsOver=!1))},this._playerFocusListener=function(t){var e=t.type.toLowerCase();switch(e){case"mousedown":if(0==this.env.mouseIsOver)break;if("|TEXTAREA|INPUT".indexOf("|"+t.target.tagName.toUpperCase())>-1)return;if(3==t.which){if($(t.target).hasClass("context"))break;$(document).bind("contextmenu",function(t){return $(document).unbind("contextmenu"),!1})}break;case"mousemove":if(this.env.mouseX!=t.clientX&&this.env.mouseY!=t.clientY&&(this.env.mouseIsOver=!0),this.env.clientX==t.clientX&&this.env.clientY==t.clientY)return;this.env.clientX=t.clientX,this.env.clientY=t.clientY;break;case"focus":case"mouseenter":this.env.mouseIsOver=!0;break;case"blur":case"mouseleave":this.env.mouseIsOver=!1}this._promote(e,t)},this._keyListener=function(t){if(this.env.mouseIsOver&&!("|TEXTAREA|INPUT".indexOf("|"+t.target.tagName.toUpperCase())>-1)){var e=this,i=this.getConfig("keys").length>0?this.getConfig("keys"):[{27:function(t){t.getInFullscreen()?t.setFullscreen(!1):t.setStop()},32:function(t,e){t.setPlayPause(),e.preventDefault()},70:function(t){t.setFullscreen()},39:function(t,e){t.setPlayhead("+5"),e.preventDefault()},37:function(t,e){t.setPlayhead("-5"),e.preventDefault()},38:function(t,e){t.setVolume("+0.05"),e.preventDefault()},40:function(t,e){t.setVolume("-0.05"),e.preventDefault()},68:function(t){t.setDebug()},67:function(t){$p.utils.log("Config Dump",t.config)},80:function(t){$p.utils.log("Schedule Dump",t.media)},84:function(t){$p.utils.log("Cuepoints Dump",t.getCuePoints())}}];this._promote("key",t),$.each(i||[],function(){try{this[t.keyCode](e,t)}catch(i){}try{this["*"](e)}catch(i){}})}},this._enterFullViewport=function(t){var e=this.getIframeParent()||$(window),i=this.getIframe()||this.getDC(),s=$(e[0].document.body).css("overflow");t&&(e=$(window),i=this.getDC()),i.data("fsdata",{scrollTop:e.scrollTop()||0,scrollLeft:e.scrollLeft()||0,targetStyle:i.attr("style")||"",targetWidth:i.width(),targetHeight:i.height(),bodyOverflow:"visible"==s?"auto":s,bodyOverflowX:$(e[0].document.body).css("overflow-x"),bodyOverflowY:$(e[0].document.body).css("overflow-y"),iframeWidth:i.attr("width")||0,iframeHeight:i.attr("height")||0}).css({position:"absolute",display:"block",top:0,left:0,width:"100%",height:"100%",zIndex:99999,margin:0,padding:0}),e.scrollTop(0).scrollLeft(0),$(e[0].document.body).css({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})},this._exitFullViewport=function(t){var e=this.getIframeParent()||$(window),i=this.getIframe()||this.getDC(),s=i.data("fsdata")||null;t&&(e=$(window),i=this.getDC()),null!=s&&(e.scrollTop(s.scrollTop).scrollLeft(s.scrollLeft),$(e[0].document.body).css("overflow",s.bodyOverflow),$(e[0].document.body).css("overflow-x",s.bodyOverflowX),$(e[0].document.body).css("overflow-y",s.bodyOverflowY),s.iframeWidth>0&&!t?i.attr("width",s.iframeWidth+"px").attr("height",s.iframeHeight+"px"):i.width(s.targetWidth).height(s.targetHeight),i.attr("style",null==s.targetStyle?"":s.targetStyle).data("fsdata",null))},this.pluginAPI=function(){var t=Array.prototype.slice.call(arguments)||null,e=t.shift(),i=t.shift();if(null!=e&&null!=i)for(var s=0;this._plugins.length>s;s++)if(this._plugins[s].name==e)return this._plugins[s][i](t[0]),void 0},this.getPlayerVer=function(){return this.config._version},this.getIsLastItem=function(){return this._currentItem==this.media.length-1&&this.config._loop!==!0},this.getIsFirstItem=function(){return 0==this._currentItem&&this.config._loop!==!0},this.getItemConfig=function(t,e){return this.getConfig(t,e)},this.getConfig=function(t,e){var i=e||this._currentItem,s=null!=this.config["_"+t]?this.config["_"+t]:this.config[t];if(null==t)return this.media[i].config;if(null==this.config["_"+t])try{void 0!==this.media[i].config[t]&&(s=this.media[i].config[t])}catch(n){}if(t.indexOf("plugin_")>-1)try{this.media[i].config[t]&&(s=$.extend(!0,{},this.config[t],this.media[i].config[t]))}catch(n){}if(null==s)return null;if("object"==typeof s&&null===s.length?s=$.extend(!0,{},s||{}):"object"==typeof s&&(s=$.extend(!0,[],s||[])),"string"==typeof s)switch(s){case"true":s=!0;break;case"false":s=!1;break;case"NaN":case"undefined":case"null":s=null}return s},this.getDC=function(){return this.env.playerDom},this.getState=function(t){var e="IDLE";try{e=this.playerModel.getState()}catch(i){}return null!=t?e==t.toUpperCase():e},this.getLoadProgress=function(){try{return this.playerModel.getLoadProgress()}catch(t){return 0}},this.getKbPerSec=function(){try{return this.playerModel.getKbPerSec()}catch(t){return 0}},this.getItemCount=function(){return 1==this.media.length&&"na"==this.media[0].mediaModel?0:this.media.length},this.getItemId=function(t){return this.media[t||this._currentItem].ID||null},this.getItemIdx=function(){return this._currentItem},this.getPlaylist=function(){return this.getItem("*")},this.getItem=function(){if(1==this.media.length&&"na"==this.media[0].mediaModel)return null;switch(arguments[0]||"current"){case"next":return $.extend(!0,{},this.media[this._currentItem+1]||{});case"prev":return $.extend(!0,{},this.media[this._currentItem-1]||{});case"current":return $.extend(!0,{},this.media[this._currentItem]||{});case"*":return $.extend(!0,[],this.media||[]);default:return $.extend(!0,{},this.media[arguments[0]||this._currentItem]||{})}},this.getVolume=function(){return this.getConfig("fixedVolume")===!0?this.config.volume:this.getConfig("volume")},this.getTrackId=function(){return this.getConfig("trackId")?this.config.trackId:null!=this._playlistServer?"pl"+this._currentItem:null},this.getLoadPlaybackProgress=function(){try{return this.playerModel.getLoadPlaybackProgress()}catch(t){return 0}},this.getSource=function(){try{return this.playerModel.getSource()[0].src}catch(t){return!1}},this.getDuration=function(){try{return this.playerModel.getDuration()}catch(t){return 0}},this.getPosition=function(){try{return this.playerModel.getPosition()||0}catch(t){return 0}},this.getMaxPosition=function(){try{return this.playerModel.getMaxPosition()||0}catch(t){return 0}},this.getFrame=function(){try{return this.playerModel.getFrame()}catch(t){return 0}},this.getTimeLeft=function(){try{return this.playerModel.getDuration()-this.playerModel.getPosition()}catch(t){return this.media[this._currentItem].duration}},this.getInFullscreen=function(){return this.getNativeFullscreenSupport().isFullScreen()},this.getMediaContainer=function(){return null==this.env.mediaContainer&&(this.env.mediaContainer=$("#"+this.getMediaId())),0==this.env.mediaContainer.length&&(this.env.mediaContainer=this.env.playerDom.find("."+this.getNS()+"display").length>0?$(document.createElement("div")).attr({id:this.getId()+"_media"}).css({overflow:"hidden",height:"100%",width:"100%",top:0,left:0,padding:0,margin:0,display:"block"}).appendTo(this.env.playerDom.find("."+this.getNS()+"display")):$(document.createElement("div")).attr({id:this.getMediaId()}).css({width:"1px",height:"1px"}).appendTo($(document.body))),this.env.mediaContainer},this.getMediaId=function(){return this.getId()+"_media"},this.getMediaType=function(){try{return this._getTypeFromFileExtension(this.playerModel.getSrc())||"na/na"}catch(t){return"na/na"}},this.getUsesFlash=function(){return this.playerModel.modelId.indexOf("FLASH")>-1},this.getModel=function(){try{return this.media[this._currentItem].mediaModel.toUpperCase()}catch(t){return"NA"}},this.getIframeParent=this.getIframeWindow=function(){try{var t=!1;return this.config._iframe&&(t=parent.location.host||!1),t===!1?!1:$(parent.window)}catch(e){return!1}},this.getIframe=function(){try{var t=[];return this.config._iframe&&(t=window.$(frameElement)||[]),0==t.length?!1:t}catch(e){return!1}},this.getIframeAllowFullscreen=function(){var t=null;try{t=window.frameElement.attributes.allowFullscreen||window.frameElement.attributes.mozallowFullscreen||window.frameElement.attributes.webkitallowFullscreen||null}catch(e){t=!0}return null!=t?!0:!1},this.getPlaybackQuality=function(){var t="default";try{t=this.playerModel.getPlaybackQuality()}catch(e){}return"default"==t&&(t=this.getConfig("playbackQuality")),("default"==t||-1==$.inArray(t,this.getPlaybackQualities()))&&(t=this.getAppropriateQuality()),-1==$.inArray(t,this.getPlaybackQualities())&&(t="default"),t},this.getPlaybackQualities=function(){try{return $.extend(!0,[],this.media[this._currentItem].qualities||[])}catch(t){}return[]},this.getIsMobileClient=function(t){var e=navigator.userAgent.toLowerCase();var i=["android","windows ce","blackberry","palm","mobile"];for(var s=0;i.length>s;s++)if(e.indexOf(i[s])>-1)return t?i[s].toUpperCase()==t.toUpperCase():!0;return!1},this.getCanPlay=function(t,e,i){return this._canPlay(t,e,i)},this.getCanPlayNatively=function(t){return this._canPlay(t,"native")},this.getPlatform=function(){return this.media[this._currentItem].platform||"error"},this.getPlatforms=function(){var t=this,e=this._testMediaSupport(!0),i=this.getConfig("platforms"),s=[],n=[];try{for(var a in this.media[this._currentItem].file)if(this.media[this._currentItem].file.hasOwnProperty(a))for(var r in e)this._canPlay(this.media[this._currentItem].file[a].type.replace(/x-/,""),e[r].toLowerCase(),this.getConfig("streamType"))&&-1==$.inArray(e[r].toLowerCase(),n)&&n.push(e[r].toLowerCase())}catch(o){}return n.sort(function(t,e){return $.inArray(t,i)-$.inArray(e,i)}),n},this.getNativeFullscreenSupport=function(){var t=this,e={supportsFullScreen:"viewport",isFullScreen:function(){try{return t.getDC().hasClass("fullscreen")}catch(e){return!1}},requestFullScreen:function(){t.playerModel.applyCommand("fullscreen",!0)},cancelFullScreen:function(){t.playerModel.applyCommand("fullscreen",!1)},prefix:"",ref:this},i="webkit moz o ms khtml".split(" ");if(document.cancelFullScreen!==void 0)e.supportsFullScreen=!0;else for(var s=0,n=i.length;n>s;s++)if(e.prefix=i[s],document.createElement("video")[e.prefix+"EnterFullscreen"]!==void 0&&(e.supportsFullScreen="mediaonly"),document[e.prefix+"CancelFullScreen"]!==void 0&&(e.supportsFullScreen="dom","moz"==e.prefix&&document[e.prefix+"FullScreenEnabled"]===void 0&&(e.supportsFullScreen="viewport")),e.supportsFullScreen!==!1&&"viewport"!==e.supportsFullScreen)break;return"viewport"==e.supportsFullScreen||"dom"==e.supportsFullScreen&&this.getConfig("forceFullViewport")?e:"mediaonly"==e.supportsFullScreen?(e.requestFullScreen=function(e){t.playerModel.getMediaElement().get(0)[this.prefix+"EnterFullscreen"]()},e.dest={},e.cancelFullScreen=function(){},e):(e.isFullScreen=function(e){var i=t.getIframe()?parent.window.document:document;switch(this.prefix){case"":return i.fullScreen;case"webkit":return i.webkitIsFullScreen;case"moz":return i[this.prefix+"FullScreen"]||t.getDC().hasClass("fullscreen")&&e!==!0;default:return i[this.prefix+"FullScreen"]}},e.requestFullScreen=function(){if(!this.isFullScreen()){var e=t.getIframeParent()||$(window),i=t.getIframe()?t.getIframe().get(0):null||t.getDC().get(0),s=this,n=t.getIframe()?parent.window.document:document,e=t.getIframeParent()||$(window);e.data("fsdata",{scrollTop:e.scrollTop(),scrollLeft:e.scrollLeft()}),$(n).unbind(this.prefix+"fullscreenchange.projekktor"),""===this.prefix?i.requestFullScreen():i[this.prefix+"RequestFullScreen"](),s.ref.playerModel.applyCommand("fullscreen",!0),$(n).bind(this.prefix+"fullscreenchange.projekktor",function(t){if(s.isFullScreen(!0))s.ref.playerModel.applyCommand("fullscreen",!0);else{s.ref.playerModel.applyCommand("fullscreen",!1);var e=s.ref.getIframeParent()||$(window),i=e.data("fsdata");null!=i&&(e.scrollTop(i.scrollTop),e.scrollLeft(i.scrollLeft))}})}},e.cancelFullScreen=function(){var e=t.getIframe()?parent.window.document:document,i=t.getIframeParent()||$(window),s=i.data("fsdata");$(t.getIframe()?parent.window.document:document).unbind(this.prefix+"fullscreenchange.projekktor"),e.exitFullScreen?e.exitFullScreen():""==this.prefix?e.cancelFullScreen():e[this.prefix+"CancelFullScreen"](),null!=s&&(i.scrollTop(s.scrollTop),i.scrollLeft(s.scrollLeft)),t.playerModel.applyCommand("fullscreen",!1)},e)},this.getId=function(){return this._id},this.getHasGUI=function(){try{return this.playerModel.getHasGUI()}catch(t){return!1}},this.getCssPrefix=this.getNS=function(){return this.config._cssClassPrefix||this.config._ns||"pp"},this.getPlayerDimensions=function(){return{width:this.getDC().width(),height:this.getDC().height()}},this.getMediaDimensions=function(){return this.playerModel.getMediaDimensions()||{width:0,height:0}},this.getAppropriateQuality=function(t){var e=t||this.getPlaybackQualities()||[];if(0==e.length)return[];var i=this.env.playerDom.width(),s=this.env.playerDom.height(),n=$p.utils.roundNumber(i/s,2),a={};return $.each(this.getConfig("playbackQualities")||[],function(){if(0>$.inArray(this.key,e))return!0;if((this.minHeight||0)>s&&s>=a.minHeight)return!0;if((a.minHeight||0)>this.minHeight)return!0;if("number"==typeof this.minWidth){if(0===this.minWidth&&this.minHeight>s)return!0;if(this.minWidth>i)return!0;a=this}else if("object"==typeof this.minWidth){var t=this;$.each(this.minWidth,function(){return(this.ratio||100)>n?!0:this.minWidth>i?!0:(a=t,!0)})}return!0}),$.inArray("auto",this.getPlaybackQualities())>-1?"auto":a.key||"default"},this.getFromUrl=function(t,e,i,s,n){var a=null,r=this,o=!this.getIsMobileClient();if(e==r&&"_reelUpdate"==i&&this._promote("scheduleLoading",1+this.getItemCount()),"_"!=i.substr(0,1)?window[i]=function(t){try{delete window[i]}catch(s){}e[i](t)}:n.indexOf("jsonp")>-1&&(this["_jsonp"+i]=function(t){e[i](t)}),n){if(void 0==$.parseJSON&&n.indexOf("json")>-1)return this._raiseError("Projekktor requires at least jQuery 1.4.2 in order to handle JSON playlists."),this;n=n.indexOf("/")>-1?n.split("/")[1]:n}var l={url:t,complete:function(t,r){if(void 0==n)try{t.getResponseHeader("Content-Type").indexOf("xml")>-1&&(n="xml"),t.getResponseHeader("Content-Type").indexOf("json")>-1&&(n="json"),t.getResponseHeader("Content-Type").indexOf("html")>-1&&(n="html")}catch(o){}a=$p.utils.cleanResponse(t.responseText,n);try{a=s(a,t.responseText,e)}catch(o){}if("error"!=r&&"jsonp"!=n)try{e[i](a)}catch(o){}},error:function(t){e[i]&&"jsonp"!=n&&e[i](!1)},cache:!0,async:o,dataType:n,jsonpCallback:"_"!=i.substr(0,1)?!1:"projekktor('"+this.getId()+"')._jsonp"+i,jsonp:"_"!=i.substr(0,1)?!1:"callback"};return l.xhrFields={withCredentials:!0},l.beforeSend=function(t){t.withCredentials=!0},$.support.cors=!0,$.ajax(l),this},this.setActiveItem=function(t){var e=0,i=this._currentItem,s=this,n=!1;if("string"==typeof t)switch(t){case"same":e=this._currentItem;break;case"previous":e=this._currentItem-1;break;case"next":e=this._currentItem+1}else e="number"==typeof t?parseInt(t):0;if(e!=this._currentItem&&1==this.getConfig("disallowSkip")&&!this.getState("COMPLETED")&&!this.getState("IDLE"))return this;this._detachplayerModel(),this.env.loading=!1,0!==e||null!=i&&i!=e||!(this.config._autoplay===!0||"DESTROYING|AWAKENING".indexOf(this.getState())>-1)?this.getItemCount()>1&&e!=i&&null!=i&&this.config._continuous===!0&&this.getItemCount()>e&&(n=!0):n=!0,(e>=this.getItemCount()||0>e)&&(n=this.config._loop,e=0),this._currentItem=e;var a=this.getDC().hasClass("fullscreen");this.getDC().attr("class",this.env.className),a&&this.getDC().addClass("fullscreen");var r=this.media[this._currentItem].mediaModel.toUpperCase();return $p.models[r]?(null!=this.getConfig("className",null)&&this.getDC().addClass(this.getNS()+this.getConfig("className")),this.getDC().addClass(this.getNS()+(this.getConfig("streamType")||"http")),$p.utils.cssTransitions()||this.getDC().addClass("notransitions"),this.getIsMobileClient()&&this.getDC().addClass("mobile")):(r="NA",this.media[this._currentItem].mediaModel=r,this.media[this._currentItem].errorCode=8),this.playerModel=new playerModel,$.extend(this.playerModel,$p.models[r].prototype),this._promote("syncing","display"),this._enqueue(function(){try{s._applyCuePoints()}catch(t){}}),this.playerModel._init({media:$.extend(!0,{},this.media[this._currentItem]),model:r,pp:this,environment:$.extend(!0,{},this.env),autoplay:n,quality:this.getPlaybackQuality(),fullscreen:this.getInFullscreen()}),this},this.setPlay=function(){var t=this;return this.getConfig("thereCanBeOnlyOne")&&projekktor("*").each(function(){this.getId()!==t.getId()&&this.setStop()}),this._enqueue("play",!1),this},this.setPause=function(){return this._enqueue("pause",!1),this},this.setStop=function(t){var e=this;return this.getState("IDLE")?this:(t?this._enqueue(function(){e._currentItem=0,e.setActiveItem(0)}):this._enqueue("stop",!1),this)},this.setPlayPause=function(){return this.getState("PLAYING")?this.setPause():this.setPlay(),this},this.setVolume=function(t,e){var i=this.getVolume();if(1==this.getConfig("fixedVolume"))return this;switch(typeof t){case"string":var s=t.substr(0,1);switch(t=parseFloat(t.substr(1)),s){case"+":t=this.getVolume()+t;break;case"-":t=this.getVolume()-t;break;default:t=this.getVolume()}case"number":t=parseFloat(t),t=t>1?1:t,t=0>t?0:t;break;default:return this}if(t>i&&e){if(t-i>.03){for(var n=i;t>=n;n+=.03)this._enqueue("volume",n,e);return this._enqueue("volume",t,e),this}}else if(i>t&&e&&i-t>.03){for(var n=i;n>=t;n-=.03)this._enqueue("volume",n,e);return this._enqueue("volume",t,e),this}return this._enqueue("volume",t),this},this.setPlayhead=this.setSeek=function(t){if(1==this.getConfig("disallowSkip"))return this;if("string"==typeof t){var e=t.substr(0,1);t=parseFloat(t.substr(1)),t="+"==e?this.getPosition()+t:"-"==e?this.getPosition()-t:this.getPosition()}return"number"==typeof t&&this._enqueue("seek",Math.round(100*t)/100),this},this.setFrame=function(t){if(null==this.getConfig("fps"))return this;if(1==this.getConfig("disallowSkip"))return this;if("string"==typeof t){var e=t.substr(0,1);t=parseFloat(t.substr(1)),t="+"==e?this.getFrame()+t:"-"==e?this.getFrame()-t:this.getFrame()}return"number"==typeof t&&this._enqueue("frame",t),this
},this.setPlayerPoster=function(t){var e=this;return this._enqueue(function(){e.setConfig({poster:t},0)}),this._enqueue(function(){e.playerModel.setPosterLive()}),this},this.setConfig=function(){var t=this,e=arguments;return this._enqueue(function(){t._setConfig(e[0]||null,e[1]||null)}),this},this._setConfig=function(){if(!arguments.length)return result;var confObj=arguments[0],dest="*",value=!1;if("object"!=typeof confObj)return this;dest="string"==arguments[1]||"number"==arguments[1]?arguments[1]:this._currentItem;for(var i in confObj)if(null==this.config["_"+i]){try{value=eval(confObj[i])}catch(e){value=confObj[i]}if("*"!=dest){if(void 0==this.media[dest])return this;null==this.media[dest].config&&(this.media[dest].config={}),this.media[dest].config[i]=value}else $.each(this.media,function(){null==this.config&&(this.config={}),this.config[i]=value})}return this},this.setFullscreen=function(t){var e=this.getNativeFullscreenSupport();return t=null==t?!e.isFullScreen():t,t===!0?e.requestFullScreen():e.cancelFullScreen(),this},this.setSize=function(t){var e=this.getIframe()||this.getDC(),i=e.data("fsdata")||null,s=t&&null!=t.width?t.width:null!=this.getConfig("width")?this.getConfig("width"):!1,n=t&&null!=t.height?t.height:null==this.getConfig("height")&&this.getConfig("ratio")?Math.round((s||this.getDC().width())/this.getConfig("ratio")):null!=this.getConfig("height")?this.getConfig("height"):!1;this.getInFullscreen()&&null!=i?(i.targetWidth=s,i.targetHeight=n,e.data("fsdata",i)):(s&&e.css({width:s+"px"}),n&&e.css({height:n+"px"}));try{this.playerModel.applyCommand("resize")}catch(a){}},this.setLoop=function(t){this.config._loop=t||!this.config._loop},this.setDebug=function(t){$p.utils.logging=t||!$p.utils.logging,$p.utils.logging&&$p.utils.log("DEBUG MODE for player #"+this.getId())},this.addListener=function(t,e){var i=this;return this._enqueue(function(){i._addListener(t,e)}),this},this._addListener=function(t,e){var i=t.indexOf(".")>-1?t.split("."):[t,"default"];return this.listeners.push({event:i[0],ns:i[1],callback:e}),this},this.removeListener=function(t,e){var i=this.listeners.length,s=t.indexOf(".")>-1?t.split("."):[t,"*"];for(var n=0;i>n;n++)void 0!=this.listeners[n]&&(this.listeners[n].event==s[0]||"*"===s[0])&&(this.listeners[n].ns!=s[1]&&"*"!==s[1]||this.listeners[n].callback!=e&&null!=e||this.listeners.splice(n,1));return this},this.setItem=function(){var t=arguments[0];var e=0;return this._clearqueue(),null==t?(e=this._removeItem(arguments[1]),e===this._currentItem&&this.setActiveItem("previous")):(e=this._addItem(this._prepareMedia({file:t,config:t.config||{}}),arguments[1],arguments[2]),e===this._currentItem&&this.setActiveItem(this._currentItem)),this},this.setFile=function(){var t=arguments[0]||"",e=arguments[1]||this._getTypeFromFileExtension(t),i=[];return this.env.loading===!0?this:(this._clearqueue(),this.env.loading=!0,this._detachplayerModel(),"object"==typeof t?($p.utils.log("Applying incoming JS Object",t),this._reelUpdate(t),this):(i[0]={},i[0].file={},i[0].file.src=t||"",i[0].file.type=e||this._getTypeFromFileExtension(splt[0]),i[0].file.type.indexOf("/xml")>-1||i[0].file.type.indexOf("/json")>-1?($p.utils.log("Loading external data from "+i[0].file.src+" supposed to be "+i[0].file.type),this._playlistServer=i[0].file.src,this.getFromUrl(i[0].file.src,this,"_reelUpdate",this.getConfig("reelParser"),i[0].file.type),this):($p.utils.log("Applying incoming single file:"+i[0].file.src,i),this._reelUpdate(i),this)))},this.setPlaybackQuality=function(t){var e=t||this.getAppropriateQuality();return $.inArray(e,this.media[this._currentItem].qualities||[])>-1&&(this.playerModel.applyCommand("quality",e),this.setConfig({playbackQuality:e})),this},this.openUrl=function(t){return t=t||{url:"",target:"",pause:!1},""==t.url?this:(t.pause===!0&&this.setPause(),window.open(t.url,t.target).focus(),this)},this.selfDestruct=this.destroy=function(){var t=this;return this._enqueue(function(){t._destroy()}),this},this._destroy=function(){var t=this;return $(this).unbind(),this.removePlugins(),this.playerModel.destroy(),this._removeGUIListeners(),$.each(projekktors,function(e){try{if(this.getId()==t.getId()||this.getId()==t.getId()||this.getParent()==t.getId())return projekktors.splice(e,1),void 0}catch(i){}}),this.env.playerDom.replaceWith(this.env.srcNode),this._promote("destroyed"),this.removeListener("*"),this},this.reset=function(){var t=this;return this._clearqueue(),this._enqueue(function(){t._reset()}),this},this._reset=function(){var t={},e=this;this.setFullscreen(!1),$(this).unbind(),$(this.getIframe()?parent.window.document:document).unbind(".projekktor"),$(window).unbind(".projekktor"+this.getId()),this.playerModel.destroy(),this.playerModel={},this.removePlugins(),this._removeGUIListeners(),this.env.mediaContainer=null,this._currentItem=null;for(var i in this.config)t["_"==i.substr(0,1)?i.substr(1):i]=this.config[i];return t.autoplay=!1,"function"==typeof this.env.onReady&&this._enqueue(e.env.onReady(e)),this._init(this.env.playerDom,t),this},this.setCuePoint=function(t,e){var i=void 0!==t.item?t.item:this.getItemIdx(),s=$.extend(!0,{offset:0},e),n=this,a={id:t.id||$p.utils.randomId(8),group:t.group||$p.utils.randomId(8),item:i,on:($p.utils.toSeconds(t.on)||0)+s.offset,off:($p.utils.toSeconds(t.off)||$p.utils.toSeconds(t.on)||0)+s.offset,value:t.value||null,callback:t.callback||function(){},precision:null==t.precision?1:t.precision,title:null==t.title?"":t.title,_listeners:[],_unlocked:!1,_active:!1,_lastTime:0,isAvailable:function(){return this._unlocked},_stateListener:function(t,e){if("STOPPED|COMPLETED|DESTROYING".indexOf(t)>-1){if(this._active)try{this.callback(!1,this,e)}catch(i){}this._active=!1,this._lastTime=-1}},_timeListener:function(t,e){if(e.getItemIdx()===this.item||"*"==this.item){var i=0==this.precision?Math.round(t):$p.utils.roundNumber(t,this.precision),s=this;if(this._unlocked===!1){var n=e.getDuration()*e.getLoadProgress()/100;if(!(n>=this.on||i>=this.on))return;$.each(this._listeners.unlock||[],function(){this(s,e)}),this._unlocked=!0}if(this._lastTime!=i){var a=1>=i-this._lastTime&&i-this._lastTime>0;if((i>=this.on&&this.off>=i||i>=this.on&&this.on==this.off&&this.on+1>=i)&&this._active!==!0){this._active=!0,$p.utils.log("Cue Point: [ON "+this.on+"] at "+i,this);try{this.callback({id:this.id,enabled:!0,value:this.value,seeked:!a,player:e})}catch(r){}}else if((this.on>i||i>this.off)&&this.off!=this.on&&1==this._active){this._active=!1,$p.utils.log("Cue Point: [OFF] at "+this.off,this);try{this.callback({id:this.id,enabled:!1,value:this.value,seeked:!a,player:e})}catch(r){}}this.off==this.on&&this._active&&new Number(i-this.on).toPrecision(this.precision)>=1&&(this._active=!1),this._lastTime=i}}},addListener:function(t,e){null==this._listeners[t]&&(this._listeners[t]=[]),this._listeners[t].push(e||function(){})}};return null!=t.unlockCallback&&a.addListener("unlock",t.unlockCallback),null==this._cuePoints[i]&&(this._cuePoints[i]=[]),this._cuePoints[i].push(a),this.getState("IDLE")||this._promote("cuepointAdded"),this},this.setGotoCuePoint=function(t,e){var i=this.getCuePoints(e);return this.setPlayhead(i[t].on),this},this.getCuePoints=function(t){return this._cuePoints[t||this.getItemIdx()]||this._cuePoints||{}},this.getCuePointById=function(t,e){var i=!1,s=this.getCuePoints(e);for(var n=0;s.length>n;n++)if(s.id==t){i=this;break}return i},this.removeCuePoints=function(t,e){var i=this.getCuePoints(t||0)||{},s=[];for(var n=0;i.length>n;n++)i[n].group==e&&(this.removeListener("time",i[n].timeEventHandler),this.removeListener("state",i[n].stateEventHandler),s.push(n));for(var a=0;s.length>a;a++)i.splice(s[a]-a,1);return this},this.syncCuePoints=function(){var t=this;return this._enqueue(function(){try{t._applyCuePoints()}catch(e){}}),this},this._applyCuePoints=function(t){var e=this;(null!=this._cuePoints[this._currentItem]||null!=this._cuePoints["*"])&&$.each($.merge(this._cuePoints[this._currentItem]||[],this._cuePoints["*"]||[]),function(t,i){try{e.removeListener("time",i.timeEventHandler),e.removeListener("state",i.stateEventHandler)}catch(s){}i.timeEventHandler=function(t,e){try{i._timeListener(t,e)}catch(s){}},i.stateEventHandler=function(t,e){try{i._stateListener(t,e)}catch(s){}},e.addListener("time",i.timeEventHandler),e.addListener("state",i.stateEventHandler),e.addListener("item",function(){e.removeListener("time",i.timeEventHandler),e.removeListener("state",i.stateEventHandler)})})},this._enqueue=function(t,e,i){null!=t&&(this._queue.push({command:t,params:e,delay:i}),this._processQueue())},this._clearqueue=function(t,e){this._isReady===!0&&(this._queue=[])},this._processQueue=function(){var t=this,e=!1;this._processing!==!0&&this.env.loading!==!0&&(this._processing=!0,function(){try{e=t.playerModel.getIsReady()}catch(i){}if(t.env.loading!==!0&&e){try{var s=t._queue.shift();null!=s&&("string"==typeof s.command?s.delay>0?setTimeout(function(){t.playerModel.applyCommand(s.command,s.params)},s.delay):t.playerModel.applyCommand(s.command,s.params):s.command(t))}catch(i){$p.utils.log("ERROR:",i)}return 0==t._queue.length?(t._isReady===!1&&(t._isReady=!0),t._processing=!1,void 0):(arguments.callee(),void 0)}setTimeout(arguments.callee,100)}())},this._getTypeFromFileExtension=function(t){var e="",i=[],s={},i=[],n=null,a=!0;for(var r in $p.mmap)if($p.mmap.hasOwnProperty(r)){n=$p.mmap[r].platform,"object"!=typeof n&&(n=[n]),a=!0;for(var o=0;n.length>o;o++)null!=n[o]&&(this.getConfig("enable"+n[o].toUpperCase()+"Platform")===!1||-1===$.inArray(n[o],this.getConfig("platforms")))&&(a=!1);if(a===!1)continue;i.push("\\."+$p.mmap[r].ext),s[$p.mmap[r].ext]=$p.mmap[r]}i="^.*.("+i.join("|")+")";try{e=t.match(RegExp(i))[1],e=e?e.replace(".",""):"NaN"}catch(l){e="NaN"}return s[e].type},this._testMediaSupport=function(t){var e={},i=[],s="",n=this;if(t){if(null!=$p._platformTableCache)return $p._platformTableCache}else if(null!=$p._compTableCache)return $p._compTableCache;for(var a=0;$p.mmap.length>a;a++)$p.mmap.hasOwnProperty(a)&&(platforms="object"==typeof $p.mmap[a].platform?$p.mmap[a].platform:[$p.mmap[a].platform],$.each(platforms,function(t,r){return null==r?!0:(s=$p.mmap[a].streamType||["http"],$.each(s,function(t,s){if(null==e[s]&&(e[s]={}),null==e[s][r]&&(e[s][r]=[]),$.inArray($p.mmap[a].type,e[s][r])>-1)return!0;var o=""+($p.models[$p.mmap[a].model.toUpperCase()].prototype[r.toLowerCase()+"Version"]||"1");try{if($p.utils.versionCompare($p.platforms[r.toUpperCase()]($p.mmap[a].type),o))return 0!=n.getConfig("enable"+r.toUpperCase()+"Platform")&&$.inArray(r.toLowerCase(),n.getConfig("platforms"))>-1&&(e[s][r].push($p.mmap[a].type),-1==$.inArray(r.toUpperCase(),i)&&i.push(r.toUpperCase())),!0}catch(l){$p.utils.log("ERROR","platform "+r+" not defined")}return!0}),!0)}));return $p._compTableCache=e,$p._platformTableCache=i,t?$p._platformTableCache:$p._compTableCache},this._readMediaTag=function(t){var e={},i="",s=[],n=this;if(-1=="VIDEOAUDIO".indexOf(t[0].tagName.toUpperCase()))return!1;this.getConfig("ignoreAttributes")||(e={autoplay:void 0===t.attr("autoplay")&&void 0===t.prop("autoplay")||t.prop("autoplay")===!1?!1:!0,controls:void 0===t.attr("controls")&&void 0===t.prop("controls")||t.prop("controls")===!1?!1:!0,loop:void 0===t.attr("autoplay")&&void 0===t.prop("loop")||t.prop("loop")===!1?!1:!0,title:void 0!==t.attr("title")&&t.attr("title")!==!1?t.attr("title"):"",poster:void 0!==t.attr("poster")&&t.attr("poster")!==!1?t.attr("poster"):"",width:void 0!==t.attr("width")&&t.attr("width")!==!1?t.attr("width"):null,height:void 0!==t.attr("height")&&t.attr("height")!==!1?t.attr("height"):null}),i=$($("<div></div>").html($(t).clone())).html(),s=["autoplay","controls","loop"];for(var a=0;s.length>a;a++)-1!=i.indexOf(s[a])&&(e[s[a]]=!0);if(e.playlist=[],e.playlist[0]=[],e.playlist[0].config={tracks:[]},t.attr("src")&&e.playlist[0].push({src:t.attr("src"),type:t.attr("type")||this._getTypeFromFileExtension(t.attr("src"))}),!$("<video/>").get(0).canPlayType){var r=t;do if(r=r.next("source,track"),r.attr("src"))switch(r.get(0).tagName.toUpperCase()){case"SOURCE":e.playlist[0].push({src:r.attr("src"),type:r.attr("type")||this._getTypeFromFileExtension(r.attr("src")),quality:r.attr("data-quality")||""});break;case"TRACK":$(this).attr("src")&&e.playlist[0].config.tracks.push({src:r.attr("src"),kind:r.attr("kind")||"subtitle",lang:r.attr("srclang")||null,label:r.attr("label")||null})}while(r.attr("src"))}return 0==e.playlist[0].length&&t.children("source,track").each(function(){if($(this).attr("src"))switch($(this).get(0).tagName.toUpperCase()){case"SOURCE":e.playlist[0].push({src:$(this).attr("src"),type:$(this).attr("type")||n._getTypeFromFileExtension($(this).attr("src")),quality:$(this).attr("data-quality")||""});break;case"TRACK":e.playlist[0].config.tracks.push({src:$(this).attr("src"),kind:$(this).attr("kind")||"subtitle",lang:$(this).attr("srclang")||null,label:$(this).attr("label")||null})}}),e},this._raiseError=function(t){this.env.playerDom.html(t).css({color:"#fdfdfd",backgroundColor:"#333",lineHeight:this.config.height+"px",textAlign:"center",display:"block"}),this._promote("error")},this._init=function(t,e){var i=t||srcNode,s=e||cfg,n=this._readMediaTag(i);if(this.env.srcNode=i.wrap("<div></div>").parent().html(),i.unwrap(),this.env.className=i.attr("class")||"",this._id=i[0].id||$p.utils.randomId(8),n!==!1){this.env.playerDom=$("<div/>").attr({"class":i[0].className,style:i.attr("style")}),i.replaceWith(this.env.playerDom),i.empty().removeAttr("type").removeAttr("src");try{i.get(0).pause(),i.get(0).load()}catch(a){}$("<div/>").append(i).get(0).innerHTML="",i=null}else this.env.playerDom=i;s=$.extend(!0,{},n,s);for(var r in s)null!=this.config["_"+r]?this.config["_"+r]=s[r]:this.config[r]=r.indexOf("plugin_")>-1?$.extend(this.config[r],s[r]):s[r];if($p.utils.logging=this.config._debug,this.setSize(),this.getIsMobileClient()&&(this.config._autoplay=!1,this.config.fixedVolume=!0),this.env.playerDom.attr("id",this._id),this.config._theme)switch(typeof this.config._theme){case"string":break;case"object":this._applyTheme(this.config._theme)}else this._start(!1);return this},this._start=function(t){var e=this,i=this.getIframeParent();this._registerPlugins(),this.config._iframe===!0&&(i?i.ready(function(){e._enterFullViewport(!0)}):e._enterFullViewport(!0)),i===!1&&(this.config._isCrossDomain=!0),this.getIframeAllowFullscreen()||(this.config.enableFullscreen=!1),"function"==typeof onReady&&this._enqueue(function(){onReady(e)});for(var s in this.config._playlist[0])if(this.config._playlist[0][s].type&&(this.config._playlist[0][s].type.indexOf("/json")>-1||this.config._playlist[0][s].type.indexOf("/xml")>-1))return this.setFile(this.config._playlist[0][s].src,this.config._playlist[0][s].type),this;return this.setFile(this.config._playlist),this},this._applyTheme=function(data){var ref=this;if(data===!1)return this._raiseError("The Projekktor theme-set specified could not be loaded."),!1;if("string"==typeof data.css&&$("head").append('<style type="text/css">'+$p.utils.parseTemplate(data.css,{rp:data.baseURL})+"</style>"),"string"==typeof data.html&&this.env.playerDom.html($p.utils.parseTemplate(data.html,{p:this.getNS()})),this.env.playerDom.addClass(data.id).addClass(data.variation),this.env.className=this.env.className&&0!==this.env.className.length?this.env.className+" "+data.id:data.id,data.variation&&0!==data.variation.length&&(this.env.className+=" "+data.variation),"object"==typeof data.config){for(var i in data.config)null!=this.config["_"+i]?this.config["_"+i]=data.config[i]:this.config[i]=i.indexOf("plugin_")>-1?$.extend(!0,{},this.config[i],data.config[i]):data.config[i];if("object"==typeof data.config.plugins)for(var i=0;data.config.plugins.length>i;i++)try{typeof eval("projekktor"+data.config.plugins[i])}catch(e){return this._raiseError("The applied theme requires the following Projekktor plugin(s): <b>"+data.config.plugins.join(", ")+"</b>"),!1}}return data.onReady&&this._enqueue(function(player){eval(data.onReady)}),this._start()},this._init()}},$p.mmap=[],$p.models={},$p.newModel=function(t,e){if("object"!=typeof t)return i;if(!t.modelId)return i;var i=!1,s=$p.models[e]&&void 0!=e?$p.models[e].prototype:{};if($p.models[t.modelId])return i;$p.models[t.modelId]=function(){},$p.models[t.modelId].prototype=$.extend({},s,t),t.setiLove&&t.setiLove(),$p.mmap=$.grep($p.mmap,function(e){var i=e.model!=(t.replace?t.replace.toLowerCase():""),s=e.replaces!=t.modelId;return i&&s});for(var n=0;t.iLove.length>n;n++)t.iLove[n].model=t.modelId.toLowerCase(),t.iLove[n].replaces=t.replace?t.replace.toLowerCase():"",$p.mmap.push(t.iLove[n]);return!0}});var projekktorConfig=function(t){this._version=t};projekktorConfig.prototype={_playerName:"Projekktor",_playerHome:"http://www.projekktor.com?via=context",_cookieName:"projekktor",_cookieExpiry:356,_plugins:["display","controlbar","contextmenu"],_addplugins:[],_reelParser:null,_ns:"pp",_platforms:["browser","android","ios","native","flash","vlc"],_iframe:!1,_ignoreAttributes:!1,_loop:!1,_autoplay:!1,_continuous:!0,_thereCanBeOnlyOne:!0,_leaveFullscreen:!0,_playlist:[],_theme:!1,_themeRepo:!1,_messages:{0:"#0 An (unknown) error occurred.",1:"#1 You aborted the media playback. ",2:"#2 A network error caused the media download to fail part-way. ",3:"#3 The media playback was aborted due to a corruption problem. ",4:"#4 The media (%{title}) could not be loaded because the server or network failed.",5:"#5 Sorry, your browser does not support the media format of the requested file.",6:"#6 Your client is in lack of the Flash Plugin V%{flashver} or higher.",7:"#7 No media scheduled.",8:"#8 ! Invalid media model configured !",9:"#9 File (%{file}) not found.",10:"#10 Invalid or missing quality settings for %{title}.",11:"#11 Invalid streamType and/or streamServer settings for %{title}.",12:"#12 Invalid or inconsistent quality setup for %{title}.",80:"#80 The requested file does not exist or is delivered with an invalid content-type.",97:"No media scheduled.",98:"Invalid or malformed playlist data!",99:"Click display to proceed. ",100:"Keyboard Shortcuts",500:"This Youtube video has been removed or set to private",501:"The Youtube user owning this video disabled embedding.",502:"Invalid Youtube Video-Id specified."},_debug:!1,_width:null,_height:null,_ratio:!1,_keys:[],_isCrossDomain:!1,_forceFullViewport:!1,id:0,title:null,cat:"clip",poster:null,controls:!0,start:!1,stop:!1,volume:.5,cover:"",disablePause:!1,disallowSkip:!1,fixedVolume:!1,imageScaling:"aspectratio",videoScaling:"aspectratio",playerFlashMP4:"",playerFlashMP3:"",streamType:"http",streamServer:"",startParameter:"start",useYTIframeAPI:!0,enableKeyboard:!0,enableFullscreen:!0,playbackQuality:"default",_playbackQualities:[{key:"small",minHeight:240,minWidth:240},{key:"medium",minHeight:360,minWidth:[{ratio:1.77,minWidth:640},{ratio:1.33,minWidth:480}]},{key:"large",minHeight:480,minWidth:[{ratio:1.77,minWidth:853},{ratio:1.33,minWidth:640}]},{key:"hd1080",minHeight:1080,minWidth:[{ratio:1.77,minWidth:1920},{ratio:1.33,minWidth:1440}]},{key:"hd720",minHeight:720,minWidth:[{ratio:1.77,minWidth:1280},{ratio:1.33,minWidth:960}]},{key:"highres",minHeight:1081,minWidth:0}],enableTestcard:!0,skipTestcard:!1,duration:0,className:""},jQuery(function(t){$p.utils={imageDummy:function(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi/v//PwNAgAEACQsDAUdpTjcAAAAASUVORK5CYII="},capitalise:function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()},blockSelection:function(t){return t&&t.css({"-khtml-user-select":"none","-webkit-user-select":"none",MozUserSelect:"none","user-select":"none"}).attr("unselectable","on").bind("selectstart",function(){return!1}),t},unique:function(e){var i=[];for(var s=e.length;s--;){var n=e[s];-1===t.inArray(n,i)&&i.unshift(n)}return i},intersect:function(e,i){var s=[];return t.each(e,function(n){try{t.inArray(i,e[n])>-1&&s.push(e[n])}catch(a){}try{t.inArray(e[n],i)>-1&&s.push(e[n])}catch(a){}}),s},roundNumber:function(t,e){return 0>=t||isNaN(t)?0:Math.round(t*Math.pow(10,e))/Math.pow(10,e)},randomId:function(t){var e="abcdefghiklmnopqrstuvwxyz",i="";for(var s=0;t>s;s++){var n=Math.floor(Math.random()*e.length);i+=e.substring(n,n+1)}return i},toAbsoluteURL:function(t){var e=location,i,s,n,a;if(null==t||""==t)return"";if(/^\w+:/.test(t))return t;if(i=e.protocol+"//"+e.host,0===t.indexOf("/"))return i+t;if(s=e.pathname.replace(/\/[^\/]*$/,""),n=t.match(/\.\.\//g))for(t=t.substring(3*n.length),a=n.length;a--;)s=s.substring(0,s.lastIndexOf("/"));return i+s+"/"+t},strip:function(t){return t.replace(/^\s+|\s+$/g,"")},toSeconds:function(t){var e=0;if("string"!=typeof t)return t;if(t){var s=t.split(":");for(s.length>3&&(s=s.slice(0,3)),i=0;s.length>i;i++)e=60*e+parseFloat(s[i].replace(",","."))}return parseFloat(e)},toTimeString:function(t,e){var i=Math.floor(t/3600),s=t%3600,n=Math.floor(s/60),a=s%60,r=Math.floor(a);return 10>i&&(i="0"+i),10>n&&(n="0"+n),10>r&&(r="0"+r),e===!0?i+":"+n:i+":"+n+":"+r},embeddFlash:function(e,i,s,n){var a=i.FlashVars||{},r="",o="",l="",h="",u=e,c="";i.src+=-1==i.src.indexOf("?")?"?":"&";for(var d in a)"function"!=typeof a[d]&&(h=a[d],i.src+=d+"="+encodeURIComponent(h)+"&");i.src.replace(/&$/,""),o='<object id="'+i.id+'" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"  name="'+i.name+'" width="'+i.width+'" height="'+i.height+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">'+'<param name="movie" value="'+i.src+'"></param>'+'<param name="allowScriptAccess" value="'+i.allowScriptAccess+'"></param>'+'<param name="allowFullScreen" value="'+i.allowFullScreen+'"></param>'+'<param name="wmode" value="'+i.wmode+'"></param>',l="<embed ";for(var d in i)"FLASHVARS"!==d.toUpperCase()&&"function"!=typeof i[d]&&(l+=d+'="'+i[d]+'" ');return l+=' pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"></embed>',r=o+l,r+="</object>",(!document.all||window.opera)&&(r=l),null===u?r:(u.get(0).innerHTML=r,s!==!1&&u.append(t("<div/>").attr("id",i.id+"_cc").css({width:n?"1px":"100%",height:n?"1px":"100%",backgroundColor:9>$p.utils.ieVersion()?"#000":"transparent",filter:"alpha(opacity = 0.1)",position:"absolute",top:0,left:0})),t("#"+i.id))},ieVersion:function(){var t=3,e=document.createElement("div"),i=e.getElementsByTagName("i");while(e.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",i[0]);return t>4?t:void 0},parseTemplate:function(t,e,i){if(void 0===e||0==e.length||"object"!=typeof e)return t;for(var s in e)t=t.replace(RegExp("%{"+s+"}","gi"),i===!0?window.encodeURIComponent(e[s]):e[s]);return t=t.replace(/%{(.*?)}/gi,"")},stretch:function(e,i,s,n,a,r){if(null==i)return!1;i instanceof t==!1&&(i=t(i)),i.data("od")||i.data("od",{width:i.width(),height:i.height()});var o=void 0!==a?a:i.data("od").width,l=void 0!==r?r:i.data("od").height,h=s/o,u=n/l,c=s,d=n;switch(e){case"none":c=o,d=l;break;case"fill":h>u?(c=o*h,d=l*h):u>h&&(c=o*u,d=l*u);break;case"aspectratio":default:h>u?(c=o*u,d=l*u):u>h&&(c=o*h,d=l*h)}return s=$p.utils.roundNumber(100*(c/s),0),n=$p.utils.roundNumber(100*(d/n),0),0===s||0===n?!1:(i.css({margin:0,padding:0,width:s+"%",height:n+"%",left:(100-s)/2+"%",top:(100-n)/2+"%"}),i.data("od").width!=i.width()||i.data("od").height!=i.height()?!0:!1)},parseUri:function(t){var e={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},i=e.parser[e.strictMode?"strict":"loose"].exec(t),s={},n=14;while(n--)s[e.key[n]]=i[n]||"";return s[e.q.name]={},s[e.key[12]].replace(e.q.parser,function(t,i,n){i&&(s[e.q.name][i]=n)}),s},log:function(){this.logging!==!1&&(this.history=this.history||[],this.history.push(arguments),window.console&&console.log(Array.prototype.slice.call(arguments)))},cleanResponse:function(e,i){var s=!1;switch(i){case"html":case"xml":window.DOMParser?(s=new DOMParser,s=s.parseFromString(e,"text/xml")):(s=new ActiveXObject("Microsoft.XMLDOM"),s.async="false",s.loadXML(e));break;case"json":s=e,"string"==typeof s&&(s=t.parseJSON(s));break;case"jsonp":break;default:s=e}return s},cssTransitions:function(){var t=document.createElement("z"),e=t.style;function i(t){for(var i in t)if(null!=e[t[i]])return!0;return!1}function s(t){var e="Webkit Moz O ms Khtml".split(" "),s=t.charAt(0).toUpperCase()+t.substr(1),n=(t+" "+e.join(s+" ")+s).split(" ");return i(n)}return s("animationName")},versionCompare:function(t,e){var i=t.split("."),s=e.split("."),n=0;for(n=0;i.length>n;++n)i[n]=Number(i[n]);for(n=0;s.length>n;++n)s[n]=Number(s[n]);return 2==i.length&&(i[2]=0),i[0]>s[0]?!0:i[0]<s[0]?!1:i[1]>s[1]?!0:i[1]<s[1]?!1:i[2]>s[2]?!0:i[2]<s[2]?!1:!0},stringify:function(t){if("JSON"in window)return JSON.stringify(t);var e=typeof t;if("object"!=e||null===t)return"string"==e&&(t='"'+t+'"'),t+"";var i,s,n=[],a=t&&t.constructor==Array;for(i in t)t.hasOwnProperty(i)&&(s=t[i],e=typeof s,t.hasOwnProperty(i)&&("string"==e?s='"'+s+'"':"object"==e&&null!==s&&(s=$p.utils.stringify(s)),n.push((a?"":'"'+i+'":')+(s+""))));return(a?"[":"{")+(n+"")+(a?"]":"}")},logging:!1}}),jQuery(function(t){$p.platforms={VLC:function(){if(navigator.plugins&&navigator.plugins.length>0){for(var t=0;navigator.plugins.length>t;++t)if(-1!=navigator.plugins[t].name.indexOf("VLC")){if(null!=navigator.plugins[t].version)return navigator.plugins[t].version||"0";if(null!=navigator.plugins[t].description&&navigator.plugins[t].description.match(/\d{1,}\.\d{1,}\.\d{1,}/i)[0])return navigator.plugins[t].description.match(/\d{1,}\.\d{1,}\.\d{1,}/i)[0]}}else try{return new ActiveXObject("VideoLAN.VLCPlugin.2"),"0"}catch(e){}return"0"},FLASH:function(t){try{try{var e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{e.AllowScriptAccess="always"}catch(i){return"6.0.0"}}catch(i){}return""+new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0]}catch(i){try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)return""+(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0]}catch(i){}}return"0"},FLASHNA:function(t){try{try{var e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{e.AllowScriptAccess="always"}catch(i){return"6.0.0"}}catch(i){}return""+new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0]}catch(i){try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)return""+(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0]}catch(i){}}return"0"},ANDROID:function(t){try{return""+navigator.userAgent.toLowerCase().match(/android\s+(([\d\.]+))?/)[1]}catch(e){}return"0"},IOS:function(t){var e=navigator.userAgent.toLowerCase(),i=e.indexOf("os ");return(e.indexOf("iphone")>-1||e.indexOf("ipad")>-1)&&i>-1?""+e.substr(i+3,3).replace("_","."):"0"},NATIVE:function(e){try{var i=t(e.indexOf("video")>-1?"<video/>":"<audio/>").get(0);if(null!=i.canPlayType){if("*"===e)return"1";switch(i.canPlayType(e)){case"no":case"":return"0";default:return"1"}}}catch(s){}return"0"},BROWSER:function(t){return"1"}}});var projekktorPluginInterface=function(){};jQuery(function($){projekktorPluginInterface.prototype={pluginReady:!1,reqVer:null,name:"",pp:{},config:{},playerDom:null,_appliedDOMObj:[],_pageDOMContainer:{},_childDOMContainer:{},_init:function(t){return this.config=$.extend(!0,this.config,t),null==this.reqVer||$p.utils.versionCompare(this.pp.getPlayerVer(),this.reqVer)?(this.initialize(),void 0):(alert("Plugin '"+this.name+"' requires Projekktor v"+this.reqVer+" or later! Please visit http://www.projekktor.com and get the most recent version."),this.pluginReady=!0,void 0)},getConfig:function(t,e){var i=null,s=e||null;return null!=this.pp.getConfig("plugin_"+this.name)&&(i=this.pp.getConfig("plugin_"+this.name)[t]),null==i&&(i=this.pp.getConfig(t)),null==i&&(i=this.config[t]),"object"==typeof i&&null===i.length?i=$.extend(!0,{},i,this.config[t]):"object"==typeof i&&(i=$.extend(!0,[],this.config[t]||[],i||[])),null==i?s:i},getDA:function(t){return"data-"+this.pp.getNS()+"-"+this.name+"-"+t},getCN:function(t){return this.pp.getNS()+t},sendEvent:function(t,e){this.pp._promote({_plugin:this.name,_event:t},e)},deconstruct:function(){this.pluginReady=!1,$.each(this._appliedDOMObj,function(){$(this).unbind()})},applyToPlayer:function(t,e,i){if(!t)return null;var s=e||"container",n="",a=this;try{n=t.attr("class")||this.name}catch(r){n=this.name}return this._pageDOMContainer[s]=$("["+this.getDA("host")+"='"+this.pp.getId()+"']["+this.getDA("func")+"='"+s+"']"),this._childDOMContainer[s]=this.playerDom.find("["+this.getDA("func")+"='"+s+"'],."+this.getCN(n)+":not(["+this.getDA("func")+"=''])"),this._pageDOMContainer[s].length>0?(this._pageDOMContainer[s].removeClass("active").addClass("inactive"),$.each(this._pageDOMContainer[s],function(){a._appliedDOMObj.push($(this))}),this._pageDOMContainer[s]):0==this._childDOMContainer[s].length?(t.removeClass(n).addClass(this.pp.getNS()+n).removeClass("active").addClass("inactive").attr(this.getDA("func"),s).appendTo(this.playerDom),this._childDOMContainer[s]=t,this._appliedDOMObj.push(t),i===!0&&t.addClass("active").removeClass("inactive"),t):($.each(this._childDOMContainer[s],function(){$(this).attr(a.getDA("func"),s),a._appliedDOMObj.push($(this))}),i===!0&&this._childDOMContainer[s].addClass("active").removeClass("inactive"),$(this._childDOMContainer[s][0]))},getElement:function(t){return this.pp.env.playerDom.find("."+this.pp.getNS()+t)},setInactive:function(){$(this._pageDOMContainer.container).removeClass("active").addClass("inactive"),$(this._childDOMContainer.container).removeClass("active").addClass("inactive"),this.sendEvent("inactive",$.extend(!0,{},this._pageDOMContainer.container,this._childDOMContainer.container))},setActive:function(t,e){var i="object"==typeof t?t:this.getElement(t);return null==t?(this._pageDOMContainer.container.removeClass("inactive").addClass("active"),this._childDOMContainer.container.removeClass("inactive").addClass("active"),this.sendEvent("active",$.extend(!0,{},this._pageDOMContainer.container,this._childDOMContainer.container)),i):(0!=e?i.addClass("active").removeClass("inactive"):i.addClass("inactive").removeClass("active"),i.css("display",""),i)},getActive:function(t){return $(t).hasClass("active")},initialize:function(){},isReady:function(){return this.pluginReady},clickHandler:function(t){try{this.pp[this.getConfig(t+"Click").callback](this.getConfig(t+"Click").value)}catch(e){try{this.getConfig(t+"Click")(this.getConfig(t+"Click").value)}catch(e){}}return!1},cookie:function(key,value,ttl){if(void 0===document.cookie||document.cookie===!1)return null;if(null==key&&null!=value)return null;if(0==this.pp.getConfig("cookieExpiry"))return null;var t=new Date,result=null,cookieString="",tmp=storedData=jQuery.parseJSON(eval(result=RegExp("(?:^|; )"+encodeURIComponent(this.getConfig("cookieName")+"_"+this.name)+"=([^;]*)").exec(document.cookie))?decodeURIComponent(result[1]):null);return("object"!=typeof storedData||null==storedData)&&(storedData={},null!=key&&(storedData[key]=tmp)),null==key?storedData:1==arguments.length?storedData[key]:(null!=value?storedData[key]=value:delete storedData[key],$.isEmptyObject(storedData)?(ttl=0,storedData=""):storedData=$p.utils.stringify(storedData),t.setDate(t.getDate()+(ttl||this.getConfig("cookieExpiry",0))),cookieString=encodeURIComponent(this.getConfig("cookieName","projekktor")+"_"+this.name)+"="+encodeURIComponent(storedData)+"; expires="+(0==ttl?"Thu, 01 Jan 1970 00:00:01 GMT":t.toUTCString()),this.getConfig("cookieDomain",!1)&&(cookieString+="; domain="+options.domain),document.cookie=cookieString,value)
},eventHandler:function(){}}});var playerModel=function(){};jQuery(function(t){playerModel.prototype={modelId:"player",iLove:[],_currentState:null,_currentBufferState:null,_currentSeekState:null,_ap:!1,_volume:0,_quality:"default",_displayReady:!1,_isPlaying:!1,_id:null,_KbPerSec:0,_bandWidthTimer:null,_isPoster:!1,_isFullscreen:!1,hasGUI:!1,allowRandomSeek:!1,flashVerifyMethod:"api_get",mediaElement:null,pp:{},media:{duration:0,position:0,maxpos:0,offset:0,file:!1,poster:"",ended:!1,loadProgress:0,errorCode:0},_init:function(e){this.pp=e.pp||null,this.media=t.extend(!0,{},this.media,e.media),this._ap=e.autoplay,this._isFullscreen=e.fullscreen,this._id=$p.utils.randomId(8),this._quality=e.quality||this._quality,this._volume=this.pp.getVolume(),this._playbackQuality=this.pp.getPlaybackQuality(),this.init()},init:function(t){this.ready()},ready:function(){this.sendUpdate("modelReady"),this._ap?(this.sendUpdate("autostart",!0),this._setState("awakening")):this.displayItem(!1)},displayItem:function(e){return this._displayReady=!1,this._isPoster=!1,this.pp.removeListener("fullscreen.poster"),this.pp.removeListener("resize.poster"),e!==!0||this.getState("STOPPED")?(this._setState("idle"),this.applyImage(this.getPoster(),this.pp.getMediaContainer().html("")),this._isPoster=!0,this.displayReady(),void 0):(t("#"+this.pp.getMediaId()+"_image").remove(),t("#"+this.pp.getId()+"_testcard_media").remove(),this.applyMedia(this.pp.getMediaContainer()),void 0)},applyMedia:function(){},sendUpdate:function(t,e){"ERROR"!=this._currentState&&("error"==t&&this._setState("error"),this.pp._modelUpdateListener(t,e))},displayReady:function(){this._displayReady=!0,this.pp._modelUpdateListener("displayReady")},start:function(){var t=this;(null!=this.mediaElement||"PLAYLIST"==this.modelId)&&(this.getState("STARTING")||(this._setState("STARTING"),this.getState("STOPPED")||this.addListeners(),this.pp.getIsMobileClient("ANDROID")&&!this.getState("PLAYING")&&setTimeout(function(){t.setPlay()},500),this.setPlay()))},addListeners:function(){},removeListeners:function(){try{this.mediaElement.unbind(".projekktor"+this.pp.getId())}catch(t){}},detachMedia:function(){},destroy:function(e){this.removeListeners(),this.getState("IDLE")||this._setState("destroying"),this.detachMedia();try{t("#"+this.mediaElement.id).empty()}catch(i){}if(!this.pp.getIsMobileClient()){try{t("#"+this.mediaElement.id).remove()}catch(i){}try{this.mediaElement.remove()}catch(i){}this.pp.getMediaContainer().html("")}this.mediaElement=null,this.media.loadProgress=0,this.media.playProgress=0,this.media.frame=0,this.media.position=0,this.media.duration=0},reInit:function(){this.flashVersion===!1&&this._isFF()&&!this.getState("ERROR")&&this.pp.getConfig("bypassFlashFFFix")!==!0&&(this.sendUpdate("FFreinit"),this.removeListeners(),this.displayItem(!this.getState("IDLE")))},applyCommand:function(t,e){switch(t){case"quality":this.setQuality(e);break;case"error":this._setState("error"),this.setTestcard(e);break;case"play":if(this.getState("ERROR"))break;if(this.getState("IDLE")){this._setState("awakening");break}this.setPlay();break;case"pause":if(this.getState("ERROR"))break;this.setPause();break;case"volume":if(this.getState("ERROR"))break;this.setVolume(e)||(this._volume=e,this.sendUpdate("volume",e));break;case"stop":this.setStop();break;case"frame":this.setFrame(e);break;case"seek":if(this.getState("ERROR"))break;if(this.getSeekState("SEEKING"))break;if(this.getState("IDLE"))break;if(-1==this.media.loadProgress)break;this._setSeekState("seeking",e),this.setSeek(e);break;case"fullscreen":if(e==this._isFullscreen)break;this._isFullscreen=e,this.sendUpdate("fullscreen",this._isFullscreen),this.reInit(),this.setFullscreen();break;case"resize":this.setResize(),this.sendUpdate("resize",e)}},setFrame:function(t){var e=t/this.pp.getConfig("fps")+1e-5;this.setSeek(e)},setSeek:function(t){},setPlay:function(){},setPause:function(){},setStop:function(){this.detachMedia(),this._setState("stopped"),this.displayItem(!1)},setVolume:function(t){},setFullscreen:function(t){this.setResize()},setResize:function(){var t=this.pp.getMediaContainer();this.sendUpdate("scaled",{realWidth:this.media.videoWidth||null,realHeight:this.media.videoHeight||null,displayWidth:t.width(),displayHeight:t.height()})},setPosterLive:function(){},setQuality:function(t){if(this._quality!=t){this._quality=t;try{this.applySrc()}catch(e){}this.qualityChangeListener()}},getQuality:function(){return this._quality},getVolume:function(){return null==this.mediaElement?this._volume:this.mediaElement.prop("muted")===!0?0:this.mediaElement.prop("volume")},getLoadProgress:function(){return this.media.loadProgress||0},getLoadPlaybackProgress:function(){return this.media.playProgress||0},getPosition:function(){return this.media.position||0},getFrame:function(){return this.media.frame||0},getDuration:function(){return this.media.duration||0},getMaxPosition:function(){return this.media.maxpos||0},getPlaybackQuality:function(){return t.inArray(this._quality,this.media.qualities)>-1?this._quality:"default"},getInFullscreen:function(){return this.pp.getInFullscreen()},getKbPerSec:function(){return this._KbPerSec},getState:function(t){var e=null==this._currentState?"IDLE":this._currentState;return null!=t?e==t.toUpperCase():e},getBufferState:function(t){var e=null==this._currentBufferState?"NONE":this._currentBufferState;return null!=t?e==t.toUpperCase():e},getSeekState:function(t){var e=null==this._currentSeekState?"NONE":this._currentSeekState;return null!=t?e==t.toUpperCase():e},getSrc:function(){try{return this.mediaElement.get(0).currentSrc}catch(t){}try{return this.media.file[0].src}catch(t){}try{return this.getPoster()}catch(t){}return null},getModelName:function(){return this.modelId||null},getHasGUI:function(){return this.hasGUI&&!this._isPoster},getIsReady:function(){return this._displayReady},getPoster:function(){var t="poster",e=null,i=this.pp.getConfig(t),s="default",n=[];if("object"!=typeof i)return i;for(var a in i)i[a].quality&&n.push(i[a].quality);s=this.pp.getAppropriateQuality(n);for(var r in i)(i[r].quality==s||""==e||"default"==s)&&(e=i[r].src);return e},getMediaElement:function(){return this.mediaElement||t("<video/>")},getMediaDimensions:function(){return{width:this.media.videoWidth||0,height:this.media.videoHeight||0}},getSource:function(){var e=[],i=this.media.offset||this.media.position||!1,s=this,n="pseudo"==this.pp.getConfig("streamType")?this.pp.getConfig("startParameter"):!1;return t.each(this.media.file||[],function(){if(s._quality!=this.quality&&null!==s._quality)return!0;if(!n||!i)return e.push(this),!0;var a=$p.utils.parseUri(this.src),r=a.protocol+"://"+a.host+a.path,o=[];return t.each(a.queryKey,function(t,e){t!=n&&o.push(t+"="+e)}),r+=o.length>0?"?"+o.join("&")+"&"+n+"="+i:"?"+n+"="+i,this.src=r,e.push(this),!0}),0===e.length?this.media.file:e},timeListener:function(t){if(null!=t){var e=parseFloat((t.position||t.currentTime||this.media.position||0).toFixed(2)),i=parseFloat((t.duration||0).toFixed(2));isNaN(i+e)||((0!=i&&i!=this.media.duration&&!this.isPseudoStream||this.isPseudoStream&&0==this.media.duration)&&(this.media.duration=i,this.sendUpdate("durationChange",i)),e!=this.media.position&&(this.media.position=this.isPseudoStream&&Math.round(100*e)/100==Math.round(100*this.media.offset)/100?this.media.offset:this.media.offset+e,this.media.maxpos=Math.max(this.media.maxpos||0,this.media.position||0),this.media.playProgress=parseFloat(this.media.position>0&&this.media.duration>0?100*this.media.position/this.media.duration:0),this.media.frame=this.media.position*this.pp.getConfig("fps"),this.sendUpdate("time",this.media.position),this.loadProgressUpdate()))}},loadProgressUpdate:function(){var t=this.mediaElement.get(0),e=0;0!==this.media.duration&&"object"==typeof t.buffered&&(0!==t.buffered.length||0!==t.seekable.length)&&100!=this.media.loadProgress&&(e=t.seekable&&t.seekable.length>0?Math.round(100*t.seekable.end(0)/this.media.duration):Math.round(100*t.buffered.end(t.buffered.length-1))/this.media.duration,this.media.loadProgress>e||(this.media.loadProgress=this.allowRandomSeek===!0?100:-1,this.media.loadProgress=100>this.media.loadProgress||void 0===this.media.loadProgress?e:100,this.sendUpdate("progress",this.media.loadProgress)))},progressListener:function(t,e){if(this.mediaElement instanceof jQuery&&"object"==typeof this.mediaElement.get(0).buffered&&this.mediaElement.get(0).buffered.length>0)return this.mediaElement.unbind("progress"),void 0;null==this._bandWidthTimer&&(this._bandWidthTimer=(new Date).getTime());var i=0,s=0;try{isNaN(e.loaded/e.total)?e.originalEvent&&!isNaN(e.originalEvent.loaded/e.originalEvent.total)&&(i=e.originalEvent.loaded,s=e.originalEvent.total):(i=e.loaded,s=e.total)}catch(n){t&&!isNaN(t.loaded/t.total)&&(i=t.loaded,s=t.total)}var a=i>0&&s>0?100*i/s:0;Math.round(a)>Math.round(this.media.loadProgress)&&(this._KbPerSec=i/1024/(((new Date).getTime()-this._bandWidthTimer)/1e3)),a=100!==this.media.loadProgress?a:100,a=this.allowRandomSeek===!0?100:5*Math.round(a/5),this.media.loadProgress!=a&&(this.media.loadProgress=a,this.sendUpdate("progress",a)),this.media.loadProgress>=100&&this.allowRandomSeek===!1&&this._setBufferState("full")},qualityChangeListener:function(){this.sendUpdate("qualityChange",this._quality)},endedListener:function(t){null!==this.mediaElement&&(0>=this.media.maxpos||"STARTING"!=this.getState()&&this._setState("completed"))},waitingListener:function(t){this._setBufferState("empty")},canplayListener:function(t){this._setBufferState("full")},canplaythroughListener:function(t){this._setBufferState("full")},suspendListener:function(t){this._setBufferState("full")},playingListener:function(t){this._setState("playing")},startListener:function(t){this.applyCommand("volume",this.pp.getConfig("volume")),this.isPseudoStream||this.setSeek(this.media.position||0),this._setState("playing")},pauseListener:function(t){this._setState("paused")},seekedListener:function(t){this._setSeekState("SEEKED",this.media.position)},volumeListener:function(t){this.sendUpdate("volume",this.getVolume())},flashReadyListener:function(){this._displayReady=!0},errorListener:function(t,e){},metaDataListener:function(t){try{this.media.videoWidth=t.videoWidth,this.media.videoHeight=t.videoHeight}catch(e){}this._scaleVideo()},setTestcard:function(e,i){var s=this.pp.getMediaContainer().html("").css({width:"100%",height:"100%"}),n=t.extend(this.pp.getConfig("messages"),this.pp.getConfig("msg")),a=null==n[e]?0:e,r=void 0!==i&&""!==i?i:n[a];this.removeListeners(),this.detachMedia(),this.pp.getItemCount()>1&&(r+=" "+n[99]),3>r.length&&(r="ERROR"),100==a&&(r=i),r=$p.utils.parseTemplate(r,t.extend({},this.media,{title:this.pp.getConfig("title")})),this.mediaElement=t("<div/>").addClass(this.pp.getNS()+"testcard").attr("id",this.pp.getId()+"_testcard_media").html("<p>"+r+"</p>").appendTo(s),null!=this.pp.getConfig("msg")[a]&&this.mediaElement.addClass(this.pp.getNS()+"customtestcard")},applySrc:function(){},applyImage:function(e,i){var s=t("<img/>").hide(),n=this;if($p.utils.blockSelection(s),null==e||e===!1)return t("<span/>").attr({id:this.pp.getMediaId()+"_image"}).appendTo(i);s.html("").appendTo(i).attr({id:this.pp.getMediaId()+"_image",alt:this.pp.getConfig("title")||""}).css({position:"absolute"}),s.error(function(e){t(this).remove()}),s.load(function(t){var e=t.currentTarget;s.data("od")||s.data("od",{width:e.naturalWidth,height:e.naturalHeight}),s.show(),$p.utils.stretch(n.pp.getConfig("imageScaling"),s,i.width(),i.height())}),s.attr("src",e);var a=function(t,e){e.is(":visible")===!1&&n.pp.removeListener("fullscreen",arguments.callee);var i=e.width(),s=e.height(),a=t.width(),r=t.height();if($p.utils.stretch(n.pp.getConfig("imageScaling"),t,e.width(),e.height()))try{n.sendUpdate("scaled",{realWidth:t._originalDimensions.width,realHeight:t._originalDimensions.height,displayWidth:n.mediaElement.width(),displayHeight:n.mediaElement.height()})}catch(o){}t.attr("src")!=n.getPoster()&&t.attr("src",n.getPoster())};return this.pp.addListener("fullscreen.poster",function(){a(s,i)}),this.pp.addListener("resize.poster",function(){a(s,i)}),s},createFlash:function(t,e,i){this.mediaElement=$p.utils.embeddFlash(e.html(""),t,i,!0),this._waitforPlayer()},_waitforPlayer:function(){var e=this,i=0;this._displayReady!==!0&&(this._setBufferState("empty"),function(){if(i>6&&e._isFF()){i=0;var s=t(e.mediaElement).parent(),n=t(e.mediaElement).clone();s.html("").append(n),e.mediaElement=n}s=e.mediaElement;try{if(t(s).attr("id").indexOf("testcard")>-1)return}catch(a){console.log(a)}i++;try{void 0===s?setTimeout(arguments.callee,200):void 0===s.get(0)[e.flashVerifyMethod]?setTimeout(arguments.callee,200):(e._setBufferState("full"),e.flashReadyListener(),t("#"+t(e.mediaElement).attr("id")+"_cc").css({width:"100%",height:"100%"}))}catch(a){setTimeout(arguments.callee,200)}}())},_setState:function(t){var e=this;t=t.toUpperCase(),this._currentState!=t&&"ERROR"!=this._currentState&&("PAUSED"==this._currentState&&"PLAYING"==t&&(this.sendUpdate("resume",this.media),this._isPlaying=!0),"IDLE"!=this._currentState&&"STARTING"!=this._currentState||"PLAYING"!=t||(this.sendUpdate("start",this.media),this._isPlaying=!0),"PAUSED"==t&&(this._isPlaying=!1),"ERROR"==t&&(this.setPlay=this.setPause=function(){e.sendUpdate("start")}),this._currentState=t.toUpperCase(),this.sendUpdate("state",this._currentState))},_setBufferState:function(t){this._currentBufferState!=t.toUpperCase()&&(this._currentBufferState=t.toUpperCase(),this.sendUpdate("buffer",this._currentBufferState))},_setSeekState:function(t,e){this._currentSeekState!=t.toUpperCase()&&(this._currentSeekState=t.toUpperCase(),this.sendUpdate("seek",this._currentSeekState))},_scaleVideo:function(t){var e=this.pp.getMediaContainer();if(!this.pp.getIsMobileClient())try{var i=e.width(),s=e.height(),n=this.media.videoWidth,a=this.media.videoHeight;$p.utils.stretch(this.pp.getConfig("videoScaling"),this.mediaElement,i,s,n,a)&&this.sendUpdate("scaled",{realWidth:n,realHeight:a,displayWidth:i,displayHeight:s})}catch(r){}},_isFF:function(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}}}),jQuery(function(t){$p.newModel({modelId:"NA",iLove:[{ext:"NaN",type:"none/none",platform:"browser"}],hasGUI:!0,applyMedia:function(t){var e=this;t.html("");var i=function(t,i){i.getState("AWAKENING")||(e.pp.removeListener("mousedown",arguments.callee),e._setState("completed"))};this.displayReady(),this.pp.getConfig("enableTestcard")&&!this.pp.getIsMobileClient()?(this.pp.addListener("mousedown",i),this._setState("error"),this.setTestcard(null!=this.media.file[0].src&&7===this.media.errorCode?5:this.media.errorCode)):(this.applyCommand("stop"),window.location.href=this.media.file[0].src)},detachMedia:function(){this.pp.removeListener("leftclick",this.mouseClick)}})}),jQuery(function(t){$p.newModel({modelId:"VIDEO",androidVersion:"2",iosVersion:"3",nativeVersion:"1",iLove:[{ext:"mp4",type:"video/mp4",platform:["ios","android","native"],streamType:["http","pseudo","httpVideo"],fixed:"maybe"},{ext:"m4v",type:"video/mp4",platform:["ios","android","native"],streamType:["http","pseudo","httpVideo"],fixed:"maybe"},{ext:"ogv",type:"video/ogg",platform:"native",streamType:["http","httpVideo"]},{ext:"webm",type:"video/webm",platform:"native",streamType:["http","httpVideo"]},{ext:"ogg",type:"video/ogg",platform:"native",streamType:["http","httpVideo"]},{ext:"anx",type:"video/ogg",platform:"native",streamType:["http","httpVideo"]}],_eventMap:{pause:"pauseListener",play:"playingListener",volumechange:"volumeListener",progress:"progressListener",timeupdate:"timeListener",ended:"_ended",waiting:"waitingListener",canplaythrough:"canplayListener",canplay:"canplayListener",error:"errorListener",suspend:"suspendListener",seeked:"seekedListener",loadedmetadata:"metaDataListener",loadstart:null},isGingerbread:!1,isAndroid:!1,allowRandomSeek:!1,videoWidth:0,videoHeight:0,wasPersistent:!0,isPseudoStream:!1,init:function(){var t=navigator.userAgent;t.indexOf("Android")>=0&&(this.isAndroid=!0,3>parseFloat(t.slice(t.indexOf("Android")+8))&&(this.isGingerbread=!0)),this.ready()},applyMedia:function(e){0===t("#"+this.pp.getMediaId()+"_html").length&&(this.wasPersistent=!1,e.html("").append(t("<video/>").attr({id:this.pp.getMediaId()+"_html",poster:$p.utils.imageDummy(),loop:!1,autoplay:!1,preload:"none","x-webkit-airplay":"allow"}).prop({controls:!1,volume:this.getVolume()}).css({width:"100%",height:"100%",position:"absolute",top:0,left:0}))),this.mediaElement=t("#"+this.pp.getMediaId()+"_html"),this.applySrc()},applySrc:function(){var e=this,i=this.getSource(),s=e.getState("AWAKENING");this.mediaElement.attr("src",i[0].src),this.isGingerbread||this.mediaElement.attr("type",i[0].originalType),this.mediaElement.bind("mousedown.projekktorqs"+this.pp.getId(),this.disableDefaultVideoElementActions),this.mediaElement.bind("click.projekktorqs"+this.pp.getId(),this.disableDefaultVideoElementActions);var n=function(){return e.mediaElement.unbind("loadstart.projekktorqs"+e.pp.getId()),e.mediaElement.unbind("loadeddata.projekktorqs"+e.pp.getId()),e.mediaElement.unbind("canplay.projekktorqs"+e.pp.getId()),e.addListeners("error"),e.addListeners("play"),e.addListeners("canplay"),e.mediaElement=t("#"+e.pp.getMediaId()+"_html"),s?(e.displayReady(),void 0):e.getSeekState("SEEKING")?(e._isPlaying&&e.setPlay(),e.seekedListener(),void 0):(e.isPseudoStream||e.setSeek(e.media.position||0),e._isPlaying&&e.setPlay(),void 0)};this.mediaElement.bind("loadstart.projekktorqs"+this.pp.getId(),n),this.mediaElement.bind("loadeddata.projekktorqs"+this.pp.getId(),n),this.mediaElement.bind("canplay.projekktorqs"+this.pp.getId(),n),this.mediaElement[0].load(),this.isGingerbread&&n()},detachMedia:function(){try{this.removeListener("error"),this.removeListener("play"),this.removeListener("canplay"),this.mediaElement.unbind("mousedown.projekktorqs"+this.pp.getId()),this.mediaElement.unbind("click.projekktorqs"+this.pp.getId()),this.mediaElement[0].pause(),this.mediaElement.attr("src",""),this.mediaElement[0].load()}catch(t){}},addListeners:function(e,i){if(null!=this.mediaElement){var s=null!=i?".projekktor"+i+this.pp.getId():".projekktor"+this.pp.getId(),n=this,a=null==e?"*":e;t.each(this._eventMap,function(t,e){t!=a&&"*"!=a||null==e||n.mediaElement.bind(t+s,function(t){n[e](this,t)})})}},removeListener:function(e,i){if(null!=this.mediaElement){var s=null!=i?".projekktor"+i+this.pp.getId():".projekktor"+this.pp.getId(),n=this;t.each(this._eventMap,function(t,i){t==e&&n.mediaElement.unbind(t+s)})}},_ended:function(){var t=this.mediaElement[0].duration,e=Math.round(this.media.position)===Math.round(t),i=2>t-this.media.maxpos&&0===this.media.position||!1;e||i||this.isPseudoStream?this.endedListener(this):this.pauseListener(this)},playingListener:function(t){var e=this;this.isGingerbread||function(){try{if(0===e.getDuration())return""!==e.mediaElement.get(0).currentSrc&&e.mediaElement.get(0).networkState==e.mediaElement.get(0).NETWORK_NO_SOURCE?(e.sendUpdate("error",80),void 0):(setTimeout(arguments.callee,500),void 0)}catch(t){}}(),this._setState("playing")},errorListener:function(t,e){try{switch(e.target.error.code){case e.target.error.MEDIA_ERR_ABORTED:this.sendUpdate("error",1);break;case e.target.error.MEDIA_ERR_NETWORK:this.sendUpdate("error",2);break;case e.target.error.MEDIA_ERR_DECODE:this.sendUpdate("error",3);break;case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:this.sendUpdate("error",4);break;default:this.sendUpdate("error",5)}}catch(i){}},canplayListener:function(e){var i=this;"pseudo"==this.pp.getConfig("streamType")&&t.each(this.media.file,function(){return this.src.indexOf(i.mediaElement[0].currentSrc)>-1&&"video/mp4"==this.type?(i.isPseudoStream=!0,i.allowRandomSeek=!0,i.media.loadProgress=100,!1):!0}),this._setBufferState("full")},disableDefaultVideoElementActions:function(t){t.preventDefault(),t.stopPropagation()},setPlay:function(){try{this.mediaElement[0].play()}catch(t){}},setPause:function(){try{this.mediaElement[0].pause()}catch(t){}},setVolume:function(t){this._volume=t;try{this.mediaElement.prop("volume",t)}catch(e){return!1}return t},setSeek:function(t){var e=this;return this.isPseudoStream?(this.media.position=0,this.media.offset=t,this.applySrc(),void 0):(function(){try{e.mediaElement[0].currentTime=t,e.timeListener({position:t})}catch(i){null!=e.mediaElement&&setTimeout(arguments.callee,100)}}(),void 0)},setFullscreen:function(t){"audio"!=this.element&&this._scaleVideo()},setResize:function(){"audio"!=this.element&&this._scaleVideo(!1)}}),$p.newModel({modelId:"AUDIO",iLove:[{ext:"ogg",type:"audio/ogg",platform:"native",streamType:["http","httpAudio"]},{ext:"oga",type:"audio/ogg",platform:"native",streamType:["http","httpAudio"]},{ext:"mp3",type:"audio/mp3",platform:["ios","android","native"],streamType:["http","httpAudio"]},{ext:"mp3",type:"audio/mpeg",platform:["ios","android","native"],streamType:["http","httpAudio"]}],imageElement:{},applyMedia:function(e){$p.utils.blockSelection(e),this.imageElement=this.applyImage(this.getPoster("cover")||this.getPoster("poster"),e),this.imageElement.css({border:"0px"}),0===t("#"+this.pp.getMediaId()+"_html").length&&(this.wasPersistent=!1,e.html("").append(t(this.isGingerbread?"<video/>":"<audio/>").attr({id:this.pp.getMediaId()+"_html",poster:$p.utils.imageDummy(),loop:!1,autoplay:!1,preload:"none","x-webkit-airplay":"allow"}).prop({controls:!1,volume:this.getVolume()}).css({width:"1px",height:"1px",position:"absolute",top:0,left:0}))),this.mediaElement=t("#"+this.pp.getMediaId()+"_html"),this.applySrc()},setPosterLive:function(){if(this.imageElement.parent){var e=this.imageElement.parent(),i=this;if(this.imageElement.attr("src")==this.getPoster("cover")||this.getPoster("poster"))return;this.imageElement.fadeOut("fast",function(){t(this).remove(),i.imageElement=i.applyImage(i.getPoster("cover")||i.getPoster("poster"),e)})}}},"VIDEO")}),jQuery(function(t){$p.newModel({modelId:"VIDEOHLS",androidVersion:4,iosVersion:3,iLove:[{ext:"m3u8",type:"application/mpegURL",platform:["ios","android"],streamType:["http","httpVideo","httpVideoLive"]},{ext:"m3u",type:"application/mpegURL",platform:["ios","android"],streamType:["http","httpVideo","httpVideoLive"]},{ext:"m3u8",type:"application/vnd.apple.mpegURL",platform:["ios","android"],streamType:["http","httpVideo","httpVideoLive"]},{ext:"m3u",type:"application/vnd.apple.mpegURL",platform:["ios","android"],streamType:["http","httpVideo","httpVideoLive"]},{ext:"m3u8",type:"application/x-mpegURL",platform:["ios","android"],streamType:["http","httpVideo","httpVideoLive"]},{ext:"m3u",type:"application/x-mpegURL",platform:["ios","android"],streamType:["http","httpVideo","httpVideoLive"]}]},"VIDEO"),$p.newModel({modelId:"AUDIOHLS",androidVersion:4,iosVersion:3,iLove:[{ext:"m3u8",type:"application/mpegURL",platform:["ios","android"],streamType:["http","httpAudio","httpAudioLive"]},{ext:"m3u",type:"application/mpegURL",platform:["ios","android"],streamType:["http","httpAudio","httpAudioLive"]},{ext:"m3u8",type:"application/vnd.apple.mpegURL",platform:["ios","android"],streamType:["http","httpAudio","httpAudioLive"]},{ext:"m3u",type:"application/vnd.apple.mpegURL",platform:["ios","android"],streamType:["http","httpAudio","httpAudioLive"]},{ext:"m3u8",type:"application/x-mpegURL",platform:["ios","android"],streamType:["http","httpAudio","httpAudioLive"]},{ext:"m3u",type:"application/x-mpegURL",platform:["ios","android"],streamType:["http","httpAudio","httpAudioLive"]},{ext:"m3u8",type:"audio/mpegURL",platform:["ios","android"],streamType:["http","httpAudio","httpAudioLive"]},{ext:"m3u",type:"audio/mpegURL",platform:["ios","android"],streamType:["http","httpAudio","httpAudioLive"]}]},"AUDIO")}),jQuery(function(t){$p.newModel({modelId:"VIDEOVLC",vlcVersion:"2.0.6.0",iLove:[],_eventMap:{MediaPlayerPaused:"pauseListener",MediaPlayerPlaying:"playingListener",MediaPlayerTimeChanged:"_timeListener",MediaPlayerEndReached:"endedListener",MediaPlayerBuffering:"waitingListener",MediaPlayerEncounteredError:"errorListener",MediaPlayerSeekableChanged:"seekableListener"},allowRandomSeek:!1,videoWidth:0,videoHeight:0,isPseudoStream:!1,setiLove:function(){var e=this;if(navigator.plugins&&navigator.plugins.length>0)for(var i=0;navigator.plugins.length>i;++i)if(navigator.plugins[i].name.indexOf("VLC")>-1){for(var s=0;navigator.plugins[i].length>s;s++){var n=navigator.plugins[i][s];null!=n.suffixes&&null!=n.type&&t.each(n.suffixes.split(","),function(t,i){e.iLove.push({ext:i,type:n.type.replace(/x-/,""),platform:["vlc"],streamType:["rtsp","http","pseudo","httpVideo","multipart"]})})}break}},applyMedia:function(e){e.html("").append(t("<embed/>").attr({id:this.pp.getMediaId()+"_vlc",type:"application/x-vlc-plugin",pluginspage:"http://www.videolan.org",width:"100%",height:"100%",events:!0,controls:!1,toolbar:!1,windowless:!0,allowfullscreen:!0,autoplay:!1}).css({position:"absolute",top:0,left:0})),this.mediaElement=t("#"+this.pp.getMediaId()+"_vlc"),this.applySrc()},applySrc:function(){var t=this,e=this.getSource();this.mediaElement.get(0).playlist.add(e[0].src,"item 1"),this.getState("PLAYING")?(this.setPlay(),t.isPseudoStream!==!0&&this.setSeek(this.media.position||0)):this.displayReady()},detachMedia:function(){try{this.mediaElement.get(0).playlist.stop(),this.mediaElement.html("")}catch(t){}},addListeners:function(){var e=this;t.each(this._eventMap,function(t,i){try{e.mediaElement.get(0).attachEvent?e.mediaElement.get(0).attachEvent(t,function(t){e[i](this,t)}):e.mediaElement.get(0).addEventListener?e.mediaElement.get(0).addEventListener(t,function(t){e[i](this,t)},!1):e.mediaElement.get(0)["on"+t]=function(t){e[i](this,t)}}catch(s){}})},removeListener:function(e,i){if(null!=this.mediaElement){var s=null!=i?".projekktor"+i+this.pp.getId():".projekktor"+this.pp.getId(),n=this;t.each(this._eventMap,function(t,i){t==e&&n.mediaElement.unbind(t+s)})}},_timeListener:function(t){this.timeListener({position:this.mediaElement.get(0).input.time/1e3,duration:this.mediaElement.get(0).input.length/1e3})},seekableListener:function(){this.allowRandomSeek=!0,this.media.loadProgress=100},errorListener:function(t,e){try{switch(event.target.error.code){case event.target.error.MEDIA_ERR_ABORTED:this.sendUpdate("error",1);break;case event.target.error.MEDIA_ERR_NETWORK:this.sendUpdate("error",2);break;case event.target.error.MEDIA_ERR_DECODE:this.sendUpdate("error",3);break;case event.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:this.sendUpdate("error",4);break;default:this.sendUpdate("error",5)}}catch(i){}},setPlay:function(){this.mediaElement.get(0).playlist.play()},setPause:function(){this.mediaElement.get(0).playlist.pause()},setVolume:function(t){this._volume=t,this.mediaElement.get(0).audio.volume=100*t,this.volumeListener(t)},setSeek:function(t){this.mediaElement.get(0).input.position=t/this.media.duration,this._setSeekState("seeked",t)},setFullscreen:function(){pos=this.mediaElement.get(0).input.position,this.mediaElement.get(0).playlist.stop(),this.setPlay(),this.mediaElement.get(0).input.position=pos,this.getState("PAUSED")&&this.setPause()},setResize:function(){this._scaleVideo(!1)}})}),jQuery(function(t){$p.newModel({modelId:"PLAYLIST",iLove:[{ext:"json",type:"text/json",platform:"browser"},{ext:"jsonp",type:"text/jsonp",platform:"browser"},{ext:"xml",type:"text/xml",platform:"browser"},{ext:"json",type:"application/json",platform:"browser"},{ext:"jsonp",type:"application/jsonp",platform:"browser"},{ext:"xml",type:"application/xml",platform:"browser"}],applyMedia:function(t){this.displayReady()},setPlay:function(){this.sendUpdate("playlist",this.media)}})}),jQuery(function(t){$p.newModel({browserVersion:"1",modelId:"IMAGE",iLove:[{ext:"jpg",type:"image/jpeg",platform:"browser",streamType:["http"]},{ext:"gif",type:"image/gif",platform:"browser",streamType:["http"]},{ext:"png",type:"image/png",platform:"browser",streamType:["http"]}],allowRandomSeek:!0,_position:0,_duration:0,applyMedia:function(t){this.mediaElement=this.applyImage(this.media.file[0].src,t.html("")),this._duration=this.pp.getConfig("duration")||1,this._position=-1,this.displayReady(),this._position=-.5},setPlay:function(){var t=this;return this._setBufferState("full"),this.progressListener(100),this.playingListener(),0==this._duration?(t._setState("completed"),void 0):(function(){return t._position>=t._duration?(t._setState("completed"),void 0):(t.getState("PLAYING")&&(t.timeListener({duration:t._duration,position:t._position}),setTimeout(arguments.callee,200),t._position+=.2),void 0)}(),void 0)},detachMedia:function(){this.mediaElement.remove()},setPause:function(){this.pauseListener()},setSeek:function(t){this._duration>t&&(this._position=t,this.seekedListener())}}),$p.newModel({modelId:"HTML",iLove:[{ext:"html",type:"text/html",platform:"browser",streamType:["http"]}],applyMedia:function(e){var i=this;this.mediaElement=t(document.createElement("iframe")).attr({id:this.pp.getMediaId()+"_iframe",name:this.pp.getMediaId()+"_iframe",src:this.media.file[0].src,scrolling:"no",frameborder:"0",width:"100%",height:"100%"}).css({overflow:"hidden",border:"0px",width:"100%",height:"100%"}).appendTo(e.html("")),this.mediaElement.load(function(t){i.success()}),this.mediaElement.error(function(t){i.remove()}),this._duration=this.pp.getConfig("duration")},success:function(){this.displayReady()},remove:function(){this.mediaElement.remove()}},"IMAGE")}),jQuery(function(t){$p.newModel({modelId:"OSMFVIDEO",replace:"VIDEOFLASH",flashVersion:"10.2",flashVerifyMethod:"addEventListener",iLove:[{ext:"flv",type:"video/flv",platform:"flash",fixed:!0,streamType:["*"]},{ext:"mp4",type:"video/mp4",platform:"flash",streamType:["*"]},{ext:"f4v",type:"video/mp4",platform:"flash",streamType:["*"]},{ext:"mov",type:"video/quicktime",platform:"flash",streamType:["*"]},{ext:"m4v",type:"video/mp4",platform:"flash",fixed:!0,streamType:["*"]},{ext:"f4m",type:"application/f4m+xml",platform:"flash",fixed:!0,streamType:["*"]},{ext:"m3u8",type:"application/mpegURL",platform:"flash",fixed:!0,streamType:["*"]},{ext:"m3u8",type:"application/x-mpegURL",platform:"flash",fixed:!0,streamType:["*"]},{ext:"m3u8",type:"application/vnd.apple.mpegurl",platform:"flash",fixed:!0,streamType:["*"]},{ext:"manifest",type:"application/vnd.ms-ss",platform:"flash",fixed:!0,streamType:["*"]}],hasGUI:!1,allowRandomSeek:!1,isPseudoStream:!1,streamType:"http",availableQualities:{},_hardwareAcceleration:!0,_isStream:!1,_isDVR:!1,_isMuted:!1,_isStarted:!1,_qualitySwitching:!1,_isDynamicStream:!1,_volume:0,_eventMap:{mediaPlayerCapabilityChange:"OSMF_PlayerCapabilityChange",durationChange:"OSMF_durationChange",currentTimeChange:"OSMF_currentTimeChange",loadStateChange:"OSMF_loadStateChange",bufferingChange:"OSMF_bufferingChange",bytesLoadedChange:"OSMF_bytesLoadedChange",playStateChange:"OSMF_playerStateChange",seekingChange:"OSMF_seekingChange",canPlayChange:"OSMF_seekingChange",isRecordingChange:"OSMF_isRecordingChange",complete:"endedListener",volumeChange:"volumeListener",mediaError:"errorListener",MBRItemChange:"OSMF_universal",isDynamicStreamChange:"OSMF_updateDynamicStream",autoSwitchChange:"OSMF_updateDynamicStream",switchingChange:"OSMF_updateDynamicStream"},applyMedia:function(e){var i=this;window["projekktorOSMFReady"+this.pp.getId()]=function(){projekktor(i.pp.getId()).playerModel._OSMFListener(arguments)};var s={id:this.pp.getMediaId()+"_flash",name:this.pp.getMediaId()+"_flash",src:this.pp.getConfig("playerFlashMP4"),width:"100%",height:"100%",allowScriptAccess:"always",quality:"high",menu:!1,allowFullScreen:"true",wmode:$p.utils.ieVersion()?"transparent":"opaque",SeamlessTabbing:"false",bgcolor:"#000000",FlashVars:t.extend({enableStageVideo:this._hardwareAcceleration,disableHardwareAcceleration:!this._hardwareAcceleration,javascriptCallbackFunction:"window.projekktorOSMFReady"+this.pp.getId()},this.pp.getConfig("OSMFVars"))};this.createFlash(s,e)},flashReadyListener:function(){this.applySrc(),this.displayReady()
},removeListeners:function(){},loadProgressUpdate:function(){},addListeners:function(){},applySrc:function(){var t=this,e=this.getSource();this.mediaElement.get(0).setMediaResourceURL(e[0].src),this.streamType=e[0].streamType||this.pp.getConfig("streamType")||"http",this.getState("PLAYING")&&(this.setPlay(),t.isPseudoStream!==!0&&this.media.position>0&&this.setSeek(this.media.position)),"pseudo"==this.streamType&&(this.isPseudoStream=!0,this.allowRandomSeek=!0,this.media.loadProgress=100),this.streamType.indexOf("live")>-1&&(this.allowRandomSeek=!0,this.media.loadProgress=100)},_OSMFListener:function(){var e=arguments[0][1],i=arguments[0][2],s=this;switch(this.mediaElement=t("#"+this.pp.getMediaId()+"_flash"),e){case"onJavaScriptBridgeCreated":null!==this.mediaElement&&this.getState("AWAKENING")&&(t.each(this._eventMap,function(t,e){s.mediaElement.get(0).addEventListener(t,"projekktor('"+s.pp.getId()+"').playerModel."+e)}),this.flashReadyListener());break;case"loadedmetadata":this.metaDataListener(i);break;case"progress":}},OSMF_universal:function(){},OSMF_isRecordingChange:function(){},OSMF_PlayerCapabilityChange:function(t){},OSMF_bytesLoadedChange:function(){var t=this.mediaElement.get(0),e=0;e=100*t.getBytesLoaded()/t.getBytesTotal(),this.media.loadProgress>e||(this.media.loadProgress=this.allowRandomSeek===!0?100:-1,this.media.loadProgress=100>this.media.loadProgress||void 0===this.media.loadProgress?e:100,this.sendUpdate("progress",this.media.loadProgress))},OSMF_durationChange:function(t){isNaN(t)||(this.timeListener({position:this.media.position,duration:t||0}),this.seekedListener())},OSMF_currentTimeChange:function(t){this._isDVR&&this.sendUpdate("isLive",t+20>=this.media.duration),this.timeListener({position:t,duration:this.media.duration||0})},OSMF_seekingChange:function(t){this.seekedListener()},OSMF_bufferingChange:function(t){t===!0?this.waitingListener():this.canplayListener()},OSMF_loadStateChange:function(t){switch(t){case"loading":this.waitListener();break;case"ready":this.getState("awakening")&&this.displayReady(),this.getState("starting")&&this.setPlay(),this.mediaElement.get(0).getStreamType().indexOf("dvr")>-1&&(this.allowRandomSeek=!0,this.media.loadProgress=100);break;case"loadError":}},OSMF_playerStateChange:function(t){var e=this;switch(this._isDVR||"dvr"!=this.mediaElement.get(0).getStreamType()||(this._isDVR=!0,this.sendUpdate("streamTypeChange","dvr")),t){case"playing":this.playingListener();break;case"paused":this.pauseListener(),this._isDVR&&function(){e.getState("PAUSED")&&e.media.position>=.5&&(e.timeListener({position:e.media.position-.5,duration:e.media.duration||0}),setTimeout(arguments.callee,500))}();break;case"stopped":this.getSeekState("SEEKING")||this.endedListener()}},OSMF_updateDynamicStream:function(){var e=this.mediaElement.get(0).getStreamItems(),i="",s=[];for(var n in e)e.hasOwnProperty(n)&&void 0!==e[n].bitrate&&(i=e[n].width+"x"+e[n].height,this.pp.getConfig("OSMFQualityMap")&&this.pp.getConfig("OSMFQualityMap")[i]&&(this.availableQualities[this.pp.getConfig("OSMFQualityMap")[i]]=n));$p.utils.log(e),t.each(this.availableQualities,function(t,e){s.push(t)}),s.push("auto"),this._isDynamicStream=!0,this.sendUpdate("availableQualitiesChange",s)},switchDynamicStreamIndex:function(t){-1==t?this.mediaElement.get(0).setAutoDynamicStreamSwitch(!0):(this.mediaElement.get(0).getAutoDynamicStreamSwitch()&&this.mediaElement.get(0).setAutoDynamicStreamSwitch(!1),this.mediaElement.get(0).switchDynamicStreamIndex(t))},errorListener:function(){switch(arguments[0]){case 15:this.sendUpdate("error",5);break;case 80:this.sendUpdate("error",80);break;default:}},detachMedia:function(){try{this.mediaElement.get(0).remove()}catch(t){}},volumeListener:function(t){this._volume=t},endedListener:function(t){null!==this.mediaElement&&(0>=this.media.maxpos||"STARTING"!=this.getState()&&this._qualitySwitching!==!0&&this._setState("completed"))},setSeek:function(t){return this.isPseudoStream?(this._setSeekState("seeking"),this.media.offset=t,this.applySrc(),void 0):(-1==t&&(t=this.getDuration()),this.mediaElement.get(0).seek(t),void 0)},setVolume:function(t){null===this.mediaElement?this.volumeListener(t):this.mediaElement.get(0).setVolume(t)},setPause:function(t){this.mediaElement.get(0).pause()},setPlay:function(t){this.mediaElement.get(0).play2()},setQuality:function(t){if(this._quality!=t){if(this._quality=t,this._isDynamicStream===!0)return this.switchDynamicStreamIndex("auto"==t?-1:this.availableQualities[t]),void 0;this._qualitySwitching=!0,this.applySrc(),this._qualitySwitching=!1,this.qualityChangeListener()}},getVolume:function(){return this._isMuted===!0?0:null===this.mediaElement?this.media.volume:this._volume},getSrc:function(){try{return this.mediaElement.get(0).getCurrentSrc()}catch(t){return null}},getQuality:function(){return this._quality},_scaleVideo:function(){}}),$p.newModel({modelId:"OSMFVIDEONA",iLove:[{ext:"flv",type:"video/flv",platform:"flashna",fixed:!0,streamType:["*"]},{ext:"mp4",type:"video/mp4",platform:"flashna",streamType:["*"]},{ext:"f4v",type:"video/mp4",platform:"flashna",streamType:["*"]},{ext:"mov",type:"video/quicktime",platform:"flashna",streamType:["*"]},{ext:"m4v",type:"video/mp4",platform:"flashna",fixed:!0,streamType:["*"]},{ext:"f4m",type:"application/f4m+xml",platform:"flashna",fixed:!0,streamType:["*"]}],_hardwareAcceleration:!1},"OSMFVIDEO"),$p.newModel({modelId:"OSMFAUDIO",replace:"AUDIOFLASH",hasGUI:!1,iLove:[{ext:"mp3",type:"audio/mp3",platform:"flash",streamType:["*"]},{ext:"m4a",type:"audio/mp4",platform:"flash",streamType:["*"]},{ext:"m4a",type:"audio/mpeg",platform:"flash",streamType:["*"]}],applyMedia:function(e){var i=this;$p.utils.blockSelection(e),this.imageElement=this.applyImage(this.getPoster("cover")||this.getPoster("poster"),e);var s=t("#"+this.pp.getMediaId()+"_flash_container");0===s.length&&(s=t(document.createElement("div")).css({width:"1px",height:"1px"}).attr("id",this.pp.getMediaId()+"_flash_container").prependTo(this.pp.getDC())),window["projekktorOSMFReady"+this.pp.getId()]=function(){projekktor(i.pp.getId()).playerModel._OSMFListener(arguments)};var n={id:this.pp.getMediaId()+"_flash",name:this.pp.getMediaId()+"_flash",src:this.pp.getConfig("playerFlashMP4"),width:"100%",height:"100%",allowScriptAccess:"always",quality:"height",menu:!1,allowFullScreen:"true",wmode:"opaque",seamlesstabbing:"false",bgcolor:"#ccc",FlashVars:t.extend({javascriptCallbackFunction:"window.projekktorOSMFReady"+this.pp.getId()},this.pp.getConfig("OSMFVars"))};this.createFlash(n,s,!1)}},"OSMFVIDEO")}),jQuery(function(t){$p.newModel({modelId:"YTVIDEO",iLove:[{ext:"youtube.com",type:"video/youtube",platform:"flash",fixed:"maybe"}],allowRandomSeek:!0,useIframeAPI:!0,flashVerifyMethod:"cueVideoById",_ffFix:!1,_updateTimer:null,init:function(e){var i=this;if(this.useIframeAPI=this.pp.getConfig("useYTIframeAPI")||this.pp.getIsMobileClient(),this.hasGUI=this.pp.getIsMobileClient(),!this.useIframeAPI)return this.requiresFlash=8,this.ready(),void 0;var s=this.pp.getId();window.ProjekktorYoutubePlayerAPIReady!==!0?(t.getScript("http://www.youtube.com/player_api"),function(){try{if(1==window.ProjekktorYoutubePlayerAPIReady)return i.ready(),void 0;setTimeout(arguments.callee,50)}catch(t){setTimeout(arguments.callee,50)}}()):this.ready(),window.onYouTubePlayerAPIReady=function(){window.ProjekktorYoutubePlayerAPIReady=!0}},applyMedia:function(e){this._setBufferState("empty");var i=this,s="YTAUDIO"==this.modelId?1:"100%",n="YTAUDIO"==this.modelId?1:"100%";if("YTAUDIO"==this.modelId&&(this.imageElement=this.applyImage(this.pp.getPoster(),e)),this.useIframeAPI){e.html("").append(t("<div/>").attr("id",this.pp.getId()+"_media_youtube").css({width:"100%",height:"100%",position:"absolute",top:0,left:0}));var a=t("<div/>").attr("id",this.pp.getId()+"_media_youtube_cc").css({width:"100%",height:"100%",backgroundColor:$p.utils.ieVersion()?"#000":"transparent",filter:"alpha(opacity = 0.1)",position:"absolute",top:0,left:0});e.append(a),this.mediaElement=new YT.Player(this.pp.getId()+"_media_youtube",{width:this.pp.getIsMobileClient()?this.pp.config._width:s,height:this.pp.getIsMobileClient()?this.pp.config._height:n,playerVars:{autoplay:0,disablekb:0,version:3,start:0,controls:this.pp.getIsMobileClient()?1:0,showinfo:0,enablejsapi:1,start:this.media.position||0,origin:window.location.href,wmode:"transparent",modestbranding:1},videoId:this.youtubeGetId(),events:{onReady:function(t){i.onReady(t)},onStateChange:function(t){i.stateChange(t)},onError:function(t){i.errorListener(t)}}})}else{var r={id:this.pp.getId()+"_media_youtube",name:this.pp.getId()+"_media_youtube",src:"http://www.youtube.com/apiplayer",width:this.pp.getIsMobileClient()?this.pp.config._width:s,height:this.pp.getIsMobileClient()?this.pp.config._height:n,bgcolor:"#000000",allowScriptAccess:"always",wmode:"transparent",FlashVars:{enablejsapi:1,autoplay:0,version:3,modestbranding:1,showinfo:0}};this.createFlash(r,e)}},flashReadyListener:function(){this._youtubeResizeFix(),this.addListeners(),this.mediaElement.cueVideoById(this.youtubeGetId(),this.media.position||0,this._playbackQuality)},_youtubeResizeFix:function(){this.applyCommand("volume",this.pp.getConfig("volume"))},addListeners:function(){this.mediaElement.addEventListener("onStateChange","projekktor('"+this.pp.getId()+"').playerModel.stateChange"),this.mediaElement.addEventListener("onError","projekktor('"+this.pp.getId()+"').playerModel.errorListener"),this.mediaElement.addEventListener("onPlaybackQualityChange","projekktor('"+this.pp.getId()+"').playerModel.qualityChangeListener")},setSeek:function(t){try{this.mediaElement.seekTo(t,!0),this.getState("PLAYING")||this.timeListener({position:this.mediaElement.getCurrentTime(),duration:this.mediaElement.getDuration()})}catch(e){}},setVolume:function(t){try{this.mediaElement.setVolume(100*t)}catch(e){}},setPause:function(t){try{this.mediaElement.pauseVideo()}catch(e){}},setPlay:function(t){try{this.mediaElement.playVideo()}catch(e){}},setQuality:function(t){try{this.mediaElement.setPlaybackQuality(t)}catch(e){}},getVolume:function(){try{return this.mediaElement.getVolume()}catch(t){}return 0},getPoster:function(){return this.media.config.poster||this.pp.config.poster||"http://img.youtube.com/vi/"+this.youtubeGetId()+"/0.jpg"},getPlaybackQuality:function(){try{return this.mediaElement.getPlaybackQuality()}catch(t){return!1}},getSrc:function(){return this.youtubeGetId()||null},errorListener:function(t){switch(void 0==t.data?t:t.data){case 100:this.setTestcard(500);break;case 101:case 150:this.setTestcard(501);break;case 2:this.setTestcard(502)}},stateChange:function(t){if(clearTimeout(this._updateTimer),null!==this.mediaElement&&!this.getState("COMPLETED"))switch(void 0==t.data?t:t.data){case-1:this.setPlay(),this.ffFix=!0;break;case 0:if(this.getState("AWAKENING"))break;this._setBufferState("full"),this.endedListener({});break;case 1:this._setBufferState("full"),(this.media.position||0)>0&&this._isFF()&&this.ffFix&&(this.ffFix=!1,this.setSeek(this.media.position)),this.playingListener({}),this.canplayListener({}),this.updateInfo();break;case 2:this.pauseListener({});break;case 3:this.waitingListener({});break;case 5:this.useIframeAPI!==!0&&this.onReady()}},onReady:function(){if(this.setVolume(this.pp.getVolume()),t("#"+this.pp.getId()+"_media").attr("ALLOWTRANSPARENCY",!0).attr({scrolling:"no",frameborder:0}).css({overflow:"hidden",display:"block",border:"0"}),this.media.title||this.pp.config.title||this.pp.getIsMobileClient())return this.displayReady(),void 0;var e=this;t.ajax({url:"http://gdata.youtube.com/feeds/api/videos/"+this.youtubeGetId()+"?v=2&alt=jsonc",async:!1,complete:function(i,s){try{data=i.responseText,"string"==typeof data&&(data=t.parseJSON(data)),data.data.title&&e.sendUpdate("config",{title:data.data.title+" ("+data.data.uploader+")"})}catch(n){}e.displayReady()}})},youtubeGetId:function(){return encodeURIComponent(this.media.file[0].src.replace(/^[^v]+v.(.{11}).*/,"$1"))},updateInfo:function(){var t=this;clearTimeout(this._updateTimer),function(){if(null==t.mediaElement)return clearTimeout(t._updateTimer),void 0;try{t.getState("PLAYING")&&(t.timeListener({position:t.mediaElement.getCurrentTime(),duration:t.mediaElement.getDuration()}),t.progressListener({loaded:t.mediaElement.getVideoBytesLoaded(),total:t.mediaElement.getVideoBytesTotal()}),t._updateTimer=setTimeout(arguments.callee,500))}catch(e){}}()}}),$p.newModel({modelId:"YTAUDIO",iLove:[{ext:"youtube.com",type:"audio/youtube",platform:"flash",fixed:"maybe"}]},"YTVIDEO")});var projekktorDisplay=function(){};jQuery(function(t){projekktorDisplay.prototype={version:"1.1.00",logo:null,logoIsFading:!1,display:null,displayClicks:0,buffIcn:null,buffIcnSprite:null,bufferDelayTimer:null,_controlsDims:null,config:{displayClick:{callback:"setPlayPause",value:null},displayPlayingClick:{callback:"setPlayPause",value:null},displayDblClick:{callback:null,value:null},staticControls:!1,bufferIconDelay:1e3,spriteUrl:"",spriteWidth:50,spriteHeight:50,spriteTiles:25,spriteOffset:1,spriteCountUp:!1},initialize:function(){this.display=this.applyToPlayer(t("<div/>")),this.startButton=this.applyToPlayer(t("<div/>").addClass("start"),"startbtn"),this.buffIcn=this.applyToPlayer(t("<div/>").addClass("buffering"),"buffericn"),this.imaContainer=this.applyToPlayer(t("<div/>").addClass("ima"),"ima"),this.setActive(),""!==this.config.spriteUrl&&(this.buffIcnSprite=t("<div/>").appendTo(this.buffIcn).css({width:this.config.spriteWidth,height:this.config.spriteHeight,marginLeft:(this.buffIcn.width()-this.config.spriteWidth)/2+"px",marginTop:(this.buffIcn.height()-this.config.spriteHeight)/2+"px",backgroundColor:"transparent",backgroundImage:"url("+this.config.spriteUrl+")",backgroundRepeat:"no-repeat",backgroundPosition:"0 0"}).addClass("inactive")),this.pp.getMediaContainer(),this.pluginReady=!0},displayReadyHandler:function(){var t=this;this.hideStartButton(),this.startButton.unbind().click(function(){t.pp.setPlay()})},syncingHandler:function(){this.showBufferIcon(),this.pp.getState("IDLE")&&this.hideStartButton()},readyHandler:function(){this.hideBufferIcon(),this.pp.getState("IDLE")&&this.showStartButton()},bufferHandler:function(t){(this.pp.getState("PLAYING")||this.pp.getState("AWAKENING"))&&("EMPTY"==t?this.showBufferIcon():this.hideBufferIcon())},stateHandler:function(t){switch(t){case"IDLE":clearTimeout(this._cursorTimer),this.display.css("cursor","pointer");break;case"PLAYING":this.hideBufferIcon(),this.hideStartButton();break;case"IDLE":this.showStartButton();break;case"STARTING":case"AWAKENING":this.showBufferIcon(),this.hideStartButton();break;case"COMPLETED":case"STOPPED":this.hideBufferIcon();break;default:this.hideStartButton()}},errorHandler:function(){this.hideBufferIcon(),this.hideStartButton()},startHandler:function(){this.mousemoveHandler()},scheduleLoadingHandler:function(){this.hideStartButton(),this.showBufferIcon()},scheduledHandler:function(){this.getConfig("autoplay")||this.showStartButton(),this.hideBufferIcon()},plugineventHandler:function(t){if("controlbar"==t.PLUGIN&&"show"==t.EVENT&&this.getConfig("staticControls")){var e=100*t.height/this.pp.getDC().height();this.display.height(100-e+"%").data("sc",!0)}},qualityChangeHandler:function(){this.hideBufferIcon()},mousemoveHandler:function(t){var e=this.display;return this.pp.getState("IDLE")?(e.css("cursor","pointer"),void 0):(e.css("cursor","auto"),clearTimeout(this._cursorTimer),-1=="AWAKENING|ERROR|PAUSED".indexOf(this.pp.getState())&&(this._cursorTimer=setTimeout(function(){e.css("cursor","none")},3e3)),void 0)},mousedownHandler:function(e){var i=this;if(-1!=(t(e.target).attr("id")||"").indexOf("_media")&&(clearTimeout(this._cursorTimer),this.display.css("cursor","auto"),1==e.which)){switch(this.pp.getState()){case"ERROR":return this.pp.setConfig({disallowSkip:!1}),this.pp.setActiveItem("next"),void 0;case"IDLE":return this.pp.setPlay(),void 0}this.pp.getHasGUI()!==!0&&(this.displayClicks++,this.pp._promote("displayClick"),this.displayClicks>0&&setTimeout(function(){1==i.displayClicks?"PLAYING"==i.pp.getState()?i.clickHandler("displayPlaying"):i.clickHandler("display"):2==i.displayClicks&&i.clickHandler("displayDbl"),i.displayClicks=0},250))}},showStartButton:function(){this.startButton.addClass("active").removeClass("inactive")},hideStartButton:function(){this.startButton.addClass("inactive").removeClass("active")},hideBufferIcon:function(){clearTimeout(this.bufferDelayTimer),this.buffIcn.addClass("inactive").removeClass("active")},showBufferIcon:function(t){var e=this;if(clearTimeout(this.bufferDelayTimer),!this.pp.getHasGUI()){if("YTAUDIO"!==this.pp.getModel()&&"YTVIDEO"!==this.pp.getModel()||this.pp.getState("IDLE")||(t=!0),t!==!0&&this.getConfig("bufferIconDelay")>0)return this.bufferDelayTimer=setTimeout(function(){e.showBufferIcon(!0)},this.getConfig("bufferIconDelay")),void 0;if(!this.buffIcn.hasClass("active")&&(this.buffIcn.addClass("active").removeClass("inactive"),null!==e.buffIcnSprite)){var i=e.config.spriteCountUp===!0?0:(e.config.spriteHeight+e.config.spriteOffset)*(e.config.spriteTiles-1),s=i;e.buffIcnSprite.addClass("active").removeClass("inactive"),function(){e.buffIcn.is(":visible")&&(e.buffIcnSprite.css("backgroundPosition","0px -"+s+"px"),e.config.spriteCountUp===!0?s+=e.config.spriteHeight+e.config.spriteOffset:s-=e.config.spriteHeight+e.config.spriteOffset,(s>(i+e.config.spriteHeight)*e.config.spriteTiles||e.config.spriteOffset>s)&&(s=i),setTimeout(arguments.callee,60))}()}}}}});var projekktorControlbar=function(){};jQuery(function(t){projekktorControlbar.prototype={version:"1.1.01",_cTimer:null,_isDVR:!1,_noHide:!1,_vSliderAct:!1,cb:null,controlElements:{},controlElementsConfig:{sec_dur:null,min_dur:null,sec_abs_dur:null,min_abs_dur:null,hr_dur:null,sec_elp:null,min_elp:null,sec_abs_elp:null,min_abs_elp:null,hr_elp:null,sec_rem:null,min_rem:null,sec_abs_rem:null,min_abs_rem:null,hr_rem:null,sec_tip:null,min_tip:null,sec_abs_tip:null,min_abs_tip:null,hr_tip:null,cb:null,playhead:{on:null,call:null},loaded:null,golive:[{on:["touchstart","click"],call:"goliveClk"},{on:["touchend"],call:"touchEnd"}],scrubber:null,scrubbertip:null,scrubberknob:null,scrubberdrag:[{on:["mouseenter"],call:"scrubberShowTooltip"},{on:["mouseout"],call:"scrubberHideTooltip"},{on:["mousemove"],call:"scrubberdragTooltip"},{on:["mousedown"],call:"scrubberdragStartDragListener"}],play:[{on:["touchstart","click"],call:"playClk"},{on:["touchend"],call:"touchEnd"}],pause:[{on:["touchstart","click"],call:"pauseClk"},{on:["touchend"],call:"touchEnd"}],stop:[{on:["touchstart","click"],call:"stopClk"},{on:["touchend"],call:"touchEnd"}],prev:[{on:["touchstart","click"],call:"prevClk"},{on:["touchend"],call:"touchEnd"}],next:[{on:["touchstart","click"],call:"nextClk"},{on:["touchend"],call:"touchEnd"}],rewind:[{on:["touchstart","click"],call:"rewindClk"},{on:["touchend"],call:"touchEnd"}],forward:[{on:["touchstart","click"],call:"forwardClk"},{on:["touchend"],call:"touchEnd"}],fsexit:[{on:["touchstart","click"],call:"exitFullscreenClk"},{on:["touchend"],call:"touchEnd"}],fsenter:[{on:["touchstart","click"],call:"enterFullscreenClk"},{on:["touchend"],call:"touchEnd"}],loquality:[{on:["touchstart","click"],call:"setQualityClk"},{on:["touchend"],call:"touchEnd"}],hiquality:[{on:["touchstart","click"],call:"setQualityClk"},{on:["touchend"],call:"touchEnd"}],vslider:[{on:["touchstart","click"],call:"vsliderClk"},{on:["touchend"],call:"touchEnd"}],vmarker:[{on:["touchstart","click"],call:"vsliderClk"},{on:["touchend"],call:"touchEnd"}],vknob:{on:["mousedown"],call:"vknobStartDragListener"},volumePanel:[{on:["mousemove"],call:"volumeBtnHover"},{on:["mouseout"],call:"volumeBtnOut"}],volume:null,mute:[{on:["touchstart","click"],call:"muteClk"},{on:["mouseout"],call:"volumeBtnOut"},{on:["mousemove"],call:"volumeBtnHover"},{on:["touchend"],call:"touchEnd"}],unmute:[{on:["touchstart","click"],call:"unmuteClk"},{on:["mouseout"],call:"volumeBtnOut"},{on:["mousemove"],call:"volumeBtnHover"},{on:["touchend"],call:"touchEnd"}],vmax:[{on:["touchstart","click"],call:"vmaxClk"},{on:["mouseout"],call:"volumeBtnOut"},{on:["mousemove"],call:"volumeBtnHover"},{on:["touchend"],call:"touchEnd"}],open:[{on:["touchstart","click"],call:"openCloseClk"},{on:["touchend"],call:"touchEnd"}],close:[{on:["touchstart","click"],call:"openCloseClk"},{on:["touchend"],call:"touchEnd"}],loop:[{on:["touchstart","click"],call:"loopClk"},{on:["touchend"],call:"touchEnd"}],draghandle:{on:["mousedown"],call:"handleStartDragListener"},controls:null,title:null},config:{toggleMute:!1,showCuePoints:!1,fadeDelay:2500,showOnStart:!1,showOnIdle:!1,controlsTemplate:'<ul class="left"><li><div %{play}></div><div %{pause}></div></li></ul><ul class="right"><li><div %{fsexit}></div><div %{fsenter}></div></li><li><div %{loquality}></div><div %{hiquality}></div></li><li><div %{tracksbtn}></div></li><li><div %{vmax}></div></li><li><div %{vslider}><div %{vmarker}></div><div %{vknob}></div></div></li><li><div %{mute}></div></li><li><div %{timeleft}>%{hr_elp}:%{min_elp}:%{sec_elp} | %{hr_dur}:%{min_dur}:%{sec_dur}</div></li><li><div %{next}></div></li><li><div %{prev}></div></li></ul><ul class="bottom"><li><div %{scrubber}><div %{loaded}></div><div %{playhead}></div><div %{scrubberknob}></div><div %{scrubberdrag}></div></div></li></ul><div %{scrubbertip}>%{hr_tip}:%{min_tip}:%{sec_tip}</div>'},initialize:function(){var e=this,i=this.playerDom.html(),s=!0,n=this.pp.getNS();for(var a in this.controlElementsConfig)if(i.match(RegExp(n+a,"gi"))){s=!1;break}s?(this.cb=this.applyToPlayer(t("<div/>").addClass("controls")),this.applyTemplate(this.cb,this.getConfig("controlsTemplate"))):this.cb=this.playerDom.find("."+n+"controls");for(var a in this.controlElementsConfig)this.controlElements[a]=t(this.playerDom).find("."+n+a),$p.utils.blockSelection(t(this.controlElements[a]));this.addGuiListeners(),this.hidecb(!0),this.pluginReady=!0},applyTemplate:function(e,i){var s=this,n=this.pp.getNS();if(i){var a=i.match(/\%{[a-zA-Z_]*\}/gi);null!=a&&t.each(a,function(t,e){var s=e.replace(/\%{|}/gi,"");i=e.match(/\_/gi)?i.replace(e,'<span class="'+n+s+'"></span>'):i.replace(e,'class="'+n+s+'"')}),e.html(i)}},updateDisplay:function(){var t=this,e=this.pp.getState();if(!this.pp.getHasGUI()){if(0==this.getConfig("controls"))return this.hidecb(!0),void 0;2>this.pp.getItemCount()||this.getConfig("disallowSkip")?(this._active("prev",!1),this._active("next",!1)):(this._active("prev",!0),this._active("next",!0)),1>this.pp.getItemIdx()&&this._active("prev",!1),this.pp.getItemIdx()>=this.pp.getItemCount()-1&&this._active("next",!1),this.getConfig("disablePause")?(this._active("play",!1),this._active("pause",!1)):("PLAYING"===e&&this.drawPauseButton(),"PAUSED"===e&&this.drawPlayButton(),"IDLE"===e&&this.drawPlayButton()),this._active("stop","IDLE"!==e),this._active("forward","IDLE"!==e),this._active("rewind","IDLE"!==e),this.pp.getInFullscreen()===!0?this.drawExitFullscreenButton():this.drawEnterFullscreenButton(),this.getConfig("enableFullscreen")||(this._active("fsexit",!1),this._active("fsenter",!1)),this._active("loop",!0),this.controlElements.loop.addClass(this.pp.getConfig("loop")?"on":"off").removeClass(this.pp.getConfig("loop")?"off":"on"),this.displayQualityToggle(),this.displayTime(),this.displayVolume(this._getVolume())}},addGuiListeners:function(){var e=this;t.each(this.controlElementsConfig,function(i,s){if(null==s)return!0;s instanceof Array||(s=[s]);for(var n=0;s.length>n;n++)null!=s[n].on&&t.each(s[n].on,function(t,a){var r="on"+a in window.document,o=s[n].call;if(!r){var l=document.createElement("div");l.setAttribute("on"+a,"return;"),r="function"==typeof l["on"+a]}r&&e.controlElements[i].bind(a,function(t){e.clickCatcher(t,o,e.controlElements[i])})});return!0}),this.cb.mousemove(function(t){e.controlsFocus(t)}),this.cb.mouseout(function(t){e.controlsBlur(t)})},clickCatcher:function(t,e,i){var s=this;return t.stopPropagation(),t.preventDefault(),this[e](t,i),!1},touchEnd:function(){var t=this;this._cTimer=setTimeout(function(){t.hidecb()},this.getConfig("fadeDelay")),this._noHide=!1},drawTitle:function(){this.controlElements.title.html(this.getConfig("title",""))},hidecb:function(t){return clearTimeout(this._cTimer),null!=this.cb?0==this.getConfig("controls")?(this.cb.removeClass("active").addClass("inactive"),void 0):(this.getConfig("showOnIdle")&&this.pp.getState("IDLE")||(t&&(this._noHide=!1),this._noHide||this.cb.hasClass("inactive")||(this.cb.removeClass("active").addClass("inactive"),this.sendEvent("hide",this.cb))),void 0):void 0},showcb:function(t){var e=this;if(clearTimeout(this._cTimer),this.pp.getHasGUI()||0==this.getConfig("controls"))return this.cb.removeClass("active").addClass("inactive"),void 0;if(null!=this.cb&&!("IDLE|AWAKENING|ERROR".indexOf(this.pp.getState())>-1&&1!=t)){if(this.cb.hasClass("active")&&t!==!1)return this._cTimer=setTimeout(function(){e.hidecb()},this.getConfig("fadeDelay")),void 0;this.cb.removeClass("inactive").addClass("active"),this.sendEvent("show",this.cb),this._cTimer=setTimeout(function(){e.hidecb()},this.getConfig("fadeDelay"))}},displayTime:function(e,i,s){if(!this.pp.getHasGUI()){var n=Math.round(10*(e||this.pp.getLoadPlaybackProgress()||0))/10,a=i||this.pp.getDuration()||0,r=s||this.pp.getPosition()||0,o=t.extend({},this._clockDigits(a,"dur"),this._clockDigits(r,"elp"),this._clockDigits(a-r,"rem"));if(this.controlElements.playhead.data("pct")!=n){this.controlElements.playhead.data("pct",n).css({width:n+"%"}),this.controlElements.scrubberknob.css({left:n+"%"});for(var l in this.controlElements){if("cb"==l)break;o[l]&&t.each(this.controlElements[l],function(){t(this).html(o[l])})}}}},displayProgress:function(){var t=Math.round(10*this.pp.getLoadProgress())/10;this.controlElements.loaded.data("pct")!=t&&this.controlElements.loaded.data("pct",t).css("width",t+"%")},displayVolume:function(e){var i=this;if(1!=this._vSliderAct&&null!=e){var s=this.cb.hasClass("active"),i=this,n=this.getConfig("fixedVolume"),a=this.controlElements.mute.hasClass("toggle")||this.controlElements.unmute.hasClass("toggle")||this.getConfig("toggleMute");if(this._active("mute",!n),this._active("unmute",!n),this._active("vmax",!n),this._active("vknob",!n),this._active("vmarker",!n),this._active("vslider",!n),!n){this.controlElements.vslider.width()>this.controlElements.vslider.height()?(this.controlElements.vmarker.css("width",100*e+"%"),this.controlElements.vknob.css("left",100*e+"%")):(this.controlElements.vmarker.css("height",100*e+"%"),this.controlElements.vknob.css("top",100-100*e+"%"));var r=this.controlElements.volume.find("li"),o=r.length-Math.ceil(100*e/r.length);for(var l=0;r.length>=l;l++)l>=o?t(r[l]).addClass("active"):t(r[l]).removeClass("active");if(a)switch(parseFloat(e)){case 0:this._active("mute",!1),this._active("unmute",!0),this._active("vmax",!0);break;default:this._active("mute",!0),this._active("unmute",!1),this._active("vmax",!1)}s&&this.cb.fadeTo(1,.99).fadeTo(1,1,function(){i.cb.removeAttr("style")})}}},displayCuePoints:function(e){var i=this,s=this.pp.getNS();this.getConfig("showCuePoints")&&(i.controlElements.scrubber.remove("."+s+"cuepoint"),t.each(this.pp.getCuePoints()||[],function(){var n=Math.max(100/e,Math.round(e/100),1),a=100*this.on/e-100*(n/2)/e,r=this,o=i.pp,l=t(document.createElement("div")).addClass(s+"cuepoint").addClass("inactive").css("left",a+"%").css("width",n+"%").data("on",this.on);""!=this.title&&l.attr("title",this.title),this.addListener("unlock",function(){t(l).removeClass("inactive").addClass("active"),l.click(function(){i.pp.setPlayhead(l.data("on"))})}),i.controlElements.scrubber.append(l)}))},drawPauseButton:function(t){this._active("pause",!0),this._active("play",!1)},drawPlayButton:function(t){this._active("pause",!1),this._active("play",!0)},drawEnterFullscreenButton:function(t){this._active("fsexit",!1),this._active("fsenter",!0)},drawExitFullscreenButton:function(t){this._active("fsexit",!0),this._active("fsenter",!1)},displayQualityToggle:function(e){var i=this.getConfig("playbackQualities"),s=this.pp.getPlaybackQualities(),n=this.pp.getNS();if(best=[],2>s.length||2>i.length)return this.controlElements.loquality.removeClass().addClass("inactive").addClass(n+"loquality").data("qual",""),this.controlElements.hiquality.removeClass().addClass("inactive").addClass(n+"hiquality").data("qual",""),void 0;i.sort(function(t,e){return t.minHeight-e.minHeight});for(var a=i.length;a--;a>0)if(t.inArray(i[a].key,s)>-1&&best.push(i[a].key),best.length>1)break;this.cb.addClass("qualities"),best[0]==this.pp.getPlaybackQuality()?(this._active("loquality",!0).addClass("qual"+best[1]).data("qual",best[1]),this._active("hiquality",!1).addClass("qual"+best[0]).data("qual",best[0])):(this._active("loquality",!1).addClass("qual"+best[1]).data("qual",best[1]),this._active("hiquality",!0).addClass("qual"+best[0]).data("qual",best[0]))},itemHandler:function(e){t(this.cb).find("."+this.pp.getNS()+"cuepoint").remove(),this.pp.setVolume(this._getVolume()),this.updateDisplay(),this.hidecb(!0),this.drawTitle(),this.displayQualityToggle(),this.pluginReady=!0},startHandler:function(){this.pp.setVolume(this._getVolume()),1==this.getConfig("showOnStart")?this.showcb(!0):this.hidecb(!0)},readyHandler:function(t){clearTimeout(this._cTimer),this.getConfig("showOnIdle")&&(this.showcb(!0),this.cb.removeClass("inactive").addClass("active").show()),this.pluginReady=!0},stateHandler:function(t){return this.updateDisplay(),"STOPPED|AWAKENING|IDLE|DONE".indexOf(t)>-1&&(this.displayTime(0,0,0),this.displayProgress(0),this.pp.getIsMobileClient()&&this.hidecb(!0)),"STOPPED|DONE|IDLE".indexOf(t)>-1?(this.hidecb(!0),void 0):("ERROR".indexOf(t)>-1&&(this._noHide=!1,this.hidecb(!0)),this.displayProgress(),void 0)},scheduleModifiedHandler:function(){"IDLE"!==this.pp.getState()&&(this.updateDisplay(),this.displayTime(),this.displayProgress())},volumeHandler:function(t){try{t>0&&this.cookie("muted",!1),this.cookie("muted")||this.cookie("volume",t)}catch(e){console.log(e)}this.displayVolume(this._getVolume())},progressHandler:function(t){this.displayProgress()},timeHandler:function(t){this.displayTime(),this.displayProgress()},qualityChangeHandler:function(t){this.displayQualityToggle(t)},streamTypeChangeHandler:function(t){"dvr"==t&&(this._isDVR=!0,this.setActive(this.controlElements.golive,!0))},isLiveHandler:function(t){t?this.controlElements.golive.addClass("on").removeClass("off"):this.controlElements.golive.addClass("off").removeClass("on")},fullscreenHandler:function(t){var e=this,i=this.pp.getNS();clearTimeout(this._cTimer),this._noHide=!1,this._vSliderAct=!1,this.getConfig("controls")&&this.getConfig("enableFullscreen")&&(t?(this.cb.addClass("fullscreen"),this.drawExitFullscreenButton()):(this.cb.removeClass("fullscreen"),this.drawEnterFullscreenButton()),"IDLE"!=this.pp.getState()||this.getConfig("showOnIdle")||this.hidecb(!0))},durationChangeHandler:function(t){this.displayCuePoints(t)},errorHandler:function(t){this.hidecb(!0)},leftclickHandler:function(){this.mouseleaveHandler()},focusHandler:function(t){this.showcb()},mouseenterHandler:function(t){this.showcb()},mousemoveHandler:function(t){this.pp.getState("STARTING")||this.showcb()},mouseleaveHandler:function(){},mousedownHandler:function(t){this.showcb()},controlsFocus:function(t){this._noHide=!0},controlsBlur:function(t){this._noHide=!1},setQualityClk:function(e){this.pp.setPlaybackQuality(t(e.currentTarget).data("qual"))},goliveClk:function(t){this.pp.setSeek(-1)},playClk:function(t){this.pp.setPlay()},pauseClk:function(t){this.pp.setPause()},stopClk:function(t){this.pp.setStop()},startClk:function(t){this.pp.setPlay()},controlsClk:function(t){},prevClk:function(t){this.pp.setActiveItem("previous")},nextClk:function(t){this.pp.setActiveItem("next")},forwardClk:function(t){this.pp.setPlayhead("+10")},rewindClk:function(t){this.pp.setPlayhead("-10")},muteClk:function(t){this.cookie("muted",!0),this.pp.setVolume(0)
},unmuteClk:function(t){this.cookie("muted",!1),this.pp.setVolume(this._getVolume())},vmaxClk:function(t){this.cookie("muted",!1),this.pp.setVolume(1)},enterFullscreenClk:function(t){this.pp.setFullscreen(!0)},exitFullscreenClk:function(t){this.pp.setFullscreen(!1)},loopClk:function(e){this.pp.setLoop(t(e.currentTarget).hasClass("inactive")||!1),this.updateDisplay()},vmarkerClk:function(t){vsliderClk(t)},openCloseClk:function(e){var i=this;t(t(e.currentTarget).attr("class").split(/\s+/)).each(function(t,e){-1!=e.indexOf("toggle")&&(i.playerDom.find("."+e.substring(6)).slideToggle("slow",function(){i.pp.setSize()}),i.controlElements.open.toggle(),i.controlElements.close.toggle())})},volumeBtnHover:function(t){clearTimeout(this._outDelay),this.setActive(this.controlElements.volumePanel,!0)},volumeBtnOut:function(t,e){var i=this;t.currentTarget==e.get(0)&&t.relatedTarget!=e.get(0)&&(this._outDelay=setTimeout(function(){i.setActive(i.controlElements.volumePanel,!1)},100))},vsliderClk:function(e){if(1!=this._vSliderAct){var i=t(this.controlElements.vslider),s=i.width()>i.height()?"hor":"vert",n="hor"==s?i.width():i.height(),a=e.originalEvent.touches?e.originalEvent.touches[0].pageX:e.pageX,r=e.originalEvent.touches?e.originalEvent.touches[0].pageY:e.pageY,o="hor"==s?a-i.offset().left:r-i.offset().top,l=0;l=0>o||isNaN(o)||void 0==o?0:"hor"==s?o/n:1-o/n,this.pp.setVolume(l)}},scrubberShowTooltip:function(t){0!=this.pp.getDuration()&&(clearTimeout(this._cTimer),this.setActive(this.controlElements.scrubbertip,!0))},scrubberHideTooltip:function(t){this.setActive(this.controlElements.scrubbertip,!1)},scrubberdragTooltip:function(e){if(0!=this.pp.getDuration()){this.setActive(this.controlElements.scrubbertip,!0);var i=t(this.controlElements.scrubberdrag[0]),s=t(this.controlElements.loaded[0]),n=t(this.controlElements.scrubbertip),a=e.originalEvent.touches?e.originalEvent.touches[0].pageX:e.pageX,r=e.originalEvent.touches?e.originalEvent.touches[0].pageY:e.pageY,o=a-i.offset().left-n.outerWidth()/2,l=this.pp.getDuration()/100*(100*(a-i.offset().left)/i.width()),h=this._clockDigits(l,"tip");if(this._isDVR){l=this.pp.getDuration()-l;var u=new Date(1e3*((new Date).getTime()/1e3-l)),u=u.getSeconds()+60*u.getMinutes()+3600*u.getHours();h=this._clockDigits(u,"tip")}for(var c in this.controlElements){if("cb"==c)break;h[c]&&t.each(this.controlElements[c],function(){t(this).html(h[c])})}o=0>o?0:o,o=o>i.width()-n.outerWidth()?i.width()-n.outerWidth():o,n.css({left:o+"px"})}},scrubberdragStartDragListener:function(e){if(1!=this.getConfig("disallowSkip")){this._sSliderAct=!0;var i=this,s=t(this.controlElements.scrubberdrag[0]),n=t(this.controlElements.loaded[0]),a=0,r=Math.abs(parseInt(s.offset().left)-e.clientX),o=function(t){var e=Math.abs(s.offset().left-t.clientX);e=e>s.width()?s.width():e,e=e>n.width()?n.width():e,e=0>e?0:e,e=Math.abs(e/s.width())*i.pp.getDuration(),e>0&&e!=a&&(a=e,i.pp.setPlayhead(a))},l=function(t){return t.stopPropagation(),t.preventDefault(),i.playerDom.unbind("mouseup.slider"),s.unbind("mousemove",h),s.unbind("mouseup",l),i._sSliderAct=!1,!1},h=function(t){return clearTimeout(i._cTimer),t.stopPropagation(),t.preventDefault(),o(t),!1};this.playerDom.bind("mouseup.slider",l),s.mouseup(l),s.mousemove(h),o(e)}},vknobStartDragListener:function(e,i){this._vSliderAct=!0;var s=this,n=this.pp.getInFullscreen()===!0&&this.controlElements.vslider.length>1?1:0,a=t(i[n]),r=t(this.controlElements.vslider[n]),o=Math.abs(parseFloat(a.position().left)-e.clientX),l=Math.abs(parseFloat(a.position().top)-e.clientY),h=0,u=function(t){return s.playerDom.unbind("mouseup",u),r.unbind("mousemove",c),r.unbind("mouseup",u),a.unbind("mousemove",c),a.unbind("mouseup",u),s._vSliderAct=!1,!1},c=function(e){clearTimeout(s._cTimer);var i=e.clientX-o,i=i>r.width()-a.width()/2?r.width()-a.width()/2:i,i=0>i?0:i,u=e.clientY-l,u=u>r.height()-a.height()/2?r.height()-a.height()/2:u,u=0>u?0:u;s.controlElements.vslider.width()>s.controlElements.vslider.height()?(a.css("left",i+"px"),h=Math.abs(i/(r.width()-a.width()/2)),t(s.controlElements.vmarker[n]).css("width",100*h+"%")):(a.css("top",u+"px"),h=1-Math.abs(u/(r.height()-a.height()/2)),t(s.controlElements.vmarker[n]).css("height",100*h+"%"))};this.playerDom.mouseup(u),r.mousemove(c),r.mouseup(u),a.mousemove(c),a.mouseup(u)},handleStartDragListener:function(t,e){var i=this,s=Math.abs(parseInt(this.cb.position().left)-t.clientX),n=Math.abs(parseInt(this.cb.position().top)-t.clientY);var a=function(t){return t.stopPropagation(),t.preventDefault(),i.playerDom.unbind("mouseup",a),i.playerDom.unbind("mouseout",a),i.playerDom.unbind("mousemove",r),!1};var r=function(t){t.stopPropagation(),t.preventDefault(),clearTimeout(i._cTimer);var e=t.clientX-s;e=e>i.playerDom.width()-i.cb.width()?i.playerDom.width()-i.cb.width():e,e=0>e?0:e,i.cb.css("left",e+"px");var a=t.clientY-n;return a=a>i.playerDom.height()-i.cb.height()?i.playerDom.height()-i.cb.height():a,a=0>a?0:a,i.cb.css("top",a+"px"),!1};this.playerDom.mousemove(r),this.playerDom.mouseup(a)},_getVolume:function(){var t=parseFloat(this.cookie("volume")||this.getConfig("volume")||.5),e=this.cookie("muted")||!1;return this.getConfig("fixedVolume")||null==t?this.getConfig("volume"):e?0:t},_active:function(t,e){var i=this.controlElements[t];return 1==e?i.addClass("active").removeClass("inactive"):i.addClass("inactive").removeClass("active"),i},_clockDigits:function(t,e){(0>t||isNaN(t)||void 0==t)&&(t=0);var i=Math.floor(t/3600),s=t%3600,n=Math.floor(s/60),a=60*i+n,r=s%60,o=Math.floor(r),l=t,h={};return h["min_"+e]=10>n?"0"+n:n,h["min_abs_"+e]=10>a?"0"+a:a,h["sec_"+e]=10>o?"0"+o:o,h["sec_abs_"+e]=10>l?"0"+l:l,h["hr_"+e]=10>i?"0"+i:i,h}}});var projekktorContextmenu=function(){};jQuery(function(t){projekktorContextmenu.prototype={version:"1.1.00",reqVer:"1.2.13",_dest:null,_items:{},initialize:function(){var e=this,i=this.pp.getIframeWindow()||t(window);this._dest=$p.utils.blockSelection(this.applyToPlayer(t("<ul/>"))),this._items.player={getContextTitle:function(){return e.getConfig("playerName")+" V"+e.pp.getPlayerVer()},open:function(){null!=e.getConfig("playerHome")&&(i.get(0).location.href=e.getConfig("playerHome"),e.pp.setPause())}},this.pp.getConfig("helpHome")&&(this._items.help={getContextTitle:function(){return e.pp.getConfig("messages")[100]},open:function(){e.popup(e.pp.getConfig("helpHome"),400,600)}}),this.pluginReady=!0},mousedownHandler:function(e){switch(e.which){case 3:var i=this.pp.getDC().offset(),s=e.pageY-i.top,n=e.pageX-i.left;n+this._dest.width()>this.pp.getDC().width()&&(n=this.pp.getDC().width()-this._dest.width()-2),s+this._dest.height()>this.pp.getDC().height()&&(s=this.pp.getDC().height()-this._dest.height()-2),this.setActive(),this._dest.css({top:s+"px",left:n+"px"});break;case 1:try{this._items[t(e.target).data("plugin")].open()}catch(a){}default:this.setInactive()}},mouseleaveHandler:function(){this.setInactive()},eventHandler:function(t,e){t.indexOf("Contextmenu")>-1&&null==this._items[e.name]&&(this._items[e.name]=e)},displayReadyHandler:function(){var e=this,i=null;this.setInactive(),this._dest.html("");for(var s in this._items){i=t("<span/>").data("plugin",s).html(this._items[s].getContextTitle()||s);try{this._items[s].setContextEntry(i)}catch(n){}t("<li/>").append(i).data("plugin",s).appendTo(this._dest)}},popup:function(t,e,i){centeredY=window.screenY+(window.outerHeight/2-i/2),centeredX=window.screenX+(window.outerWidth/2-e/2),window.open(t,"projekktor","height="+i+",width="+e+",toolbar=0,scrollbars=0,status=0,resizable=1,location=0,menuBar=0"+",left="+centeredX+",top="+centeredY).focus()}}});

/**
 * Russian translation for bootstrap-datepicker
 * Victor Taranenko <darwin@snowdale.com>
 */
;(function($){
	$.fn.datepicker.dates['ru'] = {
		days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
		daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб", "Вск"],
		daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
		months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
		today: "Сегодня",
		clear: "Очистить",
		format: "dd.mm.yyyy",
		weekStart: 1
	};
}(jQuery));