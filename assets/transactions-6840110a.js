import{i as a,c as f,x as m}from"./index-b33c2183.js";import{c as p}from"./if-defined-ec6ded43.js";import"./index-a56bb54a.js";import"./index-eef7e6ba.js";import"./index-d4626aac.js";import"./index-2cbcd888.js";import"./index-bc49a24e.js";import"./index-5a308594.js";const w=a`
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
