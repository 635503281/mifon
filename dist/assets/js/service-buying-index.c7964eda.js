(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={"service-buying-index":0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/mifon/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;o.push([10,"chunk-vendors","chunk-common"]),n()})({"0f48":function(e,t,n){},10:function(e,t,n){e.exports=n("ab99")},"72c6":function(e,t,n){"use strict";var r=n("0f48"),a=n.n(r);a.a},ab99:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=(n("f5df"),n("2ea5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main-layout",{attrs:{"bg-class":"bg-white"}},[n("service-buying")],1)}),o=[],i=n("be7f"),u=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"layout"},[r("div",{staticClass:"page-title"},[e._v("购买渠道")]),r("div",{staticClass:"buy-box"},[r("a",{staticClass:"buy-item",attrs:{target:"_blank",href:"https://mall.jd.com/index-1000147082.html"}},[r("img",{staticClass:"buy-img",attrs:{src:n("e7f6")}}),r("span",{staticClass:"buy-name"},[e._v("MIFON京东官方自营店")])])])])}],s={name:"ServiceBuying"},l=s,f=(n("72c6"),n("2877")),p=Object(f["a"])(l,u,c,!1,null,"2675e900",null),b=p.exports,d={name:"app",components:{MainLayout:i["a"],ServiceBuying:b}},v=d,y=Object(f["a"])(v,a,o,!1,null,null,null),m=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(m)}}).$mount("#app")},e7f6:function(e,t,n){e.exports=n.p+"assets/img/image_jd@2x.8b25c8cd.png"}});