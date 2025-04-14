import{i as d,c as u,R as f,M as b,x as p}from"./index-b33c2183.js";import{n as g,r as m,c as M}from"./if-defined-ec6ded43.js";import{T as l}from"./index-0e5dad3b.js";const R={interpolate(i,e,o){if(i.length!==2||e.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");const r=i[0]||0,n=i[1]||0,t=e[0]||0,s=e[1]||0;return o<r?t:o>n?s:(s-t)/(n-r)*(o-r)+t}},v=d`
  :host {
    width: 100%;
    display: block;
  }
`;var a=globalThis&&globalThis.__decorate||function(i,e,o,r){var n=arguments.length,t=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(i,e,o,r);else for(var c=i.length-1;c>=0;c--)(s=i[c])&&(t=(n<3?s(t):n>3?s(e,o,t):s(e,o))||t);return n>3&&t&&Object.defineProperty(e,o,t),t};let h=class extends u{constructor(){super(),this.unsubscribe=[],this.text="",this.open=l.state.open,this.unsubscribe.push(f.subscribeKey("view",()=>{l.hide()}),b.subscribeKey("open",e=>{e||l.hide()}),l.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),l.hide()}render(){return p`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return p`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||l.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||l.hide()}};h.styles=[v];a([g()],h.prototype,"text",void 0);a([m()],h.prototype,"open",void 0);h=a([M("w3m-tooltip-trigger")],h);export{R as M};
