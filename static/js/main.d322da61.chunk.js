(this.webpackJsonpmpintegracion=this.webpackJsonpmpintegracion||[]).push([[0],{34:function(e,t,a){e.exports=a(62)},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(14),o=a.n(r),l=(a(39),a(4)),i=a(8),u=a(32),s=a(13),m={productos:[],error:"",producto:{}},d=Object(i.c)({productos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LISTAR_PRODUCTOS":return Object(s.a)({},e,{productos:t.payload,error:!1});case"LISTAR_PRODUCTOS_ERROR":return Object(s.a)({},e,{productos:[],error:t.payload});case"MOSTRAR_PRODUCTO":return Object(s.a)({},e,{producto:t.payload,error:!1});case"MOSTRAR_PRODUCTO_ERROR":return Object(s.a)({},e,{productos:[],producto:{},error:t.payload});default:return{state:e}}}}),p=[u.a],E=Object(i.e)(d,[],Object(i.d)(i.a.apply(void 0,p),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),b=a(10),f=a(9);function h(){return n.a.createElement("div",{className:"d-flex justify-content-between col-md-8 m-auto"},n.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),n.a.createElement(b.b,{to:"/",className:"navbar nav-link"},"Home"),n.a.createElement("h2",null,"Tiendita"),n.a.createElement(b.b,{to:"/products/create",className:"navbar nav-link"},"Create"))}var O=a(16),v=a.n(O),R=v.a.create({baseURL:"http://localhost:4000"});function g(){return function(e){R.get("/productos").then((function(t){e(N(t.data))})).catch((function(t){e(w(t))}))}}var N=function(e){return{type:"LISTAR_PRODUCTOS",payload:e}},w=function(e){return{type:"LISTAR_PRODUCTOS_ERROR",payload:e}};function y(e){var t=e.productos,a=Object(l.b)();return t?t.map((function(e){return n.a.createElement("tr",{key:e},n.a.createElement("th",{scope:"row"},e.id),n.a.createElement("td",null,e.title),n.a.createElement("td",null,e.unit_price),n.a.createElement("td",null,e.quantity),n.a.createElement(b.b,{to:"/productos/".concat(e.id),className:"btn btn-info"},"Ver"))})):(a(w()),null)}function _(){var e=Object(l.b)();Object(c.useEffect)((function(){e(g())}),[e]);var t=Object(l.c)((function(e){return e.productos.productos}));return n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("table",{className:"table table-hover mt-5"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"ID"),n.a.createElement("th",{scope:"col"},"Nombre"),n.a.createElement("th",{scope:"col"},"Precio"),n.a.createElement("th",{scope:"col"},"Cantidad"),n.a.createElement("th",{scope:"col"},"Accion"))),n.a.createElement("tbody",null,n.a.createElement(y,{productos:t}))))}var T=function(e){return{type:"MOSTRAR_PRODUCTO",payload:e}},j=function(e){return{type:"MOSTRAR_PRODUCTO_ERROR",payload:e}};function S(e){var t=e.match,a=Object(l.b)(),r=Object(l.c)((function(e){return e.productos.producto})),o=t.params.id;return Object(c.useEffect)((function(){a(function(e){return function(t){R.get("http://localhost:4000/productos/".concat(e)).then((function(e){t(T(e.data))})).catch((function(e){t(j(e))}))}}(o))}),[a,o]),r?n.a.createElement("div",{className:"col-md-6 m-auto"},n.a.createElement("div",{className:"card border-secondary mb-3 mt-5"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h3",{className:"text-center font-weight-bold text-uppercase"},r.title)),n.a.createElement("div",{className:"card-body"},n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item font-weight-bold"},"Precio: $",r.unit_price),n.a.createElement("li",{className:"list-group-item font-weight-bold"},"Cantidad disponible: ",r.quantity))))):null}var D=function(){var e=Object(l.b)();Object(c.useEffect)((function(){e(g())}),[e]);var t=Object(l.c)((function(e){return e.productos.productos}));return t?(console.log(t),n.a.createElement("div",null,n.a.createElement("h2",null,"CheckOut"),n.a.createElement("div",{className:"col-md-6 m-auto"},n.a.createElement("div",null,n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v.a.post("http://localhost:4000/productos").then((function(e){return n.a.createElement("script",{src:"https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js","data-public-key":"TEST-fef34835-9bf5-4459-860c-33fb75c59832","data-transaction-amount":"9000.00"})}))}},n.a.createElement("button",{type:"submit",className:"btn btn-success"},"Pagar"))),t.map((function(e){return n.a.createElement("div",{className:"card border-secondary mb-3 mt-5"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h3",{className:"text-center font-weight-bold text-uppercase"},e.title)),n.a.createElement("div",{className:"card-body"},n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item font-weight-bold"},"Precio: $",e.unit_price," "),n.a.createElement("li",{className:"list-group-item font-weight-bold"},"Cantidad disponible: ",e.quantity))))}))))):null};var C=function(){return n.a.createElement(l.a,{store:E},n.a.createElement("div",{className:"container"},n.a.createElement(b.a,null,n.a.createElement(h,null),n.a.createElement(f.c,null,n.a.createElement(f.a,{exact:!0,path:"/mpprueba",component:_}),n.a.createElement(f.a,{exact:!0,path:"/productos/checkout",component:D}),n.a.createElement(f.a,{exact:!0,path:"/productos/:id",component:S})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.d322da61.chunk.js.map