(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{20:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(13),s=c.n(n),i=c(15),r=c(3),j=(c(20),c(14)),o=c.n(j),h=c(0);var d=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),j=Object(r.a)(s,2),d=j[0],l=j[1],p=Object(a.useState)(!1),b=Object(r.a)(p,2),m=b[0],u=b[1];return Object(h.jsxs)("div",{classNameName:"App",children:[Object(h.jsx)("section",{className:"top-banner",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"heading",children:"Simple Weather App"}),Object(h.jsx)("input",{onChange:function(e){return n(e.target.value)},type:"text",id:"city",placeholder:"Search for a city",value:c}),Object(h.jsx)("button",{onClick:function(){o()({method:"GET",url:"https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&appid=").concat("05df32b7225eae59ec512dd0dbc5c60f","&units=metric")}).then((function(e){var t=e.data,c=t.main,a=t.name,s=t.sys,r=t.weather,j=function(e){return"https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/".concat(e,".svg")}(Object(i.a)({},r)[0].icon);l({main:c,name:a,sys:s,weather:r,icon:j}),u(!0),n("")}))},children:"SUBMIT"}),Object(h.jsx)("span",{className:"msg"})]})}),Object(h.jsx)("section",{className:"ajax-section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("ul",{className:"cities",children:m&&Object(h.jsxs)("li",{className:"city","data-city":d.name,children:[Object(h.jsxs)("h2",{className:"city-name",children:[Object(h.jsx)("span",{children:d.name}),Object(h.jsx)("sup",{children:d.sys.country})]}),Object(h.jsxs)("div",{weather:"city-temp",children:[Math.round(d.main.temp),Object(h.jsx)("sup",{children:"\xb0C"})]}),Object(h.jsxs)("figure",{children:[Object(h.jsx)("img",{weather:"city-icon",src:d.icon,alt:d.name}),Object(h.jsx)("figcaption",{children:d.description})]})]})})})})]})};s.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b888c7aa.chunk.js.map