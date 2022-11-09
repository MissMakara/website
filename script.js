"use strict";

const menuIcon = document.getElementById("mobile_menu_");
const closeIcon = document.getElementById("mobile_exit");
const nav = document.getElementById("navigation");
nav.style.display = "inline-block";

if (window.matchMedia("(min-width: 1000px)") && nav.style.display === "none"){
    nav.style.display = "inline-block";

}
else if (window.matchMedia("(min-width: 1000px)")){
    nav.style.display = "inline-block";
}

const close = function(){
    nav.style.display = "none";
    console.log("close menu clicked");
}

const open = function(){
    nav.style.display = "inline-block";
    console.log("open menu clicked");
}

closeIcon.addEventListener('click', close);
menuIcon.addEventListener('click', open);


