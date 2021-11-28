const teams = [['Sudanka Bakalowits', 'Yasaman Foroutan', 'Chioke Okonkwo', 'Maria José Botín', 'Tikhon Yaroslavsky'], 
            ['Heiner Brigitta','Margit Claus','Gotthold Fritzi','Stefanie Leonard','Jörg Roman']]


const team1 = teams[0]             
const team2 = teams[1]

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




