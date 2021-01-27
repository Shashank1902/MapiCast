"use strict"

const box = document.getElementById("weaBox");
const boxBtn = document.getElementById("boxBtn");
const icon = document.getElementById("weaIcon");
const arrow = document.getElementById("boxArrow");
const searchBar = document.getElementById("searchBar");
const searchArrow = document.getElementById("searchArrow");
const searchArrowImg = document.getElementById("searchArrowImg");

const city = document.getElementById("cityInput");

let flag = 1;

searchArrow.addEventListener("click", function() {
    if(flag == 1) {
        searchBar.style.right = "-250px";
        searchArrowImg.style.transform = "rotate(180deg)"

        flag = 0;
    }

    else if(flag == 0) {
        searchBar.style.right = "2%";
        searchArrowImg.style.transform = "rotate(0deg)"

        flag = 1;
    }
})

boxBtn.addEventListener("click", function() {

    if(flag == 1) {
        box.style.bottom = "-270px";
        icon.style.transform = "scale(0)"
        arrow.style.transform = "rotate(-90deg)"

        flag = 0;
    }

    else if(flag == 0) {
        box.style.bottom = "0px";
        icon.style.transform = "scale(1)"
        arrow.style.transform = "rotate(90deg)"

        flag = 1;
    }
})