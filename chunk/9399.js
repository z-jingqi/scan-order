"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[9399],{"9399":function(n,o,i){i.r(o),i.d(o,{"taro_canvas_core":function(){return r}});var e=i(6468),c=500,r=function(){function t(n){var o=this;(0,e.r)(this,n),this.onLongTap=(0,e.c)(this,"longtap",7),this.onTouchStart=function(){o.timer=setTimeout((function(){o.onLongTap.emit()}),c)},this.onTouchMove=function(){clearTimeout(o.timer)},this.onTouchEnd=function(){clearTimeout(o.timer)},this.canvasId=void 0,this.nativeProps={}}return t.prototype.render=function(){var n=this.canvasId,o=this.nativeProps;return(0,e.h)("canvas",Object.assign({"canvas-id":n,"style":{"width":"100%","height":"100%"},"onTouchStart":this.onTouchStart,"onTouchMove":this.onTouchMove,"onTouchEnd":this.onTouchEnd},o))},Object.defineProperty(t.prototype,"el",{"get":function(){return(0,e.g)(this)},"enumerable":!1,"configurable":!0}),t}();r.style="taro-canvas-core{display:block;position:relative;width:300px;height:150px}"}}]);