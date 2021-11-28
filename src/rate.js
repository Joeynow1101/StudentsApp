/* ----- Rating Stars ----- */

const allStars = document.querySelectorAll(".star-unfilled");
const allStarsArray = Array.from(allStars);

allStarsArray.forEach((starButton) => {
  starButton.addEventListener("click", () => {
    const currentStar = allStarsArray.indexOf(starButton);
    allStarsArray.forEach((unfillStar) => {
      unfillStar.classList.remove("star-filled");
    });
    allStarsArray.forEach((fillStar, index) => {
      if (index <= currentStar) {
        fillStar.classList.add("star-filled");
      }
    });
  });
});

/* ----- Rating Qauder ----- */

const allQuader = document.querySelectorAll(".quader-unfilled");
const allQuaderArray = Array.from(allQuader);

allQuaderArray.forEach((quaderButton) => {
  quaderButton.addEventListener("click", () => {
    const currentQuader = allQuaderArray.indexOf(quaderButton);
    allQuaderArray.forEach((unfillQuader) => {
      unfillQuader.classList.remove("star-filled");
    });
    allQuaderArray.forEach((fillQuader, index) => {
      if (index <= currentQuader) {
        fillQuader.classList.add("star-filled");
      }
    });
  });
});
