const allStars = [
  "star-one",
  "star-two",
  "star-three",
  "star-four",
  "star-five",
];

const starOne = document.querySelector("#star-one");
const starTwo = document.querySelector("#star-two");
const starThree = document.querySelector("#star-three");
const starFour = document.querySelector("#star-four");
const starFive = document.querySelector("#star-five");

allStars.forEach((buttons) => {
  const star = document.querySelector("#" + buttons);
  star.addEventListener("click", () => {
    if (star === starFive) {
      starTwo.classList.add("rate-filled");
      starThree.classList.add("rate-filled");
      starFour.classList.add("rate-filled");
      starFive.classList.add("rate-filled");
    } else if (star === starFour) {
      starTwo.classList.add("rate-filled");
      starThree.classList.add("rate-filled");
      starFour.classList.add("rate-filled");
      starFive.classList.remove("rate-filled");
    } else if (star === starThree) {
      starTwo.classList.add("rate-filled");
      starThree.classList.add("rate-filled");
      starFour.classList.remove("rate-filled");
      starFive.classList.remove("rate-filled");
    } else if (star === starTwo) {
      starTwo.classList.add("rate-filled");
      starThree.classList.remove("rate-filled");
      starFour.classList.remove("rate-filled");
      starFive.classList.remove("rate-filled");
    } else if (star === starOne) {
      starTwo.classList.remove("rate-filled");
      starThree.classList.remove("rate-filled");
      starFour.classList.remove("rate-filled");
      starFive.classList.remove("rate-filled");
    }
  });
});

const allQuaders = [
  "quader-one",
  "quader-two",
  "quader-three",
  "quader-four",
  "quader-five",
  "quader-six",
  "quader-seven",
  "quader-eight",
  "quader-nine",
  "quader-ten",
];

const quaderOne = document.querySelector("#quader-one");
const quaderTwo = document.querySelector("#quader-two");
const quaderThree = document.querySelector("#quader-three");
const quaderFour = document.querySelector("#quader-four");
const quaderFive = document.querySelector("#quader-five");
const quaderSix = document.querySelector("#quader-six");
const quaderSeven = document.querySelector("#quader-seven");
const quaderEight = document.querySelector("#quader-eight");
const quaderNine = document.querySelector("#quader-nine");
const quaderTen = document.querySelector("#quader-ten");

allQuaders.forEach((buttons) => {
  const quader = document.querySelector("#" + buttons);
  quader.addEventListener("click", () => {
    if (quader === quaderTen) {
      quaderTwo.classList.add("rate-filled");
      quaderThree.classList.add("rate-filled");
      quaderFour.classList.add("rate-filled");
      quaderFive.classList.add("rate-filled");
      quaderSix.classList.add("rate-filled");
      quaderSeven.classList.add("rate-filled");
      quaderEight.classList.add("rate-filled");
      quaderNine.classList.add("rate-filled");
      quaderTen.classList.add("rate-filled");
    } else if (quader === quaderNine) {
      quaderTwo.classList.add("rate-filled");
      quaderThree.classList.add("rate-filled");
      quaderFour.classList.add("rate-filled");
      quaderFive.classList.add("rate-filled");
      quaderSix.classList.add("rate-filled");
      quaderSeven.classList.add("rate-filled");
      quaderEight.classList.add("rate-filled");
      quaderNine.classList.add("rate-filled");
      quaderTen.classList.remove("rate-filled");
    } else if (quader === quaderEight) {
      quaderTwo.classList.add("rate-filled");
      quaderThree.classList.add("rate-filled");
      quaderFour.classList.add("rate-filled");
      quaderFive.classList.add("rate-filled");
      quaderSix.classList.add("rate-filled");
      quaderSeven.classList.add("rate-filled");
      quaderEight.classList.add("rate-filled");
      quaderNine.classList.remove("rate-filled");
      quaderTen.classList.remove("rate-filled");
    } else if (quader === quaderSeven) {
      quaderTwo.classList.add("rate-filled");
      quaderThree.classList.add("rate-filled");
      quaderFour.classList.add("rate-filled");
      quaderFive.classList.add("rate-filled");
      quaderSix.classList.add("rate-filled");
      quaderSeven.classList.add("rate-filled");
      quaderEight.classList.remove("rate-filled");
      quaderNine.classList.remove("rate-filled");
      quaderTen.classList.remove("rate-filled");
    } else if (quader === quaderSix) {
      quaderTwo.classList.add("rate-filled");
      quaderThree.classList.add("rate-filled");
      quaderFour.classList.add("rate-filled");
      quaderFive.classList.add("rate-filled");
      quaderSix.classList.add("rate-filled");
      quaderSeven.classList.remove("rate-filled");
      quaderEight.classList.remove("rate-filled");
      quaderNine.classList.remove("rate-filled");
      quaderTen.classList.remove("rate-filled");
    } else if (quader === quaderFive) {
      quaderTwo.classList.add("rate-filled");
      quaderThree.classList.add("rate-filled");
      quaderFour.classList.add("rate-filled");
      quaderFive.classList.add("rate-filled");
      quaderSix.classList.remove("rate-filled");
      quaderSeven.classList.remove("rate-filled");
      quaderEight.classList.remove("rate-filled");
      quaderNine.classList.remove("rate-filled");
      quaderTen.classList.remove("rate-filled");
    } else if (quader === quaderFour) {
      quaderTwo.classList.add("rate-filled");
      quaderThree.classList.add("rate-filled");
      quaderFour.classList.add("rate-filled");
      quaderFive.classList.remove("rate-filled");
      quaderSix.classList.remove("rate-filled");
      quaderSeven.classList.remove("rate-filled");
      quaderEight.classList.remove("rate-filled");
      quaderNine.classList.remove("rate-filled");
      quaderTen.classList.remove("rate-filled");
    } else if (quader === quaderThree) {
      quaderTwo.classList.add("rate-filled");
      quaderThree.classList.add("rate-filled");
      quaderFour.classList.remove("rate-filled");
      quaderFive.classList.remove("rate-filled");
      quaderSix.classList.remove("rate-filled");
      quaderSeven.classList.remove("rate-filled");
      quaderEight.classList.remove("rate-filled");
      quaderNine.classList.remove("rate-filled");
      quaderTen.classList.remove("rate-filled");
    } else if (quader === quaderTwo) {
      quaderTwo.classList.add("rate-filled");
      quaderThree.classList.remove("rate-filled");
      quaderFour.classList.remove("rate-filled");
      quaderFive.classList.remove("rate-filled");
      quaderSix.classList.remove("rate-filled");
      quaderSeven.classList.remove("rate-filled");
      quaderEight.classList.remove("rate-filled");
      quaderNine.classList.remove("rate-filled");
      quaderTen.classList.remove("rate-filled");
    } else if (quader === quaderOne) {
      quaderTwo.classList.remove("rate-filled");
      quaderThree.classList.remove("rate-filled");
      quaderFour.classList.remove("rate-filled");
      quaderFive.classList.remove("rate-filled");
      quaderSix.classList.remove("rate-filled");
      quaderSeven.classList.remove("rate-filled");
      quaderEight.classList.remove("rate-filled");
      quaderNine.classList.remove("rate-filled");
      quaderTen.classList.remove("rate-filled");
    }
  });
});
