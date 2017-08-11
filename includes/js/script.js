//constants
const NAVTOGGLE=document.querySelector(".nav-toggle");
const NAVMENU=document.querySelector("nav");
// navigation menu for smaller screens
NAVTOGGLE.onclick=function () {
    this.classList.toggle('open');
    NAVMENU.classList.toggle('show');
};
