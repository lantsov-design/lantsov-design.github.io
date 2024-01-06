"use strict";

let darkmodeStatus = false;
let currentLocation = document.location.pathname;
//console.log(currentLocation);

//DARKMODE INIT
window.addEventListener("load", function () {
  if (localStorage.getItem("darkmode") === "true") {
    darkmodeStatus = true;
  } else {
    darkmodeStatus = false;
  }
});
window.addEventListener("load", function () {
  if (darkmodeStatus == true) {
    setDark();
  }
});

//MAIN COMPONENTS INIT
let darkmodeButton = document.getElementById("darkMode");

let backgroundBody = document.querySelector(".body"),
  headerLogo = document.querySelector(".header-wrapper-logo"),
  headerLogoMobile = document.querySelector(".header-wrapper-logoMobile"),
  headerLink = document.querySelectorAll(".header-wrapper-menu-link"),
  headerLinkActive = document.querySelector(".header-wrapper-menu-linkDisbled");
let bottomBar = document.querySelector(".bottomBar"),
  bottomBarIcons = document.querySelectorAll(".bottomBar-wrapper-icon"),
  bottomBarLanguage = document.querySelector(".bottomBar-rightbar-language");
let bigMenu = document.querySelector(".bigMenu");

//COMPONENTS INIT

//cta
let caption = document.querySelectorAll(".caption"),
  h2 = document.querySelectorAll(".h2"),
  text = document.querySelectorAll(".text"),
  textSmall = document.querySelectorAll(".text-small"),
  decorateText = document.querySelector(".decorate-text"),
  ctaDescription = document.querySelector(".cta-wrapper-block-left-text"),
  startProjectButton = document.querySelector(".startProjectButton"),
  startProjectButtonArrow = document.querySelector(".startProjectButton-img");
let scrollText = document.querySelector(".scroll-text"),
  scrollBarBG = document.querySelector(".scrollBar-bg"),
  scrollBarHolder = document.querySelector(".scrollBar-holder");
//services
let serviceBlock = document.querySelector(".service"),
  serviceTitle = document.querySelector(".service-title"),
  serviceBlockRightBlock = document.querySelector(".service-block"),
  serviceListBigIcon = document.querySelectorAll(".serviceList-title-showIcon"),
  serviceListSmallIcon = document.querySelectorAll(
    ".serviceList-title-showIconSmall"
  ),
  servicesSmallList = document.querySelectorAll(".serviceList-item"),
  serviceBigList = document.querySelectorAll(".serviceList"),
  servicesSmallListDesigner = document.querySelector(
    ".serviceList-item-noBorderBottom"
  ),
  h3 = document.querySelectorAll(".h3"),
  h3SubList = document.querySelectorAll(".serviceList-item-title-h3Sub"),
  sumDescription = document.querySelectorAll(".serviceList-sum-description");
//footer
let footerRightBlock = document.querySelector(".footer-leftBlock"),
  footerLogo = document.querySelector(".footer-leftBlock-up-logoImg"),
  footerMenuItem = document.querySelectorAll(".footer-menu-item"),
  footerWatchProjectBlock = document.querySelector(".footer-watchProject"),
  footerWatchProjectButton = document.querySelector(
    ".footer-watchProject-text"
  ),
  footerWatchProjectButtonUnderline = document.querySelector(
    ".footer-watchProject-line"
  ),
  footerCopyright = document.querySelector(".footer-leftBlock-copyright"),
  footerMenuContact = document.querySelectorAll(".footer-menu-contact");

//DARK BUTTON EVENT
darkmodeButton.addEventListener("click", function () {
  setDarkmode();
});

//SET DARKMODE
function setDarkmode() {
  if (darkmodeStatus == false) {
    setDark();
    //console.log("darkmode is on");
  } else {
    setLight();
    //console.log("darkmode is off");
  }
}

function setDark() {
  backgroundBody.classList.add("bg-body-dark");
  barsToDark();
  //Need fix for mobile "location bug"
  if (currentLocation == "/" || currentLocation == "/index.html") {
    ctaPageToDark();
    footerToDark();
  } else if (currentLocation == "/pages/projects.html") {
    projectPageToDark();
  } else if (currentLocation == "/pages/contacts.html") {
    contactPageToDark();
  } else if (currentLocation == "/pages/about.html") {
    aboutPageToDark();
    footerToDark();
  } else {
    errorPageToDark();
  }

  //STATUS DARKMODE
  localStorage.setItem("darkmode", "true");
  //console.log(localStorage.getItem("darkmode"));
  darkmodeStatus = true;
}

function setLight() {
  backgroundBody.classList.remove("bg-body-dark");
  barsToWhite();
  //Need fix for mobile "location bug"
  if (currentLocation == "/" || currentLocation == "/index.html") {
    ctaPageToLight();
    footerToLight();
  } else if (currentLocation == "/pages/projects.html") {
    projectPageToLight();
  } else if (currentLocation == "/pages/contacts.html") {
    contactPageToLight();
  } else if (currentLocation == "/pages/about.html") {
    aboutPageToLight();
    footerToLight();
  } else {
    errorPageToLight();
  } 

  //STATUS DARKMODE
  localStorage.setItem("darkmode", "false");
  //console.log(localStorage.getItem("darkmode"));
  darkmodeStatus = false;
}

//MODULES
function barsToDark() {
  //HEADER
  headerLogo.classList.add("primary-fill-dark");
  headerLogoMobile.classList.add("primary-fill-dark");
  headerLink.forEach((item) => {
    item.classList.add("menu-text-dark");
    if (item.classList.contains("header-wrapper-menu-linkDisbled")) {
      item.classList.remove("menu-text-dark");
      item.classList.add("primary-dark");
    }
  });
  moreButton.classList.add("primary-fill-dark");
  if (pageScrollPosition > 0 && isMobile == true) {
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
  if (bigMenu.classList.contains("hide-block")) {
    toWhite();
  }
}
function barsToWhite() {
  //HEADER
  headerLogo.classList.remove("primary-fill-dark");
  headerLogoMobile.classList.remove("primary-fill-dark");
  headerLink.forEach((item) => {
    item.classList.remove("menu-text-dark");
    if (item.classList.contains("header-wrapper-menu-linkDisbled")) {
      item.classList.remove("primary-dark");
    }
  });
  moreButton.classList.remove("primary-fill-dark");
  if (pageScrollPosition > 0 && isMobile == true) {
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
  if (bigMenu.classList.contains("hide-block")) {
    toWhite();
  }
}

function ctaPageToDark() {
  //MAIN PAGE — CTA BLOCK
  caption.forEach((item) => {
    item.classList.add("secondary-gray-dark");
  });
  h2.forEach((item) => {
    item.classList.add("primary-dark");
  });
  text.forEach((item) => {
    item.classList.add("primary-dark");
  });
  textSmall.forEach((item) => {
    item.classList.add("primary-dark");
  });
  decorateText.classList.add("secondary-gray-dark");
  ctaDescription.classList.add("secondary-dark");
  startProjectButton.classList.add("primary-dark");
  startProjectButtonArrow.classList.add("primary-fill-outline-dark");
  scrollText.classList.add("secondary-dark");
  scrollBarBG.classList.add("borders-fill-dark");
  scrollBarHolder.classList.add("primary-fill-dark");
  //MAIN PAGE — SERVICE BLOCK
  serviceBlock.classList.add("border-top-dark");
  serviceBlock.classList.add("border-bottom-dark");
  serviceTitle.classList.add("border-left-dark");
  serviceTitle.classList.add("border-right-dark");
  serviceBlockRightBlock.classList.add("border-right-dark");
  serviceListBigIcon.forEach((item) => {
    item.classList.add("primary-fill-dark");
    item.classList.add("primary-fill-outline-dark");
  });
  serviceListSmallIcon.forEach((item) => {
    item.classList.add("primary-fill-dark");
  });
  serviceBigList.forEach((item) => {
    item.classList.add("border-bottom-vs-noBorderLastChild-dark");
  });
  servicesSmallList.forEach((item) => {
    item.classList.add("border-top-vs-lastChildBottom-dark");
  });
  servicesSmallListDesigner.classList.add("border-top-dark");
  serviceBlockRightBlock.classList.add("border-left-mobile-dark");
  serviceTitle.classList.add("border-bottom-mobile-dark");
  h3.forEach((item) => {
    item.classList.add("primary-dark");
  });
  h3SubList.forEach((item) => {
    item.classList.add("secondary-gray-dark");
  });
  sumDescription.forEach((item) => {
    item.classList.add("secondary-gray-dark");
  });
}

function ctaPageToLight() {
  //MAIN PAGE — CTA BLOCK
  caption.forEach((item) => {
    item.classList.remove("secondary-gray-dark");
  });
  h2.forEach((item) => {
    item.classList.remove("primary-dark");
  });
  text.forEach((item) => {
    item.classList.remove("primary-dark");
  });
  textSmall.forEach((item) => {
    item.classList.remove("primary-dark");
  });
  decorateText.classList.remove("secondary-gray-dark");
  ctaDescription.classList.remove("secondary-dark");
  startProjectButton.classList.remove("primary-dark");
  startProjectButtonArrow.classList.remove("primary-fill-outline-dark");
  scrollText.classList.remove("secondary-dark");
  scrollBarBG.classList.remove("borders-fill-dark");
  scrollBarHolder.classList.remove("primary-fill-dark");
  //MAIN PAGE — SERVICE BLOCK
  serviceBlock.classList.remove("border-top-dark");
  serviceBlock.classList.remove("border-bottom-dark");
  serviceTitle.classList.remove("border-left-dark");
  serviceTitle.classList.remove("border-right-dark");
  serviceBlockRightBlock.classList.remove("border-right-dark");
  serviceListBigIcon.forEach((item) => {
    item.classList.remove("primary-fill-dark");
    item.classList.remove("primary-fill-outline-dark");
  });
  serviceListSmallIcon.forEach((item) => {
    item.classList.remove("primary-fill-dark");
  });
  serviceBigList.forEach((item) => {
    item.classList.remove("border-bottom-vs-noBorderLastChild-dark");
  });
  servicesSmallList.forEach((item) => {
    item.classList.remove("border-top-vs-lastChildBottom-dark");
  });
  servicesSmallListDesigner.classList.remove("border-top-dark");
  serviceBlockRightBlock.classList.remove("border-left-mobile-dark");
  serviceTitle.classList.remove("border-bottom-mobile-dark");
  h3.forEach((item) => {
    item.classList.remove("primary-dark");
  });
  h3SubList.forEach((item) => {
    item.classList.remove("secondary-gray-dark");
  });
  sumDescription.forEach((item) => {
    item.classList.remove("secondary-gray-dark");
  });
}

function footerToDark() {
  //FOOTER
  footerRightBlock.classList.add("border-top-dark");
  footerLogo.classList.add("primary-fill-dark");
  footerMenuItem.forEach((item) => {
    item.classList.add("menu-text-dark");
  });
  footerMenuContact.forEach((item) => {
    item.classList.add("menu-text-dark_no-hover");
  });
  footerWatchProjectBlock.classList.add("bg-dark");
  footerWatchProjectButton.classList.add("dark-dark");
  footerWatchProjectButtonUnderline.classList.add("bg-body-dark");
  footerCopyright.classList.add("secondary-gray-dark");
}

function footerToLight() {
  //FOOTER
  footerRightBlock.classList.remove("border-top-dark");
  footerLogo.classList.remove("primary-fill-dark");
  footerMenuItem.forEach((item) => {
    item.classList.remove("menu-text-dark");
  });
  footerMenuContact.forEach((item) => {
    item.classList.remove("menu-text-dark_no-hover");
  });
  footerWatchProjectBlock.classList.remove("bg-dark");
  footerWatchProjectButton.classList.remove("dark-dark");
  footerWatchProjectButtonUnderline.classList.remove("bg-body-dark");
  footerCopyright.classList.remove("secondary-gray-dark");
}

/*----------------------------------------------------------------------------------
PROJECTS PAGE
----------------------------------------------------------------------------------*/
let projectPageCountProject = document.querySelectorAll(
    ".projectsPage-projectCard-count"
  ),
  projectPageCountProjectBorder = document.querySelectorAll(
    ".projectsPage-projectCard-wrapper"
  ),
  projectPageLeftArrow = document.querySelector(".projectsPage-nav-leftIcon"),
  projectPageRightArrow = document.querySelector(".projectsPage-nav-rightIcon");

function projectPageToDark() {
  projectPageLeftArrow.classList.add("primary-fill-outline-dark");
  projectPageRightArrow.classList.add("primary-fill-outline-dark");
  projectPageCountProject.forEach((item) => {
    item.classList.add("secondary-dark");
  });
  projectPageCountProjectBorder.forEach((item) => {
    item.classList.add("border-top-dark");
  });
  textSmall.forEach((item) => {
    item.classList.add("primary-dark");
  });
}

function projectPageToLight() {
  projectPageLeftArrow.classList.remove("primary-fill-outline-dark");
  projectPageRightArrow.classList.remove("primary-fill-outline-dark");
  projectPageCountProject.forEach((item) => {
    item.classList.remove("secondary-dark");
  });
  projectPageCountProjectBorder.forEach((item) => {
    item.classList.remove("border-top-dark");
  });
  textSmall.forEach((item) => {
    item.classList.remove("primary-dark");
  });
}

/*----------------------------------------------------------------------------------
404 PAGE
----------------------------------------------------------------------------------*/
let errorIllustration = document.querySelector(".error-wrapper-illustration"),
  errorBorderText = document.querySelector(".error-wrapper-link");

function errorPageToDark() {
  errorIllustration.classList.add("primary-fill-dark");
  text.forEach((item) => {
    item.classList.add("primary-dark");
  });
  errorBorderText.classList.add("border-bottom-errorPage-dark");
}

function errorPageToLight() {
  errorIllustration.classList.remove("primary-fill-dark");
  text.forEach((item) => {
    item.classList.remove("primary-dark");
  });
  errorBorderText.classList.remove("border-bottom-errorPage-dark");
}

/*----------------------------------------------------------------------------------
CONTACTS PAGE
----------------------------------------------------------------------------------*/
let contactPageSpan = document.querySelector(".contactsPage-h3-span"),
  contactPageSocialLinks = document.querySelectorAll(
    ".contactsPage-rightBlock-linksList-link"
  );

function contactPageToDark() {
  h3.forEach((item) => {
    item.classList.add("primary-dark");
  });
  contactPageSpan.classList.add("border-bottom-errorPage-dark");
  contactPageSocialLinks.forEach((item) => {
    item.classList.add("menu-text-dark");
  });
}

function contactPageToLight() {
  h3.forEach((item) => {
    item.classList.remove("primary-dark");
  });
  contactPageSpan.classList.remove("border-bottom-errorPage-dark");
  contactPageSocialLinks.forEach((item) => {
    item.classList.remove("menu-text-dark");
  });
}

/*----------------------------------------------------------------------------------
ABOUT PAGE
----------------------------------------------------------------------------------*/
let aboutCTALeftBlock = document.querySelector(".aboutCTA-wrapper-leftBlock"),
  aboutCTALeftBlockCaption = document.querySelector(
    ".aboutCTA-wrapper-leftBlock-caption"
  ),
  aboutCTALeftBlockBorder = document.querySelector(
    ".aboutCTA-wrapper-leftBlock-border"
  );

let resumeButton = document.getElementById("resumeButton"),
  resumeButtonIcon = document.querySelector(".startProjectButton-img");

let skillsBlockTitle = document.querySelector(".skills-sectionTitle-text"),
  skillsBlock = document.querySelector(".skills"),
  skillsBlockTitleBlock = document.querySelector(".skills-sectionTitle"),
  skillsCard = document.querySelectorAll(".skills-card"),
  skillsCardContainer = document.querySelector(".skills-cardsContainer"),
  skillsCardListIcon = document.querySelectorAll(".skills-card-listIcon"),
  skillsCardCount = document.querySelectorAll(".skills-card-count");

let awradsTitle = document.querySelector(".awards-wrapper-text"),
  awardsBorders = document.querySelectorAll(".awards-wrapper-card"),
  awardsCount = document.querySelectorAll(".awards-wrapper-card-count"),
  awardYear = document.querySelectorAll(".awards-wrapper-card-year"),
  awardsCardTitle = document.querySelectorAll(".awards-wrapper-card-text");

function aboutPageToDark() {
  caption.forEach((item) => {
    item.classList.add("secondary-gray-dark");
  });
  h2.forEach((item) => {
    item.classList.add("primary-dark");
  });
  h3.forEach((item) => {
    item.classList.add("primary-dark");
  });
  text.forEach((item) => {
    item.classList.add("secondary-dark");
  });
  textSmall.forEach((item) => {
    item.classList.add("secondary-gray-dark");
  });
  aboutCTALeftBlock.classList.add("border-left-dark");
  aboutCTALeftBlock.classList.add("border-right-dark");
  aboutCTALeftBlockCaption.classList.add("border-bottom-dark");

  resumeButton.classList.add("border-top-dark");
  resumeButton.classList.add("primary-dark");
  resumeButtonIcon.classList.add("primary-fill-outline-dark");

  aboutCTALeftBlockBorder.classList.add("border-top-dark");

  //Skills block
  skillsBlockTitle.classList.remove("secondary-dark");
  skillsBlockTitle.classList.add("primary-dark");
  skillsBlock.classList.add("border-top-dark");
  skillsBlock.classList.add("border-bottom-dark");
  skillsBlockTitleBlock.classList.add("skills-sectionTitle-dark");
  skillsCard.forEach((item) => {
    item.classList.add("skills-card-dark");
  });
  skillsCardContainer.classList.add("skills-cardsContainer-dark");
  skillsCardListIcon.forEach((item) => {
    item.classList.add("primary-fill-dark");
  });
  skillsCardCount.forEach((item) => {
    item.classList.remove("secondary-dark");
    item.classList.add("primary-dark");
  });

  //Awards
  awradsTitle.classList.remove("secondary-dark");
  awradsTitle.classList.add("primary-dark");
  awardsBorders.forEach((item) => {
    item.classList.add("awards-wrapper-card-dark");
  });
  awardsCount.forEach((item) => {
    item.classList.add("secondary-dark");
  });
  awardYear.forEach((item) => {
    item.classList.add("secondary-dark");
  });
  awardsCardTitle.forEach((item) => {
    item.classList.remove("secondary-dark");
    item.classList.add("primary-dark");
  });
  
}

function aboutPageToLight() {
  caption.forEach((item) => {
    item.classList.remove("secondary-gray-dark");
  });
  h2.forEach((item) => {
    item.classList.remove("primary-dark");
  });
  h3.forEach((item) => {
    item.classList.remove("primary-dark");
  });
  text.forEach((item) => {
    item.classList.remove("secondary-dark");
  });
  textSmall.forEach((item) => {
    item.classList.remove("secondary-gray-dark");
  });
  aboutCTALeftBlock.classList.remove("border-left-dark");
  aboutCTALeftBlock.classList.remove("border-right-dark");
  aboutCTALeftBlockCaption.classList.remove("border-bottom-dark");

  resumeButton.classList.remove("border-top-dark");
  resumeButton.classList.remove("primary-dark");
  resumeButtonIcon.classList.remove("primary-fill-outline-dark");

  aboutCTALeftBlockBorder.classList.remove("border-top-dark");

  //Skills block
  skillsBlockTitle.classList.remove("primary-dark");
  skillsBlock.classList.remove("border-top-dark");
  skillsBlock.classList.remove("border-bottom-dark");
  skillsBlockTitleBlock.classList.remove("skills-sectionTitle-dark");
  skillsCard.forEach((item) => {
    item.classList.remove("skills-card-dark");
  });
  skillsCardContainer.classList.remove("skills-cardsContainer-dark");
  skillsCardListIcon.forEach((item) => {
    item.classList.remove("primary-fill-dark");
  });
  skillsCardCount.forEach((item) => {
    item.classList.remove("primary-dark");
  });

  //Awards
  awradsTitle.classList.remove("primary-dark");
  awardsBorders.forEach((item) => {
    item.classList.remove("awards-wrapper-card-dark");
  });
  awardsCount.forEach((item) => {
    item.classList.remove("secondary-dark");
  });
  awardYear.forEach((item) => {
    item.classList.remove("secondary-dark");
  });
  awardsCardTitle.forEach((item) => {
    item.classList.remove("primary-dark");
  });
}
