"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[8258],{"8258":function(A){A.exports=JSON.parse('{"version":3,"names":["indexCss","fixControlledValue","value","Textarea","this","handleInput","e","stopPropagation","_this","handleLineChange","target","onInput","emit","cursor","length","handleFocus","onFocus","handleBlur","onBlur","handleChange","onChange","line","getNumberOfLines","onLineChange","height","textareaRef","clientHeight","lineCount","calculateContentHeight","ta","scanAmount","origHeight","style","offsetHeight","scrollHeight","overflow","originMinHeight","minHeight","window","getComputedStyle","taLineHeight","parseInt","lineHeight","taHeight","numberOfLines","Math","floor","prototype","focus","componentDidLoad","Object","defineProperty","el","get","set","configurable","autoFocus","render","_a","placeholder","disabled","maxlength","autoHeight","name","nativeProps","otherProps","rows","h","assign","ref","input","class","concat","autofocus"],"sources":["src/components/textarea/style/index.scss?tag=taro-textarea-core","src/components/textarea/textarea.tsx"],"sourcesContent":["taro-textarea-core {\\n  display: block;\\n  width: 300px;\\n}\\n\\ntaro-textarea-core .auto-height {\\n  height: auto;\\n}\\n\\n.taro-textarea {\\n  &:focus {\\n    outline: none;\\n  }\\n\\n  display: block;\\n  position: relative;\\n  border: 0;\\n  width: 100%;\\n  height: inherit;\\n  appearance: none;\\n  cursor: auto;\\n  line-height: 1.5;\\n}\\n","import { Component, h, ComponentInterface, Prop, State, Event, EventEmitter, Element, Method } from \'@stencil/core\'\\nimport { TaroEvent } from \'../../../types\'\\n\\nfunction fixControlledValue(value?: string) {\\n  return value ?? \'\'\\n}\\n\\n@Component({\\n  tag: \'taro-textarea-core\',\\n  styleUrl: \'./style/index.scss\'\\n})\\nexport class Textarea implements ComponentInterface {\\n  private textareaRef: HTMLTextAreaElement\\n\\n  @Element() el: HTMLElement\\n\\n  @Prop({ mutable: true }) value: string\\n  @Prop() placeholder: string\\n  @Prop() disabled = false\\n  @Prop() maxlength = 140\\n  @Prop() autoFocus = false\\n  @Prop() autoHeight = false\\n  @Prop() name: string\\n  @Prop() nativeProps = {}\\n  @State() line = 1\\n\\n  @Event({\\n    eventName: \'input\'\\n  })\\n  onInput: EventEmitter\\n\\n  @Event({\\n    eventName: \'focus\'\\n  })\\n  onFocus: EventEmitter\\n\\n  @Event({\\n    eventName: \'blur\'\\n  })\\n  onBlur: EventEmitter\\n\\n  @Event({\\n    eventName: \'change\'\\n  })\\n  onChange: EventEmitter\\n\\n  @Event({\\n    eventName: \'linechange\' // 必须全小写\\n  })\\n  onLineChange: EventEmitter\\n\\n  @Method()\\n  focus() {\\n    this.textareaRef.focus()\\n  }\\n\\n  componentDidLoad() {\\n    Object.defineProperty(this.el, \'value\', {\\n      get: () => this.textareaRef.value,\\n      set: value => (this.value = value),\\n      configurable: true\\n    })\\n    this.autoFocus && this.textareaRef.focus()\\n  }\\n\\n  handleInput = (e: TaroEvent<HTMLInputElement>) => {\\n    e.stopPropagation()\\n    this.handleLineChange()\\n    const value = e.target.value || \'\'\\n    this.onInput.emit({\\n      value,\\n      cursor: value.length\\n    })\\n  }\\n\\n  handleFocus = (e: TaroEvent<HTMLInputElement> & FocusEvent) => {\\n    e.stopPropagation()\\n    this.onFocus.emit({\\n      value: e.target.value\\n    })\\n  }\\n\\n  handleBlur = (e: TaroEvent<HTMLInputElement> & FocusEvent) => {\\n    e.stopPropagation()\\n    this.onBlur.emit({\\n      value: e.target.value\\n    })\\n  }\\n\\n  handleChange = (e: TaroEvent<HTMLInputElement>) => {\\n    e.stopPropagation()\\n    this.onChange.emit({\\n      value: e.target.value\\n    })\\n  }\\n\\n  handleLineChange = () => {\\n    const line = this.getNumberOfLines()\\n    if (line !== this.line) {\\n      this.line = line\\n      this.onLineChange.emit({\\n        height: this.textareaRef.clientHeight,\\n        lineCount: this.line\\n      })\\n    }\\n  }\\n\\n  calculateContentHeight = (ta, scanAmount) => {\\n    let origHeight = ta.style.height,\\n      height = ta.offsetHeight,\\n      scrollHeight = ta.scrollHeight,\\n      overflow = ta.style.overflow,\\n      originMinHeight = ta.style.minHeight || null\\n\\n    /// only bother if the ta is bigger than content\\n    if (height >= scrollHeight) {\\n      ta.style.minHeight = 0\\n      /// check that our browser supports changing dimension\\n      /// calculations mid-way through a function call...\\n      ta.style.height = height + scanAmount + \'px\'\\n      /// because the scrollbar can cause calculation problems\\n      ta.style.overflow = \'hidden\'\\n      /// by checking that scrollHeight has updated\\n      if (scrollHeight < ta.scrollHeight) {\\n        /// now try and scan the ta\'s height downwards\\n        /// until scrollHeight becomes larger than height\\n        while (ta.offsetHeight >= ta.scrollHeight) {\\n          ta.style.height = (height -= scanAmount) + \'px\'\\n        }\\n        /// be more specific to get the exact height\\n        while (ta.offsetHeight < ta.scrollHeight) {\\n          ta.style.height = height++ + \'px\'\\n        }\\n        /// reset the ta back to it\'s original height\\n        ta.style.height = origHeight\\n        /// put the overflow back\\n        ta.style.overflow = overflow\\n        ta.style.minHeight = originMinHeight\\n        return height\\n      }\\n    } else {\\n      return scrollHeight\\n    }\\n  }\\n\\n  getNumberOfLines = () => {\\n    const ta = this.textareaRef,\\n      style = window.getComputedStyle ? window.getComputedStyle(ta) : ta.style,\\n      // This will get the line-height only if it is set in the css,\\n      // otherwise it\'s \\"normal\\"\\n      taLineHeight = parseInt(style.lineHeight, 10),\\n      // Get the scroll height of the textarea\\n      taHeight = this.calculateContentHeight(ta, taLineHeight),\\n      // calculate the number of lines\\n      numberOfLines = Math.floor(taHeight / taLineHeight)\\n\\n    return numberOfLines\\n  }\\n\\n  render() {\\n    const {\\n      value,\\n      placeholder,\\n      disabled,\\n      maxlength,\\n      autoFocus,\\n      autoHeight,\\n      name,\\n      nativeProps,\\n      handleInput,\\n      handleFocus,\\n      handleBlur,\\n      handleChange\\n    } = this\\n\\n    const otherProps: {\\n      [props: string]: any\\n    } = {}\\n\\n    if (autoHeight) {\\n      otherProps.rows = this.line\\n    }\\n\\n    return (\\n      <textarea\\n        ref={input => {\\n          if (input) {\\n            this.textareaRef = input\\n          }\\n        }}\\n        class={`taro-textarea ${autoHeight ? \'auto-height\' : \'\'}`}\\n        value={fixControlledValue(value)}\\n        placeholder={placeholder}\\n        name={name}\\n        disabled={disabled}\\n        maxlength={maxlength}\\n        autofocus={autoFocus}\\n        onInput={handleInput}\\n        onFocus={handleFocus}\\n        onBlur={handleBlur}\\n        onChange={handleChange}\\n        {...nativeProps}\\n        {...otherProps}\\n      />\\n    )\\n  }\\n}\\n"],"mappings":"0FAAA,IAAMA,SAAW,ySCGjB,SAASC,mBAAmBC,GAC1B,OAAOA,IAAK,MAALA,SAAK,EAALA,EAAS,EAClB,C,IAMaC,SAAQ,W,yQAsDnBC,KAAAC,YAAc,SAACC,GACbA,EAAEC,kBACFC,EAAKC,mBACL,IAAMP,EAAQI,EAAEI,OAAOR,OAAS,GAChCM,EAAKG,QAAQC,KAAK,CAChBV,MAAKA,EACLW,OAAQX,EAAMY,Q,EAIlBV,KAAAW,YAAc,SAACT,GACbA,EAAEC,kBACFC,EAAKQ,QAAQJ,KAAK,CAChBV,MAAOI,EAAEI,OAAOR,O,EAIpBE,KAAAa,WAAa,SAACX,GACZA,EAAEC,kBACFC,EAAKU,OAAON,KAAK,CACfV,MAAOI,EAAEI,OAAOR,O,EAIpBE,KAAAe,aAAe,SAACb,GACdA,EAAEC,kBACFC,EAAKY,SAASR,KAAK,CACjBV,MAAOI,EAAEI,OAAOR,O,EAIpBE,KAAAK,iBAAmB,WACjB,IAAMY,EAAOb,EAAKc,mBAClB,GAAID,IAASb,EAAKa,KAAM,CACtBb,EAAKa,KAAOA,EACZb,EAAKe,aAAaX,KAAK,CACrBY,OAAQhB,EAAKiB,YAAYC,aACzBC,UAAWnB,EAAKa,M,GAKtBjB,KAAAwB,uBAAyB,SAACC,EAAIC,GAC5B,IAAIC,EAAaF,EAAGG,MAAMR,OACxBA,EAASK,EAAGI,aACZC,EAAeL,EAAGK,aAClBC,EAAWN,EAAGG,MAAMG,SACpBC,EAAkBP,EAAGG,MAAMK,WAAa,KAG1C,GAAIb,GAAUU,EAAc,CAC1BL,EAAGG,MAAMK,UAAY,EAGrBR,EAAGG,MAAMR,OAASA,EAASM,EAAa,KAExCD,EAAGG,MAAMG,SAAW,SAEpB,GAAID,EAAeL,EAAGK,aAAc,CAGlC,MAAOL,EAAGI,cAAgBJ,EAAGK,aAAc,CACzCL,EAAGG,MAAMR,QAAUA,GAAUM,GAAc,I,CAG7C,MAAOD,EAAGI,aAAeJ,EAAGK,aAAc,CACxCL,EAAGG,MAAMR,OAASA,IAAW,I,CAG/BK,EAAGG,MAAMR,OAASO,EAElBF,EAAGG,MAAMG,SAAWA,EACpBN,EAAGG,MAAMK,UAAYD,EACrB,OAAOZ,C,MAEJ,CACL,OAAOU,C,GAIX9B,KAAAkB,iBAAmB,WACjB,IAAMO,EAAKrB,EAAKiB,YACdO,EAAQM,OAAOC,iBAAmBD,OAAOC,iBAAiBV,GAAMA,EAAGG,MAGnEQ,EAAeC,SAAST,EAAMU,WAAY,IAE1CC,EAAWnC,EAAKoB,uBAAuBC,EAAIW,GAE3CI,EAAgBC,KAAKC,MAAMH,EAAWH,GAExC,OAAOI,C,gEA1IU,M,eACC,I,eACA,M,gBACC,M,qCAEC,G,UACN,C,CA4BhBzC,EAAA4C,UAAAC,MAAA,WACE5C,KAAKqB,YAAYuB,O,EAGnB7C,EAAA4C,UAAAE,iBAAA,eAAAzC,EAAAJ,KACE8C,OAAOC,eAAe/C,KAAKgD,GAAI,QAAS,CACtCC,IAAK,WAAM,OAAA7C,EAAKiB,YAAYvB,KAAjB,EACXoD,IAAK,SAAApD,GAAK,OAAKM,EAAKN,MAAQA,CAAlB,EACVqD,aAAc,OAEhBnD,KAAKoD,WAAapD,KAAKqB,YAAYuB,O,EAiGrC7C,EAAA4C,UAAAU,OAAA,eAAAjD,EAAAJ,KACQ,IAAAsD,EAaFtD,KAZFF,EAAKwD,EAAAxD,MACLyD,EAAWD,EAAAC,YACXC,EAAQF,EAAAE,SACRC,EAASH,EAAAG,UACTL,EAASE,EAAAF,UACTM,EAAUJ,EAAAI,WACVC,EAAIL,EAAAK,KACJC,EAAWN,EAAAM,YACX3D,EAAWqD,EAAArD,YACXU,EAAW2C,EAAA3C,YACXE,EAAUyC,EAAAzC,WACVE,EAAYuC,EAAAvC,aAGd,IAAM8C,EAEF,GAEJ,GAAIH,EAAY,CACdG,EAAWC,KAAO9D,KAAKiB,I,CAGzB,OACE8C,EAAA,WAAAjB,OAAAkB,OAAA,CACEC,IAAK,SAAAC,GACH,GAAIA,EAAO,CACT9D,EAAKiB,YAAc6C,C,GAGvBC,MAAO,iBAAAC,OAAiBV,EAAa,cAAgB,IACrD5D,MAAOD,mBAAmBC,GAC1ByD,YAAaA,EACbI,KAAMA,EACNH,SAAUA,EACVC,UAAWA,EACXY,UAAWjB,EACX7C,QAASN,EACTW,QAASD,EACTG,OAAQD,EACRG,SAAUD,GACN6C,EACAC,G,gIA/LS,G"}')}}]);