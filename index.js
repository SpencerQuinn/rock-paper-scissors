function computerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let result = options[Math.floor(Math.random()*3)];
    return result;
}

/*Choice verification*/

const playerChoiceVerified = (rps) => ['rock','paper','scissors'].includes(rps.toLowerCase()) ? true : false;

const playerInputVerification = (inputType, playerInput) => typeof(playerInput) == inputType ? true : false;

const roundCount = (numberOfRounds = 5) => {
    let result = parseInt(numberOfRounds);
    while(true){
    if(!isNaN(result)) break;
    result = parseInt(prompt("Please enter valid number"))
    console.log(result)
    }
    return result
}


/*Round Play*/

function playRound(playerSelection, computerSelection){
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
    let rounds = roundCount(prompt("Hello! How may round would you like to play?"))
    let winRoundCount = rounds % 2 == 0 ? (rounds / 2) + 1 : Math.ceil(rounds/2);
    console.log(rounds, winRoundCount)

    /*Player name*/

    let player = prompt("Enter your name!")
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

game()


