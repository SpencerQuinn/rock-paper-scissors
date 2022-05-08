const weaponButtons = [...document.querySelectorAll('.tool-container')]
const inputRound = document.createElement('input')
inputRound.classList.add('round-count')
const inputRoundSubmit = document.createElement('button')
inputRoundSubmit.classList.add('round-count-sumbit')
inputRoundSubmit.innerHTML = "Let's FIGHT!!!"
const body = document.querySelector('body')
const title = document.querySelector('.page-title')

const beginButton = document.querySelector('.start-button')
console.log(beginButton)

beginButton.addEventListener('click', function(e){
    beginButton.remove()
    body.insertBefore(inputRound, document.querySelector('.content-container'))
    title.innerHTML = "How many rounds?"
})

inputRound.addEventListener('input', handleInputChange)

function handleInputChange(e){
    body.insertBefore(inputRoundSubmit, document.querySelector('.content-container'))
    if(e.target.value == ""){inputRoundSubmit.remove()}
    console.log(e.target.value.charCodeAt(0))
}

function computerWeaponChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)]
}

function roundWin(pc, cc){
    const winScenarios = {
        'rock': 'scissors',
        'scissors': 'paper',
        'paper': 'rock'
    };
    if(pc == cc) return "draw";
    return winScenarios[pc] == cc ? true: false;
}



const playerScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score')


playerScore.addEventListener('transitionend', function(){
    this.classList.remove('score-update')
})

function scoreUpdate(result){
    let playerVal = parseInt(playerScore.innerHTML)
    let computerVal = parseInt(computerScore.innerHTML)
    if(result == 'draw'){
        title.innerHTML = "Draw!"
    }
    else if(result){
        playerScore.classList.add('score-update')
        playerScore.innerHTML = `${playerVal+1}`
        title.innerHTML = "Player wins"
    }else{
        computerScore.innerHTML = `${computerVal+1}`
        title.innerHTML = "Computer wins"
    }

}
function logChoice(e){
    let compChoice = computerWeaponChoice();
    let playerChoice = this.getAttribute('data-choice')
    console.log(roundWin(playerChoice, compChoice))
    scoreUpdate(roundWin(playerChoice, compChoice))
}



weaponButtons.forEach((button) => button.addEventListener('click', logChoice))








