"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[8041],{"8041":function(n){n.exports=JSON.parse('{"version":3,"names":["CommentList","prototype","componentDidLoad","notSupport","this","render","h","Host"],"sources":["src/components/comment/comment-list.tsx"],"sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-comment-list-core\'\\n})\\nexport class CommentList implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'CommentList\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"],"mappings":"8IAOaA,YAAW,W,uCACtBA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,cAAeC,K,EAG5BJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,K,WAPa,U"}')}}]);