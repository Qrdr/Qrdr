(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{TbC0:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),i=function(){return function(){}}(),e=t("oBZk"),o=t("ZZ/e"),c=t("Ip0R"),r=t("mrSG"),s=t("rqSi"),a=t("c14U"),b=function(){function n(n,l){this.cart=n,this.modalController=l,this.cart$=this.cart.cart$}return n.prototype.getBadgeNumber=function(){return this.cart$.value.length<100?this.cart$.value.length:"\u2217"},n.prototype.showCart=function(){return r.b(this,void 0,void 0,function(){return r.e(this,function(n){switch(n.label){case 0:return[4,this.modalController.create({component:s.a})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})},n}(),p=u.rb({encapsulation:0,styles:[[".cart-fab[_ngcontent-%COMP%]{position:absolute;-webkit-margin-after:25px;margin-block-end:25px}.cart-button[_ngcontent-%COMP%]{width:75px;height:75px}.cart-icon[_ngcontent-%COMP%]{width:40px;height:40px;position:absolute;overflow:visible}.cart-badge[_ngcontent-%COMP%]{margin:auto;border-radius:50%;position:relative;bottom:14px;left:16px;padding:3px}.badge-number[_ngcontent-%COMP%]{display:-webkit-box;display:flex;height:15px;width:15px;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}"]],data:{}});function m(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,3,"ion-badge",[["class","cart-badge"],["color","danger"]],null,null,null,e.u,e.b)),u.sb(1,49152,null,0,o.h,[u.h,u.k,u.z],{color:[0,"color"]},null),(n()(),u.tb(2,0,null,0,1,"div",[["class","badge-number"]],null,null,null,null,null)),(n()(),u.Kb(3,null,["",""]))],function(n,l){n(l,1,0,"danger")},function(n,l){n(l,3,0,l.component.getBadgeNumber())})}function g(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,7,"ion-fab",[["class","cart-fab"],["horizontal","center"],["vertical","bottom"]],null,null,null,e.A,e.g)),u.sb(1,49152,null,0,o.u,[u.h,u.k,u.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),u.tb(2,0,null,0,5,"ion-fab-button",[["class","cart-button"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.showCart()&&u),u},e.z,e.h)),u.sb(3,49152,null,0,o.v,[u.h,u.k,u.z],null,null),(n()(),u.tb(4,0,null,0,1,"ion-icon",[["class","cart-icon"],["name","cart"]],null,null,null,e.E,e.l)),u.sb(5,49152,null,0,o.A,[u.h,u.k,u.z],{name:[0,"name"]},null),(n()(),u.ib(16777216,null,0,1,null,m)),u.sb(7,16384,null,0,c.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,"center","bottom"),n(l,5,0,"cart"),n(l,7,0,t.cart$.value.length>0)},null)}function f(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,1,"app-cart-fab",[],null,null,null,g,p)),u.sb(1,49152,null,0,b,[a.a,o.Db],null,null)],null,null)}var d=u.pb("app-cart-fab",b,f,{},{},[]),h=t("pMnS"),k=function(){function n(n){this.cart=n}return n.prototype.ngOnInit=function(){},n}(),x=u.rb({encapsulation:0,styles:[[".menu-item-loop[_ngcontent-%COMP%]   .menu-item-wrapper[_ngcontent-%COMP%]{border-top:1px solid var(--ion-color-medium);--inner-padding-end:0px}.menu-item-loop[_ngcontent-%COMP%]:first-child   .menu-item-wrapper[_ngcontent-%COMP%]{border-top:0}.menu-item[_ngcontent-%COMP%]{height:100%;width:100%;padding-left:15px;padding-right:15px;margin:0}.item-grid[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px}.item-content-column[_ngcontent-%COMP%]{padding-right:10px}.name-label[_ngcontent-%COMP%]{font-weight:600;--color:var(--ion-color-primary)}.price-label[_ngcontent-%COMP%]{text-align:right}.description-row[_ngcontent-%COMP%]{-webkit-padding-before:10px;padding-block-start:10px}.description-label[_ngcontent-%COMP%]{white-space:normal}.add-button-column[_ngcontent-%COMP%]{text-align:right}.add-button[_ngcontent-%COMP%]{width:25px;height:25px;--border-radius:50%;--padding-start:0px;--padding-end:0px}.add-icon[_ngcontent-%COMP%]{--width:100%;--height:100%}"]],data:{}});function C(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,4,"ion-row",[["class","description-row"]],null,null,null,e.J,e.q)),u.sb(1,49152,null,0,o.gb,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,2,"ion-label",[["class","description-label"]],null,null,null,e.G,e.n)),u.sb(3,49152,null,0,o.L,[u.h,u.k,u.z],null,null),(n()(),u.Kb(4,0,["",""]))],null,function(n,l){n(l,4,0,l.parent.parent.context.$implicit.description)})}function M(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,31,"div",[],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,30,"ion-item",[["class","ion-activatable"]],null,null,null,e.F,e.m)),u.sb(2,49152,null,0,o.F,[u.h,u.k,u.z],null,null),(n()(),u.tb(3,0,null,0,1,"ion-ripple-effect",[],null,null,null,e.I,e.p)),u.sb(4,49152,null,0,o.eb,[u.h,u.k,u.z],null,null),(n()(),u.tb(5,0,null,0,26,"div",[["class","menu-item"]],null,null,null,null,null)),(n()(),u.tb(6,0,null,null,25,"ion-grid",[["class","item-grid menu-item-wrapper"]],null,null,null,e.C,e.j)),u.sb(7,49152,null,0,o.y,[u.h,u.k,u.z],null,null),(n()(),u.tb(8,0,null,0,23,"ion-row",[["nowrap",""]],null,null,null,e.J,e.q)),u.sb(9,49152,null,0,o.gb,[u.h,u.k,u.z],null,null),(n()(),u.tb(10,0,null,0,15,"ion-col",[["align-items-center",""],["class","item-content-column"],["size","11"]],null,null,null,e.x,e.e)),u.sb(11,49152,null,0,o.r,[u.h,u.k,u.z],{size:[0,"size"]},null),(n()(),u.tb(12,0,null,0,11,"ion-row",[["class","item-content-row"]],null,null,null,e.J,e.q)),u.sb(13,49152,null,0,o.gb,[u.h,u.k,u.z],null,null),(n()(),u.tb(14,0,null,0,4,"ion-col",[["size","9"]],null,null,null,e.x,e.e)),u.sb(15,49152,null,0,o.r,[u.h,u.k,u.z],{size:[0,"size"]},null),(n()(),u.tb(16,0,null,0,2,"ion-label",[["class","name-label"]],null,null,null,e.G,e.n)),u.sb(17,49152,null,0,o.L,[u.h,u.k,u.z],null,null),(n()(),u.Kb(18,0,["",""])),(n()(),u.tb(19,0,null,0,4,"ion-col",[["class","price-column"],["size","3"]],null,null,null,e.x,e.e)),u.sb(20,49152,null,0,o.r,[u.h,u.k,u.z],{size:[0,"size"]},null),(n()(),u.tb(21,0,null,0,2,"ion-label",[["class","price-label"]],null,null,null,e.G,e.n)),u.sb(22,49152,null,0,o.L,[u.h,u.k,u.z],null,null),(n()(),u.Kb(23,0,["$",""])),(n()(),u.ib(16777216,null,0,1,null,C)),u.sb(25,16384,null,0,c.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.tb(26,0,null,0,5,"ion-col",[["class","add-button-column"],["size","1"]],null,null,null,e.x,e.e)),u.sb(27,49152,null,0,o.r,[u.h,u.k,u.z],{size:[0,"size"]},null),(n()(),u.tb(28,0,null,0,3,"ion-button",[["class","add-button"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.cart.addCart(n.parent.context.$implicit)&&u),u},e.v,e.c)),u.sb(29,49152,null,0,o.i,[u.h,u.k,u.z],null,null),(n()(),u.tb(30,0,null,0,1,"ion-icon",[["class","add-icon"],["name","add"]],null,null,null,e.E,e.l)),u.sb(31,49152,null,0,o.A,[u.h,u.k,u.z],{name:[0,"name"]},null)],function(n,l){n(l,11,0,"11"),n(l,15,0,"9"),n(l,20,0,"3"),n(l,25,0,l.parent.context.$implicit.description),n(l,27,0,"1"),n(l,31,0,"add")},function(n,l){n(l,18,0,l.parent.context.$implicit.name),n(l,23,0,l.parent.context.$implicit.price)})}function O(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,2,"div",[["class","menu-item-loop"]],null,null,null,null,null)),(n()(),u.ib(16777216,null,null,1,null,M)),u.sb(2,16384,null,0,c.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,"item"===l.context.$implicit.type)},null)}function v(n){return u.Mb(0,[(n()(),u.ib(16777216,null,null,1,null,O)),u.sb(1,278528,null,0,c.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,1,0,l.component.menuItems.children)},null)}var w=function(){function n(n){var l=this;this.http=n,this.http.get("assets/test.json").subscribe(function(n){l.menu=n.menu})}return n.prototype.ngOnInit=function(){},n.prototype.toggleSection=function(n){this.menu[n].open=!this.menu[n].open},n.prototype.toggleMenuItem=function(n,l){this.menu[n].children[l].open=!this.menu[n].children[l].open},n}(),z=t("t/Na"),P=u.rb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-item[_ngcontent-%COMP%]{border-top:1px solid var(--ion-color-medium);--inner-padding-end:0px;--padding-start:5px}.list-ios[_ngcontent-%COMP%], .list-md[_ngcontent-%COMP%]{padding:0;margin:0}.section-list[_ngcontent-%COMP%]{margin:0;--ion-item-background:#ffffff}.section-list[_ngcontent-%COMP%]   .section-active[_ngcontent-%COMP%], .section-list[_ngcontent-%COMP%]   .section-inactive[_ngcontent-%COMP%]{--min-height:58px;margin:0}.section-active[_ngcontent-%COMP%]{--ion-item-background:var(--ion-color-primary);--ion-item-color:#ffffff;font-weight:600;border-bottom:1px solid var(--ion-color-medium)}.section-active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff}.section-inactive[_ngcontent-%COMP%]{--ion-item-background:#ffffff;--ion-item-color:#000000}.section-inactive[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000}.subsection-list[_ngcontent-%COMP%]{padding:0;margin:0}.subsection-list[_ngcontent-%COMP%]   .subsection-active[_ngcontent-%COMP%], .subsection-list[_ngcontent-%COMP%]   .subsection-inactive[_ngcontent-%COMP%]{margin:0}.subsection-active[_ngcontent-%COMP%]{--ion-item-background:var(--ion-color-primary-tint);--ion-item-color:#ffffff;font-weight:600;border-bottom:1px solid var(--ion-color-medium)}.subsection-active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff}.subsection-inactive[_ngcontent-%COMP%]{--ion-item-background:#ffffff;--ion-item-color:#000000}.subsection-inactive[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000}.menu-item-list[_ngcontent-%COMP%]{margin:0}.subsection-description[_ngcontent-%COMP%]{border-bottom:1px solid var(--ion-color-medium)}"]],data:{}});function _(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,1,"ion-icon",[["name","arrow-forward"],["slot","start"]],null,null,null,e.E,e.l)),u.sb(1,49152,null,0,o.A,[u.h,u.k,u.z],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"arrow-forward")},null)}function I(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,1,"ion-icon",[["name","arrow-down"],["slot","start"]],null,null,null,e.E,e.l)),u.sb(1,49152,null,0,o.A,[u.h,u.k,u.z],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"arrow-down")},null)}function $(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,11,"ion-item",[["tappable",""]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.toggleSection(n.parent.context.index)&&u),u},e.F,e.m)),u.Hb(512,null,c.s,c.t,[u.s,u.t,u.k,u.D]),u.sb(2,278528,null,0,c.i,[c.s],{ngClass:[0,"ngClass"]},null),u.Gb(3,{"section-active":0,"section-inactive":1}),u.sb(4,49152,null,0,o.F,[u.h,u.k,u.z],null,null),(n()(),u.ib(16777216,null,0,1,null,_)),u.sb(6,16384,null,0,c.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.ib(16777216,null,0,1,null,I)),u.sb(8,16384,null,0,c.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.tb(9,0,null,0,2,"ion-label",[],null,null,null,e.G,e.n)),u.sb(10,49152,null,0,o.L,[u.h,u.k,u.z],null,null),(n()(),u.Kb(11,0,[" "," "]))],function(n,l){var t=n(l,3,0,l.parent.context.$implicit.open,!l.parent.context.$implicit.open);n(l,2,0,t),n(l,6,0,!l.parent.context.$implicit.open),n(l,8,0,l.parent.context.$implicit.open)},function(n,l){n(l,11,0,l.parent.context.$implicit.name)})}function y(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,2,"div",[["class","section-description"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,1,"p",[["style","color: var(--ion-color-medium)"],["text-center",""]],null,null,null,null,null)),(n()(),u.Kb(2,null,[" "," "]))],null,function(n,l){n(l,2,0,l.parent.parent.context.$implicit.description)})}function L(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,1,"ion-icon",[["name","add"],["slot","start"]],null,null,null,e.E,e.l)),u.sb(1,49152,null,0,o.A,[u.h,u.k,u.z],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"add")},null)}function S(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,1,"ion-icon",[["name","close"],["slot","start"]],null,null,null,e.E,e.l)),u.sb(1,49152,null,0,o.A,[u.h,u.k,u.z],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"close")},null)}function D(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,11,"ion-item",[["tappable",""]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.toggleMenuItem(n.parent.parent.parent.context.index,n.parent.context.index)&&u),u},e.F,e.m)),u.Hb(512,null,c.s,c.t,[u.s,u.t,u.k,u.D]),u.sb(2,278528,null,0,c.i,[c.s],{ngClass:[0,"ngClass"]},null),u.Gb(3,{"subsection-active":0,"subsection-inactive":1}),u.sb(4,49152,null,0,o.F,[u.h,u.k,u.z],null,null),(n()(),u.ib(16777216,null,0,1,null,L)),u.sb(6,16384,null,0,c.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.ib(16777216,null,0,1,null,S)),u.sb(8,16384,null,0,c.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.tb(9,0,null,0,2,"ion-label",[],null,null,null,e.G,e.n)),u.sb(10,49152,null,0,o.L,[u.h,u.k,u.z],null,null),(n()(),u.Kb(11,0,[" "," "]))],function(n,l){var t=n(l,3,0,l.parent.context.$implicit.open,!l.parent.context.$implicit.open);n(l,2,0,t),n(l,6,0,!l.parent.context.$implicit.open),n(l,8,0,l.parent.context.$implicit.open)},function(n,l){n(l,11,0,l.parent.context.$implicit.name)})}function A(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,2,"div",[["class","subsection-description"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,1,"p",[["style","color: var(--ion-color-medium)"],["text-center",""]],null,null,null,null,null)),(n()(),u.Kb(2,null,[" "," "]))],null,function(n,l){n(l,2,0,l.parent.parent.context.$implicit.description)})}function F(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,5,"ion-list",[["class","menu-item-list"],["lines","none"]],null,null,null,e.H,e.o)),u.sb(2,49152,null,0,o.M,[u.h,u.k,u.z],{lines:[0,"lines"]},null),(n()(),u.ib(16777216,null,0,1,null,A)),u.sb(4,16384,null,0,c.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.tb(5,0,null,0,1,"app-menu-items",[],null,null,null,v,x)),u.sb(6,114688,null,0,k,[a.a],{menuItems:[0,"menuItems"]},null)],function(n,l){n(l,2,0,"none"),n(l,4,0,l.parent.context.$implicit.description),n(l,6,0,l.parent.context.$implicit)},null)}function E(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.ib(16777216,null,null,1,null,D)),u.sb(2,16384,null,0,c.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.ib(16777216,null,null,1,null,F)),u.sb(4,16384,null,0,c.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,"subsection"===l.context.$implicit.type),n(l,4,0,"subsection"===l.context.$implicit.type&&l.context.$implicit.open)},null)}function G(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,11,"div",[],null,null,null,null,null)),(n()(),u.ib(16777216,null,null,1,null,y)),u.sb(2,16384,null,0,c.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.tb(3,0,null,null,8,"ion-list",[["class","subsection-list"],["lines","none"]],null,null,null,e.H,e.o)),u.sb(4,49152,null,0,o.M,[u.h,u.k,u.z],{lines:[0,"lines"]},null),(n()(),u.ib(16777216,null,0,1,null,E)),u.sb(6,278528,null,0,c.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.tb(7,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),u.tb(8,0,null,null,3,"ion-list",[["class","menu-item-list"],["lines","none"]],null,null,null,e.H,e.o)),u.sb(9,49152,null,0,o.M,[u.h,u.k,u.z],{lines:[0,"lines"]},null),(n()(),u.tb(10,0,null,0,1,"app-menu-items",[],null,null,null,v,x)),u.sb(11,114688,null,0,k,[a.a],{menuItems:[0,"menuItems"]},null)],function(n,l){n(l,2,0,l.parent.context.$implicit.description),n(l,4,0,"none"),n(l,6,0,l.parent.context.$implicit.children),n(l,9,0,"none"),n(l,11,0,l.parent.context.$implicit)},null)}function H(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,1,"p",[["text-center",""]],null,null,null,null,null)),(n()(),u.Kb(-1,null,[" Sorry, nothing is in here! "]))],null,null)}function K(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),u.ib(16777216,null,null,1,null,$)),u.sb(2,16384,null,0,c.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.ib(16777216,null,null,1,null,G)),u.sb(4,16384,null,0,c.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.ib(16777216,null,null,1,null,H)),u.sb(6,16384,null,0,c.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,"section"===l.context.$implicit.type),n(l,4,0,"section"===l.context.$implicit.type&&l.context.$implicit.open),n(l,6,0,0===l.context.$implicit.children.length&&l.context.$implicit.open)},null)}function j(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,3,"ion-list",[["class","section-list"],["lines","none"]],null,null,null,e.H,e.o)),u.sb(1,49152,null,0,o.M,[u.h,u.k,u.z],{lines:[0,"lines"]},null),(n()(),u.ib(16777216,null,0,1,null,K)),u.sb(3,278528,null,0,c.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,1,0,"none"),n(l,3,0,t.menu)},null)}var B=function(){function n(n,l,t,u){this.renderer=n,this.element=l,this.domCtrl=t,this.differs=u,this.isScrolling=!1,this.scrollingDown=!1,this.scrollingUp=!1,this.hidden=!1,this.triggerDistance=0,this.oldScrollTop=0,this.differ=this.differs.find({}).create()}return n.prototype.ngOnInit=function(){var n=this;this.fabToHide=this.element.nativeElement.getElementsByClassName(this.fabClass)[0],this.scrollArea.ionScrollEnd.subscribe(function(l){!1===l.detail.isScrolling?(n.scrollingDown=!1,n.scrollingUp=!1,n.isScrolling=!1):console.log("Error in isScrolling")}),this.scrollArea.ionScroll.subscribe(function(l){var t=l.detail.deltaY;t>n.triggerDistance?(n.scrollingDown=!0,n.scrollingUp=!1,n.isScrolling=!0):t<=0?(n.scrollingDown=!1,n.scrollingUp=!0,n.isScrolling=!0):console.log("other")})},n.prototype.ngDoCheck=function(){var n=this;this.scrollingDown&&this.isScrolling&&!this.scrollingUp&&!this.hidden?(this.hidden=!0,this.domCtrl.write(function(){n.renderer.setStyle(n.fabToHide,"webkitAnimation","fadeOut 100ms"),n.renderer.setStyle(n.fabToHide,"webkitAnimationFillMode","forwards")})):this.isScrolling&&!this.scrollingUp||this.scrollingDown||!this.hidden||(this.hidden=!1,setTimeout(function(){n.domCtrl.write(function(){n.renderer.setStyle(n.fabToHide,"webkitAnimation","bounceIn 350ms"),n.renderer.setStyle(n.fabToHide,"webkitAnimationFillMode","forwards")})},1e3))},n}(),T=function(){return function(){}}(),q=u.rb({encapsulation:0,styles:[[".home-content[_ngcontent-%COMP%]{--padding-bottom:150px}"]],data:{}});function U(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,6,"ion-header",[],null,null,null,e.D,e.k)),u.sb(1,49152,null,0,o.z,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,4,"ion-toolbar",[],null,null,null,e.L,e.s)),u.sb(3,49152,null,0,o.zb,[u.h,u.k,u.z],null,null),(n()(),u.tb(4,0,null,0,2,"ion-title",[],null,null,null,e.K,e.r)),u.sb(5,49152,null,0,o.xb,[u.h,u.k,u.z],null,null),(n()(),u.Kb(-1,0,[" Old Sport Bar and Grill "])),(n()(),u.tb(7,0,null,null,3,"ion-content",[["class","home-content"]],null,null,null,e.y,e.f)),u.sb(8,49152,[["scrollArea",4]],0,o.s,[u.h,u.k,u.z],{scrollEvents:[0,"scrollEvents"]},null),(n()(),u.tb(9,0,null,0,1,"app-menu-list",[],null,null,null,j,P)),u.sb(10,114688,null,0,w,[z.c],null,null),(n()(),u.tb(11,0,null,null,4,"ion-footer",[],null,null,null,e.B,e.i)),u.sb(12,49152,null,0,o.x,[u.h,u.k,u.z],null,null),(n()(),u.tb(13,0,null,0,2,"app-cart-fab",[["class","cart-fab"],["fabClass","cart-fab"]],null,null,null,g,p)),u.sb(14,344064,null,0,B,[u.D,u.k,o.c,u.t],{scrollArea:[0,"scrollArea"],fabClass:[1,"fabClass"]},null),u.sb(15,49152,null,0,b,[a.a,o.Db],null,null)],function(n,l){n(l,8,0,!0),n(l,10,0),n(l,14,0,u.Eb(l,8),"cart-fab")},null)}function J(n){return u.Mb(0,[(n()(),u.tb(0,0,null,null,1,"app-home",[],null,null,null,U,q)),u.sb(1,49152,null,0,T,[],null,null)],null,null)}var N=u.pb("app-home",T,J,{},{},[]),Z=t("gIcY"),Y=function(){return function(){}}(),R=t("ZYCi");t.d(l,"HomePageModuleNgFactory",function(){return Q});var Q=u.qb(i,[],function(n){return u.Bb([u.Cb(512,u.j,u.bb,[[8,[d,h.a,N]],[3,u.j],u.x]),u.Cb(4608,c.m,c.l,[u.u,[2,c.v]]),u.Cb(4608,o.a,o.a,[u.z,u.g]),u.Cb(4608,o.Db,o.Db,[o.a,u.j,u.q]),u.Cb(4608,o.Gb,o.Gb,[o.a,u.j,u.q]),u.Cb(4608,Z.c,Z.c,[]),u.Cb(1073742336,c.c,c.c,[]),u.Cb(1073742336,o.Bb,o.Bb,[]),u.Cb(1073742336,Y,Y,[]),u.Cb(1073742336,Z.b,Z.b,[]),u.Cb(1073742336,Z.a,Z.a,[]),u.Cb(1073742336,R.n,R.n,[[2,R.s],[2,R.m]]),u.Cb(1073742336,i,i,[]),u.Cb(1024,R.k,function(){return[[{path:"",component:T}]]},[])])})}}]);