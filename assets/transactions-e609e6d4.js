import{i as a,c as f,x as m}from"./index-46a27ec9.js";import{c as p}from"./if-defined-b84a6770.js";import"./index-2c529ca7.js";import"./index-520c3ff9.js";import"./index-7c85be8e.js";import"./index-b745051b.js";import"./index-de44948e.js";import"./index-17ae1866.js";const w=a`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=globalThis&&globalThis.__decorate||function(o,i,e,r){var l=arguments.length,t=l<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,i,e,r);else for(var s=o.length-1;s>=0;s--)(n=o[s])&&(t=(l<3?n(t):l>3?n(i,e,t):n(i,e))||t);return l>3&&t&&Object.defineProperty(i,e,t),t};let c=class extends f{render(){return m`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=w;c=u([p("w3m-transactions-view")],c);export{c as W3mTransactionsView};
