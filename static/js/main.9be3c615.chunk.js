(this.webpackJsonpbinder=this.webpackJsonpbinder||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(15),r=n.n(s),i=(n(57),n(58),n(59),n.p+"static/media/letter-b.8c252ae3.svg"),o=n(39),j=n.n(o),l=n(109),d=n(40),u=n.n(d),b=n(2);var f=function(){return Object(b.jsxs)("div",{className:"header__logo",children:[Object(b.jsx)(l.a,{className:"header__icon",children:Object(b.jsx)(j.a,{fontSize:"large",className:"header__icon"})}),Object(b.jsx)("img",{src:i,alt:"letter-b",className:"letter__b"}),Object(b.jsx)(l.a,{className:"header__icon",children:Object(b.jsx)(u.a,{className:"header__icon"})})]})},h=n(26),O=n.n(h),x=n(41),p=n(29),m=n(42),g=n.n(m),_=n(43),v=n.n(_).a.create({baseURL:"https://binder-backend-node.herokuapp.com/"}),N=n(107),w=n(108),S=Object(N.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)},justifyContent:"center",marginTop:"200px"}}}));function B(){var e=S();return Object(b.jsx)("div",{className:e.root,children:Object(b.jsx)(w.a,{})})}n(87);var k=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!0),r=Object(p.a)(s,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){function e(){return(e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/binder/cards");case 2:t=e.sent,a(t.data),o(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(n),console.log(i),Object(b.jsx)("div",{className:"cards",children:i?Object(b.jsx)(B,{}):Object(b.jsxs)("div",{className:"card__container",children:[n.map((function(e){return Object(b.jsx)(g.a,{className:"swipe",preventSwipe:["up","down"],onSwipe:function(t){return n=e.name,void console.log("removing: "+n);var n},onCardLeftScreen:function(){return t=e.name,void console.log(t+" left the screen!");var t},children:Object(b.jsx)("div",{className:"card",style:{backgroundImage:"url(".concat(e.imgUrl,")")},children:Object(b.jsx)("h3",{children:e.name})})},e._id)})),Object(b.jsx)("h1",{children:"Refresh!"})]})})},y=(n(88),n(44)),z=n.n(y),C=n(45),L=n.n(C),F=n(46),I=n.n(F),T=n(47),E=n.n(T),J=n(48),P=n.n(J);var R=function(){return Object(b.jsxs)("div",{className:"swipeButtons",children:[Object(b.jsx)(l.a,{className:"swipeButtons__repeat",children:Object(b.jsx)(z.a,{fontSize:"large"})}),Object(b.jsx)(l.a,{className:"swipeButtons__left",children:Object(b.jsx)(L.a,{fontSize:"large"})}),Object(b.jsx)(l.a,{className:"swipeButtons__star",children:Object(b.jsx)(I.a,{fontSize:"large"})}),Object(b.jsx)(l.a,{className:"swipeButtons__right",children:Object(b.jsx)(E.a,{fontSize:"large"})}),Object(b.jsx)(l.a,{className:"swipeButtons__lightning",children:Object(b.jsx)(P.a,{fontSize:"large"})})]})};var U=function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(f,{}),Object(b.jsx)(k,{}),Object(b.jsx)(R,{})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("root")),D()}},[[90,1,2]]]);
//# sourceMappingURL=main.9be3c615.chunk.js.map