import{Z as k,_ as B,$ as A,i as P,r as R,K as j,c as O,x as E,a0 as r,V as M}from"./index-d568e01c.js";const d={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:i,truncate:a}){return t.length<=e+i?t:a==="end"?`${t.substring(0,e)}...`:a==="start"?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`},generateAvatarColors(t){const i=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),a=this.hexToRgb(i),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(n==null?void 0:n.replace("px","")),l=`${s}% ${s}% at 65% 40%`,_=[];for(let w=0;w<5;w+=1){const m=this.tintColor(a,.15*w);_.push(`rgb(${m[0]}, ${m[1]}, ${m[2]})`)}return`
    --local-color-1: ${_[0]};
    --local-color-2: ${_[1]};
    --local-color-3: ${_[2]};
    --local-color-4: ${_[3]};
    --local-color-5: ${_[4]};
    --local-radial-circle: ${l}
   `},hexToRgb(t){const e=parseInt(t,16),i=e>>16&255,a=e>>8&255,n=e&255;return[i,a,n]},tintColor(t,e){const[i,a,n]=t,o=Math.round(i+(255-i)*e),s=Math.round(a+(255-a)*e),l=Math.round(n+(255-n)*e);return[o,s,l]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){var e;return t||(typeof window<"u"&&window.matchMedia?(e=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&e.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,i){return t.toString().length>=e?Number(t).toFixed(i):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function U(t,e){const{kind:i,elements:a}=e;return{kind:i,elements:a,finisher(n){customElements.get(t)||customElements.define(t,n)}}}function H(t,e){return customElements.get(t)||customElements.define(t,e),e}function L(t){return function(i){return typeof i=="function"?H(t,i):U(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:B},F=(t=N,e,i)=>{const{kind:a,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),a==="accessor"){const{name:s}=i;return{set(l){const _=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,_,t)},init(l){return l!==void 0&&this.C(s,void 0,t,l),l}}}if(a==="setter"){const{name:s}=i;return function(l){const _=this[s];e.call(this,l),this.requestUpdate(s,_,t)}}throw Error("Unsupported decorator location: "+a)};function c(t){return(e,i)=>typeof i=="object"?F(t,e,i):((a,n,o)=>{const s=n.hasOwnProperty(o);return n.constructor.createProperty(o,a),s?Object.getOwnPropertyDescriptor(n,o):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t){return c({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=t=>t===null||typeof t!="object"&&typeof t!="function",W=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},C=t=>(...e)=>({_$litDirective$:t,values:e});let x=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,a){this._$Ct=e,this._$AM=i,this._$Ci=a}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=(t,e)=>{var a;const i=t._$AN;if(i===void 0)return!1;for(const n of i)(a=n._$AO)==null||a.call(n,e,!1),v(n,e);return!0},$=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while((i==null?void 0:i.size)===0)},z=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Z(e)}};function K(t){this._$AN!==void 0?($(this),this._$AM=t,z(this)):this._$AM=t}function Y(t,e=!1,i=0){const a=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(a))for(let o=i;o<a.length;o++)v(a[o],!1),$(a[o]);else a!=null&&(v(a,!1),$(a));else v(this,t)}const Z=t=>{t.type==V.CHILD&&(t._$AP??(t._$AP=Y),t._$AQ??(t._$AQ=K))};class q extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,a){super._$AT(e,i,a),z(this),this.isConnected=e._$AU}_$AO(e,i=!0){var a,n;e!==this.isConnected&&(this.isConnected=e,e?(a=this.reconnected)==null||a.call(this):(n=this.disconnected)==null||n.call(this)),i&&(v(this,e),$(this))}setValue(e){if(W(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class X{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Q{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=t=>!G(t)&&typeof t.then=="function",D=1073741823;class J extends q{constructor(){super(...arguments),this._$Cwt=D,this._$Cbt=[],this._$CK=new X(this),this._$CX=new Q}render(...e){return e.find(i=>!I(i))??A}update(e,i){const a=this._$Cbt;let n=a.length;this._$Cbt=i;const o=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<i.length&&!(l>this._$Cwt);l++){const _=i[l];if(!I(_))return this._$Cwt=l,_;l<n&&_===a[l]||(this._$Cwt=D,n=0,Promise.resolve(_).then(async w=>{for(;s.get();)await s.get();const m=o.deref();if(m!==void 0){const T=m._$Cbt.indexOf(_);T>-1&&T<m._$Cwt&&(m._$Cwt=T,m.setValue(w))}}))}return A}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const tt=C(J);class et{constructor(){this.cache=new Map}set(e,i){this.cache.set(e,i)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const S=new et,it=P`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var f=globalThis&&globalThis.__decorate||function(t,e,i,a){var n=arguments.length,o=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,a);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};const b={add:async()=>(await r(()=>import("./add-a310b108.js"),["./add-a310b108.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).addSvg,allWallets:async()=>(await r(()=>import("./all-wallets-c4fb0550.js"),["./all-wallets-c4fb0550.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).allWalletsSvg,arrowBottomCircle:async()=>(await r(()=>import("./arrow-bottom-circle-a0d697cd.js"),["./arrow-bottom-circle-a0d697cd.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).arrowBottomCircleSvg,appStore:async()=>(await r(()=>import("./app-store-70773239.js"),["./app-store-70773239.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).appStoreSvg,apple:async()=>(await r(()=>import("./apple-c2aee3a9.js"),["./apple-c2aee3a9.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).appleSvg,arrowBottom:async()=>(await r(()=>import("./arrow-bottom-2e171663.js"),["./arrow-bottom-2e171663.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).arrowBottomSvg,arrowLeft:async()=>(await r(()=>import("./arrow-left-cb4ae0d4.js"),["./arrow-left-cb4ae0d4.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).arrowLeftSvg,arrowRight:async()=>(await r(()=>import("./arrow-right-67d1c30d.js"),["./arrow-right-67d1c30d.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).arrowRightSvg,arrowTop:async()=>(await r(()=>import("./arrow-top-944a83b1.js"),["./arrow-top-944a83b1.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).arrowTopSvg,bank:async()=>(await r(()=>import("./bank-beea62ce.js"),["./bank-beea62ce.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).bankSvg,browser:async()=>(await r(()=>import("./browser-405f63c8.js"),["./browser-405f63c8.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).browserSvg,card:async()=>(await r(()=>import("./card-00b5ea46.js"),["./card-00b5ea46.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).cardSvg,checkmark:async()=>(await r(()=>import("./checkmark-303ba484.js"),["./checkmark-303ba484.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).checkmarkSvg,checkmarkBold:async()=>(await r(()=>import("./checkmark-bold-59fd5ad0.js"),["./checkmark-bold-59fd5ad0.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).checkmarkBoldSvg,chevronBottom:async()=>(await r(()=>import("./chevron-bottom-add150b7.js"),["./chevron-bottom-add150b7.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).chevronBottomSvg,chevronLeft:async()=>(await r(()=>import("./chevron-left-d4160956.js"),["./chevron-left-d4160956.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).chevronLeftSvg,chevronRight:async()=>(await r(()=>import("./chevron-right-50c21bf7.js"),["./chevron-right-50c21bf7.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).chevronRightSvg,chevronTop:async()=>(await r(()=>import("./chevron-top-6a94d262.js"),["./chevron-top-6a94d262.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).chevronTopSvg,chromeStore:async()=>(await r(()=>import("./chrome-store-6547e060.js"),["./chrome-store-6547e060.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).chromeStoreSvg,clock:async()=>(await r(()=>import("./clock-b9c87d1b.js"),["./clock-b9c87d1b.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).clockSvg,close:async()=>(await r(()=>import("./close-fcb1f103.js"),["./close-fcb1f103.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).closeSvg,compass:async()=>(await r(()=>import("./compass-aaefb684.js"),["./compass-aaefb684.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).compassSvg,coinPlaceholder:async()=>(await r(()=>import("./coinPlaceholder-6cb66f5c.js"),["./coinPlaceholder-6cb66f5c.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).coinPlaceholderSvg,copy:async()=>(await r(()=>import("./copy-250710d9.js"),["./copy-250710d9.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).copySvg,cursor:async()=>(await r(()=>import("./cursor-e09bdd75.js"),["./cursor-e09bdd75.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).cursorSvg,cursorTransparent:async()=>(await r(()=>import("./cursor-transparent-80eddac1.js"),["./cursor-transparent-80eddac1.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).cursorTransparentSvg,desktop:async()=>(await r(()=>import("./desktop-6403e09c.js"),["./desktop-6403e09c.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).desktopSvg,disconnect:async()=>(await r(()=>import("./disconnect-1e20379e.js"),["./disconnect-1e20379e.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).disconnectSvg,discord:async()=>(await r(()=>import("./discord-8e90ea9a.js"),["./discord-8e90ea9a.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).discordSvg,etherscan:async()=>(await r(()=>import("./etherscan-fb51aa54.js"),["./etherscan-fb51aa54.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).etherscanSvg,extension:async()=>(await r(()=>import("./extension-1472823f.js"),["./extension-1472823f.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).extensionSvg,externalLink:async()=>(await r(()=>import("./external-link-efcea5c2.js"),["./external-link-efcea5c2.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).externalLinkSvg,facebook:async()=>(await r(()=>import("./facebook-16b9415f.js"),["./facebook-16b9415f.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).facebookSvg,farcaster:async()=>(await r(()=>import("./farcaster-6319b6f0.js"),["./farcaster-6319b6f0.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).farcasterSvg,filters:async()=>(await r(()=>import("./filters-369b412d.js"),["./filters-369b412d.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).filtersSvg,github:async()=>(await r(()=>import("./github-4a5f33dd.js"),["./github-4a5f33dd.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).githubSvg,google:async()=>(await r(()=>import("./google-ea317552.js"),["./google-ea317552.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).googleSvg,helpCircle:async()=>(await r(()=>import("./help-circle-9b4df1ed.js"),["./help-circle-9b4df1ed.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).helpCircleSvg,image:async()=>(await r(()=>import("./image-77ef351f.js"),["./image-77ef351f.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).imageSvg,id:async()=>(await r(()=>import("./id-eb6aaa31.js"),["./id-eb6aaa31.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).idSvg,infoCircle:async()=>(await r(()=>import("./info-circle-99dedc0b.js"),["./info-circle-99dedc0b.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).infoCircleSvg,lightbulb:async()=>(await r(()=>import("./lightbulb-713a3be3.js"),["./lightbulb-713a3be3.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).lightbulbSvg,mail:async()=>(await r(()=>import("./mail-d2d99823.js"),["./mail-d2d99823.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).mailSvg,mobile:async()=>(await r(()=>import("./mobile-8190dd39.js"),["./mobile-8190dd39.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).mobileSvg,more:async()=>(await r(()=>import("./more-b1d14b0e.js"),["./more-b1d14b0e.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).moreSvg,networkPlaceholder:async()=>(await r(()=>import("./network-placeholder-241c6443.js"),["./network-placeholder-241c6443.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).networkPlaceholderSvg,nftPlaceholder:async()=>(await r(()=>import("./nftPlaceholder-f1347aa3.js"),["./nftPlaceholder-f1347aa3.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).nftPlaceholderSvg,off:async()=>(await r(()=>import("./off-578e918a.js"),["./off-578e918a.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).offSvg,playStore:async()=>(await r(()=>import("./play-store-afffbf45.js"),["./play-store-afffbf45.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).playStoreSvg,plus:async()=>(await r(()=>import("./plus-66f68f00.js"),["./plus-66f68f00.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).plusSvg,qrCode:async()=>(await r(()=>import("./qr-code-51c6bc0d.js"),["./qr-code-51c6bc0d.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).qrCodeIcon,recycleHorizontal:async()=>(await r(()=>import("./recycle-horizontal-06b3a0d8.js"),["./recycle-horizontal-06b3a0d8.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).recycleHorizontalSvg,refresh:async()=>(await r(()=>import("./refresh-bf180249.js"),["./refresh-bf180249.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).refreshSvg,search:async()=>(await r(()=>import("./search-b6896541.js"),["./search-b6896541.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).searchSvg,send:async()=>(await r(()=>import("./send-055c64c1.js"),["./send-055c64c1.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).sendSvg,swapHorizontal:async()=>(await r(()=>import("./swapHorizontal-42d1271f.js"),["./swapHorizontal-42d1271f.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).swapHorizontalSvg,swapHorizontalMedium:async()=>(await r(()=>import("./swapHorizontalMedium-4a85cd6b.js"),["./swapHorizontalMedium-4a85cd6b.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await r(()=>import("./swapHorizontalBold-77083f3a.js"),["./swapHorizontalBold-77083f3a.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await r(()=>import("./swapHorizontalRoundedBold-c4d80df9.js"),["./swapHorizontalRoundedBold-c4d80df9.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await r(()=>import("./swapVertical-3c71dc3f.js"),["./swapVertical-3c71dc3f.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).swapVerticalSvg,telegram:async()=>(await r(()=>import("./telegram-ee4cfbd1.js"),["./telegram-ee4cfbd1.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).telegramSvg,threeDots:async()=>(await r(()=>import("./three-dots-dcfe13a9.js"),["./three-dots-dcfe13a9.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).threeDotsSvg,twitch:async()=>(await r(()=>import("./twitch-ebbb2b81.js"),["./twitch-ebbb2b81.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).twitchSvg,twitter:async()=>(await r(()=>import("./x-9f87c090.js"),["./x-9f87c090.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).xSvg,twitterIcon:async()=>(await r(()=>import("./twitterIcon-ebd731ed.js"),["./twitterIcon-ebd731ed.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).twitterIconSvg,verify:async()=>(await r(()=>import("./verify-6cdff585.js"),["./verify-6cdff585.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).verifySvg,verifyFilled:async()=>(await r(()=>import("./verify-filled-5ba36c1c.js"),["./verify-filled-5ba36c1c.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).verifyFilledSvg,wallet:async()=>(await r(()=>import("./wallet-51ade9fe.js"),["./wallet-51ade9fe.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).walletSvg,walletConnect:async()=>(await r(()=>import("./walletconnect-23f53914.js"),["./walletconnect-23f53914.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).walletConnectSvg,walletConnectLightBrown:async()=>(await r(()=>import("./walletconnect-23f53914.js"),["./walletconnect-23f53914.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await r(()=>import("./walletconnect-23f53914.js"),["./walletconnect-23f53914.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).walletConnectBrownSvg,walletPlaceholder:async()=>(await r(()=>import("./wallet-placeholder-e3f80ce2.js"),["./wallet-placeholder-e3f80ce2.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).walletPlaceholderSvg,warningCircle:async()=>(await r(()=>import("./warning-circle-2ea20abd.js"),["./warning-circle-2ea20abd.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).warningCircleSvg,x:async()=>(await r(()=>import("./x-9f87c090.js"),["./x-9f87c090.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).xSvg,info:async()=>(await r(()=>import("./info-28bc2341.js"),["./info-28bc2341.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).infoSvg,exclamationTriangle:async()=>(await r(()=>import("./exclamation-triangle-f0726829.js"),["./exclamation-triangle-f0726829.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).exclamationTriangleSvg,reown:async()=>(await r(()=>import("./reown-logo-885a004f.js"),["./reown-logo-885a004f.js","./index-d568e01c.js","./index-fc46fe3e.css"],import.meta.url)).reownSvg};async function rt(t){if(S.has(t))return S.get(t);const i=(b[t]??b.copy)();return S.set(t,i),i}let h=class extends O{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,E`${tt(rt(this.name),E`<div class="fallback"></div>`)}`}};h.styles=[R,j,it];f([c()],h.prototype,"size",void 0);f([c()],h.prototype,"name",void 0);f([c()],h.prototype,"color",void 0);f([c()],h.prototype,"aspectRatio",void 0);h=f([L("wui-icon")],h);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=C(class extends x{constructor(t){var e;if(super(t),t.type!==V.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var a,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((a=this.nt)!=null&&a.has(o))&&this.st.add(o);return this.render(e)}const i=t.element.classList;for(const o of this.st)o in e||(i.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||(n=this.nt)!=null&&n.has(o)||(s?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return A}}),at=P`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var y=globalThis&&globalThis.__decorate||function(t,e,i,a){var n=arguments.length,o=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,a);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let g=class extends O{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,E`<slot class=${ot(e)}></slot>`}};g.styles=[R,at];y([c()],g.prototype,"variant",void 0);y([c()],g.prototype,"color",void 0);y([c()],g.prototype,"align",void 0);y([c()],g.prototype,"lineClamp",void 0);g=y([L("wui-text")],g);const nt=P`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var p=globalThis&&globalThis.__decorate||function(t,e,i,a){var n=arguments.length,o=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,a);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let u=class extends O{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&d.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&d.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&d.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&d.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&d.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&d.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&d.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&d.getSpacingStyles(this.margin,3)};
    `,E`<slot></slot>`}};u.styles=[R,nt];p([c()],u.prototype,"flexDirection",void 0);p([c()],u.prototype,"flexWrap",void 0);p([c()],u.prototype,"flexBasis",void 0);p([c()],u.prototype,"flexGrow",void 0);p([c()],u.prototype,"flexShrink",void 0);p([c()],u.prototype,"alignItems",void 0);p([c()],u.prototype,"justifyContent",void 0);p([c()],u.prototype,"columnGap",void 0);p([c()],u.prototype,"rowGap",void 0);p([c()],u.prototype,"gap",void 0);p([c()],u.prototype,"padding",void 0);p([c()],u.prototype,"margin",void 0);u=p([L("wui-flex")],u);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=t=>t??M;export{d as U,C as a,L as c,ot as e,q as f,c as n,mt as o,lt as r};
