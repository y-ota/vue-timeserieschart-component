(function(t){function e(e){for(var s,c,o=e[0],i=e[1],l=e[2],j=0,u=[];j<o.length;j++)c=o[j],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&u.push(n[c][0]),n[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);f&&f(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},r=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var f=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"9c0c":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-area"},[a("TimeSeriesChart",{attrs:{"chart-data":t.chartData,resetChart:t.resetChart,styles:t.chartStyles}}),a("div",{staticClass:"button-area"},[a("button",{on:{click:function(e){return t.resetPosition()}}},[t._v("Reset")]),a("button",{on:{click:function(e){return t.stop()}}},[t._v("Stop")]),a("button",{on:{click:function(e){return t.start()}}},[t._v("Start")])])],1)},r=[],c=(a("4160"),a("d81d"),a("a434"),a("159b"),a("d4ec")),o=a("bee2"),i=a("262e"),l=a("2caf"),f=a("9ab4"),j=a("60a3"),u=a("1fca"),b=(a("c19b"),a("f634"),function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.options={},t}return Object(o["a"])(a,[{key:"mounted",value:function(){this.chartOptions||this.applyDefaultOptions(),this.renderChart(this.chartData,this.options),this.chart=this.$data._chart}},{key:"applyDefaultOptions",value:function(){var t=this;this.options.onClick=this.onClick,this.options.maintainAspectRatio=!1,this.options.scales={xAxes:[{type:"time",time:{unit:"second"}}],yAxes:[]},this.options.plugins={colorschemes:{scheme:"brewer.Paired12"},zoom:{pan:{enabled:!0,mode:"xy",speed:20,threshold:10,onPan:function(e){t.zoomChartInstance=e.chart},onPanComplete:function(e){t.zoomChartInstance=e.chart}},zoom:{enabled:!0,drag:!1,mode:function(t){var e=window;return e.chart=t,"xy"},speed:.1,sensitivity:3,onZoom:function(e){console.log(e),t.zoomChartInstance=e.chart},onZoomComplete:function(e){t.zoomChartInstance=e.chart}}}},this.options.elements={line:{tension:0}}}},{key:"onClick",value:function(t,e){var a=this.chart.getElementAtEvent(t);a&&a.length>0&&this.clickChartElement(a)}},{key:"resetChartPosition",value:function(){if(console.log(this.chart),this.resetChart&&this.zoomChartInstance){var t=this.zoomChartInstance;t.resetZoom()}}},{key:"clickChartElement",value:function(t){return t}}]),a}(Object(j["c"])(u["a"].Line,u["a"].mixins.reactiveProp)));Object(f["a"])([Object(j["d"])({required:!0,default:{}})],b.prototype,"chartData",void 0),Object(f["a"])([Object(j["d"])({default:!1})],b.prototype,"resetChart",void 0),Object(f["a"])([Object(j["d"])()],b.prototype,"chartOptions",void 0),Object(f["a"])([Object(j["f"])("resetChart")],b.prototype,"resetChartPosition",null),Object(f["a"])([Object(j["b"])("click-chart-element")],b.prototype,"clickChartElement",null),b=Object(f["a"])([j["a"]],b);var d,h,p=b,m=p,v=a("2877"),y=Object(v["a"])(m,d,h,!1,null,"fff9a3ea",null),k=y.exports,O=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.allData=[],t.chartData={},t.chartStyles={height:"100%",width:"100%",margin:"auto"},t.resetChart=!1,t}return Object(o["a"])(a,[{key:"resetPosition",value:function(){var t=this;this.resetChart=!0,setInterval((function(){t.resetChart=!1}),1e3)}},{key:"start",value:function(){var t=this;this.startInterval||(this.startInterval=setInterval((function(){t.updateDatasets()}),1e3))}},{key:"stop",value:function(){clearInterval(this.startInterval),this.startInterval=void 0}},{key:"mounted",value:function(){for(var t=1;t<=10;t++)this.allData.push({label:"Data"+t,data:[]});this.start()}},{key:"updateDatasets",value:function(){this.allData.forEach((function(t){t.data.push({x:new Date,y:1e3*Math.random()}),t.data.length>30&&t.data.splice(0,1)}));var t=function(t){return{label:t.label,data:t.data,radius:5}};this.chartData={datasets:this.allData.map((function(e){return t(e)}))}}}]),a}(j["e"]);O=Object(f["a"])([Object(j["a"])({components:{TimeSeriesChart:k}})],O);var g=O,z=g,C=(a("5c0b"),Object(v["a"])(z,n,r,!1,null,null,null)),w=C.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(w)}}).$mount("#app")}});
//# sourceMappingURL=app.03b59326.js.map