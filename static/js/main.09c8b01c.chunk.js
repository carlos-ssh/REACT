(this.webpackJsonpreactive=this.webpackJsonpreactive||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),o=c(10),a=c.n(o),i=(c(17),c(4)),l=(c(18),c(12)),d=(c(19),c(1)),r=function(e){var t=e.setInputText,c=e.todos,s=e.setTodos,n=e.inputText,o=e.setStatus;return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"container-form",children:[Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)("input",{className:"input",value:n,onChange:function(e){t(e.target.value)},type:"text",name:"task",placeholder:"Task"}),Object(d.jsx)("button",{className:"button-submit",onClick:function(e){e.preventDefault(),s([].concat(Object(l.a)(c),[{text:n,completed:!1,id:1e3*Math.random()}])),t("")},type:"submit",placeholder:"+ Add Task",children:"Add Task"})]}),Object(d.jsx)("div",{className:"div-dd",children:Object(d.jsxs)("select",{onChange:function(e){o(e.target.value)},name:"todos",className:"filter-todo",children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"completed",children:"Completed"}),Object(d.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})})},j=(c(5),c(9)),u=c(8),b=function(e){var t=e.text,c=e.todo,s=e.todos,n=e.setTodos;return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("li",{className:"todo-item ".concat(c.completed?"active":""),children:t}),Object(d.jsx)("button",{onClick:function(){n(s.map((function(e){return e.id===c.id?Object(j.a)(Object(j.a)({},e),{},{completed:!e.completed}):(console.log(e),e)})))},className:"done",children:Object(d.jsx)(u.a,{})}),Object(d.jsx)("button",{onClick:function(){n(s.filter((function(e){return e.id!==c.id})))},className:"del",children:Object(d.jsx)(u.b,{})})]})},O=function(e){var t=e.todos,c=e.setTodos,s=e.filteredTodos;return Object(d.jsx)("div",{className:"todo-list",children:Object(d.jsx)("ul",{children:s.map((function(e){return Object(d.jsx)(b,{setTodos:c,todos:t,todo:e,text:e.text},e.id)}))})})},m=c(11),x=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("nav",{className:"nav",children:Object(d.jsx)("ul",{children:Object(d.jsxs)("li",{children:[Object(d.jsx)(m.a,{className:"atag icon"}),Object(d.jsx)("a",{href:"/",className:"atag",children:" TODO's"})]})})})})},f=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"content has-text-centered",children:Object(d.jsxs)("p",{className:"text-center",children:[Object(d.jsx)("strong",{children:"Todo App"})," ","by",Object(d.jsx)("a",{href:"https://www.github.com.carlos-ssh",children:"@CARLOS-SSH"}),"."]})})})})};var h=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],o=Object(s.useState)([]),a=Object(i.a)(o,2),l=a[0],j=a[1],u=Object(s.useState)("all"),b=Object(i.a)(u,2),m=b[0],h=b[1],p=Object(s.useState)([]),v=Object(i.a)(p,2),N=v[0],g=v[1];Object(s.useEffect)((function(){k()}),[]),Object(s.useEffect)((function(){S(),T()}),[l,m]);var S=function(){switch(m){case"completed":g(l.filter((function(e){return!0===e.completed})));break;case"uncompleted":g(l.filter((function(e){return!1===e.completed})));break;default:g(l)}},T=function(){localStorage.setItem("todos",JSON.stringify(l))},k=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));j(e)}};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(x,{}),Object(d.jsxs)("div",{children:[Object(d.jsx)(r,{inputText:c,todos:l,setTodos:j,setInputText:n,setStatus:h}),Object(d.jsx)(O,{filteredTodos:N,setTodos:j,todos:l})]}),Object(d.jsx)(f,{})]})};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))},5:function(e,t,c){}},[[21,1,2]]]);
//# sourceMappingURL=main.09c8b01c.chunk.js.map