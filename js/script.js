"use strict";

let emptyElement = document.querySelector(".about .empty");
let titleElement = document.querySelector(".about .title");
let desciptionElement = document.querySelector(".about .description");
let figureElements = document.querySelectorAll(".service figure");

document.addEventListener("mousemove", handleMove);
function handleMove(event) {
  // console.log(event.clientY);
  emptyElement.style.flexBasis = event.clientX + "px";
  titleElement.style.flexBasis = event.clientY / 2 + "px";
  // desciptionElement.style.flexBasis = event.clientY / 2 + "px";

  figureElements.forEach(function (elements) {
    elements.style.flexBasis = window.innerWidth - event.clientX + "px";
  });
}

// menu responsive code
var menu = document.querySelector(".menu");
var menu_toggle = document.querySelector(".menu_toggle");
let navMenu = document.querySelector("nav");

menu_toggle.onclick = function () {
  menu_toggle.classList.toggle("active");
  menu.classList.toggle("visible");
  navMenu.classList.toggle("responsive");
  navMenu.style.transition = "height 1s ease 0s";
};
