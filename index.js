function computerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let result = options[Math.floor(Math.random()*3)];
    return result;
}

const playerChoiceVerified = (rps) => ['rock','paper','scissors'].includes(rps.toLowerCase()) ? true : false;


function playRound(playerSelection, computerSelection){
    if(!playerChoiceVerified){return false}
    let ps = playerSelection.toLowerCase()
    if(ps === computerSelection) return `Tie`;
    const outcomes = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"

    }

   return computerSelection == outcomes[ps] ?  true: false;
}

function game(){
    let playerScore = 0
    ,computerScore = 0;

    /*Round Win conditions*/
    const rounds = prompt("Hello! How may round would you like to play?")
    const winRoundCount = rounds % 2 == 0 ? (rounds / 2) + 1 : Math.ceil(rounds/2);
    console.log(rounds, winRoundCount)

    /*Player name*/
    const player = prompt("Enter your name!")
    console.log(player)


    for(let i = 1; i <=rounds && playerScore < winRoundCount && computerScore < winRoundCount && i; i++){
        alert(`Score is ${player}: ${playerScore} Computer: ${computerScore}`)
        let playerRoundChoice = prompt(`Round ${i}. Make your selection, ${player}`);
        let computerRoundChoice = computerChoice();
        let roundResult = playRound(playerRoundChoice, computerRoundChoice)
        if(roundResult==="Tie"){
            alert('Tie')
        }else if(roundResult){
            alert(`You won that round! ${player}'s ${playerRoundChoice} beat ${computerRoundChoice}`)
            playerScore += 1
        }else{
            alert(`You lost that round! ${player}'s ${playerRoundChoice} lost to ${computerRoundChoice}`)
            computerScore += 1
        }
    }
    return playerScore == winRoundCount || playerScore > computerScore ? alert(`${player} wins!`): alert(`${player} lost!`)
      

}

/*game()*/


const playerInputVerification = (inputType, playerInput) => typeof(playerInput) == inputType ? true : false;

console.log(typeof(4), playerInputVerification('number', 5))