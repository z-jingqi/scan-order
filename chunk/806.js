"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[806],{"806":function(n){n.exports=JSON.parse('{"version":3,"names":["MatchMedia","prototype","componentDidLoad","notSupport","this","render","h","Host"],"sources":["src/components/match-media/match-media.tsx"],"sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-match-media-core\'\\n})\\nexport class MatchMedia implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'MatchMedia\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"],"mappings":"8IAOaA,WAAU,W,uCACrBA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,aAAcC,K,EAG3BJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,K,WAPY,U"}')}}]);