import{i as c,S as l}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const u="34886676-216aa5272081537bbb6585f7b",f=function(s){return console.log(s),fetch(`https://pixabay.com/api/?key=${u}&q=${s}&image_type=photo$orientation=horizontal$safesearch=true`).then(t=>(console.log(t),t.ok||c.warning({title:"Alert",message:"Sorry, it doesnt work",position:"topRight"}),t.json()))},p=document.querySelector(".gallery");function m(s){const t=s.hits.map(r=>`
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
</li>`).join("");p.innerHTML=t,new l(".gallery a").refresh()}const a=document.querySelector("#search-form");a.addEventListener("submit",d);function d(s){s.preventDefault();const t=a.elements.searchQuery.value;if(t==="")return clearMarkup();f(t).then(r=>{m(r)}).catch(()=>{pictureList.innerHTML="",c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})}
//# sourceMappingURL=index.js.map
