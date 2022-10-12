"use strict";

//Smooth scroll
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
/* --------------------------------------------------------------------------------------------------
Big Service list
-------------------------------------------------------------------------------------------------- */
let serviceListArray = [],
  serviceListArrayId = [],
  serviceListTitleArray = [],
  serviceListTitleArrayId = [];

document.querySelectorAll(".serviceList").forEach((item) => {
  serviceListArray.push(item);
});

document.querySelectorAll(".serviceList-title").forEach((item) => {
  serviceListTitleArray.push(item);
});

// Generate ID for serviceList
for (let i = 0; i <= serviceListArray.length - 1; i++) {
  let idName = `serviceList_${i}`;
  serviceListArrayId.push(idName);
}

// Generate ID for serviceListTitle
for (let i = 0; i <= serviceListTitleArray.length - 1; i++) {
  let idName = `serviceListTitle_${i}`;
  serviceListTitleArrayId.push(idName);
}

// Connect generated ID to serviceListTitle
for (let i = 0; i <= serviceListTitleArray.length - 1; i++) {
  let currentTitle = serviceListTitleArray[i],
    currentTitleId = serviceListTitleArrayId[i];
  currentTitle.setAttribute("id", `${currentTitleId}`);
}

// Connect generated ID to serviceList
for (let i = 0; i <= serviceListArray.length - 1; i++) {
  let currentItem = serviceListArray[i],
    currentItemId = serviceListArrayId[i];
  currentItem.setAttribute("id", `${currentItemId}`);
}

//Add event listener to serviceListTitle
for (let i = 0; i <= serviceListArray.length - 1; i++) {
  let currentTitleId = serviceListTitleArrayId[i],
    currentItemId = serviceListArrayId[i];
  let currentElementById = document.getElementById(`${currentTitleId}`);

  currentElementById.addEventListener("click", function () {
    document
      .getElementById(`${currentItemId}`)
      .classList.toggle("serviceList-closed");
  });
}




/* --------------------------------------------------------------------------------------------------
Small list
-------------------------------------------------------------------------------------------------- */

let smallItemArray = [],
  smallItemArrayId = [],
  smallTitleArray = [],
  smallTitleArrayId = [];

document.querySelectorAll(".serviceList-item").forEach((item) => {
  smallItemArray.push(item);
});

document.querySelectorAll(".serviceList-item-title").forEach((item) => {
  smallTitleArray.push(item);
});

// Generate ID for smallTitle
for (let i = 0; i <= smallTitleArray.length - 1; i++) {
  let idName = `serviceList-item-title_${i}`;
  smallTitleArrayId.push(idName);
}

// Generate ID for smallItem
for (let i = 0; i <= smallItemArray.length - 1; i++) {
  let idName = `serviceListItem_${i}`;
  smallItemArrayId.push(idName);
}

// Connect generated ID to smallTitle
for (let i = 0; i <= smallTitleArray.length - 1; i++) {
  let currentTitle = smallTitleArray[i],
    currentTitleId = smallTitleArrayId[i];
  currentTitle.setAttribute("id", `${currentTitleId}`);
}

// Connect generated ID to smallItem
for (let i = 0; i <= smallItemArray.length - 1; i++) {
  let currentItem = smallItemArray[i],
    currentItemId = smallItemArrayId[i];
  currentItem.setAttribute("id", `${currentItemId}`);
}

//Add event listener to smallList
for (let i = 0; i <= smallItemArray.length - 1; i++) {
  let currentTitleId = smallTitleArrayId[i],
    currentItemId = smallItemArrayId[i];
  let currentElementById = document.getElementById(`${currentTitleId}`);

  currentElementById.addEventListener("click", function () {
    document
      .getElementById(`${currentItemId}`)
      .classList.toggle("serviceList-item-closed");
  });
}

