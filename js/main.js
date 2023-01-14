"use strict";


//More button
const moreButton = document.getElementById("moreButton");
moreButton.addEventListener("click", function () {
  document.querySelector(".bigMenu").classList.toggle("hide-block");
  document.querySelector(".body").classList.toggle("hide-scroll");

  document.querySelector(".bottomBar").classList.toggle("menu-active-bar");
  for (let i = 1; i <= 4; i++) {
    let iconId = `bottomBar-wrapper-icon_${i}`;
    document.getElementById(iconId).classList.toggle("white-icons");
  }

  document.querySelector(".bottomBar").classList.toggle("bottomBarZ");
  document
    .querySelector(".bottomBar-rightbar-dark")
    .classList.toggle("white-icons");
  document
    .querySelector(".bottomBar-rightbar-language")
    .classList.toggle("primary-dark");
});

//Close button
const closeMenuButton = document.getElementById("closeMenu-button");
closeMenuButton.addEventListener("click", function () {
  document.querySelector(".bigMenu").classList.toggle("hide-block");
  document.querySelector(".body").classList.toggle("hide-scroll");

  document.querySelector(".bottomBar").classList.toggle("menu-active-bar");
  for (let i = 1; i <= 4; i++) {
    let iconId = `bottomBar-wrapper-icon_${i}`;
    document.getElementById(iconId).classList.toggle("white-icons");
  }

  document.querySelector(".bottomBar").classList.toggle("bottomBarZ");
  document
    .querySelector(".bottomBar-rightbar-dark")
    .classList.toggle("white-icons");
  document
    .querySelector(".bottomBar-rightbar-language")
    .classList.toggle("primary-dark");
});





//HEADER SCROLL FOR MOBILE
let pageScrollPosition = pageYOffset,
isMobile = false;
const headerBG = document.querySelector('.header');

window.addEventListener('load', function() {
  console.log(isMobile);
  pageScrollPosition = pageYOffset;
  isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (pageScrollPosition == 0 && isMobile != false) {
    isMobile = true;
    headerBG.classList.remove('headerNoBg');
    console.log(0);
  }
  if (pageScrollPosition > 0 && isMobile != false) {
    isMobile = true;
    headerBG.classList.add('headerNoBg');
    console.log(pageScrollPosition);
  }
});

window.addEventListener('scroll', function() {
  pageScrollPosition = pageYOffset;
  if (pageScrollPosition == 0 && isMobile != false) {
    isMobile = true;
    headerBG.classList.remove('headerNoBg');
    console.log(0);
  }
  if (pageScrollPosition > 0 && isMobile != false) {
    isMobile = true;
    headerBG.classList.add('headerNoBg');
    console.log(pageScrollPosition);
  }
});


window.addEventListener("resize", function () {
  isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile == false) {
    headerBG.classList.remove('headerNoBg');
  }
  /*
  if (isMobile != false) {
    headerBG.classList.add('headerNoBg');
  }
  */
});