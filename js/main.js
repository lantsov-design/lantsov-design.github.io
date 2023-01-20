"use strict";

//More button
const moreButton = document.getElementById("moreButton");
moreButton.addEventListener("click", function () {
  document.querySelector(".bigMenu").classList.toggle("hide-block");
  document.querySelector(".body").classList.toggle("hide-scroll");
  document.querySelector(".bottomBar").classList.toggle("bottomBarZ");
  document.querySelector(".bottomBar").classList.toggle("menu-active-bar");

  if (darkmodeStatus == false) {
    toWhite();
  }
});

function toWhite() {
  document.querySelectorAll(".bottomBar-wrapper-icon").forEach((item) => {
    item.classList.add("primary-icons-dark");
  });

  document
    .querySelector(".bottomBar-rightbar-dark")
    .classList.add("primary-icons-dark");
  document
    .querySelector(".bottomBar-rightbar-language")
    .classList.add("primary-vshover-dark");
}

//Close button
const closeMenuButton = document.getElementById("closeMenu-button");
closeMenuButton.addEventListener("click", function () {
  document.querySelector(".bigMenu").classList.toggle("hide-block");
  document.querySelector(".body").classList.toggle("hide-scroll");
  document.querySelector(".bottomBar").classList.toggle("bottomBarZ");
    document.querySelector(".bottomBar").classList.toggle("menu-active-bar");

  if (darkmodeStatus == false) {
    toDark();
  }
});

function toDark() {
  document.querySelectorAll(".bottomBar-wrapper-icon").forEach((item) => {
    item.classList.remove("primary-icons-dark");
  });
  document
    .querySelector(".bottomBar-rightbar-dark")
    .classList.remove("primary-icons-dark");
  document
    .querySelector(".bottomBar-rightbar-language")
    .classList.remove("primary-vshover-dark");
}

//HEADER SCROLL FOR MOBILE
let pageScrollPosition = pageYOffset,
  isMobile = false;
const headerBG = document.querySelector(".header");

window.addEventListener("load", function () {
  pageScrollPosition = pageYOffset;
  isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  if (pageScrollPosition == 0 && isMobile != false && darkmodeStatus == false) {
    isMobile = true;
    headerBG.classList.remove("headerNoBg");
  }
  if (pageScrollPosition > 0 && isMobile != false && darkmodeStatus == false) {
    isMobile = true;
    headerBG.classList.add("headerNoBg");
  }
  if (pageScrollPosition == 0 && isMobile != false && darkmodeStatus == true) {
    isMobile = true;
    headerBG.classList.remove("header-bg-dark");
  }
  if (pageScrollPosition > 0 && isMobile != false && darkmodeStatus == true) {
    isMobile = true;
    headerBG.classList.add("header-bg-dark");
  }
});

window.addEventListener("scroll", function () {
  pageScrollPosition = pageYOffset;
  if (pageScrollPosition == 0 && isMobile != false && darkmodeStatus == false) {
    isMobile = true;
    headerBG.classList.remove("headerNoBg");
  }
  if (pageScrollPosition > 0 && isMobile != false && darkmodeStatus == false) {
    isMobile = true;
    headerBG.classList.add("headerNoBg");
  }
  if (pageScrollPosition == 0 && isMobile != false && darkmodeStatus == true) {
    isMobile = true;
    headerBG.classList.remove("header-bg-dark");
  }
  if (pageScrollPosition > 0 && isMobile != false && darkmodeStatus == true) {
    isMobile = true;
    headerBG.classList.add("header-bg-dark");
  }
});

window.addEventListener("resize", function () {
  isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile == false && darkmodeStatus == false) {
    headerBG.classList.remove("headerNoBg");
  }
  if (isMobile == false && darkmodeStatus == true) {
    headerBG.classList.remove("header-bg-dark");
  }
  /*
  if (isMobile != false) {
    headerBG.classList.add('headerNoBg');
  }
  */
});
//Preloader
let currentPageLocation = document.location.pathname;
if (currentPageLocation != "/404.html") {
  window.addEventListener("load", function () {
    this.setTimeout(preloader, 2000);
    this.setTimeout(preloaderHide, 2400);
  });
  function preloader() {
    document.querySelector(".body").classList.toggle("hide-scroll");
    document.querySelector(".preloader").classList.add("preloader-hide-animate");
  }
  function preloaderHide() {
    document.querySelector(".preloader").classList.add("preloader-hide");
  }  
}

