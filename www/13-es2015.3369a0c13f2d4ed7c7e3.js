(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{TbC0:function(n,l,t){"use strict";t.r(l);var u=t("8Y7J");class i{}var e=t("oBZk"),o=t("ZZ/e"),r=t("SVse"),c=t("mrSG"),s=t("rqSi"),a=t("c14U");class b{constructor(n,l){this.cart=n,this.modalController=l,this.cart$=this.cart.cart$}getBadgeNumber(){return this.cart$.value.length<100?this.cart$.value.length:"\u2217"}showCart(){return c.b(this,void 0,void 0,function*(){const n=yield this.modalController.create({component:s.a});return yield n.present()})}}var p=u.pb({encapsulation:0,styles:[[".cart-fab[_ngcontent-%COMP%]{position:absolute;-webkit-margin-after:25px;margin-block-end:25px}.cart-button[_ngcontent-%COMP%]{width:75px;height:75px}.cart-icon[_ngcontent-%COMP%]{width:40px;height:40px;position:absolute;overflow:visible}.cart-badge[_ngcontent-%COMP%]{margin:auto;border-radius:50%;position:relative;bottom:14px;left:16px;padding:3px}.badge-number[_ngcontent-%COMP%]{display:-webkit-box;display:flex;height:15px;width:15px;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}"]],data:{}});function g(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,3,"ion-badge",[["class","cart-badge"],["color","danger"]],null,null,null,e.u,e.b)),u.qb(1,49152,null,0,o.h,[u.h,u.k,u.x],{color:[0,"color"]},null),(n()(),u.rb(2,0,null,0,1,"div",[["class","badge-number"]],null,null,null,null,null)),(n()(),u.Ib(3,null,["",""]))],function(n,l){n(l,1,0,"danger")},function(n,l){n(l,3,0,l.component.getBadgeNumber())})}function m(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,7,"ion-fab",[["class","cart-fab"],["horizontal","center"],["vertical","bottom"]],null,null,null,e.A,e.g)),u.qb(1,49152,null,0,o.u,[u.h,u.k,u.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),u.rb(2,0,null,0,5,"ion-fab-button",[["class","cart-button"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.showCart()&&u),u},e.z,e.h)),u.qb(3,49152,null,0,o.v,[u.h,u.k,u.x],null,null),(n()(),u.rb(4,0,null,0,1,"ion-icon",[["class","cart-icon"],["name","cart"]],null,null,null,e.E,e.l)),u.qb(5,49152,null,0,o.A,[u.h,u.k,u.x],{name:[0,"name"]},null),(n()(),u.gb(16777216,null,0,1,null,g)),u.qb(7,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,"center","bottom"),n(l,5,0,"cart"),n(l,7,0,t.cart$.value.length>0)},null)}function d(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"app-cart-fab",[],null,null,null,m,p)),u.qb(1,49152,null,0,b,[a.a,o.Db],null,null)],null,null)}var f=u.nb("app-cart-fab",b,d,{},{},[]),h=t("pMnS");class x{constructor(n){this.cart=n}ngOnInit(){}}var k=u.pb({encapsulation:0,styles:[[".menu-item-loop[_ngcontent-%COMP%]   .menu-item-wrapper[_ngcontent-%COMP%]{border-top:1px solid var(--ion-color-medium);--inner-padding-end:0px}.menu-item-loop[_ngcontent-%COMP%]:first-child   .menu-item-wrapper[_ngcontent-%COMP%]{border-top:0}.menu-item[_ngcontent-%COMP%]{height:100%;width:100%;padding-left:15px;padding-right:15px;margin:0}.item-grid[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px}.item-content-column[_ngcontent-%COMP%]{padding-right:10px}.name-label[_ngcontent-%COMP%]{font-weight:600;--color:var(--ion-color-primary)}.price-label[_ngcontent-%COMP%]{text-align:right}.description-row[_ngcontent-%COMP%]{-webkit-padding-before:10px;padding-block-start:10px}.description-label[_ngcontent-%COMP%]{white-space:normal}.add-button-column[_ngcontent-%COMP%]{text-align:right}.add-button[_ngcontent-%COMP%]{width:25px;height:25px;--border-radius:50%;--padding-start:0px;--padding-end:0px}.add-icon[_ngcontent-%COMP%]{--width:100%;--height:100%}"]],data:{}});function v(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,4,"ion-row",[["class","description-row"]],null,null,null,e.J,e.q)),u.qb(1,49152,null,0,o.gb,[u.h,u.k,u.x],null,null),(n()(),u.rb(2,0,null,0,2,"ion-label",[["class","description-label"]],null,null,null,e.G,e.n)),u.qb(3,49152,null,0,o.L,[u.h,u.k,u.x],null,null),(n()(),u.Ib(4,0,["",""]))],null,function(n,l){n(l,4,0,l.parent.parent.context.$implicit.description)})}function M(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,31,"div",[],null,null,null,null,null)),(n()(),u.rb(1,0,null,null,30,"ion-item",[["class","ion-activatable"]],null,null,null,e.F,e.m)),u.qb(2,49152,null,0,o.F,[u.h,u.k,u.x],null,null),(n()(),u.rb(3,0,null,0,1,"ion-ripple-effect",[],null,null,null,e.I,e.p)),u.qb(4,49152,null,0,o.eb,[u.h,u.k,u.x],null,null),(n()(),u.rb(5,0,null,0,26,"div",[["class","menu-item"]],null,null,null,null,null)),(n()(),u.rb(6,0,null,null,25,"ion-grid",[["class","item-grid menu-item-wrapper"]],null,null,null,e.C,e.j)),u.qb(7,49152,null,0,o.y,[u.h,u.k,u.x],null,null),(n()(),u.rb(8,0,null,0,23,"ion-row",[["nowrap",""]],null,null,null,e.J,e.q)),u.qb(9,49152,null,0,o.gb,[u.h,u.k,u.x],null,null),(n()(),u.rb(10,0,null,0,15,"ion-col",[["align-items-center",""],["class","item-content-column"],["size","11"]],null,null,null,e.x,e.e)),u.qb(11,49152,null,0,o.r,[u.h,u.k,u.x],{size:[0,"size"]},null),(n()(),u.rb(12,0,null,0,11,"ion-row",[["class","item-content-row"]],null,null,null,e.J,e.q)),u.qb(13,49152,null,0,o.gb,[u.h,u.k,u.x],null,null),(n()(),u.rb(14,0,null,0,4,"ion-col",[["size","9"]],null,null,null,e.x,e.e)),u.qb(15,49152,null,0,o.r,[u.h,u.k,u.x],{size:[0,"size"]},null),(n()(),u.rb(16,0,null,0,2,"ion-label",[["class","name-label"]],null,null,null,e.G,e.n)),u.qb(17,49152,null,0,o.L,[u.h,u.k,u.x],null,null),(n()(),u.Ib(18,0,["",""])),(n()(),u.rb(19,0,null,0,4,"ion-col",[["class","price-column"],["size","3"]],null,null,null,e.x,e.e)),u.qb(20,49152,null,0,o.r,[u.h,u.k,u.x],{size:[0,"size"]},null),(n()(),u.rb(21,0,null,0,2,"ion-label",[["class","price-label"]],null,null,null,e.G,e.n)),u.qb(22,49152,null,0,o.L,[u.h,u.k,u.x],null,null),(n()(),u.Ib(23,0,["$",""])),(n()(),u.gb(16777216,null,0,1,null,v)),u.qb(25,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.rb(26,0,null,0,5,"ion-col",[["class","add-button-column"],["size","1"]],null,null,null,e.x,e.e)),u.qb(27,49152,null,0,o.r,[u.h,u.k,u.x],{size:[0,"size"]},null),(n()(),u.rb(28,0,null,0,3,"ion-button",[["class","add-button"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.cart.addCart(n.parent.context.$implicit)&&u),u},e.v,e.c)),u.qb(29,49152,null,0,o.i,[u.h,u.k,u.x],null,null),(n()(),u.rb(30,0,null,0,1,"ion-icon",[["class","add-icon"],["name","add"]],null,null,null,e.E,e.l)),u.qb(31,49152,null,0,o.A,[u.h,u.k,u.x],{name:[0,"name"]},null)],function(n,l){n(l,11,0,"11"),n(l,15,0,"9"),n(l,20,0,"3"),n(l,25,0,l.parent.context.$implicit.description),n(l,27,0,"1"),n(l,31,0,"add")},function(n,l){n(l,18,0,l.parent.context.$implicit.name),n(l,23,0,l.parent.context.$implicit.price)})}function q(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,2,"div",[["class","menu-item-loop"]],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,M)),u.qb(2,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,"item"===l.context.$implicit.type)},null)}function C(n){return u.Kb(0,[(n()(),u.gb(16777216,null,null,1,null,q)),u.qb(1,278528,null,0,r.j,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,1,0,l.component.menuItems.children)},null)}class O{constructor(n){this.http=n,this.http.get("assets/test.json").subscribe(n=>{this.menu=n.menu})}ngOnInit(){}toggleSection(n){this.menu[n].open=!this.menu[n].open}toggleMenuItem(n,l){this.menu[n].children[l].open=!this.menu[n].children[l].open}}var w=t("IheW"),I=u.pb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-item[_ngcontent-%COMP%]{border-top:1px solid var(--ion-color-medium);--inner-padding-end:0px;--padding-start:5px}.list-ios[_ngcontent-%COMP%], .list-md[_ngcontent-%COMP%]{padding:0;margin:0}.section-list[_ngcontent-%COMP%]{margin:0;--ion-item-background:#ffffff}.section-list[_ngcontent-%COMP%]   .section-active[_ngcontent-%COMP%], .section-list[_ngcontent-%COMP%]   .section-inactive[_ngcontent-%COMP%]{--min-height:58px;margin:0}.section-active[_ngcontent-%COMP%]{--ion-item-background:var(--ion-color-primary);--ion-item-color:#ffffff;font-weight:600;border-bottom:1px solid var(--ion-color-medium)}.section-active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff}.section-inactive[_ngcontent-%COMP%]{--ion-item-background:#ffffff;--ion-item-color:#000000}.section-inactive[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000}.subsection-list[_ngcontent-%COMP%]{padding:0;margin:0}.subsection-list[_ngcontent-%COMP%]   .subsection-active[_ngcontent-%COMP%], .subsection-list[_ngcontent-%COMP%]   .subsection-inactive[_ngcontent-%COMP%]{margin:0}.subsection-active[_ngcontent-%COMP%]{--ion-item-background:var(--ion-color-primary-tint);--ion-item-color:#ffffff;font-weight:600;border-bottom:1px solid var(--ion-color-medium)}.subsection-active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff}.subsection-inactive[_ngcontent-%COMP%]{--ion-item-background:#ffffff;--ion-item-color:#000000}.subsection-inactive[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000}.menu-item-list[_ngcontent-%COMP%]{margin:0}.subsection-description[_ngcontent-%COMP%]{border-bottom:1px solid var(--ion-color-medium)}"]],data:{}});function P(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"ion-icon",[["name","arrow-forward"],["slot","start"]],null,null,null,e.E,e.l)),u.qb(1,49152,null,0,o.A,[u.h,u.k,u.x],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"arrow-forward")},null)}function _(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"ion-icon",[["name","arrow-down"],["slot","start"]],null,null,null,e.E,e.l)),u.qb(1,49152,null,0,o.A,[u.h,u.k,u.x],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"arrow-down")},null)}function $(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,11,"ion-item",[["tappable",""]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.toggleSection(n.parent.context.index)&&u),u},e.F,e.m)),u.Fb(512,null,r.s,r.t,[u.q,u.r,u.k,u.B]),u.qb(2,278528,null,0,r.i,[r.s],{ngClass:[0,"ngClass"]},null),u.Eb(3,{"section-active":0,"section-inactive":1}),u.qb(4,49152,null,0,o.F,[u.h,u.k,u.x],null,null),(n()(),u.gb(16777216,null,0,1,null,P)),u.qb(6,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,_)),u.qb(8,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.rb(9,0,null,0,2,"ion-label",[],null,null,null,e.G,e.n)),u.qb(10,49152,null,0,o.L,[u.h,u.k,u.x],null,null),(n()(),u.Ib(11,0,[" "," "]))],function(n,l){var t=n(l,3,0,l.parent.context.$implicit.open,!l.parent.context.$implicit.open);n(l,2,0,t),n(l,6,0,!l.parent.context.$implicit.open),n(l,8,0,l.parent.context.$implicit.open)},function(n,l){n(l,11,0,l.parent.context.$implicit.name)})}function A(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,2,"div",[["class","section-description"]],null,null,null,null,null)),(n()(),u.rb(1,0,null,null,1,"p",[["style","color: var(--ion-color-medium)"],["text-center",""]],null,null,null,null,null)),(n()(),u.Ib(2,null,[" "," "]))],null,function(n,l){n(l,2,0,l.parent.parent.context.$implicit.description)})}function y(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"ion-icon",[["name","add"],["slot","start"]],null,null,null,e.E,e.l)),u.qb(1,49152,null,0,o.A,[u.h,u.k,u.x],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"add")},null)}function K(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"ion-icon",[["name","close"],["slot","start"]],null,null,null,e.E,e.l)),u.qb(1,49152,null,0,o.A,[u.h,u.k,u.x],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"close")},null)}function J(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,11,"ion-item",[["tappable",""]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.toggleMenuItem(n.parent.parent.parent.context.index,n.parent.context.index)&&u),u},e.F,e.m)),u.Fb(512,null,r.s,r.t,[u.q,u.r,u.k,u.B]),u.qb(2,278528,null,0,r.i,[r.s],{ngClass:[0,"ngClass"]},null),u.Eb(3,{"subsection-active":0,"subsection-inactive":1}),u.qb(4,49152,null,0,o.F,[u.h,u.k,u.x],null,null),(n()(),u.gb(16777216,null,0,1,null,y)),u.qb(6,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,K)),u.qb(8,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.rb(9,0,null,0,2,"ion-label",[],null,null,null,e.G,e.n)),u.qb(10,49152,null,0,o.L,[u.h,u.k,u.x],null,null),(n()(),u.Ib(11,0,[" "," "]))],function(n,l){var t=n(l,3,0,l.parent.context.$implicit.open,!l.parent.context.$implicit.open);n(l,2,0,t),n(l,6,0,!l.parent.context.$implicit.open),n(l,8,0,l.parent.context.$implicit.open)},function(n,l){n(l,11,0,l.parent.context.$implicit.name)})}function S(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,2,"div",[["class","subsection-description"]],null,null,null,null,null)),(n()(),u.rb(1,0,null,null,1,"p",[["style","color: var(--ion-color-medium)"],["text-center",""]],null,null,null,null,null)),(n()(),u.Ib(2,null,[" "," "]))],null,function(n,l){n(l,2,0,l.parent.parent.context.$implicit.description)})}function z(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),u.rb(1,0,null,null,5,"ion-list",[["class","menu-item-list"],["lines","none"]],null,null,null,e.H,e.o)),u.qb(2,49152,null,0,o.M,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(n()(),u.gb(16777216,null,0,1,null,S)),u.qb(4,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.rb(5,0,null,0,1,"app-menu-items",[],null,null,null,C,k)),u.qb(6,114688,null,0,x,[a.a],{menuItems:[0,"menuItems"]},null)],function(n,l){n(l,2,0,"none"),n(l,4,0,l.parent.context.$implicit.description),n(l,6,0,l.parent.context.$implicit)},null)}function F(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,J)),u.qb(2,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,null,1,null,z)),u.qb(4,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,"subsection"===l.context.$implicit.type),n(l,4,0,"subsection"===l.context.$implicit.type&&l.context.$implicit.open)},null)}function D(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,11,"div",[],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,A)),u.qb(2,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.rb(3,0,null,null,8,"ion-list",[["class","subsection-list"],["lines","none"]],null,null,null,e.H,e.o)),u.qb(4,49152,null,0,o.M,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(n()(),u.gb(16777216,null,0,1,null,F)),u.qb(6,278528,null,0,r.j,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(n()(),u.rb(7,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),u.rb(8,0,null,null,3,"ion-list",[["class","menu-item-list"],["lines","none"]],null,null,null,e.H,e.o)),u.qb(9,49152,null,0,o.M,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(n()(),u.rb(10,0,null,0,1,"app-menu-items",[],null,null,null,C,k)),u.qb(11,114688,null,0,x,[a.a],{menuItems:[0,"menuItems"]},null)],function(n,l){n(l,2,0,l.parent.context.$implicit.description),n(l,4,0,"none"),n(l,6,0,l.parent.context.$implicit.children),n(l,9,0,"none"),n(l,11,0,l.parent.context.$implicit)},null)}function E(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),u.rb(1,0,null,null,1,"p",[["text-center",""]],null,null,null,null,null)),(n()(),u.Ib(-1,null,[" Sorry, nothing is in here! "]))],null,null)}function B(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,$)),u.qb(2,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,null,1,null,D)),u.qb(4,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,null,1,null,E)),u.qb(6,16384,null,0,r.k,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,"section"===l.context.$implicit.type),n(l,4,0,"section"===l.context.$implicit.type&&l.context.$implicit.open),n(l,6,0,0===l.context.$implicit.children.length&&l.context.$implicit.open)},null)}function j(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,3,"ion-list",[["class","section-list"],["lines","none"]],null,null,null,e.H,e.o)),u.qb(1,49152,null,0,o.M,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(n()(),u.gb(16777216,null,0,1,null,B)),u.qb(3,278528,null,0,r.j,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,1,0,"none"),n(l,3,0,t.menu)},null)}class H{constructor(n,l,t,u){this.renderer=n,this.element=l,this.domCtrl=t,this.differs=u,this.isScrolling=!1,this.scrollingDown=!1,this.scrollingUp=!1,this.hidden=!1,this.triggerDistance=0,this.oldScrollTop=0,this.differ=this.differs.find({}).create()}ngOnInit(){this.fabToHide=this.element.nativeElement.getElementsByClassName(this.fabClass)[0],this.scrollArea.ionScrollEnd.subscribe(n=>{!1===n.detail.isScrolling?(this.scrollingDown=!1,this.scrollingUp=!1,this.isScrolling=!1):console.log("Error in isScrolling")}),this.scrollArea.ionScroll.subscribe(n=>{let l=n.detail.deltaY;l>this.triggerDistance?(this.scrollingDown=!0,this.scrollingUp=!1,this.isScrolling=!0):l<=0?(this.scrollingDown=!1,this.scrollingUp=!0,this.isScrolling=!0):console.log("other")})}ngDoCheck(){this.scrollingDown&&this.isScrolling&&!this.scrollingUp&&!this.hidden?(this.hidden=!0,this.domCtrl.write(()=>{this.renderer.setStyle(this.fabToHide,"webkitAnimation","fadeOut 100ms"),this.renderer.setStyle(this.fabToHide,"webkitAnimationFillMode","forwards")})):this.isScrolling&&!this.scrollingUp||this.scrollingDown||!this.hidden||(this.hidden=!1,setTimeout(()=>{this.domCtrl.write(()=>{this.renderer.setStyle(this.fabToHide,"webkitAnimation","bounceIn 350ms"),this.renderer.setStyle(this.fabToHide,"webkitAnimationFillMode","forwards")})},1e3))}}class G{constructor(){}}var T=u.pb({encapsulation:0,styles:[[".home-content[_ngcontent-%COMP%]{--padding-bottom:150px}"]],data:{}});function L(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,6,"ion-header",[],null,null,null,e.D,e.k)),u.qb(1,49152,null,0,o.z,[u.h,u.k,u.x],null,null),(n()(),u.rb(2,0,null,0,4,"ion-toolbar",[],null,null,null,e.L,e.s)),u.qb(3,49152,null,0,o.zb,[u.h,u.k,u.x],null,null),(n()(),u.rb(4,0,null,0,2,"ion-title",[],null,null,null,e.K,e.r)),u.qb(5,49152,null,0,o.xb,[u.h,u.k,u.x],null,null),(n()(),u.Ib(-1,0,[" Old Sport Bar and Grill "])),(n()(),u.rb(7,0,null,null,3,"ion-content",[["class","home-content"]],null,null,null,e.y,e.f)),u.qb(8,49152,[["scrollArea",4]],0,o.s,[u.h,u.k,u.x],{scrollEvents:[0,"scrollEvents"]},null),(n()(),u.rb(9,0,null,0,1,"app-menu-list",[],null,null,null,j,I)),u.qb(10,114688,null,0,O,[w.c],null,null),(n()(),u.rb(11,0,null,null,4,"ion-footer",[],null,null,null,e.B,e.i)),u.qb(12,49152,null,0,o.x,[u.h,u.k,u.x],null,null),(n()(),u.rb(13,0,null,0,2,"app-cart-fab",[["class","cart-fab"],["fabClass","cart-fab"]],null,null,null,m,p)),u.qb(14,344064,null,0,H,[u.B,u.k,o.c,u.r],{scrollArea:[0,"scrollArea"],fabClass:[1,"fabClass"]},null),u.qb(15,49152,null,0,b,[a.a,o.Db],null,null)],function(n,l){n(l,8,0,!0),n(l,10,0),n(l,14,0,u.Cb(l,8),"cart-fab")},null)}function U(n){return u.Kb(0,[(n()(),u.rb(0,0,null,null,1,"app-home",[],null,null,null,L,T)),u.qb(1,49152,null,0,G,[],null,null)],null,null)}var N=u.nb("app-home",G,U,{},{},[]),Z=t("s7LF");class Y{}var V=t("iInd");t.d(l,"HomePageModuleNgFactory",function(){return W});var W=u.ob(i,[],function(n){return u.zb([u.Ab(512,u.j,u.Z,[[8,[f,h.a,N]],[3,u.j],u.v]),u.Ab(4608,r.m,r.l,[u.s,[2,r.v]]),u.Ab(4608,o.a,o.a,[u.x,u.g]),u.Ab(4608,o.Db,o.Db,[o.a,u.j,u.p]),u.Ab(4608,o.Gb,o.Gb,[o.a,u.j,u.p]),u.Ab(4608,Z.c,Z.c,[]),u.Ab(1073742336,r.c,r.c,[]),u.Ab(1073742336,o.Bb,o.Bb,[]),u.Ab(1073742336,Y,Y,[]),u.Ab(1073742336,Z.b,Z.b,[]),u.Ab(1073742336,Z.a,Z.a,[]),u.Ab(1073742336,V.n,V.n,[[2,V.s],[2,V.m]]),u.Ab(1073742336,i,i,[]),u.Ab(1024,V.k,function(){return[[{path:"",component:G}]]},[])])})}}]);