fetch("https://muc-student-companion-api.vercel.app/api/journals")
  .then((result) => result.json()) // JSON wird geparsed
  .then((data) => data.forEach(renderToDo)); // Geparste Daten werden weiterverarbeitet

const allRatingsData = [];

function renderToDo(ratingData) {
  const main = document.querySelector(".ratingsarea");
  const ratingBox = document.createElement("section");
  ratingBox.classList.add("ratingbox");
  main.appendChild(ratingBox);
  const ratingBoxDate = document.createElement("div");
  ratingBoxDate.innerText = "Yesterday";
  ratingBoxDate.classList.add("ratingbox__date", "headline-uppercase");

  const ratingBoxRating = document.createElement("div");
  ratingBoxRating.classList.add("ratingbox__rating", "label");

  let starRating = [];
  for (let starCounter = 0; starCounter < 5; starCounter++) {
    ratingData.rating <= starCounter
      ? starRating.push("star-unfilled")
      : starRating.push("star-filled");
  }
  ratingBoxRating.innerHTML = `Rating: <br/><svg
width="205"
height="24"
viewBox="0 0 205 24"
xmlns="http://www.w3.org/2000/svg"
>
<path class=${starRating[0]}
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M8.23458 7.2288L0.825543 8.30177L0.71598 8.32379C0.00767595 8.50741 -0.252463 9.41029 0.291856 9.93924L5.65288 15.1498L4.38762 22.5059L4.37507 22.6116C4.32751 23.3425 5.11049 23.8714 5.78483 23.5179L12.4119 20.0448L19.039 23.5179L19.136 23.5625C19.8185 23.8334 20.565 23.2545 20.4362 22.5059L19.17 15.1498L24.532 9.93924L24.6076 9.85723C25.0724 9.29362 24.7505 8.41074 23.9983 8.30177L16.5883 7.2288L13.2754 0.535137C12.9222 -0.178379 11.9016 -0.178379 11.5484 0.535137L8.23458 7.2288Z"
  fill="#000000"
/>
<path class=${starRating[1]}
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M53.2346 7.2288L45.8255 8.30177L45.716 8.32379C45.0077 8.50741 44.7475 9.41029 45.2919 9.93924L50.6529 15.1498L49.3876 22.5059L49.3751 22.6116C49.3275 23.3425 50.1105 23.8714 50.7848 23.5179L57.4119 20.0448L64.039 23.5179L64.136 23.5625C64.8185 23.8334 65.565 23.2545 65.4362 22.5059L64.17 15.1498L69.532 9.93924L69.6076 9.85723C70.0724 9.29362 69.7505 8.41074 68.9983 8.30177L61.5883 7.2288L58.2754 0.535137C57.9222 -0.178379 56.9016 -0.178379 56.5484 0.535137L53.2346 7.2288Z"
  fill="#E0E4E8"
/>
<path class=${starRating[2]}
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M98.2346 7.2288L90.8255 8.30177L90.716 8.32379C90.0077 8.50741 89.7475 9.41029 90.2919 9.93924L95.6529 15.1498L94.3876 22.5059L94.3751 22.6116C94.3275 23.3425 95.1105 23.8714 95.7848 23.5179L102.412 20.0448L109.039 23.5179L109.136 23.5625C109.819 23.8334 110.565 23.2545 110.436 22.5059L109.17 15.1498L114.532 9.93924L114.608 9.85723C115.072 9.29362 114.751 8.41074 113.998 8.30177L106.588 7.2288L103.275 0.535137C102.922 -0.178379 101.902 -0.178379 101.548 0.535137L98.2346 7.2288Z"
  fill="#E0E4E8"
/>
<path class=${starRating[3]}
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M143.235 7.2288L135.826 8.30177L135.716 8.32379C135.008 8.50741 134.748 9.41029 135.292 9.93924L140.653 15.1498L139.388 22.5059L139.375 22.6116C139.328 23.3425 140.11 23.8714 140.785 23.5179L147.412 20.0448L154.039 23.5179L154.136 23.5625C154.819 23.8334 155.565 23.2545 155.436 22.5059L154.17 15.1498L159.532 9.93924L159.608 9.85723C160.072 9.29362 159.751 8.41074 158.998 8.30177L151.588 7.2288L148.275 0.535137C147.922 -0.178379 146.902 -0.178379 146.548 0.535137L143.235 7.2288Z"
  fill="#E0E4E8"
/>
<path class=${starRating[4]}
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M188.235 7.2288L180.826 8.30177L180.716 8.32379C180.008 8.50741 179.748 9.41029 180.292 9.93924L185.653 15.1498L184.388 22.5059L184.375 22.6116C184.328 23.3425 185.11 23.8714 185.785 23.5179L192.412 20.0448L199.039 23.5179L199.136 23.5625C199.819 23.8334 200.565 23.2545 200.436 22.5059L199.17 15.1498L204.532 9.93924L204.608 9.85723C205.072 9.29362 204.751 8.41074 203.998 8.30177L196.588 7.2288L193.275 0.535137C192.922 -0.178379 191.902 -0.178379 191.548 0.535137L188.235 7.2288Z"
  fill="#E0E4E8"
/>
</svg>
`;

  const ratingBoxComprehension = document.createElement("div");
  ratingBoxComprehension.classList.add("ratingbox__comprehension", "label");

  let quaderRating = [];
  for (let quaderCounter = 0; quaderCounter < 10; quaderCounter++) {
    ratingData.comprehension <= quaderCounter
      ? quaderRating.push("quader-unfilled")
      : quaderRating.push("quader-filled");
  }
  ratingBoxComprehension.innerHTML = `Comprehension: <br/> <svg
  width="274"
  height="22"
  viewBox="0 0 274 22"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect class=${quaderRating[0]}
    y="22"
    width="22"
    height="22"
    rx="4"
    transform="rotate(-90 0 22)"
    fill="#193251"
  />
  <rect class=${quaderRating[1]}
    x="28"
    y="22"
    width="22"
    height="22"
    rx="4"
    transform="rotate(-90 28 22)"
    fill="#E0E4E8"
  />
  <rect class=${quaderRating[2]}
    x="56"
    y="22"
    width="22"
    height="22"
    rx="4"
    transform="rotate(-90 56 22)"
    fill="#E0E4E8"
  />
  <rect class=${quaderRating[3]}
    x="84"
    y="22"
    width="22"
    height="22"
    rx="4"
    transform="rotate(-90 84 22)"
    fill="#E0E4E8"
  />
  <rect class=${quaderRating[4]}
    x="112"
    y="22"
    width="22"
    height="22"
    rx="4"
    transform="rotate(-90 112 22)"
    fill="#E0E4E8"
  />
  <rect class=${quaderRating[5]}
    x="140"
    y="22"
    width="22"
    height="22"
    rx="4"
    transform="rotate(-90 140 22)"
    fill="#E0E4E8"
  />
  <rect class=${quaderRating[6]}
    x="168"
    y="22"
    width="22"
    height="22"
    rx="4"
    transform="rotate(-90 168 22)"
    fill="#E0E4E8"
  />
  <rect class=${quaderRating[7]}
    x="196"
    y="22"
    width="22"
    height="22"
    rx="4"
    transform="rotate(-90 196 22)"
    fill="#E0E4E8"
  />
  <rect class=${quaderRating[8]}
    x="224"
    y="22"
    width="22"
    height="22"
    rx="4"
    transform="rotate(-90 224 22)"
    fill="#E0E4E8"
  />
  <rect class=${quaderRating[9]}
    x="252"
    y="22"
    width="22"
    height="22"
    rx="4"
    transform="rotate(-90 252 22)"
    fill="#E0E4E8"
  />
</svg>`;

  const ratingBoxMotto = document.createElement("div");
  ratingBoxMotto.innerText = "Motto:";
  ratingBoxMotto.classList.add("ratingbox__motto", "label");
  const ratingBoxMottoText = document.createElement("div");
  ratingBoxMottoText.innerText = `"${ratingData.motto}"`;
  ratingBoxMottoText.classList.add("motto", "rating__motto__color");
  ratingBoxMotto.appendChild(ratingBoxMottoText);

  const ratingBoxNotes = document.createElement("div");
  ratingBoxNotes.innerText = "Notes:";
  ratingBoxNotes.classList.add("ratingbox__notes", "label");
  const ratingBoxNotesText = document.createElement("div");
  ratingBoxNotesText.innerText = ratingData.notes;
  ratingBoxNotesText.classList.add("ratingbox__notes__text", "body_small");
  ratingBoxNotes.appendChild(ratingBoxNotesText);

  ratingBox.append(
    ratingBoxDate,
    ratingBoxRating,
    ratingBoxComprehension,
    ratingBoxMotto,
    ratingBoxNotes
  );

  allRatingsData.push(ratingData);
  localStorage.setItem("_ratings", JSON.stringify(allRatingsData));
}
