(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-048323e6"],{1828:function(t,e,n){},"2f49":function(t,e,n){},5076:function(t,e,n){},8574:function(t,e,n){"use strict";n("1828")},"97c4":function(t,e,n){"use strict";n("5076")},"98a7":function(t,e,n){"use strict";n("2f49")},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"checkout-btn",on:{click:t.openNav}},[t._v("Checkout")]),n("div",{staticClass:"sidenav",attrs:{id:"mySidenav"}},[n("Cart",{on:{closeNav:t.closeNav}})],1),n("div",{attrs:{id:"main"}},[n("Products")],1)])},c=[],i={data:function(){return{windowWidth:""}},methods:{getWindowWidth:function(t){this.windowWidth=document.documentElement.clientWidth},openNav:function(){var t=this.windowWidth>767?"650px":"300px";document.getElementById("mySidenav").style.width=t,document.getElementById("main").style.marginRight=t},closeNav:function(){document.getElementById("mySidenav").style.width="0",document.getElementById("main").style.marginRight="0"}},mounted:function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart-container"},[n("a",{staticClass:"close-btn",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.$emit("closeNav")}}},[t._v("×")]),n("h6",{staticClass:"text-center"},[t._v("Your Cart")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.curency,expression:"curency"}],staticClass:"currency",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.curency=e.target.multiple?n:n[0]}}},t._l(t.currency,(function(e,r){return n("option",{key:r,domProps:{value:e}},[t._v(t._s(e))])})),0),n("div",{staticClass:"pd-lr"},t._l(t.carts,(function(e){return n("div",{staticClass:"item"},[n("p",{staticClass:"product-name"},[t._v(t._s(e.title))]),n("div",{staticClass:"cart-details"},[n("PlusMinusItem",{attrs:{slot:"actions",product:e},slot:"actions"}),n("b",[t._v(t._s(t._f("currency")(e.price)))]),n("img",{attrs:{src:e.image_url}})],1)])})),0),n("a-divider"),n("div",{staticClass:"cart-details sub-total pd-lr"},[n("span",[t._v("Subtotal")]),n("span",[t._v(t._s(t._f("currency")(t.totalPrice)))])]),n("button",{staticClass:"btn btn-primary proceed-checkout"},[t._v("PROCEED TO CHECKOUT")])],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{slot:"actions"},slot:"actions"},[n("a-icon",{style:{color:"#bf5555",marginRight:"20px"},attrs:{slot:"actions",type:"delete"},on:{click:function(e){return t.removeItem(t.product.id)}},slot:"actions"}),n("a-icon",{attrs:{slot:"actions",type:"minus"},on:{click:function(e){return t.plusMinusItem(t.product.id,"minus")}},slot:"actions"}),n("a-badge",{attrs:{slot:"actions",count:t.getItemQty(t.product.id),"number-style":{backgroundColor:"#fff",color:"#999",boxShadow:"0 0 0 1px #d9d9d9 inset",margin:"0 10px"}},slot:"actions"}),n("a-icon",{attrs:{slot:"actions",type:"plus"},on:{click:function(e){return t.plusMinusItem(t.product.id,"plus")}},slot:"actions"})],1)},u=[],l=(n("7db0"),{name:"PlusMinusItem",props:["product"],methods:{getItemQty:function(t){var e=this.carts.find((function(e){return e.id==t}));return e.qty},plusMinusItem:function(t,e){this.$store.dispatch("cart/plusMinusItem",{itemId:t,action:e})},removeItem:function(t){this.$store.dispatch("cart/removeItem",t)}},computed:{carts:function(){return this.$store.getters["cart/items"]}}}),d=l,f=n("2877"),m=Object(f["a"])(d,a,u,!1,null,"356bc0ba",null),p=m.exports;n("fb6a"),n("dca8");function v(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var y,h,b=n("9530"),g=n.n(b),_=g()(y||(y=v(["\n  query ($currency : Currency){\n    products  {\n      id\n      title\n      image_url\n      price(currency: $currency)\n\n  }\n }"]))),C=g()(h||(h=v(["\n  query {\n    currency\n }"]))),w={name:"Cart",mixins:[i],components:{PlusMinusItem:p},apollo:{currency:{query:C}},data:function(){return{curency:"NGN"}},computed:{carts:function(){return this.$store.getters["cart/items"]},totalPrice:function(){return this.$store.getters["cart/totalPrice"]}},watch:{curency:{handler:function(t){this.$store.dispatch("cart/setCurrency",t)},immediate:!0}}},I=w,x=(n("98a7"),Object(f["a"])(I,s,o,!1,null,"2b218218",null)),E=x.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products"},t._l(t.products,(function(e){return n("div",{key:e.id,staticClass:"product"},[n("div",{staticClass:"d-flex justify-content-center"},[n("img",{attrs:{alt:"pangaea image",src:e.image_url}})]),n("p",{staticClass:"center-item"},[t._v(t._s(e.title))]),n("p",{staticClass:"center-item"},[t._v("From "+t._s(t._f("currency")(e.price)))]),n("div",{staticClass:"d-flex justify-content-center"},[t.itemInCart(e.id)?n("PlusMinusItem",{attrs:{product:e}}):n("button",{staticClass:"btn btn-primary",on:{click:function(n){return t.addToCart(e)}}},[t._v("Add to Cart")])],1)])})),0)},j=[],$={name:"Product",mixins:[i],components:{PlusMinusItem:p},apollo:{products:{query:_,variables:function(){return{currency:this.currency}},error:function(t){console.log(t.message)}}},methods:{addToCart:function(t){this.openNav(),this.$store.dispatch("cart/addItem",t)},itemInCart:function(t){return this.carts.some((function(e){return e["id"]===t}))}},computed:{currency:function(){return this.$store.getters["cart/currency"]},carts:function(){return this.$store.getters["cart/items"]}},watch:{products:{handler:function(t){this.$store.dispatch("cart/updatePrices",t)}},immediate:!0}},O=$,P=(n("97c4"),Object(f["a"])(O,k,j,!1,null,"39c9240c",null)),W=P.exports,M={name:"Home",mixins:[i],components:{Cart:E,Products:W}},N=M,D=(n("8574"),Object(f["a"])(N,r,c,!1,null,"6bd8c125",null));e["default"]=D.exports},dca8:function(t,e,n){var r=n("23e7"),c=n("bb2f"),i=n("d039"),s=n("861d"),o=n("f183").onFreeze,a=Object.freeze,u=i((function(){a(1)}));r({target:"Object",stat:!0,forced:u,sham:!c},{freeze:function(t){return a&&s(t)?a(o(t)):t}})},f183:function(t,e,n){var r=n("d012"),c=n("861d"),i=n("5135"),s=n("9bf2").f,o=n("90e3"),a=n("bb2f"),u=o("meta"),l=0,d=Object.isExtensible||function(){return!0},f=function(t){s(t,u,{value:{objectID:"O"+ ++l,weakData:{}}})},m=function(t,e){if(!c(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,u)){if(!d(t))return"F";if(!e)return"E";f(t)}return t[u].objectID},p=function(t,e){if(!i(t,u)){if(!d(t))return!0;if(!e)return!1;f(t)}return t[u].weakData},v=function(t){return a&&y.REQUIRED&&d(t)&&!i(t,u)&&f(t),t},y=t.exports={REQUIRED:!1,fastKey:m,getWeakData:p,onFreeze:v};r[u]=!0},fb6a:function(t,e,n){"use strict";var r=n("23e7"),c=n("861d"),i=n("e8b5"),s=n("23cb"),o=n("50c4"),a=n("fc6a"),u=n("8418"),l=n("b622"),d=n("1dde"),f=d("slice"),m=l("species"),p=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,r,l,d=a(this),f=o(d.length),y=s(t,f),h=s(void 0===e?f:e,f);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?c(n)&&(n=n[m],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(d,y,h);for(r=new(void 0===n?Array:n)(v(h-y,0)),l=0;y<h;y++,l++)y in d&&u(r,l,d[y]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-048323e6.d06c2252.js.map