(function(t){function e(e){for(var a,c,o=e[0],r=e[1],l=e[2],_=0,f=[];_<o.length;_++)c=o[_],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var r=n[o];0!==i[r]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},s=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";n("2dad")},"2dad":function(t,e,n){},3546:function(t,e,n){},"39d8":function(t,e,n){},"3de7":function(t,e,n){"use strict";n("c371")},"4a3b":function(t,e,n){},"4d12":function(t,e,n){},"4dc3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],c=(n("5c0b"),n("2877")),o={},r=Object(c["a"])(o,i,s,!1,null,null,null),l=r.exports,u=n("9483");Object(u["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var _=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home"},[n("Head",{ref:"head",attrs:{value:"ホーム"}}),n("nav",{staticClass:"home__nav"},[n("ul",t._l(t.nav,(function(e,a){return n("li",{key:e[a],staticClass:"home__nav--item homeNavActive"},[t._v(t._s(e))])})),0)]),t._l(3,(function(e){return n("div",{staticClass:"home__live"},[n("div",{staticClass:"home__live--img"},[n("img",{attrs:{src:"https://click.ecc.ac.jp/ecc/msatou/raict_app/img/"+t.live.img}})]),n("div",{staticClass:"home__live--ttl"},[t._v(t._s(t.live.ttl))]),n("div",{staticClass:"home__live--name"},[t._v(t._s(t.live.name))])])})),n("Navigation",{ref:"nav",attrs:{value:"home"}})],2)},p=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"head"},[n("h1",[t._v(t._s(t.value))])])},v=[],h={name:"Navgation",props:["value"]},d=h,g=(n("6eef"),Object(c["a"])(d,m,v,!1,null,null,null)),C=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("ul",{staticClass:"nav__link"},t._l(t.links,(function(e,a){return n("li",{key:e[a]},[n("router-link",{attrs:{to:"/ecc/msatou/raict_app/"+e.name}},[n("div",[n("img",{attrs:{src:"https://click.ecc.ac.jp/ecc/msatou/raict_app/img/nav_"+e.name+".svg"}})]),n("p",{class:{navActive:t.value==e.name}},[t._v(t._s(e.alt))])])],1)})),0)])},w=[],k={name:"Navgation",props:["value"],data:function(){return{links:[{name:"home",alt:"ホーム"},{name:"search",alt:"検索"},{name:"live",alt:"ライブへ行く"},{name:"notice",alt:"通知"},{name:"profile",alt:"プロフィール"}]}}},y=k,j=(n("a4e1"),Object(c["a"])(y,b,w,!1,null,null,null)),x=j.exports,H={name:"Home",components:{Head:C,Navigation:x},data:function(){return{nav:["おすすめ","お気に入り","邦ロック","男性アイドル","女性アイドル"],live:{ttl:"ライブのタイトル",name:"アーティスト",img:"search_artists.png"}}}},O=H,E=(n("21bb"),Object(c["a"])(O,f,p,!1,null,null,null)),N=E.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"start",style:{minHeight:t.startHeight+"px"}},[t._m(0),n("div",{staticClass:"start__signin"},[n("router-link",{attrs:{to:{name:"Signin"}}},[t._v("LINEでサインイン")]),n("router-link",{attrs:{to:{name:"Signin"}}},[t._v("Twitterでサインイン")]),n("router-link",{attrs:{to:{name:"Signin"}}},[t._v("Appleでサインイン")])],1)])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"start__info"},[n("h1",{staticClass:"start__info--logo"},[n("img",{attrs:{src:"https://click.ecc.ac.jp/ecc/msatou/raict_app/img/logo_color.svg"}})]),n("div",{staticClass:"start__info--txt"},[t._v("raictへようこそ")]),n("p",{staticClass:"start__info--description"},[t._v("サインインするとすべての機能が"),n("br"),t._v(" ご利用いただけます")])])}],P=window.innerHeight,T=0,A=function(){var t=document.querySelector("header").offsetHeight,e=document.querySelector("nav").offsetHeight,n=P-t-e;document.querySelector("main").style.minHeight=n+"px"},B={height:P,footHeight:T,mainHeight:A},L={name:"Start",data:function(){return{startHeight:0}},mounted:function(){this.startHeight=B.height-B.footHeight}},F=L,q=(n("8917"),Object(c["a"])(F,$,S,!1,null,null,null)),M=q.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"signin",style:{minHeight:t.startHeight+"px"}},[n("div",{staticClass:"signin__head"},[t.flowCount>0?n("div",{staticClass:"signin__head---back",on:{click:t.flowBack}},[n("img",{attrs:{src:"https://click.ecc.ac.jp/ecc/msatou/raict_app/img/start-back.svg",alt:"back"}})]):t._e(),t._m(0)]),n("div",{staticClass:"signin__flow"},t._l(t.flowTtl,(function(e,a){return n("div",{key:a,staticClass:"signin__flow--parts",class:{flowOnCircle:t.flowCount>=a}},[n("p",{class:{flowOnTxt:t.flowCount==a}},[t._v("step"+t._s(a+1))]),n("div")])})),0),n("h2",{staticClass:"signin__ttl",domProps:{textContent:t._s(t.flowTtl[t.flowCount])}}),0==t.flowCount?n("div",{staticClass:"signin__contents"},[n("div",{staticClass:"signin__contents--file"},[n("form",{attrs:{enctype:"multipart/form-data"}},[n("input",{attrs:{type:"file",accept:"image/*",capture:"camera",value:"",name:"upload"},on:{change:t.inputIcon}})])]),n("div",{staticClass:"signin__contents--name"},[n("p",[t._v("名前／ニックネーム")]),n("form",[n("input",{attrs:{type:"text",placeholder:"example",name:"name"},on:{change:function(e){t.inputFlag[0]}}})])])]):t._e(),1==t.flowCount?n("div",{staticClass:"signin__contents"},[t._m(1),t._m(2)]):t._e(),2==t.flowCount?n("div",{staticClass:"signin__contents"},[n("div",{staticClass:"signin__contents--artists"},t._l(6,(function(e){return n("div",[n("div",{staticClass:"signin__contents--artists--icon"},[n("img",{attrs:{src:"https://click.ecc.ac.jp/ecc/msatou/raict_app/img/"+t.favorite.img}})]),n("p",{staticClass:"signin__contents--artists--name"},[t._v(t._s(t.favorite.name))])])})),0)]):t._e(),3==t.flowCount?n("div",{staticClass:"signin__completion"},[n("div",{staticClass:"signin__completion--icon"},[n("img",{attrs:{src:"https://click.ecc.ac.jp/ecc/msatou/raict_app/img/"+t.favorite.img}})]),n("div",{staticClass:"signin__completion--name"},[t._v(t._s(t.favorite.name))]),n("div",{staticClass:"signin__completion--txt"},[t._v("さっそく最新のライブを確認しよう！")])]):t._e(),n("div",{staticClass:"signin__btn",on:{click:t.flowBtn}},[n("p",[t._v(t._s(t.flowBtnTxt[t.flowCount]))]),t.flowLink?n("router-link",{staticClass:"signin__btn--link",attrs:{to:{name:"Home"}}}):t._e()],1)])},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"signin__head--logo"},[n("img",{attrs:{src:"https://click.ecc.ac.jp/ecc/msatou/raict_app/img/logo_white.svg",alt:"raict"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"signin__contents--name"},[n("p",[t._v("性別")]),n("form",[n("select",[n("option",{attrs:{disabled:"",value:"",selected:""}},[t._v("選択してください")]),n("option",{attrs:{value:"male"}},[t._v("男性")]),n("option",{attrs:{value:"female"}},[t._v("女性")]),n("option",{attrs:{value:"other"}},[t._v("その他")]),n("option",{attrs:{value:"noselected"}},[t._v("選択しない")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"signin__contents--name"},[n("p",[t._v("生年月日")]),n("form",[n("input",{attrs:{type:"date"}})])])}],z={name:"Start",data:function(){return{imgPath:"",inputFlag:[!1,!1,!1,!1],startHeight:0,flowCount:0,flowFlag:!1,flowTtl:["写真とニックネームを\n設定する","性別と年齢を\n設定する","好きなアーティストを\n選んでね","アカウント登録が\n完了しました！"],flowBtnTxt:["次へ","次へ","スキップ","ライブを確認する"],flowLink:!1,favorite:{img:"search_artists.png",name:"須田景凪"}}},methods:{flowBtn:function(){this.flowCount++,3==this.flowCount&&(this.flowLink=!0,console.log("Ok"))},flowBack:function(){this.flowCount--},inputIcon:function(t){this.imgPath=t.target.value}},mounted:function(){this.startHeight=B.height-B.footHeight}},D=z,G=(n("dd3b"),Object(c["a"])(D,I,J,!1,null,null,null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"search"},[n("input",{staticClass:"search__input",attrs:{type:"text",placeholder:"アーティストを検索しよう"}}),t._m(0),n("div",{staticClass:"search__artists"},t._l(8,(function(e){return n("article",[n("div",{staticClass:"search__artists--img"},[n("img",{attrs:{src:"https://click.ecc.ac.jp/ecc/msatou/raict_app/img/"+t.artistList[0].img}})]),n("h2",{staticClass:"search__artists--name"},[t._v(t._s(t.artistList[0].name))])])})),0),n("Navigation",{ref:"nav",attrs:{value:"search"}})],1)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"search__head"},[n("h1",{staticClass:"search__head--txt"},[t._v("アーティスト")])])}],U={name:"Search",components:{Head:C,Navigation:x},data:function(){return{artistList:[{name:"hogehoge",img:"search_artists.png"}]}}},V=U,W=(n("3de7"),Object(c["a"])(V,Q,R,!1,null,null,null)),X=W.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"notice"},[n("Head",{ref:"head",attrs:{value:"通知"}}),t._l(4,(function(e){return n("div",{staticClass:"notice__list"},[n("div",{staticClass:"notice__list--icon"},[n("img",{attrs:{src:"https://click.ecc.ac.jp/ecc/msatou/raict_app/img/"+t.list.icon}})]),n("p",{staticClass:"notice__list--msg"},[t._v(t._s(t.list.msg))]),n("span",{staticClass:"notice__list--date"},[t._v(t._s(t.list.date)+"日前")])])})),n("Navigation",{ref:"nav",attrs:{value:"notice"}})],2)},Z=[],tt={name:"Notice",components:{Head:C,Navigation:x},data:function(){return{list:{icon:"profile_icon.svg",msg:"運営からのメッセージが届きます。こんな感じで届きます。応募したアーティストからもメッセージが届いたりします。",date:"6"}}}},et=tt,nt=(n("f193"),Object(c["a"])(et,Y,Z,!1,null,null,null)),at=nt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"profile"},[n("Head",{ref:"head",attrs:{value:"プロフィール"}}),t._m(0),t._l(t.links,(function(e,a){return n("div",{key:e[a],staticClass:"profile__link"},[n("span",{staticClass:"profile__link--ttl"},[t._v(t._s(e.ttl))]),n("ul",{staticClass:"profile__link--content"},t._l(t.links[a].contents,(function(e,a){return n("li",{key:e[a]},[n("a",{attrs:{href:"#"}},[t._v(t._s(e))])])})),0)])})),n("Navigation",{ref:"nav",attrs:{value:"profile"}})],2)},st=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile__data"},[n("div",{staticClass:"profile__data--icon"},[n("img",{attrs:{src:"https://click.ecc.ac.jp/ecc/msatou/raict_app/img/profile_icon.svg"}})]),n("div",{staticClass:"profile__data--name"},[t._v("すだ")])])}],ct={name:"Profile",components:{Head:C,Navigation:x},data:function(){return{links:[{ttl:"設定",contents:["プロフィール設定","アカウント設定","通知"]},{ttl:"",contents:["raictの使い方","プライバシー","ご利用規約"]},{ttl:"",contents:["ログアウト"]}]}}},ot=ct,rt=(n("6346"),Object(c["a"])(ot,it,st,!1,null,null,null)),lt=rt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"artists"},[t._m(0),t._m(1),n("Navigation",{ref:"nav",attrs:{value:"search"}})],1)},_t=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"artists__head"},[n("div",{staticClass:"artists__head--img"},[n("img",{attrs:{src:"https://click.ecc.ac.jp/ecc/msatou/raict_app/img/search_artists.png"}})]),n("h1",{staticClass:"artists__head--name"},[t._v("hogehoge")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"artists__next"},[n("h2",{staticClass:"artists__next--headline"},[t._v("次のライブ")]),n("div",{staticClass:"artists__next--img"},[n("img",{attrs:{src:"https://click.ecc.ac.jp/ecc/msatou/raict_app/img/search_artists.png"}})])])}],ft={name:"Artists",components:{Head:C,Navigation:x}},pt=ft,mt=(n("65eb"),Object(c["a"])(pt,ut,_t,!1,null,null,null)),vt=mt.exports;a["a"].use(_["a"]);var ht="/ecc/msatou/raict_app/",dt=[{path:"".concat(ht),name:"Start",component:M},{path:"".concat(ht)+"home",name:"Home",component:N},{path:"".concat(ht)+"signin",name:"Signin",component:K},{path:"".concat(ht)+"search",name:"Search",component:X},{path:"".concat(ht)+"notice",name:"Notice",component:at},{path:"".concat(ht)+"profile",name:"Profile",component:lt},{path:"".concat(ht)+"artists",name:"Artists",component:vt}],gt=new _["a"]({mode:"history",base:"",routes:dt}),Ct=gt;a["a"].config.productionTip=!1,new a["a"]({router:Ct,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6346:function(t,e,n){"use strict";n("4dc3")},"65eb":function(t,e,n){"use strict";n("4a3b")},"6eef":function(t,e,n){"use strict";n("3546")},8917:function(t,e,n){"use strict";n("39d8")},"9c0c":function(t,e,n){},a4e1:function(t,e,n){"use strict";n("4d12")},c134:function(t,e,n){},c371:function(t,e,n){},ca0f:function(t,e,n){},dd3b:function(t,e,n){"use strict";n("ca0f")},f193:function(t,e,n){"use strict";n("c134")}});
//# sourceMappingURL=app.2860615a.js.map