"use strict";const S=require("./W3MFrameProviderSingleton-IamToXe3.cjs"),{Transform:wn}=S.readableBrowserExports;var Sn=t=>class Ze extends wn{constructor(n,_,o,i,c){super(c),this._rate=n,this._capacity=_,this._delimitedSuffix=o,this._hashBitLength=i,this._options=c,this._state=new t,this._state.initialize(n,_),this._finalized=!1}_transform(n,_,o){let i=null;try{this.update(n,_)}catch(c){i=c}o(i)}_flush(n){let _=null;try{this.push(this.digest())}catch(o){_=o}n(_)}update(n,_){if(!S.Buffer.isBuffer(n)&&typeof n!="string")throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Digest already called");return S.Buffer.isBuffer(n)||(n=S.Buffer.from(n,_)),this._state.absorb(n),this}digest(n){if(this._finalized)throw new Error("Digest already called");this._finalized=!0,this._delimitedSuffix&&this._state.absorbLastFewBits(this._delimitedSuffix);let _=this._state.squeeze(this._hashBitLength/8);return n!==void 0&&(_=_.toString(n)),this._resetState(),_}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const n=new Ze(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);return this._state.copy(n._state),n._finalized=this._finalized,n}};const{Transform:xn}=S.readableBrowserExports;var $n=t=>class tn extends xn{constructor(n,_,o,i){super(i),this._rate=n,this._capacity=_,this._delimitedSuffix=o,this._options=i,this._state=new t,this._state.initialize(n,_),this._finalized=!1}_transform(n,_,o){let i=null;try{this.update(n,_)}catch(c){i=c}o(i)}_flush(){}_read(n){this.push(this.squeeze(n))}update(n,_){if(!S.Buffer.isBuffer(n)&&typeof n!="string")throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Squeeze already called");return S.Buffer.isBuffer(n)||(n=S.Buffer.from(n,_)),this._state.absorb(n),this}squeeze(n,_){this._finalized||(this._finalized=!0,this._state.absorbLastFewBits(this._delimitedSuffix));let o=this._state.squeeze(n);return _!==void 0&&(o=o.toString(_)),o}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const n=new tn(this._rate,this._capacity,this._delimitedSuffix,this._options);return this._state.copy(n._state),n._finalized=this._finalized,n}};const zn=Sn,Cn=$n;var En=function(t){const e=zn(t),n=Cn(t);return function(_,o){switch(typeof _=="string"?_.toLowerCase():_){case"keccak224":return new e(1152,448,null,224,o);case"keccak256":return new e(1088,512,null,256,o);case"keccak384":return new e(832,768,null,384,o);case"keccak512":return new e(576,1024,null,512,o);case"sha3-224":return new e(1152,448,6,224,o);case"sha3-256":return new e(1088,512,6,256,o);case"sha3-384":return new e(832,768,6,384,o);case"sha3-512":return new e(576,1024,6,512,o);case"shake128":return new n(1344,256,31,o);case"shake256":return new n(1088,512,31,o);default:throw new Error("Invald algorithm: "+_)}}},en={};const Me=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648];en.p1600=function(t){for(let e=0;e<24;++e){const n=t[0]^t[10]^t[20]^t[30]^t[40],_=t[1]^t[11]^t[21]^t[31]^t[41],o=t[2]^t[12]^t[22]^t[32]^t[42],i=t[3]^t[13]^t[23]^t[33]^t[43],c=t[4]^t[14]^t[24]^t[34]^t[44],u=t[5]^t[15]^t[25]^t[35]^t[45],a=t[6]^t[16]^t[26]^t[36]^t[46],l=t[7]^t[17]^t[27]^t[37]^t[47],h=t[8]^t[18]^t[28]^t[38]^t[48],r=t[9]^t[19]^t[29]^t[39]^t[49];let f=h^(o<<1|i>>>31),s=r^(i<<1|o>>>31);const b=t[0]^f,k=t[1]^s,g=t[10]^f,p=t[11]^s,v=t[20]^f,C=t[21]^s,x=t[30]^f,P=t[31]^s,E=t[40]^f,L=t[41]^s;f=n^(c<<1|u>>>31),s=_^(u<<1|c>>>31);const H=t[2]^f,D=t[3]^s,w=t[12]^f,T=t[13]^s,oe=t[22]^f,ie=t[23]^s,re=t[32]^f,se=t[33]^s,ce=t[42]^f,ue=t[43]^s;f=o^(a<<1|l>>>31),s=i^(l<<1|a>>>31);const le=t[4]^f,fe=t[5]^s,ae=t[14]^f,he=t[15]^s,pe=t[24]^f,de=t[25]^s,ve=t[34]^f,me=t[35]^s,ye=t[44]^f,ge=t[45]^s;f=c^(h<<1|r>>>31),s=u^(r<<1|h>>>31);const be=t[6]^f,ke=t[7]^s,we=t[16]^f,Se=t[17]^s,xe=t[26]^f,$e=t[27]^s,ze=t[36]^f,Ce=t[37]^s,Ee=t[46]^f,Pe=t[47]^s;f=a^(n<<1|_>>>31),s=l^(_<<1|n>>>31);const He=t[8]^f,Te=t[9]^s,Be=t[18]^f,qe=t[19]^s,Ne=t[28]^f,De=t[29]^s,Ue=t[38]^f,Fe=t[39]^s,Le=t[48]^f,Ae=t[49]^s,J=b,Q=k,X=p<<4|g>>>28,Y=g<<4|p>>>28,Z=v<<3|C>>>29,tt=C<<3|v>>>29,et=P<<9|x>>>23,nt=x<<9|P>>>23,_t=E<<18|L>>>14,ot=L<<18|E>>>14,it=H<<1|D>>>31,rt=D<<1|H>>>31,st=T<<12|w>>>20,ct=w<<12|T>>>20,ut=oe<<10|ie>>>22,lt=ie<<10|oe>>>22,ft=se<<13|re>>>19,at=re<<13|se>>>19,ht=ce<<2|ue>>>30,pt=ue<<2|ce>>>30,dt=fe<<30|le>>>2,vt=le<<30|fe>>>2,mt=ae<<6|he>>>26,yt=he<<6|ae>>>26,gt=de<<11|pe>>>21,bt=pe<<11|de>>>21,kt=ve<<15|me>>>17,wt=me<<15|ve>>>17,St=ge<<29|ye>>>3,xt=ye<<29|ge>>>3,$t=be<<28|ke>>>4,zt=ke<<28|be>>>4,Ct=Se<<23|we>>>9,Et=we<<23|Se>>>9,Pt=xe<<25|$e>>>7,Ht=$e<<25|xe>>>7,Tt=ze<<21|Ce>>>11,Bt=Ce<<21|ze>>>11,qt=Pe<<24|Ee>>>8,Nt=Ee<<24|Pe>>>8,Dt=He<<27|Te>>>5,Ut=Te<<27|He>>>5,Ft=Be<<20|qe>>>12,Lt=qe<<20|Be>>>12,At=De<<7|Ne>>>25,Mt=Ne<<7|De>>>25,Wt=Ue<<8|Fe>>>24,Ot=Fe<<8|Ue>>>24,jt=Le<<14|Ae>>>18,It=Ae<<14|Le>>>18;t[0]=J^~st&gt,t[1]=Q^~ct&bt,t[10]=$t^~Ft&Z,t[11]=zt^~Lt&tt,t[20]=it^~mt&Pt,t[21]=rt^~yt&Ht,t[30]=Dt^~X&ut,t[31]=Ut^~Y&lt,t[40]=dt^~Ct&At,t[41]=vt^~Et&Mt,t[2]=st^~gt&Tt,t[3]=ct^~bt&Bt,t[12]=Ft^~Z&ft,t[13]=Lt^~tt&at,t[22]=mt^~Pt&Wt,t[23]=yt^~Ht&Ot,t[32]=X^~ut&kt,t[33]=Y^~lt&wt,t[42]=Ct^~At&et,t[43]=Et^~Mt&nt,t[4]=gt^~Tt&jt,t[5]=bt^~Bt&It,t[14]=Z^~ft&St,t[15]=tt^~at&xt,t[24]=Pt^~Wt&_t,t[25]=Ht^~Ot&ot,t[34]=ut^~kt&qt,t[35]=lt^~wt&Nt,t[44]=At^~et&ht,t[45]=Mt^~nt&pt,t[6]=Tt^~jt&J,t[7]=Bt^~It&Q,t[16]=ft^~St&$t,t[17]=at^~xt&zt,t[26]=Wt^~_t&it,t[27]=Ot^~ot&rt,t[36]=kt^~qt&Dt,t[37]=wt^~Nt&Ut,t[46]=et^~ht&dt,t[47]=nt^~pt&vt,t[8]=jt^~J&st,t[9]=It^~Q&ct,t[18]=St^~$t&Ft,t[19]=xt^~zt&Lt,t[28]=_t^~it&mt,t[29]=ot^~rt&yt,t[38]=qt^~Dt&X,t[39]=Nt^~Ut&Y,t[48]=ht^~dt&Ct,t[49]=pt^~vt&Et,t[0]^=Me[e*2],t[1]^=Me[e*2+1]}};const V=en;function F(){this.state=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.blockSize=null,this.count=0,this.squeezing=!1}F.prototype.initialize=function(t,e){for(let n=0;n<50;++n)this.state[n]=0;this.blockSize=t/8,this.count=0,this.squeezing=!1};F.prototype.absorb=function(t){for(let e=0;e<t.length;++e)this.state[~~(this.count/4)]^=t[e]<<8*(this.count%4),this.count+=1,this.count===this.blockSize&&(V.p1600(this.state),this.count=0)};F.prototype.absorbLastFewBits=function(t){this.state[~~(this.count/4)]^=t<<8*(this.count%4),t&128&&this.count===this.blockSize-1&&V.p1600(this.state),this.state[~~((this.blockSize-1)/4)]^=128<<8*((this.blockSize-1)%4),V.p1600(this.state),this.count=0,this.squeezing=!0};F.prototype.squeeze=function(t){this.squeezing||this.absorbLastFewBits(1);const e=S.Buffer.alloc(t);for(let n=0;n<t;++n)e[n]=this.state[~~(this.count/4)]>>>8*(this.count%4)&255,this.count+=1,this.count===this.blockSize&&(V.p1600(this.state),this.count=0);return e};F.prototype.copy=function(t){for(let e=0;e<50;++e)t.state[e]=this.state[e];t.blockSize=this.blockSize,t.count=this.count,t.squeezing=this.squeezing};var Pn=F,Hn=En(Pn);function nn(t){var e,n,_="";if(typeof t=="string"||typeof t=="number")_+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=nn(t[e]))&&(_&&(_+=" "),_+=n);else for(e in t)t[e]&&(_&&(_+=" "),_+=e);return _}function We(){for(var t,e,n=0,_="";n<arguments.length;)(t=arguments[n++])&&(e=nn(t))&&(_&&(_+=" "),_+=e);return _}const Tn=Object.freeze(Object.defineProperty({__proto__:null,clsx:We,default:We},Symbol.toStringTag,{value:"Module"})),Bn=S.getAugmentedNamespace(Tn);var O,m,_n,on,B,Oe,rn,Vt,Zt,Kt,Gt,sn,W={},cn=[],qn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,G=Array.isArray;function $(t,e){for(var n in e)t[n]=e[n];return t}function un(t){var e=t.parentNode;e&&e.removeChild(t)}function Jt(t,e,n){var _,o,i,c={};for(i in e)i=="key"?_=e[i]:i=="ref"?o=e[i]:c[i]=e[i];if(arguments.length>2&&(c.children=arguments.length>3?O.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)c[i]===void 0&&(c[i]=t.defaultProps[i]);return A(t,c,_,o,null)}function A(t,e,n,_,o){var i={type:t,props:e,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++_n,__i:-1,__u:0};return o==null&&m.vnode!=null&&m.vnode(i),i}function Nn(){return{current:null}}function j(t){return t.children}function M(t,e){this.props=t,this.context=e}function q(t,e){if(e==null)return t.__?q(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?q(t):null}function ln(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return ln(t)}}function Qt(t){(!t.__d&&(t.__d=!0)&&B.push(t)&&!K.__r++||Oe!==m.debounceRendering)&&((Oe=m.debounceRendering)||rn)(K)}function K(){var t,e,n,_,o,i,c,u;for(B.sort(Vt);t=B.shift();)t.__d&&(e=B.length,_=void 0,i=(o=(n=t).__v).__e,c=[],u=[],n.__P&&((_=$({},o)).__v=o.__v+1,m.vnode&&m.vnode(_),te(n.__P,_,o,n.__n,n.__P.namespaceURI,32&o.__u?[i]:null,c,i??q(o),!!(32&o.__u),u),_.__v=o.__v,_.__.__k[_.__i]=_,pn(c,_,u),_.__e!=i&&ln(_)),B.length>e&&B.sort(Vt));K.__r=0}function fn(t,e,n,_,o,i,c,u,a,l,h){var r,f,s,b,k,g=_&&_.__k||cn,p=e.length;for(n.__d=a,Dn(n,e,g),a=n.__d,r=0;r<p;r++)(s=n.__k[r])!=null&&typeof s!="boolean"&&typeof s!="function"&&(f=s.__i===-1?W:g[s.__i]||W,s.__i=r,te(t,s,f,o,i,c,u,a,l,h),b=s.__e,s.ref&&f.ref!=s.ref&&(f.ref&&ee(f.ref,null,s),h.push(s.ref,s.__c||b,s)),k==null&&b!=null&&(k=b),65536&s.__u||f.__k===s.__k?a=an(s,a,t):typeof s.type=="function"&&s.__d!==void 0?a=s.__d:b&&(a=b.nextSibling),s.__d=void 0,s.__u&=-196609);n.__d=a,n.__e=k}function Dn(t,e,n){var _,o,i,c,u,a=e.length,l=n.length,h=l,r=0;for(t.__k=[],_=0;_<a;_++)c=_+r,(o=t.__k[_]=(o=e[_])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?A(null,o,null,null,null):G(o)?A(j,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?A(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,u=Un(o,n,c,h),o.__i=u,i=null,u!==-1&&(h--,(i=n[u])&&(i.__u|=131072)),i==null||i.__v===null?(u==-1&&r--,typeof o.type!="function"&&(o.__u|=65536)):u!==c&&(u==c-1?r--:u==c+1?r++:u>c?h>a-c?r+=u-c:r--:u<c&&(u==c-r?r-=u-c:r++),u!==_+r&&(o.__u|=65536))):(i=n[c])&&i.key==null&&i.__e&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=q(i)),Xt(i,i,!1),n[c]=null,h--);if(h)for(_=0;_<l;_++)(i=n[_])!=null&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=q(i)),Xt(i,i))}function an(t,e,n){var _,o;if(typeof t.type=="function"){for(_=t.__k,o=0;_&&o<_.length;o++)_[o]&&(_[o].__=t,e=an(_[o],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=q(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function hn(t,e){return e=e||[],t==null||typeof t=="boolean"||(G(t)?t.some(function(n){hn(n,e)}):e.push(t)),e}function Un(t,e,n,_){var o=t.key,i=t.type,c=n-1,u=n+1,a=e[n];if(a===null||a&&o==a.key&&i===a.type&&!(131072&a.__u))return n;if(_>(a!=null&&!(131072&a.__u)?1:0))for(;c>=0||u<e.length;){if(c>=0){if((a=e[c])&&!(131072&a.__u)&&o==a.key&&i===a.type)return c;c--}if(u<e.length){if((a=e[u])&&!(131072&a.__u)&&o==a.key&&i===a.type)return u;u++}}return-1}function je(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||qn.test(e)?n:n+"px"}function I(t,e,n,_,o){var i;t:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof _=="string"&&(t.style.cssText=_=""),_)for(e in _)n&&e in n||je(t.style,e,"");if(n)for(e in n)_&&n[e]===_[e]||je(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?_?n.u=_.u:(n.u=Zt,t.addEventListener(e,i?Gt:Kt,i)):t.removeEventListener(e,i?Gt:Kt,i);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function Ie(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=Zt++;else if(e.t<n.u)return;return n(m.event?m.event(e):e)}}}function te(t,e,n,_,o,i,c,u,a,l){var h,r,f,s,b,k,g,p,v,C,x,P,E,L,H,D,w=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(a=!!(32&n.__u),i=[u=e.__e=n.__e]),(h=m.__b)&&h(e);t:if(typeof w=="function")try{if(p=e.props,v="prototype"in w&&w.prototype.render,C=(h=w.contextType)&&_[h.__c],x=h?C?C.props.value:h.__:_,n.__c?g=(r=e.__c=n.__c).__=r.__E:(v?e.__c=r=new w(p,x):(e.__c=r=new M(p,x),r.constructor=w,r.render=Ln),C&&C.sub(r),r.props=p,r.state||(r.state={}),r.context=x,r.__n=_,f=r.__d=!0,r.__h=[],r._sb=[]),v&&r.__s==null&&(r.__s=r.state),v&&w.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=$({},r.__s)),$(r.__s,w.getDerivedStateFromProps(p,r.__s))),s=r.props,b=r.state,r.__v=e,f)v&&w.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),v&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(v&&w.getDerivedStateFromProps==null&&p!==s&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(p,x),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(p,r.__s,x)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(r.props=p,r.state=r.__s,r.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(T){T&&(T.__=e)}),P=0;P<r._sb.length;P++)r.__h.push(r._sb[P]);r._sb=[],r.__h.length&&c.push(r);break t}r.componentWillUpdate!=null&&r.componentWillUpdate(p,r.__s,x),v&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(s,b,k)})}if(r.context=x,r.props=p,r.__P=t,r.__e=!1,E=m.__r,L=0,v){for(r.state=r.__s,r.__d=!1,E&&E(e),h=r.render(r.props,r.state,r.context),H=0;H<r._sb.length;H++)r.__h.push(r._sb[H]);r._sb=[]}else do r.__d=!1,E&&E(e),h=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++L<25);r.state=r.__s,r.getChildContext!=null&&(_=$($({},_),r.getChildContext())),v&&!f&&r.getSnapshotBeforeUpdate!=null&&(k=r.getSnapshotBeforeUpdate(s,b)),fn(t,G(D=h!=null&&h.type===j&&h.key==null?h.props.children:h)?D:[D],e,n,_,o,i,c,u,a,l),r.base=e.__e,e.__u&=-161,r.__h.length&&c.push(r),g&&(r.__E=r.__=null)}catch(T){if(e.__v=null,a||i!=null){for(e.__u|=a?160:32;u&&u.nodeType===8&&u.nextSibling;)u=u.nextSibling;i[i.indexOf(u)]=null,e.__e=u}else e.__e=n.__e,e.__k=n.__k;m.__e(T,e,n)}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Fn(n.__e,e,n,_,o,i,c,a,l);(h=m.diffed)&&h(e)}function pn(t,e,n){e.__d=void 0;for(var _=0;_<n.length;_++)ee(n[_],n[++_],n[++_]);m.__c&&m.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){m.__e(i,o.__v)}})}function Fn(t,e,n,_,o,i,c,u,a){var l,h,r,f,s,b,k,g=n.props,p=e.props,v=e.type;if(v==="svg"?o="http://www.w3.org/2000/svg":v==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(l=0;l<i.length;l++)if((s=i[l])&&"setAttribute"in s==!!v&&(v?s.localName===v:s.nodeType===3)){t=s,i[l]=null;break}}if(t==null){if(v===null)return document.createTextNode(p);t=document.createElementNS(o,v,p.is&&p),i=null,u=!1}if(v===null)g===p||u&&t.data===p||(t.data=p);else{if(i=i&&O.call(t.childNodes),g=n.props||W,!u&&i!=null)for(g={},l=0;l<t.attributes.length;l++)g[(s=t.attributes[l]).name]=s.value;for(l in g)if(s=g[l],l!="children"){if(l=="dangerouslySetInnerHTML")r=s;else if(l!=="key"&&!(l in p)){if(l=="value"&&"defaultValue"in p||l=="checked"&&"defaultChecked"in p)continue;I(t,l,null,s,o)}}for(l in p)s=p[l],l=="children"?f=s:l=="dangerouslySetInnerHTML"?h=s:l=="value"?b=s:l=="checked"?k=s:l==="key"||u&&typeof s!="function"||g[l]===s||I(t,l,s,g[l],o);if(h)u||r&&(h.__html===r.__html||h.__html===t.innerHTML)||(t.innerHTML=h.__html),e.__k=[];else if(r&&(t.innerHTML=""),fn(t,G(f)?f:[f],e,n,_,v==="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,c,i?i[0]:n.__k&&q(n,0),u,a),i!=null)for(l=i.length;l--;)i[l]!=null&&un(i[l]);u||(l="value",b!==void 0&&(b!==t[l]||v==="progress"&&!b||v==="option"&&b!==g[l])&&I(t,l,b,g[l],o),l="checked",k!==void 0&&k!==t[l]&&I(t,l,k,g[l],o))}return t}function ee(t,e,n){try{if(typeof t=="function"){var _=typeof t.__u=="function";_&&t.__u(),_&&e==null||(t.__u=t(e))}else t.current=e}catch(o){m.__e(o,n)}}function Xt(t,e,n){var _,o;if(m.unmount&&m.unmount(t),(_=t.ref)&&(_.current&&_.current!==t.__e||ee(_,null,e)),(_=t.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(i){m.__e(i,e)}_.base=_.__P=null}if(_=t.__k)for(o=0;o<_.length;o++)_[o]&&Xt(_[o],e,n||typeof t.type!="function");n||t.__e==null||un(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function Ln(t,e,n){return this.constructor(t,n)}function dn(t,e,n){var _,o,i,c;m.__&&m.__(t,e),o=(_=typeof n=="function")?null:n&&n.__k||e.__k,i=[],c=[],te(e,t=(!_&&n||e).__k=Jt(j,null,[t]),o||W,W,e.namespaceURI,!_&&n?[n]:o?null:e.firstChild?O.call(e.childNodes):null,i,!_&&n?n:o?o.__e:e.firstChild,_,c),pn(i,t,c)}function vn(t,e){dn(t,e,vn)}function An(t,e,n){var _,o,i,c,u=$({},t.props);for(i in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),e)i=="key"?_=e[i]:i=="ref"?o=e[i]:u[i]=e[i]===void 0&&c!==void 0?c[i]:e[i];return arguments.length>2&&(u.children=arguments.length>3?O.call(arguments,2):n),A(t.type,u,_||t.key,o||t.ref,null)}function Mn(t,e){var n={__c:e="__cC"+sn++,__:t,Consumer:function(_,o){return _.children(o)},Provider:function(_){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&o.some(function(u){u.__e=!0,Qt(u)})},this.sub=function(c){o.push(c);var u=c.componentWillUnmount;c.componentWillUnmount=function(){o&&o.splice(o.indexOf(c),1),u&&u.call(c)}}),_.children}};return n.Provider.__=n.Consumer.contextType=n}O=cn.slice,m={__e:function(t,e,n,_){for(var o,i,c;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,_||{}),c=o.__d),c)return o.__E=o}catch(u){t=u}throw t}},_n=0,on=function(t){return t!=null&&t.constructor==null},M.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof t=="function"&&(t=t($({},n),this.props)),t&&$(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Qt(this))},M.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Qt(this))},M.prototype.render=j,B=[],rn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Vt=function(t,e){return t.__v.__b-e.__v.__b},K.__r=0,Zt=0,Kt=Ie(!1),Gt=Ie(!0),sn=0;const Wn=Object.freeze(Object.defineProperty({__proto__:null,Component:M,Fragment:j,cloneElement:An,createContext:Mn,createElement:Jt,createRef:Nn,h:Jt,hydrate:vn,get isValidElement(){return on},get options(){return m},render:dn,toChildArray:hn},Symbol.toStringTag,{value:"Module"})),On=S.getAugmentedNamespace(Wn);var z,d,Rt,Re,U=0,mn=[],y=m,Ve=y.__b,Ke=y.__r,Ge=y.diffed,Je=y.__c,Qe=y.unmount,Xe=y.__;function N(t,e){y.__h&&y.__h(d,t,U||e),U=0;var n=d.__H||(d.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function yn(t){return U=1,gn(kn,t)}function gn(t,e,n){var _=N(z++,2);if(_.t=t,!_.__c&&(_.__=[n?n(e):kn(void 0,e),function(u){var a=_.__N?_.__N[0]:_.__[0],l=_.t(a,u);a!==l&&(_.__N=[l,_.__[1]],_.__c.setState({}))}],_.__c=d,!d.u)){var o=function(u,a,l){if(!_.__c.__H)return!0;var h=_.__c.__H.__.filter(function(f){return!!f.__c});if(h.every(function(f){return!f.__N}))return!i||i.call(this,u,a,l);var r=!1;return h.forEach(function(f){if(f.__N){var s=f.__[0];f.__=f.__N,f.__N=void 0,s!==f.__[0]&&(r=!0)}}),!(!r&&_.__c.props===u)&&(!i||i.call(this,u,a,l))};d.u=!0;var i=d.shouldComponentUpdate,c=d.componentWillUpdate;d.componentWillUpdate=function(u,a,l){if(this.__e){var h=i;i=void 0,o(u,a,l),i=h}c&&c.call(this,u,a,l)},d.shouldComponentUpdate=o}return _.__N||_.__}function jn(t,e){var n=N(z++,3);!y.__s&&_e(n.__H,e)&&(n.__=t,n.i=e,d.__H.__h.push(n))}function bn(t,e){var n=N(z++,4);!y.__s&&_e(n.__H,e)&&(n.__=t,n.i=e,d.__h.push(n))}function In(t){return U=5,ne(function(){return{current:t}},[])}function Rn(t,e,n){U=6,bn(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function ne(t,e){var n=N(z++,7);return _e(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function Vn(t,e){return U=8,ne(function(){return t},e)}function Kn(t){var e=d.context[t.__c],n=N(z++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(d)),e.props.value):t.__}function Gn(t,e){y.useDebugValue&&y.useDebugValue(e?e(t):t)}function Jn(t){var e=N(z++,10),n=yn();return e.__=t,d.componentDidCatch||(d.componentDidCatch=function(_,o){e.__&&e.__(_,o),n[1](_)}),[n[0],function(){n[1](void 0)}]}function Qn(){var t=N(z++,11);if(!t.__){for(var e=d.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function Xn(){for(var t;t=mn.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(R),t.__H.__h.forEach(Yt),t.__H.__h=[]}catch(e){t.__H.__h=[],y.__e(e,t.__v)}}y.__b=function(t){d=null,Ve&&Ve(t)},y.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Xe&&Xe(t,e)},y.__r=function(t){Ke&&Ke(t),z=0;var e=(d=t.__c).__H;e&&(Rt===d?(e.__h=[],d.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(e.__h.forEach(R),e.__h.forEach(Yt),e.__h=[],z=0)),Rt=d},y.diffed=function(t){Ge&&Ge(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(mn.push(e)!==1&&Re===y.requestAnimationFrame||((Re=y.requestAnimationFrame)||Yn)(Xn)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),Rt=d=null},y.__c=function(t,e){e.some(function(n){try{n.__h.forEach(R),n.__h=n.__h.filter(function(_){return!_.__||Yt(_)})}catch(_){e.some(function(o){o.__h&&(o.__h=[])}),e=[],y.__e(_,n.__v)}}),Je&&Je(t,e)},y.unmount=function(t){Qe&&Qe(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{R(_)}catch(o){e=o}}),n.__H=void 0,e&&y.__e(e,n.__v))};var Ye=typeof requestAnimationFrame=="function";function Yn(t){var e,n=function(){clearTimeout(_),Ye&&cancelAnimationFrame(e),setTimeout(t)},_=setTimeout(n,100);Ye&&(e=requestAnimationFrame(n))}function R(t){var e=d,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),d=e}function Yt(t){var e=d;t.__c=t.__(),d=e}function _e(t,e){return!t||t.length!==e.length||e.some(function(n,_){return n!==t[_]})}function kn(t,e){return typeof e=="function"?e(t):e}const Zn=Object.freeze(Object.defineProperty({__proto__:null,useCallback:Vn,useContext:Kn,useDebugValue:Gn,useEffect:jn,useErrorBoundary:Jn,useId:Qn,useImperativeHandle:Rn,useLayoutEffect:bn,useMemo:ne,useReducer:gn,useRef:In,useState:yn},Symbol.toStringTag,{value:"Module"})),t_=S.getAugmentedNamespace(Zn);exports.js=Hn;exports.require$$0=Bn;exports.require$$1=On;exports.require$$2=t_;
