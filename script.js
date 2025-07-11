'use strict';

// Your existing header-related JavaScript
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

// Modified navbar functionality
const header = document.querySelector("[data-header]");
const fixedNav = document.querySelector(".fixed-nav");

const toggleNavbar = () => {
  if (window.scrollY > 50) {
    header.classList.add("active");
    fixedNav.style.position = 'fixed';
    fixedNav.style.top = '0';
  } else {
    header.classList.remove("active");
    fixedNav.style.position = 'absolute';
    fixedNav.style.top = '80px'; 
  }
};

// Initialize + Event Listener
toggleNavbar(); // Run once on load
window.addEventListener("scroll", toggleNavbar);