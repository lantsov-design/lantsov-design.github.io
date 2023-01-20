"use strict";

function autocountAwards() {
  let awardCardCount = document.querySelectorAll(".awards-wrapper-card-count"),
    awardCardCountArray = [];
  awardCardCount.forEach((element) => {
    awardCardCountArray.push(element);
  });
  console.log(awardCardCountArray);
  for (let i = 0; i < awardCardCountArray.length; i++) {
    let currentCountTitle = awardCardCountArray[i];
    if (i <= 8) {
      currentCountTitle.textContent = `0${i + 1}.`;
    } else {
      currentCountTitle.textContent = `${i + 1}.`;
    }
  }
}
autocountAwards();
