(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/loading.3fc4962c.svg"},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c);a(12),a(13),a(14),a(15),a(16);var l=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"pklepa's"),r.a.createElement("h1",null,"weather app")))},u=a(2),s=a.n(u),o=a(5),m=a(1),p=(a(18),{REACT_APP_WEATHER_API_KEY:"cb5d4cb291962932245b3480bd61fc75"});function h(e){return 9*e/5+32}function f(e){return e-273.15}var E={kelvin2Celsius:f,kelvin2Fahrenheit:function(e){return h(f(e))},celsius2Fahrenheit:h,fahrenheit2Celsius:function(e){return 5*(e-32)/9},capitalize:function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}};a(19);var d=function(e){var t=e.city,a=e.weather,n=e.weatherIcon,c=e.temperature,i=e.setResultVisibility;return r.a.createElement("div",{className:"search-result"},r.a.createElement("button",{id:"btn-close",onClick:function(){return i(!1)}},"close"),r.a.createElement("h1",{className:"city-name"},t),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:n,alt:"Weather icon"})),r.a.createElement("h2",{className:"weather-description"},a),r.a.createElement("h2",{className:"current-temperature"},c))},b=(a(20),a(6)),v=a.n(b);var g=function(){return r.a.createElement("div",{className:"search-loading"},r.a.createElement("img",{src:v.a,alt:"Loading"}),r.a.createElement("h1",null,"Loading"))};var w=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(m.a)(i,2),u=l[0],h=l[1],f=Object(n.useState)(""),b=Object(m.a)(f,2),v=b[0],w=b[1],j=Object(n.useState)(""),O=Object(m.a)(j,2),y=O[0],k=O[1],A=Object(n.useState)(""),N=Object(m.a)(A,2),S=N[0],x=N[1],C=Object(n.useState)(!0),_=Object(m.a)(C,2),P=_[0],R=_[1],I=Object(n.useState)(!1),T=Object(m.a)(I,2),F=T[0],W=T[1];function z(){return(z=Object(o.a)(s.a.mark((function e(t){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(!0),W(!0),a="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(p.REACT_APP_WEATHER_API_KEY),e.next=6,fetch(a,{mode:"cors"});case 6:return n=e.sent,e.next=9,n.json();case 9:return r=e.sent,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"search-form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){return z.apply(this,arguments)}(a).then((function(e){h(e.name),w(E.capitalize(e.weather[0].description)),x("https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"));var t=E.kelvin2Celsius(e.main.temp).toFixed(1);k("".concat(t," \xbaC")),R(!1)})).catch((function(e){console.warn("An error occurred:",e)}))}},r.a.createElement("input",{type:"text",name:"search",id:"search",value:a,placeholder:"Search any city",onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"submit"},r.a.createElement("span",null,"search"),r.a.createElement("p",null,"Search"))),r.a.createElement("div",{className:F?"result-container":"result-container hidden"},P?r.a.createElement(g,null):r.a.createElement(d,{city:u,weather:v,weatherIcon:S,temperature:y,setResultVisibility:W})))};a(21);var j=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"text-container"},r.a.createElement("h1",null,"see other projects at"," ",r.a.createElement("a",{href:"https://github.com/pklepa"},"github.com/pklepa"))))};var O=function(){return r.a.createElement("div",{id:"page-home"},r.a.createElement(l,null),r.a.createElement(w,null),r.a.createElement(j,null))};i.a.render(r.a.createElement(O,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.2022716c.chunk.js.map