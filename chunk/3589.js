"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[3589],{"5349":function(e,t,r){r.d(t,{"zx":function(){return o},"l0":function(){return s},"Ee":function(){return c},"II":function(){return i},"__":function(){return a},"ub":function(){return u},"Gt":function(){return f},"Qd":function(){return l},"cW":function(){return d},"pf":function(){return p},"iR":function(){return v},"tq":function(){return m},"t3":function(){return h},"rs":function(){return b},"xv":function(){return y},"gx":function(){return w},"G7":function(){return O}});var n=r(7294);const helper_manipulatePropsFunction=(e,t={})=>{const{"dangerouslySetInnerHTML":r}=e;return Object.assign(Object.assign({},t),{"dangerouslySetInnerHTML":r})};Object.create;Object.create;const mergeRefs=(...e)=>t=>{e.forEach((e=>{((e,t)=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})(e,t)}))},camelToDashCase=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),getClassName=(e,t,r)=>{const n=t.className||t.class,o=r.className||r.class,s=arrayToMap(e),c=arrayToMap(n?n.split(" "):[]),i=arrayToMap(o?o.split(" "):[]),a=[];return s.forEach((e=>{c.has(e)?(a.push(e),c.delete(e)):i.has(e)||a.push(e)})),c.forEach((e=>a.push(e))),a.join(" ")},isCoveredByReact=e=>!1,syncEvent=(e,t,r)=>{const n=e.__events||(e.__events={}),o=n[t];o&&e.removeEventListener(t,o),e.addEventListener(t,n[t]=function handler(e){r&&r.call(this,e)})},arrayToMap=e=>{const t=new Map;return e.forEach((e=>t.set(e,e))),t},createComponent_createReactComponent=(e,t,r,o)=>{void 0!==o&&o();const s=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const c=class extends n.Component{"constructor"(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(e){((e,t,r={})=>{if(e instanceof Element){const n=getClassName(e.classList,t,r);""!==n&&(e.className=n),Object.keys(t).forEach((r=>{if("children"!==r&&"style"!==r&&"ref"!==r&&"class"!==r&&"className"!==r&&"forwardedRef"!==r)if(0===r.indexOf("on")&&r[2]===r[2].toUpperCase()){const n=r.substring(2).toLowerCase();isCoveredByReact(n)||syncEvent(e,n,t[r])}else e[r]=t[r],"string"==typeof t[r]&&e.setAttribute(camelToDashCase(r),t[r])}))}})(this.componentEl,this.props,e)}"render"(){const t=this.props,{"children":o,"forwardedRef":s,"style":c,"className":i,"ref":a}=t,u=function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(t,["children","forwardedRef","style","className","ref"]);let f=Object.keys(u).reduce(((e,t)=>{const r=u[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const n=t.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(n)&&(e[t]=r)}else{const n=typeof r;"string"!==n&&"boolean"!==n&&"number"!==n||(e[camelToDashCase(t)]=r)}return e}),{});r&&(f=r(this.props,f));const l=Object.assign(Object.assign({},f),{"ref":mergeRefs(s,this.setComponentElRef),"style":c});return(0,n.createElement)(e,l,o)}static get"displayName"(){return s}};return t&&(c.contextType=t),((e,t)=>{const forwardRef=(t,r)=>n.createElement(e,Object.assign({},t,{"forwardedRef":r}));return forwardRef.displayName=t,n.forwardRef(forwardRef)})(c,s)},o=createComponent_createReactComponent("taro-button-core",void 0,helper_manipulatePropsFunction),s=createComponent_createReactComponent("taro-form-core",void 0,helper_manipulatePropsFunction),c=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction),i=createComponent_createReactComponent("taro-input-core",void 0,helper_manipulatePropsFunction),a=createComponent_createReactComponent("taro-label-core",void 0,helper_manipulatePropsFunction),u=createComponent_createReactComponent("taro-movable-area-core",void 0,helper_manipulatePropsFunction),f=createComponent_createReactComponent("taro-movable-view-core",void 0,helper_manipulatePropsFunction),l=createComponent_createReactComponent("taro-open-data-core",void 0,helper_manipulatePropsFunction),d=createComponent_createReactComponent("taro-picker-core",void 0,helper_manipulatePropsFunction),p=createComponent_createReactComponent("taro-scroll-view-core",void 0,helper_manipulatePropsFunction),v=createComponent_createReactComponent("taro-slider-core",void 0,helper_manipulatePropsFunction),m=createComponent_createReactComponent("taro-swiper-core",void 0,helper_manipulatePropsFunction),h=createComponent_createReactComponent("taro-swiper-item-core",void 0,helper_manipulatePropsFunction),b=createComponent_createReactComponent("taro-switch-core",void 0,helper_manipulatePropsFunction),y=createComponent_createReactComponent("taro-text-core",void 0,helper_manipulatePropsFunction),w=createComponent_createReactComponent("taro-textarea-core",void 0,helper_manipulatePropsFunction),O=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction)},"3589":function(e,t,r){r.r(t);r(7294);var n=r(5349),o=r(1647),s=r(5893);t.default=(0,o.Pi)((function Index(){return(0,s.jsx)(n.G7,{"className":"index","children":(0,s.jsx)(n.xv,{"children":"首页"})})}))}}]);