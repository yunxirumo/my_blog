(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{426:function(o,s,t){},471:function(o,s,t){"use strict";t(426)},493:function(o,s,t){"use strict";t.r(s);var l={data:()=>({isShow:!0,scrollTop:0}),watch:{scrollTop(o){this.isShow=0===o}},mounted(){window.addEventListener("scroll",this.handleScroll)},methods:{onClick(){this.$emit("onClick"),this.isShow=!1},handleScroll(){this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop}}},i=(t(471),t(1)),n=Object(i.a)(l,(function(){var o=this._self._c;return this.isShow?o("div",{staticClass:"main"},[o("h4",{staticClass:"scroll-down",on:{click:this.onClick}})]):this._e()}),[],!1,null,"53a036f8",null);s.default=n.exports}}]);