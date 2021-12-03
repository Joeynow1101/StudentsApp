/* ----- Rating Stars ----- */

const allStars = document.querySelectorAll(".star-unfilled");



allStars.forEach((starButton, currentStarIndex) => {
  starButton.addEventListener("click", () => {
    const currentStar = currentStarIndex;

    allStars.forEach((unfillStar) => {
      unfillStar.classList.remove("star-filled");
    });

    allStars.forEach((fillStar, fillStarIndex) => {
      if (fillStarIndex <= currentStar) {
        fillStar.classList.add("star-filled");
      };
    });
  });
});


/* ----- Rating Qauder ----- */

const allQuader = document.querySelectorAll(".quader-unfilled");



allQuader.forEach((quaderButton, currentQuaderIndex) => {
  quaderButton.addEventListener("click", () => {
    const currentQuader = currentQuaderIndex;

    allQuader.forEach((unfillQuader) => {
      unfillQuader.classList.remove("quader-filled");
    });

    allQuader.forEach((fillQuader, fillQuaderindex) => {
      if (fillQuaderindex <= currentQuader) {
        fillQuader.classList.add("quader-filled");
      };
    });
  });
});
