export function test() {
    console.log("это модуль js который експортирован из header.js и импортируется в app.js");
}

const burger = document.querySelector(".nav-burger");
const navList = document.querySelector(".nav-list");

burger.addEventListener("click", showMenu)

function showMenu() {
    const prevActive = burger.querySelector(".show");
    const nextActive = burger.querySelector(".hide");
    prevActive.classList.replace("show", "hide");
    nextActive.classList.replace("hide", "show");
    navList.matches(".nav-list-animation") ? 
    navList.classList.remove("nav-list-animation") :    
    navList.classList.add("nav-list-animation");
}

window.onresize = viewport;
const burgerIcon = burger.children[0];
const crossIcon = burger.children[1];

function viewport() {
    if (document.documentElement.clientWidth > 480) {
        burgerIcon.classList.replace("hide", "show");
        crossIcon.classList.replace("show", "hide");
        navList.classList.remove("nav-list-animation")
    }
}