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
    .classList.toggle("white-color");
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
    .classList.toggle("white-color");
});


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



/*----------------------------------------------------------------------------------------------------
Dark theme
 ----------------------------------------------------------------------------------------------------*/

/*
let darkModeStatus = false;


const darkModeButton = document.getElementById("darkMode");

//Global
const body = document.querySelector(".body"),
  h2 = document.querySelectorAll(".h2"),
  h3 = document.querySelectorAll(".h3"),
  text = document.querySelectorAll(".text"),
  textSmall = document.querySelectorAll(".text-small"),
  caption = document.querySelectorAll(".caption"),
  decorate = document.querySelectorAll(".decorate-text");

//Elements CTA
const headerLogo = document.querySelector(".header-wrapper-logo"),
  headerLogoMobile = document.querySelector(".header-wrapper-logoMobile"),
  menuButton = document.querySelector(".header-wrapper-moreButton-color"),
  menuLink = document.querySelectorAll(".header-wrapper-menu-link"),
  ctaText = document.querySelector(".cta-wrapper-block-left-text"),
  startProjectButton = document.getElementById("startProjectButton");

//Bottom bar
const socialLinks = document.querySelectorAll(".bottomBar-wrapper-icon"),
  darkModeIcon = document.querySelector(".bottomBar-rightbar-dark"),
  languageChange = document.querySelector(".bottomBar-rightbar-language");

//Scroll
const scrollBg = document.querySelector(".scrollBar-bg"),
  scrollHolder = document.querySelector(".scrollBar-holder");

//Service
const serviceBorders = document.querySelector(".service"),
  serviceTitleBorders = document.querySelector(".service-title"),
  serviceBlockBorders = document.querySelector(".service-block");

const serviceListBorder = document.querySelectorAll(".serviceList"),
  serviceListItemBorder = document.querySelectorAll(".serviceList-item"),
  serviceListTitleIcon = document.querySelectorAll(
    ".serviceList-title-showIcon"
  ),
  serviceListItemTitleIcon = document.querySelectorAll(
    ".serviceList-title-showIconSmall"
  );

const serviceListItemTitleH3Sub = document.querySelectorAll(
    ".serviceList-item-title-h3Sub"
  ),
  serviceListSum = document.querySelectorAll(".serviceList-sum-description");

//Footer
const footerLogo = document.querySelector(".footer-leftBlock-up-logoImg"),
  footerLeftBlock = document.querySelector(".footer-leftBlock"),
  footerLeftBlockCopyright = document.querySelector(
    ".footer-leftBlock-copyright"
  ),
  footerWatchProject = document.querySelector(".footer-watchProject"),
  footerMenuItem = document.querySelectorAll(".footer-menu-item"),
  footerMenuContact = document.querySelectorAll(".footer-menu-contact");

//Bottom bar
const bottomBarDark = document.querySelector(".bottomBar");


if (darkModeStatus == true) {
  //Global
  body.style.backgroundColor = "#000";

  h2.forEach((element) => {
    element.classList.toggle("h2-dark");
  });
  h3.forEach((element) => {
    element.classList.toggle("h3-dark");
  });
  text.forEach((element) => {
    element.classList.toggle("text-dark");
  });
  textSmall.forEach((element) => {
    element.classList.toggle("text-small-dark");
  });
  caption.forEach((element) => {
    element.classList.toggle("caption-dark");
  });
  decorate.forEach((element) => {
    element.classList.toggle("decorate-text-dark");
  });

  //Elements
  headerLogo.classList.toggle("primary-dark");
  headerLogoMobile.classList.toggle("primary-dark");
  menuButton.classList.toggle("primary-dark");
  menuLink.forEach((element) => {
    element.classList.toggle("menu-text-dark");
  });
  ctaText.classList.toggle("secondary-dark");
  startProjectButton.classList.toggle("startProjectButton-dark");

  //Bottom bar
  socialLinks.forEach((element) => {
    element.classList.toggle("primary-dark");
  });
  darkModeIcon.classList.toggle("primary-dark");
  languageChange.classList.toggle("primary-dark");

  //Scroll
  scrollBg.classList.toggle("borders-dark");
  scrollHolder.classList.toggle("primary-dark");

  //Services
  serviceBorders.style.borderTop = "#212121 solid 1px";
  serviceBorders.style.borderBottom = "#212121 solid 1px";
  serviceTitleBorders.style.borderLeft = "#212121 solid 1px";
  serviceTitleBorders.style.borderRight = "#212121 solid 1px";
  serviceTitleBorders.classList.toggle("service-title-dark");
  serviceBlockBorders.style.borderRight = "#212121 solid 1px";
  serviceBlockBorders.classList.toggle("service-block-dark");

  serviceListBorder.forEach((element) => {
    element.classList.toggle("serviceList-dark");
  });
  serviceListItemBorder.forEach((element) => {
    element.classList.toggle("serviceList-item-dark");
  });
  serviceListTitleIcon.forEach((element) => {
    element.style.stroke = "#fff";
  });
  serviceListItemTitleIcon.forEach((element) => {
    element.style.fill = "#fff";
  });
  serviceListItemTitleH3Sub.forEach((element) => {
    element.style.color = "#444444";
  });
  serviceListSum.forEach((element) => {
    element.style.color = "#444444";
  });

  //Footer
  footerLogo.style.fill = "#fff";
  footerLeftBlock.style.borderTop = "#212121 solid 1px";
  footerLeftBlockCopyright.classList.toggle("secondary-gray-dark");
  footerWatchProject.classList.toggle("watchProject-dark");
  footerWatchProject.style.backgroundColor = "#fff";
  footerMenuItem.forEach((element) => {
    element.classList.toggle("footer-menu-item-dark");
  });
  footerMenuContact.forEach((element) => {
    element.classList.toggle("footer-menu-contact-dark");
  });

  //Bottom bar
  bottomBarDark.classList.toggle("bottomBar-dark");
}





//Add Event Listener to DarkMode Button
darkModeButton.addEventListener("click", function () {
  if (darkModeStatus == false) {
    //Global
    body.style.backgroundColor = "#000";

    h2.forEach((element) => {
      element.classList.toggle("h2-dark");
    });
    h3.forEach((element) => {
      element.classList.toggle("h3-dark");
    });
    text.forEach((element) => {
      element.classList.toggle("text-dark");
    });
    textSmall.forEach((element) => {
      element.classList.toggle("text-small-dark");
    });
    caption.forEach((element) => {
      element.classList.toggle("caption-dark");
    });
    decorate.forEach((element) => {
      element.classList.toggle("decorate-text-dark");
    });

    //Elements
    headerLogo.classList.toggle("primary-dark");
    headerLogoMobile.classList.toggle("primary-dark");
    menuButton.classList.toggle("primary-dark");
    menuLink.forEach((element) => {
      element.classList.toggle("menu-text-dark");
    });
    ctaText.classList.toggle("secondary-dark");
    startProjectButton.classList.toggle("startProjectButton-dark");

    //Bottom bar
    socialLinks.forEach((element) => {
      element.classList.toggle("primary-dark");
    });
    darkModeIcon.classList.toggle("primary-dark");
    languageChange.classList.toggle("primary-dark");

    //Scroll
    scrollBg.classList.toggle("borders-dark");
    scrollHolder.classList.toggle("primary-dark");

    //Services
    serviceBorders.style.borderTop = "#212121 solid 1px";
    serviceBorders.style.borderBottom = "#212121 solid 1px";
    serviceTitleBorders.style.borderLeft = "#212121 solid 1px";
    serviceTitleBorders.style.borderRight = "#212121 solid 1px";
    serviceTitleBorders.classList.toggle("service-title-dark");
    serviceBlockBorders.style.borderRight = "#212121 solid 1px";
    serviceBlockBorders.classList.toggle("service-block-dark");

    serviceListBorder.forEach((element) => {
      element.classList.toggle("serviceList-dark");
    });
    serviceListItemBorder.forEach((element) => {
      element.classList.toggle("serviceList-item-dark");
    });
    serviceListTitleIcon.forEach((element) => {
      element.style.stroke = "#fff";
    });
    serviceListItemTitleIcon.forEach((element) => {
      element.style.fill = "#fff";
    });
    serviceListItemTitleH3Sub.forEach((element) => {
      element.style.color = "#444444";
    });
    serviceListSum.forEach((element) => {
      element.style.color = "#444444";
    });

    //Footer
    footerLogo.style.fill = "#fff";
    footerLeftBlock.style.borderTop = "#212121 solid 1px";
    footerLeftBlockCopyright.classList.toggle("secondary-gray-dark");
    footerWatchProject.classList.toggle("watchProject-dark");
    footerWatchProject.style.backgroundColor = "#fff";
    footerMenuItem.forEach((element) => {
      element.classList.toggle("footer-menu-item-dark");
    });
    footerMenuContact.forEach((element) => {
      element.classList.toggle("footer-menu-contact-dark");
    });

    //Bottom bar
    bottomBarDark.classList.toggle("bottomBar-dark");

    darkModeStatus = true;
  } else if (darkModeStatus == true) {
    //Global
    body.style.backgroundColor = "#fff";
    h2.forEach((element) => {
      element.classList.toggle("h2-dark");
    });
    h3.forEach((element) => {
      element.classList.toggle("h3-dark");
    });
    text.forEach((element) => {
      element.classList.toggle("text-dark");
    });
    textSmall.forEach((element) => {
      element.classList.toggle("text-small-dark");
    });
    caption.forEach((element) => {
      element.classList.toggle("caption-dark");
    });
    decorate.forEach((element) => {
      element.classList.toggle("decorate-text-dark");
    });

    //Elements
    headerLogo.classList.toggle("primary-dark");
    headerLogoMobile.classList.toggle("primary-dark");
    menuButton.classList.toggle("primary-dark");
    menuLink.forEach((element) => {
      element.classList.toggle("menu-text-dark");
    });
    ctaText.classList.toggle("secondary-dark");
    startProjectButton.classList.toggle("startProjectButton-dark");

    //Bottom bar
    socialLinks.forEach((element) => {
      element.classList.toggle("primary-dark");
    });
    darkModeIcon.classList.toggle("primary-dark");
    languageChange.classList.toggle("primary-dark");

    //Scroll
    scrollBg.classList.toggle("borders-dark");
    scrollHolder.classList.toggle("primary-dark");

    //Services
    serviceBorders.style.borderTop = "#EEEEEE solid 1px";
    serviceBorders.style.borderBottom = "#EEEEEE solid 1px";
    serviceTitleBorders.style.borderLeft = "#EEEEEE solid 1px";
    serviceTitleBorders.style.borderRight = "#EEEEEE solid 1px";
    serviceBlockBorders.style.borderRight = "#EEEEEE solid 1px";
    serviceTitleBorders.classList.toggle("service-title-dark");
    serviceBlockBorders.classList.toggle("service-block-dark");

    serviceListBorder.forEach((element) => {
      element.classList.toggle("serviceList-dark");
    });
    serviceListItemBorder.forEach((element) => {
      element.classList.toggle("serviceList-item-dark");
    });
    serviceListTitleIcon.forEach((element) => {
      element.style.stroke = "#201E1E";
    });
    serviceListItemTitleIcon.forEach((element) => {
      element.style.fill = "#201E1E";
    });
    serviceListItemTitleH3Sub.forEach((element) => {
      element.style.color = "#D7D7D7";
    });
    serviceListSum.forEach((element) => {
      element.style.color = "#D7D7D7";
    });

    //Footer
    footerLogo.style.fill = "#201E1E";
    footerLeftBlock.style.borderTop = "#EEEEEE solid 1px";
    footerLeftBlockCopyright.classList.toggle("secondary-gray-dark");
    footerWatchProject.classList.toggle("watchProject-dark");
    footerWatchProject.style.backgroundColor = "#000";
    footerMenuItem.forEach((element) => {
      element.classList.toggle("footer-menu-item-dark");
    });
    footerMenuContact.forEach((element) => {
      element.classList.toggle("footer-menu-contact-dark");
    });

    //Bottom bar
    bottomBarDark.classList.toggle("bottomBar-dark");

    darkModeStatus = false;

  }
});
*/