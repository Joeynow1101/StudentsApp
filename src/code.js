const buddyTeams = [['Sudanka Bakalowits', 'Yasaman Foroutan'], ['Chioke Okonkwo', 'Maria José Botín'], 
            ['Heiner Brigitta', 'Tikhon Yaroslavsky'],['Margit Claus','Gotthold Fritzi'],['Stefanie Leonard','Jörg Roman']]

       


buddyTeams.forEach((buddyMember) => {
    const myMain = document.querySelector('.main')
    const buddyBlock = document.createElement('section')
    const buddyOneDiv1 = document.createElement('div')
    const buddyOneDiv2 = document.createElement('div')
    const buddyTwoDiv1 = document.createElement('div')
    const buddyTwoDiv2 = document.createElement('div')
        buddyBlock.classList.add('element-buddy')
        buddyOneDiv1.classList.add('element_team--name', 'element--first')
        buddyOneDiv2.classList.add('body-large')
        buddyTwoDiv1.classList.add('element_team--name', 'element--last')
        buddyTwoDiv2.classList.add('body-large')
            myMain.appendChild(buddyBlock)
            buddyBlock.appendChild(buddyOneDiv1)
            buddyOneDiv1.appendChild(buddyOneDiv2)
            buddyBlock.appendChild(buddyTwoDiv1)
            buddyTwoDiv1.appendChild(buddyTwoDiv2)
                buddyOneDiv2.textContent = buddyTeams[0][0]
                buddyTwoDiv2.textContent = buddyTeams[0][1]
})