!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{const e=document.querySelector(".callback-btn"),t=document.getElementById("callback_form"),n=document.querySelector(".free-visit"),o=document.getElementById("free_visit_form"),l=document.getElementById("thanks"),c=(e,t)=>{e.addEventListener("click",()=>{t.style.display="block"})},r=e=>{e.addEventListener("click",t=>{let n=t.target;(n.classList.contains("overlay")||n.classList.contains("close_icon")||n.classList.contains("close-btn"))&&(e.style.display="none")})};c(e,t),c(n,o),r(t),r(o),r(l)};var l=()=>{const e=document.querySelector(".fixed-gift");if(e){const t=document.getElementById("gift");e.addEventListener("click",()=>{t.style.display="block",e.style.display="none"}),t.addEventListener("click",e=>{let n=e.target;(n.classList.contains("close_icon")||n.classList.contains("overlay")||n.classList.contains("close-btn"))&&(t.style.display="none")})}};var c=()=>{const e=document.getElementById("totop");let t=document.querySelector(".header-main").offsetHeight;e.style.display="none",window.addEventListener("scroll",()=>{pageYOffset>t?e.style.display="block":pageYOffset<t&&(e.style.display="none")})};var r=()=>{const e=document.querySelector(".menu-button").querySelector("img"),t=document.querySelector(".popup-menu"),n=document.querySelector(".head"),o=document.querySelector(".top-menu");let l=n.offsetHeight;e.addEventListener("click",()=>{t.style.display="flex"}),t.addEventListener("click",e=>{let n=e.target;console.log(n),(n.classList.contains("close-menu-btn-btn")||n.closest(".scroll"))&&(t.style.display="none")}),window.addEventListener("scroll",()=>{pageYOffset>l?o.style.position="fixed":o.style.position=""})};var s=()=>{const e=document.getElementById("card_order"),t=document.getElementById("m1"),n=document.getElementById("m2"),o=document.getElementById("m3"),l=document.getElementById("m4"),c=document.getElementById("card_leto_mozaika"),r=document.getElementById("card_leto_schelkovo"),s=document.getElementById("price-total"),a=e.querySelectorAll('input[name="name"]')[0];e.querySelectorAll('input[name="name"]')[1],document.getElementById("callback_form-phone"),document.getElementById("card_check"),document.querySelectorAll("card-order-btn");e.addEventListener("change",()=>{if(t.checked&&c.checked)if("ТЕЛО2019"===a.value){let e=1999;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="1999";else if(n.checked&&c.checked)if("ТЕЛО2019"===a.value){let e=9999;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="9990";else if(o.checked&&c.checked)if("ТЕЛО2019"===a.value){let e=13990;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="13990";else if(l.checked&&c.checked)if("ТЕЛО2019"===a.value){let e=19990;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="19990";else if(t.checked&&r.checked)if("ТЕЛО2019"===a.value){let e=2990;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="2990";else if(n.checked&&r.checked)if("ТЕЛО2019"===a.value){let e=14990;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="14990";else if(o.checked&&r.checked)if("ТЕЛО2019"===a.value){let e=21990;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="21990";else if(l.checked&&r.checked)if("ТЕЛО2019"===a.value){let e=24990;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="24990"})};var a=()=>{const e=document.querySelector(".main-slider"),t=e.querySelectorAll(".slide"),n=e.querySelector(".slide-active");let o,l=0;t.forEach(e=>{e.style.display="none"}),n.style.display="flex";const c=()=>{var e,n,o;o="slide-active",(e=t)[n=l].classList.remove(o),e[n].style.display="none",l++,l>=t.length&&(l=0),((e,t,n)=>{e[t].classList.add(n),e[t].style.display="flex"})(t,l,"slide-active")};((e=3e3)=>{o=setInterval(c,e)})()};var d=()=>{document.querySelectorAll("form");document.createElement("div");const e=document.querySelectorAll("input[type=text]"),t=document.querySelectorAll("input[type=tel]");document.querySelectorAll("input[type=mess]");e.forEach(e=>{e.addEventListener("input",()=>{e.classList.contains("promo")?(console.log(e),e.value=e.value.replace(/[^А-я0-9]/g,"")):e.value=e.value.replace(/[^А-я]/gi,"")})}),t.forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^+0-9]/gi,"")})})};var i=()=>{const e=document.getElementById("banner-form"),t=document.getElementById("thanks"),n=document.createElement("div"),o=e.querySelector("input[type=checkbox]"),l=()=>{n.textContent="",o.checked=!1};e.addEventListener("submit",o=>{o.preventDefault();const r=new FormData(e);let s={},a=e.querySelectorAll("input");n.textContent="Загрузка",e.appendChild(n),r.forEach((e,t)=>{s[t]=e}),c(s).then(e=>{if(200!==e.status)throw new Error("status network not 200");console.log(e),t.style.display="block",setTimeout(l,1e3);for(let e=0;e<a.length;e++)a[e].value=""}).catch(e=>{n.textContent="Ошибка",setTimeout(l,3e3),console.error(e)})});const c=e=>fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})};var u=()=>{const e=document.getElementById("form2"),t=[e,document.getElementById("form1")];let n=e.querySelectorAll("input");console.log(n),t.forEach(e=>{let t=e.parentNode.parentNode.parentNode;const n=()=>{l.textContent="",e.querySelector("input[type=checkbox]").checked=!1,t.style.display="none"};let l=e.querySelector("h4");e.addEventListener("submit",t=>{t.preventDefault(),l.textContent="Загрузка";const c=new FormData(e);let r={},s=e.querySelectorAll("input");c.forEach((e,t)=>{r[t]=e}),o(r).then(e=>{if(200!==e.status)throw new Error("status network not 200");console.log(e),l.textContent="Мы скоро с вами связжемся!";for(let e=0;e<s.length;e++)s[e].value="";setTimeout(n,3e3)}).catch(e=>{l.textContent="Что-то пошло не так...",console.error(e)})})});const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})};var y=()=>{const e=document.getElementById("footer_form"),t=document.getElementById("thanks"),n=document.createElement("div");let o=e.querySelectorAll("input");console.log(o);const l=()=>{n.textContent=""};e.addEventListener("submit",o=>{o.preventDefault();const r=new FormData(e);let s={},a=e.querySelectorAll("input");n.textContent="Загрузка",e.appendChild(n),r.forEach((e,t)=>{s[t]=e}),c(s).then(e=>{if(200!==e.status)throw new Error("status network not 200");console.log(e),t.style.display="block",setTimeout(l,1e3);for(let e=0;e<a.length;e++)a[e].value=""}).catch(e=>{n.textContent="Ошибка",setTimeout(l,3e3),console.error(e)})});const c=e=>fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})};var m=()=>{const e=document.getElementById("card_order"),t=document.createElement("div"),n=document.getElementById("thanks"),o=document.getElementById("card_check"),l=()=>{t.textContent="",o.checked=!1};e.addEventListener("submit",o=>{o.preventDefault();const r=new FormData(e);let s={},a=e.querySelectorAll("input");t.textContent="Загрузка",e.appendChild(t),r.forEach((e,t)=>{s[t]=e}),c(s).then(e=>{if(200!==e.status)throw new Error("status network not 200");console.log(e),n.style.display="block",setTimeout(l,1e3);for(let e=0;e<a.length;e++)a[e].value=""}).catch(e=>{t.textContent="Ошибка",setTimeout(l,3e3),console.error(e)})});const c=e=>fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})};(()=>{const e=document.querySelector(".club-select"),t=e.querySelector("ul"),n=document.querySelector(".header-main"),o=e.querySelector("p");n.addEventListener("click",e=>{"none"===t.style.display&&e.target===o?t.style.display="block":(t.style.display=e.target===o||e.target.closest(".header-main"))&&(t.style.display="none")})})(),o(),l(),c(),r(),s(),a(),d(),i(),u(),y(),m()}]);