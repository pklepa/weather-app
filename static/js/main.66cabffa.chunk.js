(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/loading.3fc4962c.svg"},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c);a(12),a(13),a(14),a(15),a(16);var l=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"pklepa's"),r.a.createElement("h1",null,"weather app")))},u=a(2),s=a.n(u),o=a(5),m=a(1);a(18);function p(e){return 9*e/5+32}function h(e){return e-273.15}var f={kelvin2Celsius:h,kelvin2Fahrenheit:function(e){return p(h(e))},celsius2Fahrenheit:p,fahrenheit2Celsius:function(e){return 5*(e-32)/9},capitalize:function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}};a(19);var E=function(e){var t=e.city,a=e.weather,n=e.weatherIcon,c=e.temperature,i=e.setResultVisibility;return r.a.createElement("div",{className:"search-result"},r.a.createElement("button",{id:"btn-close",onClick:function(){return i(!1)}},"close"),r.a.createElement("h1",{className:"city-name"},t),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:n,alt:"Weather icon"})),r.a.createElement("h2",{className:"weather-description"},a),r.a.createElement("h2",{className:"current-temperature"},c))},d=(a(20),a(6)),b=a.n(d);var v=function(){return r.a.createElement("div",{className:"search-loading"},r.a.createElement("img",{src:b.a,alt:"Loading"}),r.a.createElement("h1",null,"Loading"))};var g=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(m.a)(i,2),u=l[0],p=l[1],h=Object(n.useState)(""),d=Object(m.a)(h,2),b=d[0],g=d[1],w=Object(n.useState)(""),j=Object(m.a)(w,2),O=j[0],y=j[1],k=Object(n.useState)(""),N=Object(m.a)(k,2),S=N[0],x=N[1],C=Object(n.useState)(!0),F=Object(m.a)(C,2),I=F[0],z=F[1],A=Object(n.useState)(!1),J=Object(m.a)(A,2),L=J[0],R=J[1];function V(){return(V=Object(o.a)(s.a.mark((function e(t){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,z(!0),R(!0),a="http://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=cb5d4cb291962932245b3480bd61fc75"),e.next=6,fetch(a);case 6:return n=e.sent,e.next=9,n.json();case 9:return r=e.sent,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"search-form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){return V.apply(this,arguments)}(a).then((function(e){p(e.name),g(f.capitalize(e.weather[0].description)),x("http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"));var t=f.kelvin2Celsius(e.main.temp).toFixed(1);y("".concat(t," \xbaC")),z(!1)})).catch((function(e){console.warn("An error occurred:",e)}))}},r.a.createElement("input",{type:"text",name:"search",id:"search",value:a,placeholder:"Search any city",onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"submit"},r.a.createElement("span",null,"search"),r.a.createElement("p",null,"Search"))),r.a.createElement("div",{className:L?"result-container":"result-container hidden"},I?r.a.createElement(v,null):r.a.createElement(E,{city:u,weather:b,weatherIcon:S,temperature:O,setResultVisibility:R})))};a(21);var w=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"text-container"},r.a.createElement("h1",null,"see other projects at"," ",r.a.createElement("a",{href:"https://github.com/pklepa"},"github.com/pklepa"))))};var j=function(){return r.a.createElement("div",{id:"page-home"},r.a.createElement(l,null),r.a.createElement(g,null),r.a.createElement(w,null))};i.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.66cabffa.chunk.js.map