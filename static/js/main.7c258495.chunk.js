(this["webpackJsonpwheel-of-fortune"]=this["webpackJsonpwheel-of-fortune"]||[]).push([[0],{23:function(n,e,t){},27:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t(1),a=t.n(c),o=t(14),i=t.n(o),s=(t(23),t(4)),u=t(5),b=t.n(u),l=t(11);function d(){return(d=Object(l.a)(b.a.mark((function n(e){var t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}});case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("could not feth ".concat(e,", status:").concat(t.status));case 5:return n.next=7,t.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var j=t(2),h=t(3);function f(){var n=Object(j.a)(["\n    background: #181414 ;\n    display:flex ;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;   \n    text-align:center;\n    box-shadow: 4px 4px 20px rgba(0,0,0,.5); \n    user-select: none;\n    z-index: 1;\n\n"]);return f=function(){return n},n}var x=h.b.div(f());var p=function(n){var e=n.attempts,t=n.score,c=(n.questions,n.toogleEasterEgg),a=n.maxPoint;return Object(r.jsxs)(x,{children:[Object(r.jsx)("h1",{children:"\u0421\u043f\u0440\u043e\u0431"}),Object(r.jsx)("h2",{children:e}),Object(r.jsx)("h1",{children:" \u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0431\u0430\u043b\u0456\u0432"}),Object(r.jsx)("h2",{children:a}),Object(r.jsx)("h1",{children:" \u041d\u0430\u0431\u0440\u0430\u043d\u043e \u0431\u0430\u043b\u0456\u0432"}),Object(r.jsx)("h2",{children:t}),Object(r.jsx)("h4",{style:{cursor:"pointer"},onClick:c,children:"^_^"})]})};t(27);function g(){var n=Object(j.a)(["\ndisplay:flex;\njustify-content:center;\nalign-items:center;\n\nsvg {\n    width: 27vw;\n    height:27vw;\n}\n"]);return g=function(){return n},n}var O=h.b.div(g());var m=function(n){var e=n.db,t=n.rotate,c=n.handleClickWheel,a=n.offset;function o(){var n=e.map((function(n,t){var c=t+1,o=2*Math.PI*25/e.length;return Object(r.jsxs)("g",{className:"g"+c,style:{transform:"rotate(".concat(a*t,"deg)")},children:[Object(r.jsx)("circle",{className:"sector",r:"25",cx:"50",cy:"50",strokeDasharray:"".concat(o,", 157.07963267948966\n                    ")}),Object(r.jsx)("text",{x:"84",y:"50",style:{transform:"rotate(".concat(.66*a,"deg)")},children:c})]},t)}));return Object(r.jsx)("span",{className:"circWrap",children:Object(r.jsx)("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",style:{transform:"rotate(".concat(t,"deg)")},children:n})})}return Object(r.jsx)(O,{onClick:c,children:Object(r.jsxs)("span",{className:"wrapper",children:[Object(r.jsx)(o,{}),Object(r.jsxs)("span",{className:"arrow-7",children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]})]})})};function v(){var n=Object(j.a)(["\nfont-size: 1.2rem;\ncolor: ",";\n"]);return v=function(){return n},n}function w(){var n=Object(j.a)(["\nborder: 1px solid rgba(0,0,0,0.2);\nborder-radius: 8px;\nbackground: rgba(0,0,0,0.3);\npadding: 5%;\nbox-shadow: 4px 4px 20px rgba(0,0,0,.5); \n\n\n"]);return w=function(){return n},n}var k=h.b.div(w()),y=h.b.h2(v(),(function(n){return n.select?"red":null}));var E=function(n){var e=n.db,t=n.select;return Object(r.jsx)(k,{children:e?e.map((function(n,e){var c=n.them;return e===t?Object(r.jsx)(y,{select:!0,children:c},e):Object(r.jsx)(y,{children:c},e)})):Object(r.jsx)("h2",{style:{color:"red",textAlign:"center"},children:"\u041e\u0442\u0441\u0443\u0446\u0442\u0432\u0443\u0435\u0442 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"})})},M=t(8),S=t.n(M);function q(){var n=Object(j.a)(["\n    box-shadow: 4px 4px 20px rgba(0,0,0,.5);    \n    position:absolute;\n    left:50%;\n    top:50%;\n    transform:translate(-50%,-50%);\n    border: 1px solid rgba(0,0,0,0.2);\n    font: inherit;\n    color: inherit;\n    outline:none;\n    border-radius: 4px;\n    background: #d53e07;\n    color:#5A092A;\n    padding: 4px 8px;\n    font-weight: 800;\n    text-align: center;\n    &:hover{\n        background-color: #aa3206;\n    }\n"]);return q=function(){return n},n}function C(){var n=Object(j.a)(["\n                border-color:#e52b50    ;\n            "]);return C=function(){return n},n}function z(){var n=Object(j.a)(["\n                border-color:#229756    ;\n            "]);return z=function(){return n},n}function Y(){var n=Object(j.a)(["\n                border-color:#ed785b    ;\n            "]);return Y=function(){return n},n}function A(){var n=Object(j.a)(["\n            &:hover{\n                border-color:#BB968D;\n            }\n            "]);return A=function(){return n},n}function T(){var n=Object(j.a)(["\n    border: 1px solid rgba(0,0,0,0.2);\n    border-radius: 8px;\n    background: rgba(0,0,0,0.3);\n    padding: 2%;\n    box-shadow: 4px 4px 20px rgba(0,0,0,.5); \n    width:42%;\n    height:50%;\n    display:grid;\n    place-content: center;\n    overflow: hidden;\n\n    &:nth-child(1) {\n        margin-bottom: 2%;\n    }\n    &:nth-child(2) {\n        margin-bottom: 2%;\n    }\n    span{\n        text-align: center;\n        font-size: 1.4rem;\n    }\n    ","\n"]);return T=function(){return n},n}function L(){var n=Object(j.a)(["\n\n\n    padding: 5%;\n\n    width:100%;\n    height:100%;\n    display:flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n\n"]);return L=function(){return n},n}function P(){var n=Object(j.a)(["\n    border: 1px solid rgba(0,0,0,0.2);\n    border-radius: 8px;\n    background: rgba(0,0,0,0.3);\n    padding: 2%;\n    box-shadow: 4px 4px 20px rgba(0,0,0,.5); \n    width:100%;\n    height:100%;\n    h2 {\n        margin: 1% auto;\n    }\n\n"]);return P=function(){return n},n}function N(){var n=Object(j.a)(["\n    padding: 2%;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    margin: 0 5%;    \n    animation: "," 1s;\n    user-select: none;\n\n\n"]);return N=function(){return n},n}function Q(){var n=Object(j.a)(["\n  0% {\n    transform: scale(0,0)\n  }\n  100% {\n    transform: scale(100%,100%)\n  }\n"]);return Q=function(){return n},n}var B=Object(h.c)(Q()),D=h.b.div(N(),B),J=h.b.div(P()),W=h.b.div(L()),$=h.b.div(T(),(function(n){var e=n.state,t=n.active,r=n.correct,c="";return"chose"!==e||t||(c+=Object(h.a)(A())),t&&"chose"===e&&(c+=Object(h.a)(Y())),!r||"correct"!==e&&"wrong"!==e||(c+=Object(h.a)(z())),t&&"wrong"===e&&(c+=Object(h.a)(C())),c})),H=h.b.button(q());var F=function(n){var e=n.selectThem,t=e.them,a=e.questions,o=n.responseProcessing,i=n.changeOfScene,u=n.levelQuestion,b=n.setLevelQuestion,l=a[u],d=l.point,j=l.questions,h=Object(c.useState)(Math.floor(Math.random()*j.length)),f=j[Object(s.a)(h,1)[0]],x=f.question,p=f.answer,g=f.correctAnswer,O=Object(c.useState)("chose"),m=Object(s.a)(O,2),v=m[0],w=m[1],k=Object(c.useState)(),y=Object(s.a)(k,2),E=y[0],M=y[1];return Object(r.jsx)(S.a.Context,{onError:function(n,e){console.warn(e),console.log("Encountered a MathJax error, re-attempting a typeset!"),n.Hub.Queue(n.Hub.Typeset())},script:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML",options:{asciimath2jax:{useMathMLspacing:!0,delimiters:[["$$","$$"]],preview:"none"}},children:Object(r.jsxs)(D,{children:[Object(r.jsxs)(J,{children:[Object(r.jsxs)("h2",{children:["\u0422\u0435\u043c\u0430: ",t]}),Object(r.jsxs)("h2",{children:["\u041f\u0438\u0442\u0430\u043d\u043d\u044f (\u0431\u0430\u043b\u0456\u0432 ",d,"):  ",Object(r.jsx)(S.a.Text,{text:x})," "]})]}),Object(r.jsxs)(W,{children:[p.map((function(n,e){var t=E===e,c=g===e;return Object(r.jsx)($,{onClick:function(){return function(n){"chose"===v&&M(n)}(e)},correct:c,state:v,active:t,children:Object(r.jsx)("span",{children:Object(r.jsx)(S.a.Text,{text:n})})})})),Object(r.jsx)(H,{onClick:function(){if("chose"===v){if(!E&&0!==E)return;E===g&&(w("correct"),o("correct",d)),E!==g&&(w("wrong"),o("wrong",d))}else b((function(n){return n+1})),i()},children:"chose"===v?"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0441\u0442\u0438":"\u0414\u0430\u043b\u0456"})]})]})})};function I(){var n=Object(j.a)(["\npadding: 2%;\nwidth: 100%;\nheight: 100%;\nanimation: "," 1s;\nborder: 1px solid rgba(0,0,0,0.2);\nborder-radius: 8px;\nbackground: rgba(0,0,0,0.3);\npadding: 5%;\nbox-shadow: 4px 4px 20px rgba(0,0,0,.5); \ndisplay: flex;\nalign-items:center;\n\n"]);return I=function(){return n},n}function Z(){var n=Object(j.a)(["\n   0%,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);\n    animation-timing-function: cubic-bezier(.215, .61, .355, 1)\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(2000px, 0);\n    transform: translate(2000px, 0) ;\n  }\n\n\n\n  to {\n    -webkit-transform: translate(0);\n    transform: translate(0);\n  }\n"]);return Z=function(){return n},n}var _=Object(h.c)(Z()),G=h.b.div(I(),_);var R=function(n){var e=n.toogleEasterEgg;return Object(r.jsx)(G,{onClick:e,children:Object(r.jsx)("h1",{children:"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439 \u0448\u0443\u043a\u0430\u0447. \u0422\u043e\u0431\u0456 \u043f\u043e\u0442\u0440\u0430\u043f\u0438\u043b\u0430 \u0443\u043d\u0456\u043a\u0430\u043b\u044c\u043d\u0430 \u0440\u0456\u0447, \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u0434\u0456\u0437\u043d\u0430\u0442\u0438\u0441\u044f \u043d\u0430 \u0449\u043e \u0442\u0438 \u0437\u0434\u0430\u0442\u043d\u0438\u0439 \u044f\u043a \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u043c\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c, \u0430 \u043c\u043e\u0436\u0435 \u0456 \u0432\u0435\u043b\u0438\u043a\u0438\u0439. \u0412\u0438\u043f\u0440\u043e\u0431\u0443\u0439 \u0441\u0432\u043e\u0457 \u0441\u0438\u043b\u0438, \u0440\u0430\u043f\u0442\u043e\u043c \u0432\u0435\u0441\u044c \u0441\u0432\u0456\u0442 \u0434\u043b\u044f \u0442\u0435\u0431\u0435 \u0432\u0441\u044c\u043e\u0433\u043e \u043b\u0438\u0448\u0435 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0430 \u0441\u0442\u0443\u043f\u0456\u043d\u044c, \u0456 \u0442\u0438 \u0437\u0434\u0430\u0442\u043d\u0438\u0439 \u043f\u0440\u043e\u0433\u0438\u043d\u0430\u0442\u0438 \u0441\u0430\u043c \u0432\u0441\u0435\u0441\u0432\u0456\u0442 \u043f\u0456\u0434 \u0441\u0435\u0431\u0435..."})})};function K(){var n=Object(j.a)(["\nmargin: 20% auto;\n\nbackground: #2D132E;\nborder: 1px solid rgba(0,0,0,0.2);\nborder-radius: 8px;\nbox-shadow: 4px 4px 20px rgba(0,0,0,.5); \ndisplay:grid;\nplace-content: center;\noverflow: hidden;\ntext-align: center;\ndiv {\n  position:relative;\n  height:5%;\n}\n\n\n"]);return K=function(){return n},n}function U(){var n=Object(j.a)(["\nposition: fixed;\nbackground: rgba(0,0,0,0.3);\nheight: 100vh;\nwidth:100%;\ntop: 0;\nanimation: "," 1s;\nuser-select: none;\n\n\n"]);return U=function(){return n},n}function V(){var n=Object(j.a)(["\npadding: 2%;\ndisplay:grid;\ngrid-template-columns: minmax(100px, 25%) 1fr;\nheight: 100%;\nanimation: "," 1s;\n\n"]);return V=function(){return n},n}function X(){var n=Object(j.a)(["\n   0%,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);\n    animation-timing-function: cubic-bezier(.215, .61, .355, 1)\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);\n    transform: translate3d(0, -3000px, 0) scaleY(3)\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0) scaleY(.9);\n    transform: translate3d(0, 25px, 0) scaleY(.9)\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0) scaleY(.95);\n    transform: translate3d(0, -10px, 0) scaleY(.95)\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0) scaleY(.985);\n    transform: translate3d(0, 5px, 0) scaleY(.985)\n  }\n\n  to {\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0)\n  }\n"]);return X=function(){return n},n}function nn(){var n=Object(j.a)(["\ndisplay:grid;\ngrid-template-columns: 1fr minmax(80px, 15%);\nheight: 100vh;\n"]);return nn=function(){return n},n}window.addEventListener("resize",(function(n){var e=document.documentElement.clientWidth;document.documentElement.style.fontSize=e/84+"px"}));var en=h.b.div(nn()),tn=Object(h.c)(X()),rn=h.b.div(V(),tn),cn=h.b.div(U(),_),an=h.b.div(K());var on=function(n){var e=n.db,t=360/e.length,a=Object(c.useState)(-t/2),o=Object(s.a)(a,2),i=o[0],u=o[1],b=Object(c.useState)(0),l=Object(s.a)(b,2),d=l[0],j=l[1],h=Object(c.useState)("wheel"),f=Object(s.a)(h,2),x=f[0],g=f[1],O=Object(c.useState)(0),v=Object(s.a)(O,2),w=v[0],k=v[1],y=Object(c.useState)(e[d].questions.length),M=Object(s.a)(y,2),S=M[0],q=M[1],C=Object(c.useState)(!1),z=Object(s.a)(C,2),Y=z[0],A=z[1],T=Object(c.useState)(0),L=Object(s.a)(T,2),P=L[0],N=L[1],Q=Object(c.useState)(e[d].questions.reduce((function(n,e){return n+e.point}),0)),B=Object(s.a)(Q,1)[0],D=Object(c.useState)(!1),J=Object(s.a)(D,2),W=J[0],$=J[1],I=Object(c.useState)(!1),Z=Object(s.a)(I,2),_=Z[0],G=Z[1];function K(){g((function(n){return"wheel"===n?"question":"question"===n?"wheel":void 0}))}function U(){g((function(n){return"wheel"!==n||_?"easterEgg"===n?"wheel":n:"easterEgg"}))}Object(c.useEffect)((function(){var n=Math.round(-(i+t/2)%360/t);8===n&&(n=0),j(n)}),[i]),Object(c.useEffect)((function(){S<=0&&"wheel"===x&&G(!0)}),[S,x]);var V=Object(r.jsxs)(rn,{children:[Object(r.jsx)(E,{db:e,select:d}),Object(r.jsx)(m,{handleClickWheel:function(n){n.preventDefault(),n.stopPropagation(),Y?(P<e[d].questions.length&&K(),A(!1)):W||function(){$(!0);var n=Math.floor(3e3*Math.random()),e=1e3+Math.floor(3e3*Math.random());n=2*e;var t=null,r=0;requestAnimationFrame((function c(a){t||(t=a);var o=a-t,i=o/n,s=i+Math.pow(i,2)*(1-i);u((function(n){return n-(Math.floor(s*e)-r)})),r=Math.floor(s*e),o<=n?requestAnimationFrame(c):(t=null,A(!0),$(!1))}))}()},db:e,rotate:i,offset:t})]}),X="easterEgg"===x?Object(r.jsx)(R,{toogleEasterEgg:U}):"wheel"===x?V:Object(r.jsx)(F,{selectThem:e[d],responseProcessing:function(n,e){"correct"===n?(k((function(n){return n+e})),q((function(n){return n-1}))):"wrong"===n&&q((function(n){return n-1}))},changeOfScene:K,levelQuestion:P,setLevelQuestion:N});return Object(r.jsxs)(en,{children:[Object(r.jsx)("div",{children:X}),_?Object(r.jsx)(cn,{children:Object(r.jsxs)(an,{children:[Object(r.jsx)("h1",{children:"\u0422\u0430\u0434\u0430\u043c!!! \u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e."}),Object(r.jsx)("div",{children:Object(r.jsx)(H,{onClick:function(){k(0),N(0),q(e[d].questions.length),G(!1)},children:"\u0421\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437"})}),Object(r.jsxs)("h2",{children:["\u0412\u0438 \u043d\u0430\u0431\u0440\u0430\u043b\u0438 \u0431\u0430\u043b\u0456\u0432 ",w," \u0437 ",B," "]})]})}):null,Object(r.jsx)(p,{score:w,attempts:S,maxPoint:B,toogleEasterEgg:U})]})};var sn=function(){var n=Object(c.useState)(!0),e=Object(s.a)(n,2),t=e[0],a=e[1],o=Object(c.useState)(!0),i=Object(s.a)(o,2),u=i[0],b=i[1];return Object(c.useEffect)((function(){(function(n){return d.apply(this,arguments)})("/wheel-of-fortune/db.json").then((function(n){b(n),a(!1)})).catch((function(n){return console.error(n)}))}),[]),t?null:Object(r.jsx)(on,{db:u})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(sn,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.7c258495.chunk.js.map