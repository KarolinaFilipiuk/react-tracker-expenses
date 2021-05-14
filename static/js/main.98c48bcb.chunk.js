(this["webpackJsonpreact-tracker-expenses"]=this["webpackJsonpreact-tracker-expenses"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(8),s=n.n(l),i=(n(14),n(5)),r=n(2),u=n(7),o=(n(15),n(0)),j=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),u=i[0],j=i[1],d=Object(a.useState)(""),b=Object(r.a)(d,2),x=b[0],h=b[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:+u,date:new Date(x)};e.onSaveExpenseData(n),l(""),j(""),h("")},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",value:c,onChange:function(e){l(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){j(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){h(e.target.value)}})]})]}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{type:"submit",children:"Add Expense"})]})]})},d=(n(17),function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],l=n[1];return Object(o.jsxs)("div",{className:"new-expense",children:[!c&&Object(o.jsx)("button",{onClick:function(){l(!0)},children:"Add New Expense"}),c&&Object(o.jsx)(j,{onSaveExpenseData:function(t){var n=Object(u.a)(Object(u.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),l(!1)},onCancel:function(){l(!1)}})]})});n(18);var b=function(e){var t="card "+e.className;return Object(o.jsxs)("div",{className:t,children:[" ",e.children," "]})},x=(n(19),function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter by year"}),Object(o.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"})]})]})})}),h=(n(20),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsxs)("div",{className:"expense-date__month",children:[" ",t," "]}),Object(o.jsxs)("div",{className:"expense-date__year",children:[" ",a," "]}),Object(o.jsxs)("div",{className:"expense-date__day",children:[" ",n," "]})]})}),O=(n(21),function(e){return Object(o.jsx)("li",{children:Object(o.jsxs)(b,{className:"expense-item",children:[Object(o.jsx)(h,{date:e.date}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})}),v=(n(22),function(e){return 0===e.items.length?Object(o.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(o.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(o.jsx)(O,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),m=n(9),p=(n(23),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar__inner",children:Object(o.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(o.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),f=(n(24),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(i.a)(t));return Object(o.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(o.jsx)(p,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),g=function(e){var t,n=[{label:"jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(m.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(o.jsx)(f,{dataPoints:n})},_=(n(25),function(e){var t=Object(a.useState)("2020"),n=Object(r.a)(t,2),c=n[0],l=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(o.jsx)("div",{children:Object(o.jsxs)(b,{className:"expenses",children:[Object(o.jsx)(x,{selected:c,onChangeFilter:function(e){l(e)}}),Object(o.jsx)(g,{expenses:s}),Object(o.jsx)(v,{items:s})]})})}),N=[{id:"e1",title:" Cookbook",amount:194.12,date:new Date(2020,7,14)},{id:"e2",title:"New laptop",amount:1399.49,date:new Date(2021,9,12)},{id:"e3",title:"Health insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"Coffee mug",amount:44.5,date:new Date(2021,5,12)},{id:"e5",title:"Headphones ",amount:65.99,date:new Date(2019,4,20)},{id:"e6",title:"Birthday gift",amount:87.37,date:new Date(2020,2,21)},{id:"e7",title:"Watermelon",amount:5.67,date:new Date(2019,7,19)}],w=function(){var e=Object(a.useState)(N),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{onAddExpense:function(e){c((function(t){return[e].concat(Object(i.a)(t))}))}}),Object(o.jsx)(_,{items:n})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),l(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),S()}],[[26,1,2]]]);
//# sourceMappingURL=main.98c48bcb.chunk.js.map