/*
 * @File Name:     tab.js
 * @Create By:     zhouzuchuan
 * @Create Time:   2016-04-27 14:24:47
 * @Modified By:   zhouzuchuan
 * @Modified Time: 2016-05-16 10:08:01
 */

!function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\x00"===a?"�":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[0>c?c+b:c]}),even:pa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,e>i&&ya(a.slice(i,e)),f>e&&ya(a=a.slice(e)),f>e&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null});var Aa=a.Sizzle;ga.noConflict=function(){return a.Sizzle===ga&&(a.Sizzle=Aa),ga},"function"==typeof define&&define.amd?define(function(){return ga}):"undefined"!=typeof module&&module.exports?module.exports=ga:a.Sizzle=ga}(window);




;(function ($, window, document) {


    function Tab (options) {
        if (this === window) return new Tab(options);
        this.options = {
            auto: false
        };
        for (var props in options) this.options[props] = options[props];
        // this.packetIndex = {}; /* 储存各个跟踪分组的整体下标 */
        this.tracePacket = {}; /* 储存各个跟踪分组的数据*/
        this.timer = {};
        this.info =[]; /* 储存数据 */
        this._init();
    }

    Tab.prototype = {
        version: '0.0.5',
        // 初始化
        _init: function () {
            var self = this,
                daSer = self._dealSelector(),
                elem = self._getDom(),
                defaultDircetion,
                defaultPos,
                defaultEventType,
                defaultAuto;

            elem.btn.forEach(function (element, index) {
                var val = element.getAttribute(daSer.btn),
                    dl = dealName(val);

                if (typeof self.tracePacket[dl.trace] === 'undefined') {
                    self.tracePacket[dl.trace] = {};
                    self.tracePacket[dl.trace].sub = [];
                }
                self.tracePacket[dl.trace].sub.push(index);

                self.info[index] = {
                    node: [element, elem.main[index]], /* 储存节点 */
                    all: val, /* 储存原始值 */
                    key: dl.key, /* 储存关键值 */
                    trace: dl.trace, /* 储存跟踪值 */
                    current: false, /* 储存当前状态 */
                    timer: null
                };
            });

            // console.dir(self.info);

            // 处理运动方向
            defaultDircetion = self.options.direction;
            if (getType(defaultDircetion) === 'object') {
                for (var props in defaultDircetion) {
                    self.tracePacket[props].direction = (defaultDircetion[props] === 'left') ? 'left' : 'right';
                }
            } else if (getType(defaultDircetion) === 'string') {
                for (var key in self.tracePacket) {
                    self.tracePacket[key].direction = (defaultDircetion === 'left') ? 'left' : 'right';
                }
            }


            // 设置默认显示
            defaultPos = self.options.defaultPos;
            if (getType(defaultPos) === 'object') { /* 设置多个跟踪的默认显示 */

                self.info.forEach(function (element, index) {

                    // 获取设置的数字
                    var getTraceVal = defaultPos[element.trace],

                        // 获取对应跟踪的下标分组
                        traceArr = self.tracePacket[element.trace].sub;

                    // 如果设置的默认不存在或者分组存在但没有指定默认 则默认显示第一个
                    self.set(isUndefined(traceArr[getTraceVal]) || isUndefined(getTraceVal) ? traceArr[0] : traceArr[getTraceVal]);

                });

            } else if (getType(defaultPos) === 'number') { /* 共用同一个默认显示 */

                for (var key in self.tracePacket) {

                    var packetArr = self.tracePacket[key].sub,

                        // 获取原始值的index
                        getAllIdx = packetArr[defaultPos];

                    // 设置的默认在下标分组中不存在 则显示各个分组中的第一个
                    self.set(isUndefined(getAllIdx) ? packetArr[0] : getAllIdx);

                }
            } else {
                // 没有设置 则默认设置所有分组的第一个
                for (var props in self.tracePacket) {
                    self.set(self.tracePacket[props].sub[0]);
                }
            }


            // 处理事件
            defaultEventType = self.options.eventType;
            if (getType(defaultEventType) === 'object') {
                self.info.forEach(function (element, index) {
                    // 获取设置默认事件的跟踪值
                    var eventType = defaultEventType[element.trace];

                    if (!isUndefined(eventType)) { /* 设置分组事件方式 */
                        switch (eventType) {
                            case 'hover':
                                element.node[0].onmouseover = handle();
                                break;
                            default:
                                element.node[0].onclick = handle();
                                break;
                        }
                    } else { /* 没有设置分组事件方式 执行默认 */
                        element.node[0].onclick = handle();
                    }

                });
            } else { /* 设置成字符串获取它 */
                switch (defaultEventType) {
                    case 'hover':
                        elem.btn.forEach(function (element) {
                            element.onmouseover = handle();
                        });
                        break;
                    default:
                        elem.btn.forEach(function (element) {
                            element.onclick = handle();
                        });
                        break;
                }
            }

            // 判断是否自动
            defaultAuto = self.options.auto;
            if (getType(defaultAuto) === 'object') {
                for (var props in defaultAuto) {
                    if (!isUndefined(self.tracePacket[props])) {
                        switch (getType(defaultAuto[props])) {
                            case 'boolean':
                                self.tracePacket[props].auto = defaultAuto[props];
                                self.tracePacket[props].autoSpacing = 2000;
                                break;
                            case 'number':
                                self.tracePacket[props].auto = true;
                                self.tracePacket[props].autoSpacing = defaultAuto[props];
                                break;
                            default:
                                self.tracePacket[props].auto = false;
                                break;
                        }
                        self._interval(props);
                    }
                }

            } else {

                for (var key in self.tracePacket) {

                    if (isUndefined(self.tracePacket[key].auto)) {
                        switch (getType(defaultAuto)) {
                            case 'boolean':
                                self.tracePacket[key].auto = defaultAuto;
                                self.tracePacket[key].autoSpacing = 2000;
                                break;
                            case 'number':
                                self.tracePacket[key].auto = true;
                                self.tracePacket[key].autoSpacing = defaultAuto;
                                break;
                            default:
                                self.tracePacket[key].auto = false;
                                break;
                        }
                        self._interval(key);
                    }
                }
            }


            // 事件
            function handle () {
                return function (event) {
                    var e = event || window.event,
                        et = e.target || e.srcElement;
                    self.info.forEach(function (element, index) {
                        if (et === element.node[0]) {
                            var currentTimer = self.tracePacket[element.trace].timer;

                            // 清空所处跟踪定时器
                            if (!isUndefined(currentTimer)) {
                                clearTimeout(currentTimer);
                            }

                            // 设置位置
                            self.set(index);

                            // 启动定时器
                            self._interval(element.trace);
                        }
                    });
                };
            }
        },
        // 定时器
        _interval: function (trace) {
            var self = this,
                trace = arguments[0],
                time,
                idx,
                // 当前所在跟踪分组
                item = self.tracePacket[trace],
                subArr,
                chuan;
            if (!item.auto) return;

            time = self.tracePacket[arguments[0]].autoSpacing;
            // 当前所处跟踪分组的数组位置
            idx = self.getPacketPos(trace);
            // 获取当前跟踪分组的储存整体下边的数组
            subArr = item.sub;

            // 处理方向
            if (item.direction === 'left') {
                chuan = isUndefined(subArr[idx-1]) ? subArr[subArr.length - 1] : subArr[idx-1];
            } else {
                chuan = isUndefined(subArr[idx+1]) ? subArr[0] : subArr[idx+1];
            }

            item.timer = setTimeout(function () {
                // 设值（超出当前跟踪分组数组的个数 则跳回第一个，否则 跳到下一个)
                self.set(chuan);
                self._interval(trace, time);
            }, time);
        },
        // 获取指定跟踪当前所处分组的下标
        getPacketPos: function (trace) {
            var chuan;
            this.info.forEach(function (element, index) {
                if (element.current && element.trace === trace) {
                  chuan = index;
                }
            });
            return getIndex(chuan, this.tracePacket[trace].sub)[0];
        },
        // 设置选择 （idx指的是整个原始值的下标）
        set: function (idx) {
            var self = this,
                // 当前数据集合
                item = self.info[idx],
                // 上一个数据集合
                prevItem,
                // 获取当前的跟踪值
                traceValue = item.trace,
                dealCur = self._dealClass()[traceValue],
                // 设值之前的位置
                prevIdx,
                // 但前所在的分组
                currentPacket = self.tracePacket[traceValue];
            // 判断当前状态是否选中
            if (item.current) return;

            // 离开之前
            if (getType(self.options.leaveWill) === 'function') {
                prevIdx = isUndefined(currentPacket.pos) ? 0 : currentPacket.pos;
                prevItem = self.info[prevIdx];
                self.options.leaveWill.call(this, prevItem.node[0], prevItem.node[1], traceValue);
            }

            // 选中之前
            if (getType(self.options.currentWill) === 'function') {
                self.options.currentWill.call(this, item.node[0], item.node[1], traceValue);
            }

            // 储存当前的位置
            currentPacket.pos = idx;

            // 赋值
            self.info.forEach(function (element, index) {
                if (element.trace === traceValue) {
                    removeClass(dealCur.btn, element.node[0]);
                    removeClass(dealCur.main, element.node[1]);
                    element.current = false;
                }
            });
            // 设值
            addClass(dealCur.btn, item.node[0]);
            addClass(dealCur.main, item.node[1]);

            // 选中之后
            if (getType(self.options.currentDid) === 'function') {
                self.options.currentDid.call(this, item.node[0], item.node[1], traceValue);
            }

            item.current = true;
        },
        _getDom: function () {
            var daSer = this._dealSelector();
            var btnElem = nodeListToArray($('[' + daSer.btn + ']'));
            var mainElem = nodeListToArray($('[' + daSer.main + ']'));
            if (btnElem.length !== mainElem.length) {
                console.log('您设置的选择器数量不对应，请核对对应数量！！！');
            }
            return {
                btn: btnElem,
                main: mainElem
            };
        },
        // 处理选择器
        _dealSelector: function () {
            var self = this,
                das = dealArray(self.options.selector),
                defaultSelector = {
                    btn: 'zzc-tab-btn',
                    main: 'zzc-tab-main'
                };
            if (das.btn === das.main && !isUndefined(das.btn)) {
                das.btn += '-btn';
                das.main += '-main';
            }
            for (var i in das) {
                if (isUndefined(das[i])) {
                    das[i] = defaultSelector[i];
                }
            }
            return das;
        },
        _dealClass: function () {
            var self = this,
                defaultCurrentClass = self.options.currentClass,
                result = {};

            if (getType(defaultCurrentClass) === 'object') {
                for (var i in defaultCurrentClass) {
                    result[i] = {};
                    result[i] = dealArray(defaultCurrentClass[i]);
                }
            } else {
                for (var j in self.tracePacket) {
                    result[j] = dealArray(defaultCurrentClass);
                }
            }
            return result;
        }

    };

    // 处理key和trace
    function dealName (str) {
        var key, trace, index = str.indexOf('#');
        if (index === -1) {
            key = isUndefined(str) ? 'defaults' : str;
            trace = 'defaults';
        } else {
            key = isUndefined(str.slice(0, index)) ? 'defaults' : str.slice(0, index);
            trace = isUndefined(str.slice(index + 1)) ? 'defaults' : removeBlank(str.slice(index + 1).split('#'))[0];
        }
        return {
            key: key,
            trace: trace
        };
    }
    // 处理特殊数组
    function dealArray () {
        var arg = arguments[0],
            result = {};
        switch (getType(arg)) {
            case 'array':
                for (var i = 0, len = arg.length; i < len ; i += 1) {
                    arg[i] = trim(removePoint(replaceBrackets(arg[i])));
                }
                if (arg.length >= 2) {
                    result.btn = arg[0];
                    result.main = arg[1];
                } else if (arg.length === 1) {
                    result.btn = result.main = arg[0];
                } else {
                    result.btn = result.main = '';
                }
                break;
            case 'string':
                if (!isUndefined(arg)) {
                    result.btn = result.main = trim(removePoint(replaceBrackets(arg)));
                } else {
                    result.btn = result.main = '';
                }
                break;
            default:
                result.btn = result.main = '';
                break;
        }
        return result;
    }
    // 去除数组中的空格子项
    function removeBlank (array) {
        var arr = [];
        for (var i = 0, len = array.length; i < len; i += 1) {
            if (array[i] === '') continue;
            arr.push(array[i]);
        }
        return arr;
    }
    // 获取指定关键值的整体下标 返回一个数组
    function getIndex (key, array) {
        var numArr = [];
        for (var i = 0, len = array.length; i < len; i += 1) {
            if (array[i] !== key) continue;
            numArr.push(i);
        }
        return numArr;
    }
    // 替换'[]'
    function replaceBrackets (str) {
        return (/^\[[\S]*\]$/ig).test(str) ? str.slice(1,-1) : str;
    }
    // 替换'.'
    function removePoint (str) {
        return (/^\./).test(str) ? str.slice(1) : str;
    }
    // 处理selector的前缀
    function dealSelector (selector) {
        var reg = /^\#|^\./;
        var newSelector = selector;
        if (reg.test(selector)) {
            newSelector = selector.slice(1);
        }
        return newSelector;
    }
    // 将DOM节点结合转化成数组
    function nodeListToArray (nodes) {
        var arr;
        try {
            arr = Array.prototype.slice.call(nodes);
        } catch (err) {
            arr = [];
            for (var i = 0 , length = nodes.length ; i < length ; i += 1) {
                arr.push(nodes[i]);
            }
        } finally {
            return arr;
        }
    }
    // 判断当前指定的上下文是否含有selector
    function hasClass (selector , context) {
        return new RegExp('(^|\\s)' + dealSelector(selector) + '(\\s|$)').test(context.className);
    };

    // 在当前指定的上下文添加selector
    function addClass (selector , context) {
        if (hasClass(selector , context)) return ;
        var newClass = context.className.split(' ');
        newClass.push(dealSelector(selector));
        context.className = newClass.join(' ');
    };

    // 在当前指定的上下文删除selector
    function removeClass (selector , context) {
        if (!hasClass(selector , context)) return ;
        var re = new RegExp('(^|\\s)' + dealSelector(selector) + '(\\s|$)' , 'g');
        context.className = context.className.replace(re , ' ');
    };
    // 去除空格
    function trim (str) {
        return str.split(' ').join('');
    }
    // 绑定函数
    var addHandler = (function () {
        if (document.addEventListener) {
            return function (elem , type , handler) {
                var _len = elem.length;
                if (_len) {
                  for (var i = 0 ; i < _len ; i += 1) {
                    addHandler(elem[i], type, handler);
                  }
                } else {
                  elem.addEventListener(type , handler , false);
                }
            };
        } else if (document.attachEvent) {
            return function (elem , type , handler) {
                var _len = elem.length;
                if (_len) {
                    for (var i = 0 ; i < _len ; i += 1) {
                        addHandler(elem[i], type, handler);
                    }
                } else {
                    elem.attachEvent('on' + type , function () {
                        // 解决ie的bug g给绑定的函数添加this
                        return handler.call(elem , window.event);
                    });
                }
            }
        } else {
            return function (elem , type , handler) {
                var _len = elem.length;
                if (_len) {
                    for (var i = 0 ; i < _len ; i += 1) {
                        addHandler(elem[i], type, handler);
                    }
                } else {
                  elem['on' + type] = handler;
                }
            }
        }
    } ());

    function isUndefined (a) {
        return (a === null || typeof a == 'undefined' || a === '' || a === 'undefined');
    }
    function getType (obj) {
        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    }

    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (fn , thisObj) {
            // 指定上下文
            var scope = thisObj || window;
            for (var i = 0 , max = this.length ; i < max ; i += 1) {
                if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, i)) {
                    fn.call(scope , this[i] , i , this);
                }
            }
        };
    }


    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (fn , thisObj) {
            // 指定上下文
            var scope = thisObj || window;
            for (var i = 0 , max = this.length ; i < max ; i += 1) {
                if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, i)) {
                    fn.call(scope , this[i] , i , this);
                }
            }
        };
    }


    if (!Array.prototype.filter) {
        Array.prototype.filter = function (fn , thisObj) {
            // 指定上下文
            var scope = thisObj || window , arr = [];
            if (typeof fn === 'function') {
                for (var i = 0 , max = this.length ; i < max ; i += 1) {
                    // 如果 fn 返回的是 false 则跳出这次循环
                    if (!fn.call(scope , this[i] , i , this)) continue;
                    arr.push[this[i]];
                }
            }
            return arr;
        };
    }




    window.Tab = Tab;

} (Sizzle ,window, document));
