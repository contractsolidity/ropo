import{i as d,c as g,x as h}from"./index-d568e01c.js";import{n as u,c as b}from"./if-defined-85bda75a.js";const p=d`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var t=globalThis&&globalThis.__decorate||function(a,i,e,s){var c=arguments.length,r=c<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,e):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,i,e,s);else for(var n=a.length-1;n>=0;n--)(l=a[n])&&(r=(c<3?l(r):c>3?l(i,e,r):l(i,e))||r);return c>3&&r&&Object.defineProperty(i,e,r),r};let o=class extends g{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,h`<slot></slot>`}};o.styles=[p];t([u()],o.prototype,"width",void 0);t([u()],o.prototype,"height",void 0);t([u()],o.prototype,"borderRadius",void 0);t([u()],o.prototype,"variant",void 0);o=t([b("wui-shimmer")],o);
