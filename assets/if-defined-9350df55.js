import{Z as k,_ as B,$ as A,i as P,r as R,K as j,c as O,x as E,a0 as r,V as M}from"./index-6fa2253a.js";const d={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:i,truncate:a}){return t.length<=e+i?t:a==="end"?`${t.substring(0,e)}...`:a==="start"?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`},generateAvatarColors(t){const i=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),a=this.hexToRgb(i),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(n==null?void 0:n.replace("px","")),l=`${s}% ${s}% at 65% 40%`,_=[];for(let w=0;w<5;w+=1){const m=this.tintColor(a,.15*w);_.push(`rgb(${m[0]}, ${m[1]}, ${m[2]})`)}return`
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
`;var f=globalThis&&globalThis.__decorate||function(t,e,i,a){var n=arguments.length,o=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,a);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};const b={add:async()=>(await r(()=>import("./add-40a0acd8.js"),["./add-40a0acd8.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).addSvg,allWallets:async()=>(await r(()=>import("./all-wallets-6152f4d2.js"),["./all-wallets-6152f4d2.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).allWalletsSvg,arrowBottomCircle:async()=>(await r(()=>import("./arrow-bottom-circle-fd73b5c9.js"),["./arrow-bottom-circle-fd73b5c9.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).arrowBottomCircleSvg,appStore:async()=>(await r(()=>import("./app-store-51eeb671.js"),["./app-store-51eeb671.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).appStoreSvg,apple:async()=>(await r(()=>import("./apple-ecbcece3.js"),["./apple-ecbcece3.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).appleSvg,arrowBottom:async()=>(await r(()=>import("./arrow-bottom-dbafa2ee.js"),["./arrow-bottom-dbafa2ee.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).arrowBottomSvg,arrowLeft:async()=>(await r(()=>import("./arrow-left-daa59eec.js"),["./arrow-left-daa59eec.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).arrowLeftSvg,arrowRight:async()=>(await r(()=>import("./arrow-right-1f399dd2.js"),["./arrow-right-1f399dd2.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).arrowRightSvg,arrowTop:async()=>(await r(()=>import("./arrow-top-97d5cc8a.js"),["./arrow-top-97d5cc8a.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).arrowTopSvg,bank:async()=>(await r(()=>import("./bank-12975da4.js"),["./bank-12975da4.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).bankSvg,browser:async()=>(await r(()=>import("./browser-52a06f13.js"),["./browser-52a06f13.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).browserSvg,card:async()=>(await r(()=>import("./card-5e6d3c3b.js"),["./card-5e6d3c3b.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).cardSvg,checkmark:async()=>(await r(()=>import("./checkmark-20034bbe.js"),["./checkmark-20034bbe.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).checkmarkSvg,checkmarkBold:async()=>(await r(()=>import("./checkmark-bold-92289fbb.js"),["./checkmark-bold-92289fbb.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).checkmarkBoldSvg,chevronBottom:async()=>(await r(()=>import("./chevron-bottom-3691828e.js"),["./chevron-bottom-3691828e.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).chevronBottomSvg,chevronLeft:async()=>(await r(()=>import("./chevron-left-17e05150.js"),["./chevron-left-17e05150.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).chevronLeftSvg,chevronRight:async()=>(await r(()=>import("./chevron-right-0f53219b.js"),["./chevron-right-0f53219b.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).chevronRightSvg,chevronTop:async()=>(await r(()=>import("./chevron-top-ef114af7.js"),["./chevron-top-ef114af7.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).chevronTopSvg,chromeStore:async()=>(await r(()=>import("./chrome-store-c9d18e2e.js"),["./chrome-store-c9d18e2e.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).chromeStoreSvg,clock:async()=>(await r(()=>import("./clock-48ce1c2a.js"),["./clock-48ce1c2a.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).clockSvg,close:async()=>(await r(()=>import("./close-e423c007.js"),["./close-e423c007.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).closeSvg,compass:async()=>(await r(()=>import("./compass-836ef74d.js"),["./compass-836ef74d.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).compassSvg,coinPlaceholder:async()=>(await r(()=>import("./coinPlaceholder-84a5d90f.js"),["./coinPlaceholder-84a5d90f.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).coinPlaceholderSvg,copy:async()=>(await r(()=>import("./copy-fa9b2164.js"),["./copy-fa9b2164.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).copySvg,cursor:async()=>(await r(()=>import("./cursor-4569abad.js"),["./cursor-4569abad.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).cursorSvg,cursorTransparent:async()=>(await r(()=>import("./cursor-transparent-d8b0a3c3.js"),["./cursor-transparent-d8b0a3c3.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).cursorTransparentSvg,desktop:async()=>(await r(()=>import("./desktop-2f88cb7a.js"),["./desktop-2f88cb7a.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).desktopSvg,disconnect:async()=>(await r(()=>import("./disconnect-c00329be.js"),["./disconnect-c00329be.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).disconnectSvg,discord:async()=>(await r(()=>import("./discord-67b37525.js"),["./discord-67b37525.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).discordSvg,etherscan:async()=>(await r(()=>import("./etherscan-4416e9cd.js"),["./etherscan-4416e9cd.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).etherscanSvg,extension:async()=>(await r(()=>import("./extension-c5fdd931.js"),["./extension-c5fdd931.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).extensionSvg,externalLink:async()=>(await r(()=>import("./external-link-0cce11db.js"),["./external-link-0cce11db.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).externalLinkSvg,facebook:async()=>(await r(()=>import("./facebook-51be8a24.js"),["./facebook-51be8a24.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).facebookSvg,farcaster:async()=>(await r(()=>import("./farcaster-f838e13d.js"),["./farcaster-f838e13d.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).farcasterSvg,filters:async()=>(await r(()=>import("./filters-d562e22d.js"),["./filters-d562e22d.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).filtersSvg,github:async()=>(await r(()=>import("./github-d2acf845.js"),["./github-d2acf845.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).githubSvg,google:async()=>(await r(()=>import("./google-dbfa3acb.js"),["./google-dbfa3acb.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).googleSvg,helpCircle:async()=>(await r(()=>import("./help-circle-fd97440a.js"),["./help-circle-fd97440a.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).helpCircleSvg,image:async()=>(await r(()=>import("./image-18c71433.js"),["./image-18c71433.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).imageSvg,id:async()=>(await r(()=>import("./id-8c7d01f2.js"),["./id-8c7d01f2.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).idSvg,infoCircle:async()=>(await r(()=>import("./info-circle-02fd8a90.js"),["./info-circle-02fd8a90.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).infoCircleSvg,lightbulb:async()=>(await r(()=>import("./lightbulb-7b334fcb.js"),["./lightbulb-7b334fcb.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).lightbulbSvg,mail:async()=>(await r(()=>import("./mail-fe37e60a.js"),["./mail-fe37e60a.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).mailSvg,mobile:async()=>(await r(()=>import("./mobile-16c80d3a.js"),["./mobile-16c80d3a.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).mobileSvg,more:async()=>(await r(()=>import("./more-7bb26f47.js"),["./more-7bb26f47.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).moreSvg,networkPlaceholder:async()=>(await r(()=>import("./network-placeholder-42e0b2ab.js"),["./network-placeholder-42e0b2ab.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).networkPlaceholderSvg,nftPlaceholder:async()=>(await r(()=>import("./nftPlaceholder-1bc4e9bb.js"),["./nftPlaceholder-1bc4e9bb.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).nftPlaceholderSvg,off:async()=>(await r(()=>import("./off-ca5a8bc2.js"),["./off-ca5a8bc2.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).offSvg,playStore:async()=>(await r(()=>import("./play-store-b3cc1dc5.js"),["./play-store-b3cc1dc5.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).playStoreSvg,plus:async()=>(await r(()=>import("./plus-69f3fe76.js"),["./plus-69f3fe76.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).plusSvg,qrCode:async()=>(await r(()=>import("./qr-code-698218a2.js"),["./qr-code-698218a2.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).qrCodeIcon,recycleHorizontal:async()=>(await r(()=>import("./recycle-horizontal-db15d974.js"),["./recycle-horizontal-db15d974.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).recycleHorizontalSvg,refresh:async()=>(await r(()=>import("./refresh-b84f2f82.js"),["./refresh-b84f2f82.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).refreshSvg,search:async()=>(await r(()=>import("./search-7b5d55e5.js"),["./search-7b5d55e5.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).searchSvg,send:async()=>(await r(()=>import("./send-44c94509.js"),["./send-44c94509.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).sendSvg,swapHorizontal:async()=>(await r(()=>import("./swapHorizontal-fd893488.js"),["./swapHorizontal-fd893488.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).swapHorizontalSvg,swapHorizontalMedium:async()=>(await r(()=>import("./swapHorizontalMedium-f6093544.js"),["./swapHorizontalMedium-f6093544.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await r(()=>import("./swapHorizontalBold-cf7edfb1.js"),["./swapHorizontalBold-cf7edfb1.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await r(()=>import("./swapHorizontalRoundedBold-f7fa9f51.js"),["./swapHorizontalRoundedBold-f7fa9f51.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await r(()=>import("./swapVertical-8818ec55.js"),["./swapVertical-8818ec55.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).swapVerticalSvg,telegram:async()=>(await r(()=>import("./telegram-e4180aa8.js"),["./telegram-e4180aa8.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).telegramSvg,threeDots:async()=>(await r(()=>import("./three-dots-efb0e34a.js"),["./three-dots-efb0e34a.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).threeDotsSvg,twitch:async()=>(await r(()=>import("./twitch-10111fd5.js"),["./twitch-10111fd5.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).twitchSvg,twitter:async()=>(await r(()=>import("./x-6ce59888.js"),["./x-6ce59888.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).xSvg,twitterIcon:async()=>(await r(()=>import("./twitterIcon-9257f8e6.js"),["./twitterIcon-9257f8e6.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).twitterIconSvg,verify:async()=>(await r(()=>import("./verify-8cd1aab3.js"),["./verify-8cd1aab3.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).verifySvg,verifyFilled:async()=>(await r(()=>import("./verify-filled-1bcd7e86.js"),["./verify-filled-1bcd7e86.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).verifyFilledSvg,wallet:async()=>(await r(()=>import("./wallet-f0f28d88.js"),["./wallet-f0f28d88.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).walletSvg,walletConnect:async()=>(await r(()=>import("./walletconnect-b138ec89.js"),["./walletconnect-b138ec89.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).walletConnectSvg,walletConnectLightBrown:async()=>(await r(()=>import("./walletconnect-b138ec89.js"),["./walletconnect-b138ec89.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await r(()=>import("./walletconnect-b138ec89.js"),["./walletconnect-b138ec89.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).walletConnectBrownSvg,walletPlaceholder:async()=>(await r(()=>import("./wallet-placeholder-8e0078c7.js"),["./wallet-placeholder-8e0078c7.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).walletPlaceholderSvg,warningCircle:async()=>(await r(()=>import("./warning-circle-0fe4d22d.js"),["./warning-circle-0fe4d22d.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).warningCircleSvg,x:async()=>(await r(()=>import("./x-6ce59888.js"),["./x-6ce59888.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).xSvg,info:async()=>(await r(()=>import("./info-f57d15c7.js"),["./info-f57d15c7.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).infoSvg,exclamationTriangle:async()=>(await r(()=>import("./exclamation-triangle-d95c75b3.js"),["./exclamation-triangle-d95c75b3.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).exclamationTriangleSvg,reown:async()=>(await r(()=>import("./reown-logo-e14a10b6.js"),["./reown-logo-e14a10b6.js","./index-6fa2253a.js","./index-e00cc7c5.css"],import.meta.url)).reownSvg};async function rt(t){if(S.has(t))return S.get(t);const i=(b[t]??b.copy)();return S.set(t,i),i}let h=class extends O{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
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
