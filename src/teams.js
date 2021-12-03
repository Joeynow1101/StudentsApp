fetch("https://muc-student-companion-api.vercel.app/api/teams")
  .then((result) => result.json()) // JSON wird geparsed
  .then((data) => data.forEach(renderToDo)); // Geparste Daten werden weiterverarbeitet


function renderToDo(team) {  

const teamBlocks = document.querySelector(".element_all")  
const teamHeadline = document.createElement('div')
teamHeadline.classList.add("headline", "element_headline")
teamBlocks.appendChild(teamHeadline)
const teamNumber = teamBlocks.childElementCount;
teamHeadline.innerText = "Team "+teamNumber;


  team.forEach((teamMember) => {
    const teamDiv1 = document.createElement('div')
    const teamDiv2 = document.createElement('div')
    teamDiv1.classList.add('element_team--name')
    teamDiv2.classList.add('body-large')
  
    teamHeadline.appendChild(teamDiv1)
    teamDiv1.appendChild(teamDiv2)
    teamDiv2.textContent = teamMember
  
    if (teamMember === team[0]) {
        teamDiv1.classList.add('element--first')
    }
    else if (teamMember === team[team.length-1]) {
           teamDiv1.classList.add('element--last')
        }
  })
   
}

