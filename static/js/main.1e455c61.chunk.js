(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(8),r=n.n(i),o=(n(15),n(10)),d=n(3),s=n(6),u=n.n(s),l=n(9),b=n.n(l),m=n(0),j=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],i=n[1];return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addItem(a),i("")},children:[Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(e){i(e.target.value)},placeholder:"Enter new item"})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("button",{type:"submit",disabled:0==a.length,className:"btn btn-primary ".concat(b.a.add_btn),children:"Add Item"})})]})})},f=n(7),p=n.n(f),h=function(e){return Object(m.jsx)("div",{onClick:function(t){t.preventDefault(),e.deleteItem(e.value.id)},className:p.a.box_margin,children:Object(m.jsx)("p",{className:p.a.text,children:e.value.value})})};var v=function(){var e=Object(c.useState)(5),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([{id:"item-1",value:"Buy some expensive Gadgets"},{id:"item-2",value:"Explore Different Places"},{id:"item-3",value:"Do something for few people who struggles to afford basic needs"},{id:"item-4",value:"Do Top Few Terrifying Bungee Jumps In The World"}]),r=Object(d.a)(i,2),s=r[0],l=r[1],b=function(e){l((function(t){return t.filter((function(t){return t.id!==e}))}))};return Object(m.jsxs)("div",{className:"container ".concat(u.a.todo_cntnr),children:[Object(m.jsx)("div",{className:u.a.header,children:Object(m.jsx)("h1",{children:"To-do List"})}),Object(m.jsx)(j,{addItem:function(e){l((function(t){var c={id:"item-"+n,value:e};return a((function(e){return e+1})),[c].concat(Object(o.a)(t))}))}}),s.map((function(e){return Object(m.jsx)(h,{value:e,deleteItem:b},e.id)}))]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};n(17);r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),x()},6:function(e,t,n){e.exports={todo_cntnr:"App_todo_cntnr__25aIy",header:"App_header__3ZZ1n"}},7:function(e,t,n){e.exports={box_margin:"Item_box_margin__3hTr0",text:"Item_text__TWGpL"}},9:function(e,t,n){e.exports={add_btn:"AddItem_add_btn__1qv_-"}}},[[18,1,2]]]);
//# sourceMappingURL=main.1e455c61.chunk.js.map