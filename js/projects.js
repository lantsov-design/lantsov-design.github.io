"use strict";

//Slider
let next = document.getElementById("projectsPage-rightButton"),
  prev = document.getElementById("projectsPage-leftButton"),
  sliderContainer = document.querySelector(".projectsPage-cardWrapper"),
  projectCard = document.querySelectorAll(".projectsPage-projectCard"),
  cardWidth = projectCard[0].offsetWidth,
  cardsCounts = projectCard.length,
  sliderContainerWidth = cardWidth * cardsCounts,
  viewWidth = window.innerWidth,
  cardsOnScreenCount = Math.floor(viewWidth / cardWidth),
  slideIndex = cardsOnScreenCount - cardsOnScreenCount,
  maxSlideIndex = cardsCounts - cardsOnScreenCount,
  trfRegExp = /[-0-9.]+(?=px)/;

let slide = function () {
  sliderContainer.style.transition = "transform ease .5s";
  sliderContainer.style.transform = `translate3d(-${
    slideIndex * cardWidth
  }px, 0px, 0px)`;

  prev.classList.toggle("hide", slideIndex === 0);
  next.classList.toggle("hide", slideIndex === maxSlideIndex);
};

window.addEventListener("load", function () {
  if (viewWidth >= sliderContainerWidth) {
    next.classList.toggle("hide");
  }
});

next.addEventListener("click", function () {
  if (slideIndex < maxSlideIndex) {
    ++slideIndex;
  }
  slide();
});
prev.addEventListener("click", function () {
  if (slideIndex > 0) {
    --slideIndex;
  }
  slide();
});

// Scroll with touch
let startPos = 0,
  currentTranlate = 0,
  prevTranslate = 0,
  isDragging = false,
  slideArray = Array.from(projectCard);

let animationID;

slideArray.forEach((element) => {
  element.addEventListener("touchstart", function (e) {
    TouchStart(e);
  });
  element.addEventListener("touchmove", function (e) {
    TouchMove(e);
  });
  element.addEventListener("touchend", function (e) {
    TouchEnd(e);
  });
});

function TouchStart(e) {
  startPos = e.changedTouches[0].clientX;
  isDragging = true;

  animationID = requestAnimationFrame(animation);
  //console.log(`Считывание startPos = ${startPos}`);
}
function TouchMove(e) {
  if (isDragging) {
    const currentPosition = e.changedTouches[0].clientX;
    currentTranlate = prevTranslate + currentPosition - startPos;
  }
}
function TouchEnd(e) {
  cancelAnimationFrame(animationID);
  isDragging = false;
  const distanceMove = currentTranlate - prevTranslate;
  //console.log(`Текущий сдвиг свапа ${distanceMove}`);

  if (distanceMove < -100 && slideIndex < maxSlideIndex) {
    slideIndex += 1;
    //console.log("Индекс увеличен на 1");
  }
  if (distanceMove > 100 && slideIndex > 0) {
    slideIndex -= 1;
    //console.log("Индекс уменьшен на 1");
  }
  //console.log("Функция перехвата окончания тача работает!");
  setPositionByIndex();
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setPositionByIndex() {
  currentTranlate = -slideIndex * cardWidth;
  prevTranslate = currentTranlate;

  prev.classList.toggle("hide", slideIndex === 0);
  next.classList.toggle("hide", slideIndex === maxSlideIndex);

  setSliderPosition();
  //console.log(`Текущий индекс ${slideIndex}`)
}

function setSliderPosition() {
  sliderContainer.style.transition = "transform ease 0.5s";
  sliderContainer.style.transform = `translate3d(${currentTranlate}px, 0px, 0px)`;
}

window.addEventListener("resize", function () {
  (cardWidth = projectCard[0].offsetWidth),
    (cardsCounts = projectCard.length),
    (sliderContainerWidth = cardWidth * cardsCounts),
    (viewWidth = window.innerWidth),
    (cardsOnScreenCount = Math.floor(viewWidth / cardWidth)),
    (slideIndex = cardsOnScreenCount - cardsOnScreenCount),
    (maxSlideIndex = cardsCounts - cardsOnScreenCount);
  (sliderContainer.style.transform = `translate3d(0px, 0px, 0px)`),
    (startPos = 0),
    (currentTranlate = 0),
    (prevTranslate = 0),
    (isDragging = false);
});

// Autocount

function autocountSlider() {
  let projectCardCount = document.querySelectorAll(
      ".projectsPage-projectCard-count"
    ),
    projectCardCountArray = [];
  projectCardCount.forEach((element) => {
    projectCardCountArray.push(element);
  });

  /* Normal count from 01 to XX
    for (let i = 0; i < projectCardCountArray.length; i++) {
      let currentCountTitle = projectCardCountArray[i];
      if (i <= 8) {
        currentCountTitle.textContent = `0${i+1}.`;
      } else {
        currentCountTitle.textContent = `${i+1}.`;
      } 
    };
  */
  //Reverse count from XX to 01
  for (let i = 0; i < projectCardCountArray.length; ++i) {
    let currentCountTitle = projectCardCountArray[i];
    let reverseCount = projectCardCountArray.length - i;
    if (reverseCount <= 9) {
      currentCountTitle.textContent = `0${reverseCount}.`;
    } else {
      currentCountTitle.textContent = `${reverseCount}.`;
    }
  }
}
autocountSlider();
