"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[9374],{"9374":function(n){n.exports=JSON.parse('{"version":3,"names":["AnimationVideo","prototype","componentDidLoad","notSupport","this","render","h","Host"],"sources":["src/components/animation-video/animation-video.tsx"],"sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-animation-video-core\'\\n})\\nexport class AnimationVideo implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'AnimationVideo\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"],"mappings":"8IAOaA,eAAc,W,uCACzBA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,iBAAkBC,K,EAG/BJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,K,WAPgB,U"}')}}]);