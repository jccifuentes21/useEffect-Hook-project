(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={login:"Login_login__ETS8T",control:"Login_control__3C5Mu",invalid:"Login_invalid__3Q-JG",actions:"Login_actions__3eQQP"}},,,function(e,t,n){e.exports={card:"Card_card__n7VFN"}},function(e,t,n){e.exports={button:"Button_button__1FFLu"}},function(e,t,n){e.exports={home:"Home_home__VQNad"}},function(e,t,n){e.exports={nav:"Navigation_nav__1Y9zJ"}},function(e,t,n){e.exports={"main-header":"MainHeader_main-header__n6Yic"}},,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(5),i=n.n(a),s=(n(19),n(2)),r=n(6),l=n.n(r),u=n(0),j=function(e){return Object(u.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),children:e.children})},d=n(3),b=n.n(d),g=n(7),h=n.n(g),O=function(e){return Object(u.jsx)("button",{type:e.type||"button",className:"".concat(h.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},m=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),o=n[0],a=n[1],i=Object(c.useState)(),r=Object(s.a)(i,2),l=r[0],d=r[1],g=Object(c.useState)(""),h=Object(s.a)(g,2),m=h[0],x=h[1],f=Object(c.useState)(),_=Object(s.a)(f,2),p=_[0],v=_[1],L=Object(c.useState)(!1),N=Object(s.a)(L,2),I=N[0],S=N[1];Object(c.useEffect)((function(){var e=setTimeout((function(){console.log("checking form validity!"),S(o.includes("@")&&m.trim().length>6)}),500);return function(){console.log("cleanup"),clearTimeout(e)}}),[o,m]);return Object(u.jsx)(j,{className:b.a.login,children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onLogin(o,m)},children:[Object(u.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===l?b.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:"email",children:"E-Mail"}),Object(u.jsx)("input",{type:"email",id:"email",value:o,onChange:function(e){a(e.target.value)},onBlur:function(){d(o.includes("@"))}})]}),Object(u.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===p?b.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",id:"password",value:m,onChange:function(e){x(e.target.value)},onBlur:function(){v(m.trim().length>6)}})]}),Object(u.jsx)("div",{className:b.a.actions,children:Object(u.jsx)(O,{type:"submit",className:b.a.btn,disabled:!I,children:"Login"})})]})})},x=n(8),f=n.n(x),_=function(e){return Object(u.jsx)(j,{className:f.a.home,children:Object(u.jsx)("h1",{children:"Welcome back!"})})},p=n(9),v=n.n(p),L=function(e){return Object(u.jsx)("nav",{className:v.a.nav,children:Object(u.jsxs)("ul",{children:[e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Users"})}),e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Admin"})}),e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:e.onLogout,children:"Logout"})})]})})},N=n(10),I=n.n(N),S=function(e){return Object(u.jsxs)("header",{className:I.a["main-header"],children:[Object(u.jsx)("h1",{children:"A Typical Page"}),Object(u.jsx)(L,{isLoggedIn:e.isAuthenticated,onLogout:e.onLogout})]})};var y=function(){var e=localStorage.getItem("isLoggedIn"),t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],i=n[1];Object(c.useEffect)((function(){"1"===e&&i(!0)}),[]);var r=function(){localStorage.removeItem("isLoggedIn"),i(!1)};return Object(u.jsxs)(o.a.Fragment,{children:[Object(u.jsx)(S,{isAuthenticated:a,onLogout:r}),Object(u.jsxs)("main",{children:[!a&&Object(u.jsx)(m,{onLogin:function(e,t){localStorage.setItem("isLoggedIn","1"),i(!0)}}),a&&Object(u.jsx)(_,{onLogout:r})]})]})};i.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(y,{}))}],[[21,1,2]]]);
//# sourceMappingURL=main.44c58c28.chunk.js.map