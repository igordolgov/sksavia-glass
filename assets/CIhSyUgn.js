import{h as W,w as U,j,p as G,f as D,g as J,i as P,k as F,l as Q,m as _,n as H,q as X,s as A,v as R,o as S,c as x,x as M,u as f,y as Y,z as Z,A as K,B as ee,d as te,C as re,a as m,t as b,e as k,D as ie,b as se,F as E,r as ne,E as oe,G as ae,H as ce,_ as le}from"./B84bMAOM.js";import{u as de}from"./DUK2SC-T.js";async function ue(e,t){return await fe(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function fe(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const s={width:i.width,height:i.height,ratio:i.width/i.height};t(s)},i.onerror=s=>r(s),i.src=e})}function O(e){return t=>t?e[t]||t:e.missingValue}function ge({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(n,a)=>`${n}=${a}`),t&&typeof t!="function"&&(t=O(t));const s=i||{};return Object.keys(s).forEach(n=>{typeof s[n]!="function"&&(s[n]=O(s[n]))}),(n={})=>Object.entries(n).filter(([c,d])=>typeof d<"u").map(([c,d])=>{const o=s[c];return typeof o=="function"&&(d=o(n[c])),c=typeof t=="function"?t(c):c,e(c,d)}).join(r)}function w(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function me(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=Number.parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function he(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function pe(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function ve(e){const t={options:e},r=(s,n={})=>T(t,s,n),i=(s,n={},a={})=>r(s,{...a,modifiers:D(n,a.modifiers||{})}).url;for(const s in e.presets)i[s]=(n,a,c)=>i(n,a,{...e.presets[s],...c});return i.options=e,i.getImage=r,i.getMeta=(s,n)=>ye(t,s,n),i.getSizes=(s,n)=>be(t,s,n),t.$img=i,i}async function ye(e,t,r){const i=T(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await ue(e,i.url)}function T(e,t,r){var o,u;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:s}=_e(e,r.provider||e.options.provider),n=we(e,r.preset);if(t=W(t)?t:U(t),!i.supportsAlias){for(const g in e.options.alias)if(t.startsWith(g)){const v=e.options.alias[g];v&&(t=j(v,t.slice(g.length)))}}if(i.validateDomains&&W(t)){const g=G(t).host;if(!e.options.domains.find(v=>v===g))return{url:t}}const a=D(r,n,s);a.modifiers={...a.modifiers};const c=a.modifiers.format;(o=a.modifiers)!=null&&o.width&&(a.modifiers.width=w(a.modifiers.width)),(u=a.modifiers)!=null&&u.height&&(a.modifiers.height=w(a.modifiers.height));const d=i.getImage(t,a,e);return d.format=d.format||c||"",d}function _e(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function we(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function be(e,t,r){var I,N,$,l,h;const i=w((I=r.modifiers)==null?void 0:I.width),s=w((N=r.modifiers)==null?void 0:N.height),n=pe(r.sizes),a=($=r.densities)!=null&&$.trim()?me(r.densities.trim()):e.options.densities;he(a);const c=i&&s?s/i:0,d=[],o=[];if(Object.keys(n).length>=1){for(const p in n){const y=B(p,String(n[p]),s,c,e);if(y!==void 0){d.push({size:y.size,screenMaxWidth:y.screenMaxWidth,media:`(max-width: ${y.screenMaxWidth}px)`});for(const q of a)o.push({width:y._cWidth*q,src:L(e,t,r,y,q)})}}Se(d)}else for(const p of a){const y=Object.keys(n)[0];let q=y?B(y,String(n[y]),s,c,e):void 0;q===void 0&&(q={size:"",screenMaxWidth:0,_cWidth:(l=r.modifiers)==null?void 0:l.width,_cHeight:(h=r.modifiers)==null?void 0:h.height}),o.push({width:p,src:L(e,t,r,q,p)})}xe(o);const u=o[o.length-1],g=d.length?d.map(p=>`${p.media?p.media+" ":""}${p.size}`).join(", "):void 0,v=g?"w":"x",z=o.map(p=>`${p.src} ${p.width}${v}`).join(", ");return{sizes:g,srcset:z,src:u==null?void 0:u.src}}function B(e,t,r,i,s){const n=s.options.screens&&s.options.screens[e]||Number.parseInt(e),a=t.endsWith("vw");if(!a&&/^\d+$/.test(t)&&(t=t+"px"),!a&&!t.endsWith("px"))return;let c=Number.parseInt(t);if(!n||!c)return;a&&(c=Math.round(c/100*n));const d=i?Math.round(c*i):r;return{size:t,screenMaxWidth:n,_cWidth:c,_cHeight:d}}function L(e,t,r,i,s){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*s:void 0,height:i._cHeight?i._cHeight*s:void 0},r)}function Se(e){var r;e.sort((i,s)=>i.screenMaxWidth-s.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const s=e[i];s.media===t&&e.splice(i,1),t=s.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function xe(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const qe=ge({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>P(e)+"_"+P(t)}),ze=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const s=qe(t)||"_";return r||(r=j(i.options.nuxt.baseURL,"/_ipx")),{url:j(r,s,J(e))}},Ie=!0,$e=!0,Ne=Object.freeze(Object.defineProperty({__proto__:null,getImage:ze,supportsAlias:$e,validateDomains:Ie},Symbol.toStringTag,{value:"Module"})),V={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"],quality:80};V.providers={ipxStatic:{provider:Ne,defaults:{}}};const C=()=>{const e=Q(),t=F();return t.$img||t._img||(t._img=ve({...V,nuxt:{baseURL:e.app.baseURL},runtimeConfig:e}))};function ke(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const je={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],required:!1,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,required:!1,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],required:!1}},Ae=e=>{const t=_(()=>({provider:e.provider,preset:e.preset})),r=_(()=>({width:w(e.width),height:w(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=C(),s=_(()=>({...e.modifiers,width:w(e.width),height:w(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:s}},We={...je,placeholder:{type:[Boolean,String,Number,Array],required:!1},placeholderClass:{type:String,required:!1},custom:{type:Boolean,required:!1}},Pe=["src"],Me=H({__name:"NuxtImg",props:We,emits:["load","error"],setup(e,{emit:t}){const r=e,i=X(),s=t,n=!1,a=C(),c=Ae(r),d=A(!1),o=A(),u=_(()=>a.getSizes(r.src,{...c.options.value,sizes:r.sizes,densities:r.densities,modifiers:{...c.modifiers.value,width:w(r.width),height:w(r.height)}})),g=_(()=>{const l={...c.attrs.value,"data-nuxt-img":""};return(!r.placeholder||d.value)&&(l.sizes=u.value.sizes,l.srcset=u.value.srcset),l}),v=_(()=>{let l=r.placeholder;if(l===""&&(l=!0),!l||d.value)return!1;if(typeof l=="string")return l;const h=Array.isArray(l)?l:typeof l=="number"?[l,l]:[10,10];return a(r.src,{...c.modifiers.value,width:h[0],height:h[1],quality:h[2]||50,blur:h[3]||3},c.options.value)}),z=_(()=>r.sizes?u.value.src:a(r.src,c.modifiers.value,c.options.value)),I=_(()=>v.value?v.value:z.value),$=F().isHydrating;return R(()=>{if(v.value||r.custom){const l=new Image;z.value&&(l.src=z.value),r.sizes&&(l.sizes=u.value.sizes||"",l.srcset=u.value.srcset),l.onload=h=>{d.value=!0,s("load",h)},l.onerror=h=>{s("error",h)},ke("nuxt-image");return}o.value&&(o.value.complete&&$&&(o.value.getAttribute("data-error")?s("error",new Event("error")):s("load",new Event("load"))),o.value.onload=l=>{s("load",l)},o.value.onerror=l=>{s("error",l)})}),(l,h)=>l.custom?Y(l.$slots,"default",Z(M({key:1},{...f(n)?{onerror:"this.setAttribute('data-error', 1)"}:{},imgAttrs:{...g.value,...f(i)},isLoaded:d.value,src:I.value}))):(S(),x("img",M({key:0,ref_key:"imgEl",ref:o,class:r.placeholder&&!d.value?r.placeholderClass:void 0},{...f(n)?{onerror:"this.setAttribute('data-error', 1)"}:{},...g.value,...f(i)},{src:I.value}),null,16,Pe))}});function Ee(e,t){const r=_(()=>{var o;return((o=e==null?void 0:e.value)==null?void 0:o.swiper)??null}),i=(...o)=>{r.value&&(o.length===0?r.value.slideNext():r.value.slideNext(...o))},s=(...o)=>{r.value&&r.value.slideTo(...o)},n=(...o)=>{r.value&&(o.length===0?r.value.slideReset():r.value.slideReset(...o))},a=(...o)=>{r.value&&(o.length===0?r.value.slidePrev():r.value.slidePrev(...o))},c=()=>{var u;!(((u=e.value)==null?void 0:u.nodeName)==="SWIPER-CONTAINER")&&r.value!==null&&!t&&console.warn('"useSwiper()" requires a ref and is tied to the %c`<swiper-container ref="swiperContainerRef"></swiper-container>` element.',"font-weight: bold;")},d=()=>{var o;e.value&&t!==void 0&&(Object.assign(e.value,t),(o=e.value)==null||o.initialize())};return K(r,()=>c()),R(()=>ee(()=>d())),{instance:r,next:i,prev:a,to:s,reset:n}}const Oe={class:"breadcrumbs px-3 py-1"},Be={class:"font-semibold"},Le={class:"block sm_grid grid-cols-12 my-0 sm_pr-4"},De={class:"product-picture sm_col-span-9 lg_col-span-10"},Fe={class:"swiper-zoom-container swiper-slide"},He={class:"description sm_col-span-3 lg_col-span-2 ml-4 mt-2"},Re={class:"mr-2"},Te={key:0},Ve={key:1,class:"text-red-500 font-semibold"},Ce={class:"mb-4"},Ue=H({__name:"[slug]",setup(e){const t=te(),r=de(),i=re(),s=A(null);Ee(s,{effect:"slide",navigation:!0,keyboard:!0,mousewheel:!0,zoom:!0,pagination:{type:"bullets",clickable:!0},loop:!0});const n=_(()=>t.products.find(a=>a.slug===i.params.slug));return n.category,(a,c)=>{const d=ae,o=Me,u=ce;return S(),x(E,null,[m("head",null,[m("title",null,"SKSAVIA - "+b(f(n).name),1)]),m("div",Oe,[k(d,{class:"breadcrumb-item",to:"javascript:history.back()"},{default:ie(()=>[se(b(f(n).category)+" / ",1)]),_:1}),m("span",Be,b(f(n).name),1)]),m("div",Le,[m("div",De,[m("swiper-container",{class:"my-0 rounded-xl",ref_key:"containerRef",ref:s,init:!1},[(S(!0),x(E,null,ne(f(n).images,g=>(S(),x("swiper-slide",{class:"flex place-self-center justify-center",key:g.id},[m("div",Fe,[k(o,{class:"select-none h-full object-contain inline-block",fit:"contain",src:g.src,loading:"lazy",format:"webp",placeholder:""},null,8,["src"])]),c[1]||(c[1]=m("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent to-neutral-700 opacity-50 h-auto from-80%"},null,-1)),f(n).quantity>0?(S(),x("button",{key:0,class:"absolute bottom-3 right-3 bg-red-600 hover_bg-green-800 border-none px-3 pt-3 pb-1 text-white rounded-lg",onClickOnce:c[0]||(c[0]=v=>f(r).addItem(f(n)))},[k(u,{class:"w-7 h-7",name:"material-symbols:shopping-cart-outline-rounded"})],32)):oe("",!0)]))),128))],512)]),m("div",He,[m("p",Re,b(f(n).description),1),f(n).quantity>0?(S(),x("p",Te,"Кол-во: "+b(f(n).quantity)+" шт.",1)):(S(),x("p",Ve,"НЕТ В НАЛИЧИИ!")),m("p",null,b(f(n).condition),1),m("p",Ce,b(Intl.NumberFormat("ru").format(f(n).price))+" ₽",1)])])],64)}}}),Qe=le(Ue,[["__scopeId","data-v-f1e6f9d3"]]);export{Qe as default};
