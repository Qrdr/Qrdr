(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{IdzL:function(t,e,s){"use strict";s.r(e),s.d(e,"ion_reorder",function(){return i}),s.d(e,"ion_reorder_group",function(){return n});var r=s("mLBW"),o=(s("TJLY"),s("itPc"));class i{constructor(t){Object(r.m)(this,t)}onClick(t){t.preventDefault(),t.stopImmediatePropagation()}hostData(){return{class:{[Object(r.e)(this)]:!0}}}__stencil_render(){return Object(r.i)("slot",null,Object(r.i)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"}))}render(){return Object(r.i)(r.a,this.hostData(),this.__stencil_render())}static get style(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:34px;opacity:.4}"}}class n{constructor(t){Object(r.m)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(r.d)(this,"ionItemReorder",7)}disabledChanged(){this.gesture&&this.gesture.setDisabled(this.disabled)}async componentDidLoad(){const t=this.el.closest("ion-content");t&&(await t.componentOnReady(),this.scrollEl=await t.getScrollElement()),this.gesture=(await s.e(0).then(s.bind(null,"qwwZ"))).createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:t=>this.canStart(t),onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:()=>this.onEnd()}),this.disabledChanged()}componentDidUnload(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(t){return Promise.resolve(this.completeSync(t))}canStart(t){if(this.selectedItemEl||0!==this.state)return!1;const e=t.event.target.closest("ion-reorder");if(!e)return!1;const s=a(e,this.el);return!!s&&(t.data=s,!0)}onStart(t){t.event.preventDefault();const e=this.selectedItemEl=t.data,s=this.cachedHeights;s.length=0;const r=this.el,i=r.children;if(!i||0===i.length)return;let n=0;for(let o=0;o<i.length;o++){const t=i[o];s.push(n+=t.offsetHeight),t.$ionIndex=o}const a=r.getBoundingClientRect();if(this.containerTop=a.top,this.containerBottom=a.bottom,this.scrollEl){const t=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=t.top+c,this.scrollElBottom=t.bottom-c}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=l(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(d),Object(o.a)()}onMove(t){const e=this.selectedItemEl;if(!e)return;const s=this.autoscroll(t.currentY),r=this.containerTop-s,i=Math.max(r,Math.min(t.currentY,this.containerBottom-s)),n=s+i-t.startY,a=this.itemIndexForTop(i-r);if(a!==this.lastToIndex){const t=l(e);this.lastToIndex=a,Object(o.b)(),this.reorderMove(t,a)}e.style.transform=`translateY(${n}px)`}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t)return void(this.state=0);const e=this.lastToIndex,s=l(t);e===s?(t.style.transition="transform 200ms ease-in-out",setTimeout(()=>this.completeSync(),200)):this.ionItemReorder.emit({from:s,to:e,complete:this.completeSync.bind(this)}),Object(o.c)()}completeSync(t){const e=this.selectedItemEl;if(e&&2===this.state){const s=this.el.children,r=s.length,o=this.lastToIndex,i=l(e);t&&!0!==t||this.el.insertBefore(e,i<o?s[o+1]:s[o]),Array.isArray(t)&&(t=m(t,i,o));for(let t=0;t<r;t++)s[t].style.transform="";e.style.transition="",e.classList.remove(d),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const e=this.cachedHeights;let s=0;for(s=0;s<e.length&&!(e[s]>t);s++);return s}reorderMove(t,e){const s=this.selectedItemHeight,r=this.el.children;for(let o=0;o<r.length;o++){let i="";o>t&&o<=e?i=`translateY(${-s}px)`:o<t&&o>=e&&(i=`translateY(${s}px)`),r[o].style.transform=i}}autoscroll(t){if(!this.scrollEl)return 0;let e=0;return t<this.scrollElTop?e=-h:t>this.scrollElBottom&&(e=h),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial}hostData(){return{class:{[Object(r.e)(this)]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}}}get el(){return Object(r.f)(this)}static get watchers(){return{disabled:["disabledChanged"]}}render(){return Object(r.i)(r.a,this.hostData())}static get style(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"}}const l=t=>t.$ionIndex,a=(t,e)=>{let s;for(;t;){if((s=t.parentElement)===e)return t;t=s}},c=60,h=10,d="reorder-selected",m=(t,e,s)=>{const r=t[e];return t.splice(e,1),t.splice(s,0,r),t.slice()}}}]);