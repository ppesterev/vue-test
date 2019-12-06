(function(t){function e(e){for(var r,i,u=e[0],l=e[1],c=e[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);s&&s(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},3329:function(t,e,n){"use strict";var r=n("72a5"),a=n.n(r);a.a},"4b82":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Playoff")},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"playoff"},[n("div",{staticClass:"playoff-top-panel"},[n("label",[t._v(" Bracket size: "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.participantCount,expression:"participantCount",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:t.participantCount},on:{input:function(e){e.target.composing||(t.participantCount=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t.countIsValid?t._e():n("span",{staticClass:"warning"},[t._v("Bracket size must be a power of 2.")])])]),n("div",{ref:"container"},[t.playoffData?n("PlayoffTree",{attrs:{node:t.playoffData,"item-width":t.itemWidth}}):t._e()],1)])},u=[],l=(n("90d7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"playoff-node"},[t.node.children?n("ul",t._l(t.node.children,(function(e,r){return n("li",{key:r},[n("PlayoffTree",{attrs:{node:e,"item-width":t.itemWidth}})],1)})),0):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.node.name,expression:"node.name"}],staticClass:"playoff-node-name",style:{width:t.itemWidth-10+"px"},attrs:{type:"text"},domProps:{value:t.node.name},on:{input:function(e){e.target.composing||t.$set(t.node,"name",e.target.value)}}})])}),c=[],s={name:"PlayoffTree",props:["node","itemWidth"]},f=s,p=(n("986b"),n("2877")),d=Object(p["a"])(f,l,c,!1,null,null,null),h=d.exports,m={name:"Playoff",components:{PlayoffTree:h},methods:{generateNodes:function(t){if(isNaN(t)||t<0)return null;var e={name:""};return t>0&&(e.children=[],e.children[0]=this.generateNodes(t-1),e.children[1]=this.generateNodes(t-1)),e}},computed:{depth:function(){return Math.floor(Math.log2(this.participantCount))},itemWidth:function(){var t=this.$refs["container"].clientWidth;return t/(this.depth+1)},countIsValid:function(){return this.participantCount===Math.pow(2,this.depth)}},watch:{participantCount:function(){this.playoffData=this.generateNodes(this.depth)}},data:function(){return{participantCount:8,playoffData:null}},mounted:function(){this.playoffData=this.generateNodes(this.depth)}},v=m,y=(n("3329"),Object(p["a"])(v,i,u,!1,null,null,null)),b=y.exports,g={name:"app",components:{Playoff:b}},w=g,_=(n("034f"),Object(p["a"])(w,a,o,!1,null,null,null)),P=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(P)}}).$mount("#app")},"72a5":function(t,e,n){},"85ec":function(t,e,n){},"986b":function(t,e,n){"use strict";var r=n("4b82"),a=n.n(r);a.a}});
//# sourceMappingURL=app.beb205e6.js.map