(this["webpackJsonpwheel-of-fortune"]=this["webpackJsonpwheel-of-fortune"]||[]).push([[0],{23:function(n,e,t){},27:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t(1),a=t.n(c),o=t(14),i=t.n(o),s=(t(23),t(4)),u=t(5),l=t.n(u),b=t(11);function d(){return(d=Object(b.a)(l.a.mark((function n(e){var t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}});case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("could not feth ".concat(e,", status:").concat(t.status));case 5:return n.next=7,t.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var j=t(2),f=t(3);function h(){var n=Object(j.a)(["\n    background: #181414 ;\n    display:flex ;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;   \n    text-align:center;\n    box-shadow: 4px 4px 20px rgba(0,0,0,.5); \n    user-select: none;\n    z-index: 1;\n\n"]);return h=function(){return n},n}var x=f.b.div(h());var p=function(n){var e=n.attempts,t=n.score,c=n.questions,a=n.toogleEasterEgg,o=c.reduce((function(n,e){return n+e.point}),0);return Object(r.jsxs)(x,{children:[Object(r.jsx)("h1",{children:"\u041f\u043e\u043f\u044b\u0442\u043e\u043a"}),Object(r.jsx)("h2",{children:e}),Object(r.jsx)("h1",{children:" \u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0431\u0430\u043b\u043e\u0432"}),Object(r.jsx)("h2",{children:o}),Object(r.jsx)("h1",{children:" \u041d\u0430\u0431\u0440\u0430\u043d\u043e"}),Object(r.jsx)("h2",{children:t}),Object(r.jsx)("span",{style:{cursor:"pointer"},onClick:a,children:"Aaaa!!\u0427\u0442\u043e \u0437\u0434\u0435\u0441\u044c \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442!??"})]})};t(27);function g(){var n=Object(j.a)(["\ndisplay:flex;\njustify-content:center;\nalign-items:center;\n\nsvg {\n    width: 27vw;\n    height:27vw;\n}\n"]);return g=function(){return n},n}var O=f.b.div(g());var m=function(n){var e=n.db,t=n.rotate,c=n.handleClickWheel,a=n.offset;function o(){var n=e.map((function(n,t){var c=t+1,o=2*Math.PI*25/e.length;return Object(r.jsxs)("g",{className:"g"+c,style:{transform:"rotate(".concat(a*t,"deg)")},children:[Object(r.jsx)("circle",{className:"sector",r:"25",cx:"50",cy:"50",strokeDasharray:"".concat(o,", 157.07963267948966\n                    ")}),Object(r.jsx)("text",{x:"84",y:"50",style:{transform:"rotate(".concat(.66*a,"deg)")},children:c})]},t)}));return Object(r.jsx)("span",{className:"circWrap",children:Object(r.jsx)("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",style:{transform:"rotate(".concat(t,"deg)")},children:n})})}return Object(r.jsx)(O,{onClick:c,children:Object(r.jsxs)("span",{className:"wrapper",children:[Object(r.jsx)(o,{}),Object(r.jsxs)("span",{className:"arrow-7",children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]})]})})};function v(){var n=Object(j.a)(["\nfont-size: 1.2rem;\ncolor: ",";\n"]);return v=function(){return n},n}function w(){var n=Object(j.a)(["\nborder: 1px solid rgba(0,0,0,0.2);\nborder-radius: 8px;\nbackground: rgba(0,0,0,0.3);\npadding: 5%;\nbox-shadow: 4px 4px 20px rgba(0,0,0,.5); \n\n\n"]);return w=function(){return n},n}var k=f.b.div(w()),y=f.b.h2(v(),(function(n){return n.select?"red":null}));var M=function(n){var e=n.db,t=n.select;return Object(r.jsx)(k,{children:e?e.map((function(n,e){var c=n.them;return e===t?Object(r.jsx)(y,{select:!0,children:c},e):Object(r.jsx)(y,{children:c},e)})):Object(r.jsx)("h2",{style:{color:"red",textAlign:"center"},children:"\u041e\u0442\u0441\u0443\u0446\u0442\u0432\u0443\u0435\u0442 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"})})},E=t(8),S=t.n(E);function q(){var n=Object(j.a)(["\n    box-shadow: 4px 4px 20px rgba(0,0,0,.5);    \n    position:absolute;\n    left:50%;\n    top:50%;\n    transform:translate(-50%,-50%);\n    border: 1px solid rgba(0,0,0,0.2);\n    font: inherit;\n    color: inherit;\n    outline:none;\n    border-radius: 4px;\n    background: #d53e07;\n    color:#5A092A;\n    padding: 4px 8px;\n    font-weight: 800;\n    text-align: center;\n    &:hover{\n        background-color: #aa3206;\n    }\n"]);return q=function(){return n},n}function z(){var n=Object(j.a)(["\n                border-color:#e52b50    ;\n            "]);return z=function(){return n},n}function A(){var n=Object(j.a)(["\n                border-color:#229756    ;\n            "]);return A=function(){return n},n}function C(){var n=Object(j.a)(["\n                border-color:#ed785b    ;\n            "]);return C=function(){return n},n}function Y(){var n=Object(j.a)(["\n            &:hover{\n                border-color:#BB968D;\n            }\n            "]);return Y=function(){return n},n}function T(){var n=Object(j.a)(["\n    border: 1px solid rgba(0,0,0,0.2);\n    border-radius: 8px;\n    background: rgba(0,0,0,0.3);\n    padding: 2%;\n    box-shadow: 4px 4px 20px rgba(0,0,0,.5); \n    width:40%;\n    height:50%;\n    display:grid;\n    place-content: center;\n\n    &:nth-child(1) {\n        margin-bottom: 2%;\n    }\n    &:nth-child(2) {\n        margin-bottom: 2%;\n    }\n    span{\n        text-align: center;\n        font-size: 20px;\n    }\n    ","\n"]);return T=function(){return n},n}function L(){var n=Object(j.a)(["\n\n\n    padding: 5%;\n\n    width:100%;\n    height:100%;\n    display:flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n\n"]);return L=function(){return n},n}function N(){var n=Object(j.a)(["\n    border: 1px solid rgba(0,0,0,0.2);\n    border-radius: 8px;\n    background: rgba(0,0,0,0.3);\n    padding: 2%;\n    box-shadow: 4px 4px 20px rgba(0,0,0,.5); \n    width:100%;\n    height:100%;\n\n"]);return N=function(){return n},n}function Q(){var n=Object(j.a)(["\n    padding: 2%;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    margin: 0 5%;    \n    animation: "," 1s;\n    user-select: none;\n\n\n"]);return Q=function(){return n},n}function B(){var n=Object(j.a)(["\n  0% {\n    transform: scale(0,0)\n  }\n  100% {\n    transform: scale(100%,100%)\n  }\n"]);return B=function(){return n},n}var J=Object(f.c)(B()),P=f.b.div(Q(),J),W=f.b.div(N()),$=f.b.div(L()),D=f.b.div(T(),(function(n){var e=n.state,t=n.active,r=n.correct,c="";return"chose"!==e||t||(c+=Object(f.a)(Y())),t&&"chose"===e&&(c+=Object(f.a)(C())),!r||"correct"!==e&&"wrong"!==e||(c+=Object(f.a)(A())),t&&"wrong"===e&&(c+=Object(f.a)(z())),c})),H=f.b.button(q());var F=function(n){var e=n.selectThem,t=e.them,a=e.questions,o=n.responseProcessing,i=n.changeOfScene,u=n.levelQuestion,l=n.setLevelQuestion,b=a[u],d=b.point,j=b.questions,f=Object(c.useState)(Math.floor(Math.random()*j.length)),h=j[Object(s.a)(f,1)[0]],x=h.question,p=h.answer,g=h.correctAnswer,O=Object(c.useState)("chose"),m=Object(s.a)(O,2),v=m[0],w=m[1],k=Object(c.useState)(),y=Object(s.a)(k,2),M=y[0],E=y[1];return Object(r.jsx)(S.a.Context,{onError:function(n,e){console.warn(e),console.log("Encountered a MathJax error, re-attempting a typeset!"),n.Hub.Queue(n.Hub.Typeset())},script:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML",options:{asciimath2jax:{useMathMLspacing:!0,delimiters:[["$$","$$"]],preview:"none"}},children:Object(r.jsxs)(P,{children:[Object(r.jsxs)(W,{children:[Object(r.jsxs)("h2",{children:["\u0422\u0435\u043c\u0430: ",t]}),Object(r.jsxs)("h2",{children:["\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0430 ",d," \u0431\u0430\u043b\u043b:  ",Object(r.jsx)(S.a.Text,{text:x})," "]})]}),Object(r.jsxs)($,{children:[p.map((function(n,e){var t=M===e,c=g===e;return Object(r.jsx)(D,{onClick:function(){return function(n){"chose"===v&&E(n)}(e)},correct:c,state:v,active:t,children:Object(r.jsx)("span",{children:Object(r.jsx)(S.a.Text,{text:n})})})})),Object(r.jsx)(H,{onClick:function(){if("chose"===v){if(!M&&0!==M)return;M===g&&(w("correct"),o("correct",d)),M!==g&&(w("wrong"),o("wrong",d))}else l((function(n){return n+1})),i()},children:"chose"===v?"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c":"\u0414\u0430\u043b\u044c\u0448\u0435"})]})]})})};function I(){var n=Object(j.a)(["\npadding: 2%;\nwidth: 100%;\nheight: 100%;\nanimation: "," 1s;\nborder: 1px solid rgba(0,0,0,0.2);\nborder-radius: 8px;\nbackground: rgba(0,0,0,0.3);\npadding: 5%;\nbox-shadow: 4px 4px 20px rgba(0,0,0,.5); \ndisplay: flex;\nalign-items:center;\n\n"]);return I=function(){return n},n}function Z(){var n=Object(j.a)(["\n   0%,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);\n    animation-timing-function: cubic-bezier(.215, .61, .355, 1)\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(2000px, 0);\n    transform: translate(2000px, 0) ;\n  }\n\n\n\n  to {\n    -webkit-transform: translate(0);\n    transform: translate(0);\n  }\n"]);return Z=function(){return n},n}var G=Object(f.c)(Z()),R=f.b.div(I(),G);var _=function(n){var e=n.toogleEasterEgg;return Object(r.jsx)(R,{onClick:e,children:Object(r.jsx)("h1",{children:"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439 \u0438\u0441\u043a\u0430\u0442\u0435\u043b\u044c. \u0422\u0435\u0431\u0435 \u043f\u043e\u043f\u0430\u043b\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0435\u0449\u044c, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0443\u0437\u043d\u0430\u0442\u044c \u043d\u0430 \u0447\u0442\u043e \u0442\u044b \u0441\u043f\u043e\u0441\u043e\u0431\u0435\u043d \u043a\u0430\u043a \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u043c\u044b\u0441\u043b\u0438\u0442\u0435\u043b\u044c, \u0430 \u043c\u043e\u0436\u0435\u0442 \u0438 \u0432\u0435\u043b\u0438\u043a\u0438\u0439. \u041e\u043f\u0440\u043e\u0431\u0443\u0439 \u0441\u0432\u043e\u0438 \u0441\u0438\u043b\u044b, \u0432\u0434\u0440\u0443\u0433 \u0432\u0435\u0441\u044c \u043c\u0438\u0440 \u0434\u043b\u044f \u0442\u0435\u0431\u044f \u0432\u0441\u0435\u0433\u043e \u043b\u0438\u0448\u044c \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0430\u044f \u0441\u0442\u0443\u043f\u0435\u043d\u044c, \u0438 \u0442\u044b \u0441\u043f\u043e\u0441\u043e\u0431\u0435\u043d \u043f\u0440\u043e\u0433\u0438\u0431\u0430\u0442\u044c \u0441\u0430\u043c\u043e \u043c\u0438\u0440\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u0434 \u0441\u0435\u0431\u044f..."})})};function K(){var n=Object(j.a)(["\npadding: 2%;\ndisplay:grid;\ngrid-template-columns: minmax(100px, 25%) 1fr;\nheight: 100%;\nanimation: "," 1s;\n\n"]);return K=function(){return n},n}function U(){var n=Object(j.a)(["\n   0%,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);\n    animation-timing-function: cubic-bezier(.215, .61, .355, 1)\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);\n    transform: translate3d(0, -3000px, 0) scaleY(3)\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0) scaleY(.9);\n    transform: translate3d(0, 25px, 0) scaleY(.9)\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0) scaleY(.95);\n    transform: translate3d(0, -10px, 0) scaleY(.95)\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0) scaleY(.985);\n    transform: translate3d(0, 5px, 0) scaleY(.985)\n  }\n\n  to {\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0)\n  }\n"]);return U=function(){return n},n}function V(){var n=Object(j.a)(["\ndisplay:grid;\ngrid-template-columns: 1fr minmax(80px, 15%);\nheight: 100vh;\n"]);return V=function(){return n},n}window.addEventListener("resize",(function(n){var e=document.documentElement.clientWidth;document.documentElement.style.fontSize=e/84+"px"}));var X=f.b.div(V()),nn=Object(f.c)(U()),en=f.b.div(K(),nn);var tn=function(n){var e=n.db,t=360/e.length,a=Object(c.useState)(-t/2),o=Object(s.a)(a,2),i=o[0],u=o[1],l=Object(c.useState)(0),b=Object(s.a)(l,2),d=b[0],j=b[1],f=Object(c.useState)("wheel"),h=Object(s.a)(f,2),x=h[0],g=h[1],O=Object(c.useState)(0),v=Object(s.a)(O,2),w=v[0],k=v[1],y=Object(c.useState)(e[d].questions.length),E=Object(s.a)(y,2),S=E[0],q=E[1],z=Object(c.useState)(!1),A=Object(s.a)(z,2),C=A[0],Y=A[1],T=Object(c.useState)(0),L=Object(s.a)(T,2),N=L[0],Q=L[1],B=Object(c.useState)(!1),J=Object(s.a)(B,2),P=J[0],W=J[1];function $(){g((function(n){return"wheel"===n?"question":"question"===n?"wheel":void 0}))}function D(){g((function(n){return"wheel"===n?"easterEgg":"easterEgg"===n?"wheel":void 0}))}Object(c.useEffect)((function(){var n=Math.round(-(i+t/2)%360/t);8===n&&(n=0),j(n)}),[i]);var H=Object(r.jsxs)(en,{children:[Object(r.jsx)(M,{db:e,select:d}),Object(r.jsx)(m,{handleClickWheel:function(n){n.preventDefault(),n.stopPropagation(),C?(N<e[d].questions.length&&$(),Y(!1)):P||function(){W(!0);var n=Math.floor(3e3*Math.random()),e=1e3+Math.floor(3e3*Math.random());n=2*e;var t=null,r=0;requestAnimationFrame((function c(a){t||(t=a);var o=a-t,i=o/n,s=i+Math.pow(i,2)*(1-i);u((function(n){return n-(Math.floor(s*e)-r)})),r=Math.floor(s*e),o<=n?requestAnimationFrame(c):(t=null,Y(!0),W(!1))}))}()},db:e,rotate:i,offset:t})]}),I="easterEgg"===x?Object(r.jsx)(_,{toogleEasterEgg:D}):"wheel"===x?H:Object(r.jsx)(F,{selectThem:e[d],responseProcessing:function(n,e){"correct"===n?(k((function(n){return n+e})),q((function(n){return n-1}))):"wrong"===n&&q((function(n){return n-1}))},changeOfScene:$,levelQuestion:N,setLevelQuestion:Q});return Object(r.jsxs)(X,{children:[Object(r.jsx)("div",{children:I}),Object(r.jsx)(p,{score:w,attempts:S,questions:e[d].questions,toogleEasterEgg:D})]})};var rn=function(){var n=Object(c.useState)(!0),e=Object(s.a)(n,2),t=e[0],a=e[1],o=Object(c.useState)(!0),i=Object(s.a)(o,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){(function(n){return d.apply(this,arguments)})("/wheel-of-fortune/db.json").then((function(n){l(n),a(!1)})).catch((function(n){return console.error(n)}))}),[]),t?null:Object(r.jsx)(tn,{db:u})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(rn,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.f36ef721.chunk.js.map