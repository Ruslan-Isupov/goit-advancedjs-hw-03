import{S as f,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p="34886676-216aa5272081537bbb6585f7b",h=function(s){return fetch(`https://pixabay.com/api/?key=${p}&q=${s}&image_type=photo$orientation=horizontal$safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},d=document.querySelector(".gallery");function m(s){const t=s.hits.map(r=>`
<li class="photo-card">
<a class="gallery__item"  href="${r.largeImageURL}" >
  <img src="${r.webformatURL}" alt="${r.tags}"  />
  </a>
  <div class="info">
  
  <p class="info-item">Likes
  <b>${r.likes}</b>
</p>
<p class="info-item">Views
  <b>${r.views}</b>
</p>
<p class="info-item">Comments
  <b>${r.comments}</b>
</p>
<p class="info-item">Downloads
  <b>${r.downloads}</b>
</p>
  </div>
</li>`).join("");d.innerHTML=t,new f(".gallery a").refresh()}function u(){d.innerHTML=""}const c=document.querySelector("#search-form"),y=document.querySelector(".loader");c.addEventListener("submit",b);class g{constructor(t){this.loader=t}hide(){this.loader.style.display=""}show(){this.loader.style.display="block"}}const i=new g(y);function b(s){s.preventDefault(),i.show();const t=c.elements.searchQuery.value;if(t===""){i.hide(),a.warning({title:"Alert",message:"You need to put world for searching",position:"topRight"});return}h(t).then(r=>{if(r.total===0)return i.hide(),a.warning({title:"Alert",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u();m(r),i.hide()}).catch(r=>{i.hide(),u(),a.error({title:"Error",message:r.message,position:"topRight"})}).finally(()=>{c.reset()})}
//# sourceMappingURL=index.js.map
