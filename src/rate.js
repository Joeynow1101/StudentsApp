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

/* ----- Formular Send or Cancel ----- */

const cancelButton = document.querySelector(".confirmarea__cancel")
const confirmButton = document.querySelector(".confirmarea__confirm")
const rateFormular = document.querySelector(".ratingboxinput")


confirmButton.addEventListener("click", () => {
  const ratingData = {};
ratingData.rating = rateFormular.querySelectorAll(".star-filled").length
ratingData.comprehension = rateFormular.querySelectorAll(".quader-filled").length
ratingData.motto = rateFormular.querySelector("#motto").value
ratingData.notes = rateFormular.querySelector("#notes").value

postRateToAPI(ratingData);
cancelFormular();

function postRateToAPI(rating) {
  fetch("https://muc-student-companion-api.vercel.app/api/journals",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(rating)
   })
    .then((res) => res.json())
    .then((entries) => console.log(entries));
  }
})

cancelButton.addEventListener("click", () => cancelFormular())

function cancelFormular (){
allQuader.forEach((resetQuader, resetQuaderIndex) => {
  if (resetQuaderIndex != 0) {resetQuader.classList.remove("quader-filled")}
})
allStars.forEach((resetStar, resetStarIndex) => {
  if (resetStarIndex != 0) {resetStar.classList.remove("star-filled")}
})
rateFormular.reset()
}