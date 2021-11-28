const buddyTeams = [['Sudanka Bakalowits', 'Yasaman Foroutan'], ['Chioke Okonkwo', 'Maria José Botín'], 
            ['Heiner Brigitta', 'Tikhon Yaroslavsky'],['Margit Claus','Gotthold Fritzi'],['Stefanie Leonard','Jörg Roman']]

       


buddyTeams.forEach((buddyMember, index) => {
    const myMain = document.querySelector('.main')
    const buddyBlock = document.createElement('section')
    const buddyOneDiv1 = document.createElement('div')
    const buddyOneDiv2 = document.createElement('div')
    const buddyTwoDiv1 = document.createElement('div')
    const buddyTwoDiv2 = document.createElement('div')
    const plusSign = document.createElement ('div')
    myMain.appendChild(buddyBlock)
    buddyBlock.appendChild(buddyOneDiv1)
    buddyOneDiv1.appendChild(buddyOneDiv2)
    buddyBlock.appendChild(plusSign)
    buddyBlock.appendChild(buddyTwoDiv1)
    buddyTwoDiv1.appendChild(buddyTwoDiv2)
        buddyBlock.classList.add('element_buddy')
        buddyOneDiv1.classList.add('element_team--name', 'element--first')
        buddyOneDiv2.classList.add('body-large')
        buddyTwoDiv1.classList.add('element_team--name', 'element--last')
        buddyTwoDiv2.classList.add('body-large')
        plusSign.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 0.833328C12.0544 0.833328 12.9182 1.64921 12.9945 2.68407L13 2.83333V8.99899L19.1667 9C20.2712 9 21.1667 9.89543 21.1667 11C21.1667 12.0544 20.3508 12.9182 19.3159 12.9945L19.1667 13L13 12.999V19.1667C13 20.2712 12.1046 21.1667 11 21.1667C9.94563 21.1667 9.08183 20.3508 9.00548 19.3159L9 19.1667V12.999L2.83333 13C1.72876 13 0.833328 12.1046 0.833328 11C0.833328 9.94563 1.64921 9.08183 2.68407 9.00548L2.83333 9L9 8.99899V2.83333C9 1.72876 9.89543 0.833328 11 0.833328Z" fill="#193251"/>
        </svg>`
        plusSign.classList.add('image_plus')
        buddyOneDiv2.innerText = buddyTeams[index][0]
        buddyTwoDiv2.innerText = buddyTeams[index][1]
})