import{S as p,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const m="34886676-216aa5272081537bbb6585f7b",y=function(s){return fetch(`https://pixabay.com/api/?key=${m}&q=${s}&image_type=photo$orientation=horizontal$safesearch=true`).then(r=>{if(!r.ok)throw console.log("Venya"),new Error(r.status);return r.json()})},d=document.querySelector(".gallery");function h(s){const r=s.hits.map(t=>`
<li class="photo-card">
<a class="gallery__item"  href="${t.largeImageURL}" >
  <img src="${t.webformatURL}" alt="${t.tags}"  />
  </a>
  <div class="info">
  
  <p class="info-item">Likes
  <b>${t.likes}</b>
</p>
<p class="info-item">Views
  <b>${t.views}</b>
</p>
<p class="info-item">Comments
  <b>${t.comments}</b>
</p>
<p class="info-item">Downloads
  <b>${t.downloads}</b>
</p>
  </div>
</li>`).join("");d.innerHTML=r,new p(".gallery a").refresh()}function f(){d.innerHTML=""}const c=document.querySelector("#search-form"),l=document.querySelector(".loader");c.addEventListener("submit",g);function g(s){s.preventDefault(),n();const r=c.elements.searchQuery.value;if(r===""){n(),a.warning({title:"Alert",message:"You need to put world for searching",position:"topRight"});return}y(r).then(t=>{if(t.total===0)return n(),a.warning({title:"Alert",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),f();h(t),n()}).catch(t=>{n(),f(),a.error({title:"Error",message:t.message,position:"topRight"})}).finally(()=>{c.reset()})}function n(){l.style.display=l.style.display==="none"||l.style.display===""?"block":"none"}
//# sourceMappingURL=index.js.map
