(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");if(c.length)for(var a=c.length-1;a>-1&&!t;)t=c[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=function(){const e=document.querySelector(".container");let t=document.createElement("p");t.textContent="Quality you can taste",e.appendChild(t),t=document.createElement("p"),t.textContent="Made with love since 1918",e.appendChild(t);const n=document.createElement("img");n.src="pizza-chef.jpg",n.id="chef",e.appendChild(n),t=document.createElement("p"),t.textContent="Order now or come visit us",e.appendChild(t)},n=e.p+"fdeebf533bbce7280d08.jpg";!function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("header"),e.appendChild(n);let c=document.createElement("h1");c.textContent="Ray's Pizza",n.appendChild(c);let a=document.createElement("div");a.classList.add("nav"),n.appendChild(a),["Home","Menu","Contact"].forEach((e=>{const t=document.createElement("button");t.id=e.toLowerCase(),t.textContent=e,a.appendChild(t)}));const o=document.createElement("div");o.classList.add("main"),e.appendChild(o);const r=document.createElement("div");r.classList.add("container"),o.appendChild(r),t();const d=document.createElement("div");d.classList.add("footer"),e.appendChild(d);let i=document.createElement("h3");i.textContent="Created by Corey Collins",d.appendChild(i)}();const c=document.querySelector("#home"),a=document.querySelector("#menu");document.querySelector("#contact"),c.addEventListener("click",(()=>{t()})),a.addEventListener("click",(()=>{!function(){const e=document.querySelector(".main .container");e.innerHTML="";const t=[];class c{constructor(e,t,n){this.name=e,this.toppings="Cheese, "+t,this.image=new Image,this.image.src=n}}const a=new c("Cheese","Marinara sauce",n);t.push(a);let o=new c("Pepperoni","Peppernoni, Maranara sauce, and cheese");t.push(o);let r=new c("Supreme","Italien sausage, marinara sauce, and cheese");t.push(r),t.forEach((t=>{const n=document.createElement("div");n.classList.add("card"),e.appendChild(n);const c=document.createElement("img");n.appendChild(c);const a=document.createElement("h3");a.textContent=t.name,n.appendChild(a);const o=document.createElement("p");o.textContent=t.toppings,n.appendChild(o)}))}()}))})();