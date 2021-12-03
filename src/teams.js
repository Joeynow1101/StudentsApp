
fetch("https://muc-student-companion-api.vercel.app/api/teams")
  .then((result) => result.json()) // JSON wird geparsed
  .then((data) => data.forEach(renderToDo)); // Geparste Daten werden weiterverarbeitet


  const allTeams = []

  function renderToDo(teams) {
    allTeams.push(teams);
  }

const team1 = allTeams.filter((team, index)=> team[index])
console.log(allTeams);
console.log(team1);


/*
const crew1 = document.querySelector('.crew1')
const crew2 = document.querySelector('.crew2')

team1.forEach((teamMember) => {
  const teamDiv1 = document.createElement('div')
  const teamDiv2 = document.createElement('div')
  teamDiv1.classList.add('element_team--name')
  teamDiv2.classList.add('body-large')

  crew1.appendChild(teamDiv1)
  teamDiv1.appendChild(teamDiv2)
  teamDiv2.textContent = teamMember

  if (teamMember === team1[0]) {
      teamDiv1.classList.add('element--first')
  }
  else if (teamMember === team1[team1.length-1]) {
         teamDiv1.classList.add('element--last')
           }
})


team2.forEach((teamMember) => {
        const teamDiv1 = document.createElement('div')
        const teamDiv2 = document.createElement('div')
        teamDiv1.classList.add('element_team--name')
        teamDiv2.classList.add('body-large')
    
        crew2.appendChild(teamDiv1)
        teamDiv1.appendChild(teamDiv2)
        teamDiv2.textContent = teamMember
    
        if (teamMember === team2[0]) {
            teamDiv1.classList.add('element--first')
        }
        else if (teamMember === team2[team2.length-1]) {
               teamDiv1.classList.add('element--last')
                 }
     })

*/


