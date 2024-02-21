import {} from "./module/facturacion.js"
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click",()=> {
    menu.classListen.toggle('nav-toggle');
});