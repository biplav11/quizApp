(this.webpackJsonpnewapp=this.webpackJsonpnewapp||[]).push([[0],{4:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),l=n(1),o=function(e){var t=e.ques,n=e.ind,a=e.checked,r=e.handleChange;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,t.question),c.a.createElement("form",null,t.options.map((function(e,t){return c.a.createElement(c.a.Fragment,{key:t},c.a.createElement("input",{type:"radio",value:e,name:"question".concat(n),id:"ans".concat(t+1,"q").concat(n+1),checked:a[n]===e,onChange:r}),c.a.createElement("label",{htmlFor:"ans".concat(t+1,"q").concat(n+1)},e),c.a.createElement("br",null))}))))},u={height:30,width:100,backgroundColor:"#33ffCC",marginTop:10},i=function(e){var t=[{question:"Who invented Unix",options:["Issac Newton","Charles Babbage","Dennis Ritiche","Steve Jobs"],answer:"Dennis Ritiche"},{question:"Which is not a browser",options:["Chrome","Edge","Firefox","Facebook"],answer:"Facebook"},{question:"Who is the father of computer science",options:["Issac Newton","Charles Babbage","Dennis Ritiche","Steve Jobs"],answer:"Charles Babbage"}],n=Object(a.useState)(0),r=Object(l.a)(n,2),i=r[0],s=r[1],h=Object(a.useState)(!1),m=Object(l.a)(h,2),b=m[0],E=m[1],p=Object(a.useState)(0),g=Object(l.a)(p,2),d=g[0],f=g[1],w=Object(a.useState)(new Array(t.length).fill(null)),q=Object(l.a)(w,2),v=q[0],k=q[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"This is quiz app"),c.a.createElement("h2",null,"Question List"),i<t.length?c.a.createElement(c.a.Fragment,null,c.a.createElement(o,{ques:t[i],ind:i,handleChange:function(){var e=v;e[i]=document.querySelector('input[name="question'.concat(i,'"]:checked')).value,f(d+1),k(e),E(!0)},checked:v}),i>0?c.a.createElement("button",{style:u,onClick:function(){s(i-1)}}," Prev "):"",b||null!==v[i]?c.a.createElement("button",{style:u,onClick:function(){E(!1),s(i+1)}},i===t.length-1?"Finish":"Next"):""):c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"You have completed the question"),c.a.createElement("h2",null,"You scored ",function(){var e,n=function(){var e=0;return v.forEach((function(n,a){n===t[a].answer&&e++})),e}(),a=n/t.length;return e=a<.4?"red":a<.7?"yellow":"green",c.a.createElement("span",{style:{color:e}},n)}()," out of ",t.length),c.a.createElement("div",null,"============================================================"),t.map((function(e,t){return c.a.createElement(c.a.Fragment,{key:t},c.a.createElement("h2",null,e.question),c.a.createElement("h3",null,"Correct Answer : ",e.answer))}))))};Object(r.render)(c.a.createElement(i,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.b43f0d9e.chunk.js.map