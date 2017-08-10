const NAVTOGGLE=document.querySelector(".nav-toggle");
const NAVMENU=document.querySelector("nav");
NAVTOGGLE.onclick=function () {
    this.classList.toggle('open');
    NAVMENU.classList.toggle('show');
};
