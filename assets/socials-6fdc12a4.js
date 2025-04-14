import{i as E,c as P,C as S,O as b,R as g,e as W,x as l,A as u,p as D,m as O,j as d,q as L,n as U,S as C,M as k,T as y,h as _}from"./index-b33c2183.js";import{n as j,r as c,c as T,o as w}from"./if-defined-ec6ded43.js";import{O as R}from"./index-5cee2c0e.js";import{e as q}from"./index-4d54f91b.js";import"./index-2cbcd888.js";import"./index-3499bfb5.js";import"./index-bc49a24e.js";import"./index-6a53396d.js";import"./index-d4626aac.js";import"./index-2e4f3a5e.js";import"./index-5a308594.js";const z=E`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var x=globalThis&&globalThis.__decorate||function(s,e,i,o){var n=arguments.length,t=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,i,o);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(t=(n<3?r(t):n>3?r(e,i,t):r(e,i))||t);return n>3&&t&&Object.defineProperty(e,i,t),t};let p=class extends P{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=S.state.connectors,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.features=b.state.features,this.unsubscribe.push(S.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(i=>i.type==="AUTH")}),b.subscribeKey("features",e=>this.features=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var t;let e=((t=this.features)==null?void 0:t.socials)||[];const i=!!this.authConnector,o=e==null?void 0:e.length,n=g.state.view==="ConnectSocials";return(!i||!o)&&!n?null:(n&&!o&&(e=W.DEFAULT_FEATURES.socials),l` <wui-flex flexDirection="column" gap="xs">
      ${e.map(r=>l`<wui-list-social
            @click=${()=>{this.onSocialClick(r)}}
            name=${r}
            logo=${r}
            tabIdx=${w(this.tabIdx)}
          ></wui-list-social>`)}
    </wui-flex>`)}async onSocialClick(e){e&&await q(e)}};p.styles=z;x([j()],p.prototype,"tabIdx",void 0);x([c()],p.prototype,"connectors",void 0);x([c()],p.prototype,"authConnector",void 0);x([c()],p.prototype,"features",void 0);p=x([T("w3m-social-login-list")],p);const N=E`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var A=globalThis&&globalThis.__decorate||function(s,e,i,o){var n=arguments.length,t=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,i,o);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(t=(n<3?r(t):n>3?r(e,i,t):r(e,i))||t);return n>3&&t&&Object.defineProperty(e,i,t),t};let $=class extends P{constructor(){super(),this.unsubscribe=[],this.checked=R.state.isLegalCheckboxChecked,this.unsubscribe.push(R.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var I;const{termsConditionsUrl:e,privacyPolicyUrl:i}=b.state,o=(I=b.state.features)==null?void 0:I.legalCheckbox,t=!!(e||i)&&!!o,r=t&&!this.checked,a=r?-1:void 0;return l`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${t?["0","s","s","s"]:"s"}
        gap="xs"
        class=${w(r?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${w(a)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};$.styles=N;A([c()],$.prototype,"checked",void 0);$=A([T("w3m-connect-socials-view")],$);const V=E`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var m=globalThis&&globalThis.__decorate||function(s,e,i,o){var n=arguments.length,t=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,i,o);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(t=(n<3?r(t):n>3?r(e,i,t):r(e,i))||t);return n>3&&t&&Object.defineProperty(e,i,t),t};let h=class extends P{constructor(){super(),this.unsubscribe=[],this.socialProvider=u.state.socialProvider,this.socialWindow=u.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=S.getAuthConnector(),this.handleSocialConnection=async e=>{var i;if((i=e.data)!=null&&i.resultUri)if(e.origin===D.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),u.setSocialWindow(void 0,O.state.activeChain)),this.connecting=!0,this.updateMessage();const o=e.data.resultUri;this.socialProvider&&d.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await this.authConnector.provider.connectSocial(o),this.socialProvider&&(L.setConnectedSocialProvider(this.socialProvider),await U.connectExternal(this.authConnector,this.authConnector.chain),d.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch{this.error=!0,this.updateMessage(),this.socialProvider&&d.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else g.goBack(),C.showError("Untrusted Origin"),this.socialProvider&&d.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},this.unsubscribe.push(u.subscribe(e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&(k.state.open||b.state.enableEmbedded)&&k.close()})),this.authConnector&&this.connectSocial()}disconnectedCallback(){var e;this.unsubscribe.forEach(i=>i()),window.removeEventListener("message",this.handleSocialConnection,!1),(e=this.socialWindow)==null||e.close(),u.setSocialWindow(void 0,O.state.activeChain)}render(){return l`
      <wui-flex
        data-error=${w(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${w(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=y.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}connectSocial(){const e=setInterval(()=>{var i;(i=this.socialWindow)!=null&&i.closed&&(!this.connecting&&g.state.view==="ConnectingSocial"&&(this.socialProvider&&d.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),g.goBack()),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};h.styles=V;m([c()],h.prototype,"socialProvider",void 0);m([c()],h.prototype,"socialWindow",void 0);m([c()],h.prototype,"error",void 0);m([c()],h.prototype,"connecting",void 0);m([c()],h.prototype,"message",void 0);h=m([T("w3m-connecting-social-view")],h);const F=E`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;var v=globalThis&&globalThis.__decorate||function(s,e,i,o){var n=arguments.length,t=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,i,o);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(t=(n<3?r(t):n>3?r(e,i,t):r(e,i))||t);return n>3&&t&&Object.defineProperty(e,i,t),t};let f=class extends P{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=u.state.socialProvider,this.uri=u.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=S.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(u.subscribeKey("farcasterUrl",e=>{e&&(this.uri=e,this.connectFarcaster())}),u.subscribeKey("socialProvider",e=>{e&&(this.socialProvider=e)})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`${this.platformTemplate()}`}platformTemplate(){return _.isMobile()?l`${this.mobileTemplate()}`:l`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?l`${this.loadingTemplate()}`:l`${this.qrTemplate()}`}qrTemplate(){return l` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","xl","xl","xl"]}
      gap="xl"
    >
      <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="paragraph-500" color="fg-100">
        Scan this QR Code with your phone
      </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return l` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          backgroundColor="error-100"
          background="opaque"
          iconColor="error-100"
          icon="close"
          size="sm"
          border
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=y.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}async connectFarcaster(){var e;if(this.authConnector)try{await((e=this.authConnector)==null?void 0:e.provider.connectFarcaster()),this.socialProvider&&(L.setConnectedSocialProvider(this.socialProvider),d.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0,await U.connectExternal(this.authConnector,this.authConnector.chain),this.socialProvider&&d.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,k.close()}catch(i){this.socialProvider&&d.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}}),g.goBack(),C.showError(i)}}mobileLinkTemplate(){return l`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&_.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40;return l` <wui-qr-code
      size=${e}
      theme=${y.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${w(y.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(_.copyToClopboard(this.uri),C.showSuccess("Link copied"))}catch{C.showError("Failed to copy")}}};f.styles=F;v([c()],f.prototype,"socialProvider",void 0);v([c()],f.prototype,"uri",void 0);v([c()],f.prototype,"ready",void 0);v([c()],f.prototype,"loading",void 0);f=v([T("w3m-connecting-farcaster-view")],f);export{$ as W3mConnectSocialsView,f as W3mConnectingFarcasterView,h as W3mConnectingSocialView};
