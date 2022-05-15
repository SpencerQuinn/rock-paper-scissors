let gameinit = false
let playerChoice = ""

const weaponButtons = [...document.querySelectorAll('.tool-container')]
const inputRound = document.createElement('input')
inputRound.classList.add('round-count')
const inputRoundSubmit = document.createElement('button')
inputRoundSubmit.classList.add('round-count-sumbit')
inputRoundSubmit.innerHTML = "Let's FIGHT!!!"
const body = document.querySelector('body')
const title = document.querySelector('.page-title')
let playerName = ''
console.log(playerName)

const beginButton = document.querySelector('.start-button')


beginButton.addEventListener('click', function(e){
    beginButton.remove()
    body.insertBefore(inputRound, document.querySelector('.content-container'))
    title.innerHTML = "Who dare's challenge me?"
})

inputRound.addEventListener('input', handleInputChange)
inputRoundSubmit.addEventListener('click', handleInputSubmit)

function handleInputChange(e){
    body.insertBefore(inputRoundSubmit, document.querySelector('.content-container'))
    if(e.target.value == ""){inputRoundSubmit.remove()}
    console.log(e.target.value)
}

function handleInputSubmit(e){
    playerName = inputRound.value
    console.log("Your name is ", playerName)
    document.querySelector('.name').innerHTML = playerName
    inputRound.remove();
    inputRoundSubmit.remove()
    title.innerHTML = (`${playerName} vs. Computer`)
    gameinit = true
    document.querySelector('.content-container').classList.remove('hidden')
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


const hands = Array.from(document.querySelectorAll('.hand'));
const shootButton = document.querySelector('.shoot-button')
const playerScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score')


playerScore.addEventListener('transitionend', function(){
    this.classList.remove('score-update')
})

computerScore.addEventListener('transitionend', function(){
    this.classList.remove('computer-score-update')
})

function shootInit(e){
    if(playerChoice == '' || !gameinit) return
    document.querySelectorAll('.current-hand').forEach(item => item.classList.remove('current-hand'))
    document.querySelectorAll('.fist-section > div > img[value="rock"]').forEach(item => item.classList.add('current-hand'))
    hands.forEach((hand) => hand.classList.add('play-animate'))
    console.log(this)
}


shootButton.addEventListener('click', shootInit)
hands.forEach(hand => hand.addEventListener('animationend', (e) => e.target.classList.remove('play-animate')))
hands[0].addEventListener('animationend',function(e){
    let crc = computerWeaponChoice()
    let result = roundWin(playerChoice, crc)
    document.querySelectorAll('.current-hand').forEach(item => item.classList.remove('current-hand'))
    console.log(document.querySelector(`img[value=${playerChoice}]`))
    document.querySelector(`.fist-container-left > img[value=${playerChoice}]`).classList.add('current-hand')
    document.querySelector(`.fist-container-right > img[value=${crc}]`).classList.add('current-hand')
    console.log(playerChoice, crc)
    scoreUpdate(result)
    console.log(result)
})



//Choice and score updates

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
        computerScore.classList.add('computer-score-update')
        computerScore.innerHTML = `${computerVal+1}`
        title.innerHTML = "Computer wins"
    }

}
function logChoice(e){
    if(!gameinit) return
    let prevChoice = playerChoice
    if(prevChoice != ''){
    document.querySelector(`.tool-container[data-choice="${prevChoice}"`).classList.remove('selected')
    }
    this.classList.add('selected')
    playerChoice = this.getAttribute('data-choice')
    console.log(playerChoice)
    
}



const test = document.querySelector('.test')



//Button assignments
weaponButtons.forEach((button) => button.addEventListener('click', logChoice))

function isSelected(e){
    if(playerChoice != ''){
    let prevButt = document.querySelector('.tool-container.selected');
    prevButt.classList.remove('selected');
    this.classList.add('selected')
    }
}





