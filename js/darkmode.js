"use strict";

let darkmodeStatus = false;

//DARKMODE INIT
window.addEventListener("load", function () {
  if (darkmodeStatus == true) {
    setDark();
  } else {
    setLight();
  }
});

//COMPONENTS INIT
let darkmodeButton = document.getElementById("darkMode");

let backgroundBody = document.querySelector(".body"),
  headerLogo = document.querySelector(".header-wrapper-logo"),
  headerLogoMobile = document.querySelector(".header-wrapper-logoMobile"),
  headerLink = document.querySelectorAll(".header-wrapper-menu-link");
let bottomBar = document.querySelector(".bottomBar"),
  bottomBarIcons = document.querySelectorAll(".bottomBar-wrapper-icon"),
  bottomBarLanguage = document.querySelector(".bottomBar-rightbar-language");
let bigMenu = document.querySelector(".bigMenu");

//DARK BUTTON EVENT
darkmodeButton.addEventListener("click", function () {
  setDarkmode();
});

//SET DARKMODE
function setDarkmode() {
  if (darkmodeStatus == false) {
    setDark();
    console.log("darkmode is on");
  } else {
    setLight();
    console.log("darkmode is off");
  }
}

function setDark() {
  backgroundBody.classList.add("bg-body-dark");
  //HEADER
  headerLogo.classList.add("primary-fill-dark");
  headerLogoMobile.classList.add("primary-fill-dark");
  headerLink.forEach((item) => {
    item.classList.add("menu-text-dark");
  });
  moreButton.classList.add("primary-fill-dark");
  if (pageScrollPosition > 0) {
    headerBG.classList.add("header-bg-dark");
    headerBG.classList.remove("headerNoBg");
  }
  //BOTTOM BAR
  bottomBar.classList.add("bottomBar-dark");
  bottomBarIcons.forEach((item) => {
    item.classList.add("primary-icons-dark");
  });
  darkmodeButton.classList.add("primary-icons-dark");
  bottomBarLanguage.classList.add("primary-vshover-dark");
  if (bigMenu.classList.contains('hide-block')) {
    toWhite();
  }
  darkmodeStatus = true;
}

function setLight() {
  backgroundBody.classList.remove("bg-body-dark");
  //HEADER
  headerLogo.classList.remove("primary-fill-dark");
  headerLogoMobile.classList.remove("primary-fill-dark");
  headerLink.forEach((item) => {
    item.classList.remove("menu-text-dark");
  });
  moreButton.classList.remove("primary-fill-dark");
  if (pageScrollPosition > 0) {
    headerBG.classList.add("headerNoBg");
    headerBG.classList.remove("header-bg-dark");
  }
  //BOTTOM BAR
  bottomBar.classList.remove("bottomBar-dark");
  bottomBarIcons.forEach((item) => {
    item.classList.remove("primary-icons-dark");
  });
  darkmodeButton.classList.remove("primary-icons-dark");
  bottomBarLanguage.classList.remove("primary-vshover-dark");
  if (bigMenu.classList.contains('hide-block')) {
    toWhite();
  }
  darkmodeStatus = false;
}
