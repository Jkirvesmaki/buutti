(this.webpackJsonpbuutti=this.webpackJsonpbuutti||[]).push([[0],{20:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(15),u=n.n(i),a=(n(20),n(3)),r=n(0),s=function(t){var e=t.book;return Object(r.jsxs)("div",{children:[e.author,Object(r.jsx)("br",{}),e.title]})},l=n(4),j=n.n(l),b="http://localhost:3001/api/books",d=function(){return j.a.get(b).then((function(t){return t.data}))},O=function(t){return j.a.post(b,t).then((function(t){return t.data}))},h=function(t,e){return j.a.put("".concat(b,"/").concat(t),e).then((function(t){return t.data}))},f=function(t){return j.a.delete("".concat(b,"/").concat(t)).then((function(t){return t.data}))},v=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)(null),u=Object(a.a)(i,2),l=(u[0],u[1],Object(c.useState)(null)),j=Object(a.a)(l,2),b=j[0],v=j[1],x=Object(c.useState)(""),p=Object(a.a)(x,2),g=p[0],k=p[1],S=Object(c.useState)(""),w=Object(a.a)(S,2),m=w[0],C=w[1],N=Object(c.useState)(""),D=Object(a.a)(N,2),y=D[0],B=D[1],E=Object(c.useState)(""),J=Object(a.a)(E,2),A=J[0],I=J[1];Object(c.useEffect)((function(){d().then((function(t){o(t)}))}),[]);var M=function(t){t.preventDefault();var e={author:m,title:g,description:y};O(e).then((function(t){o(n.concat(t))})),v("New book "+e.title+" was added!"),k(""),console.log(g),C(""),B("")},T=function(t){console.log(t.target.value),k(t.target.value)},q=function(t){console.log(t.target.value),C(t.target.value)},z=function(t){console.log(t.target.value),B(t.target.value)};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Books"}),b,Object(r.jsxs)("form",{onSubmit:M,children:[Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["Title:",Object(r.jsx)("input",{value:g,onChange:T})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["Author:",Object(r.jsx)("input",{value:m,onChange:q})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["Description:",Object(r.jsx)("input",{value:y,onChange:z})]})}),Object(r.jsx)("button",{type:"submit",children:"Save new"})]}),Object(r.jsx)("button",{onClick:function(){var t;""!=(t=A)?(f(t),v("book was deleted!"),k(""),C(""),B(""),I("")):v("No id was given")},children:"Delete"}),Object(r.jsx)("button",{onClick:function(){return function(t,e){var n={author:m,title:g,description:y};h(t,n),v("New book "+n.title+" was updated!"),k(""),C(""),B("")}(A)},children:"Save"})]}),Object(r.jsx)("div",{children:Object(r.jsx)("ul",{children:n.map((function(t){return Object(r.jsx)("button",{className:"book",onClick:function(){return function(t){k(t.title),C(t.author),B(t.description),I(t.id)}(t)},children:Object(r.jsx)(s,{book:t},t.id)})}))})})]})};u.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7ef8631a.chunk.js.map