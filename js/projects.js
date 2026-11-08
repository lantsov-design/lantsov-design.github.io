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
  maxSlideIndex = Math.max(0, cardsCounts - cardsOnScreenCount),
  startPos = 0,
  prevTranslate = 0,
  isDragging = false,
  hasDragged = false,
  suppressClick = false,
  pointerId = null;

let slide = function () {
  sliderContainer.style.transition = "transform ease .5s";
  prevTranslate = -slideIndex * cardWidth;
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

sliderContainer.style.touchAction = "pan-y";

sliderContainer.addEventListener("pointerdown", function (event) {
  if (
    !event.target.closest(".projectsPage-projectCard") ||
    (event.pointerType === "mouse" && event.button !== 0)
  ) {
    return;
  }

  suppressClick = false;
  startPos = event.clientX;
  pointerId = event.pointerId;
  isDragging = true;
  hasDragged = false;
});

window.addEventListener("pointermove", function (event) {
  if (!isDragging || event.pointerId !== pointerId) {
    return;
  }

  const distanceMoved = event.clientX - startPos;
  if (!hasDragged && Math.abs(distanceMoved) > 5) {
    hasDragged = true;
    sliderContainer.setPointerCapture(pointerId);
    sliderContainer.style.userSelect = "none";
  }

  if (hasDragged) {
    const minTranslate = -maxSlideIndex * cardWidth;
    const translate = Math.max(
      minTranslate,
      Math.min(0, prevTranslate + distanceMoved)
    );
    sliderContainer.style.transition = "none";
    sliderContainer.style.transform = `translate3d(${translate}px, 0px, 0px)`;
  }
});

function endDrag(event, cancelled = false) {
  if (!isDragging || event.pointerId !== pointerId) {
    return;
  }

  const distanceMoved = event.clientX - startPos;
  const wasDragged = hasDragged && !cancelled;
  isDragging = false;
  hasDragged = false;
  pointerId = null;
  sliderContainer.style.userSelect = "";

  if (wasDragged) {
    if (distanceMoved < -100 && slideIndex < maxSlideIndex) {
      ++slideIndex;
    } else if (distanceMoved > 100 && slideIndex > 0) {
      --slideIndex;
    }

    suppressClick = true;
  }

  slide();
}

window.addEventListener("pointerup", endDrag);
window.addEventListener("pointercancel", (event) =>
  endDrag(event, true)
);
sliderContainer.addEventListener("click", function (event) {
  if (suppressClick && event.detail !== 0) {
    event.preventDefault();
    event.stopPropagation();
    suppressClick = false;
  }
}, true);

window.addEventListener("resize", function () {
  (cardWidth = projectCard[0].offsetWidth),
    (cardsCounts = projectCard.length),
    (sliderContainerWidth = cardWidth * cardsCounts),
    (viewWidth = window.innerWidth),
    (cardsOnScreenCount = Math.floor(viewWidth / cardWidth)),
    (slideIndex = cardsOnScreenCount - cardsOnScreenCount),
    (maxSlideIndex = Math.max(0, cardsCounts - cardsOnScreenCount));
  slide();
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
