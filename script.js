



function getComputerChoice() {
    const randomNumber = Math.random()
    if (randomNumber <= 0.33){
        return "Rock";
    } else if (randomNumber <= 0.66){
        return "Paper";
    } else{
        return "Scissor"
    }
    }

function getHumanChoice() {
    //let userInput = window.prompt("Rock, Paper or Scissor?");
    let userInput = "rock"
    return userInput ? userInput.trim().toLowerCase() : ""; 
}
    
function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    let gameEndMessage = ""
    if (humanChoice == "rock" && computerChoice =="Paper" || 
        humanChoice == "paper" && computerChoice =="Scissor" ||
        humanChoice == "scissor" && computerChoice =="Rock") {
            computerScore++;
            gameEndMessage = `You lose! ${computerChoice} beats ${humanChoice}`
        }

    else {
        humanScore++;
        gameEndMessage = `You Win! ${humanChoice} beats ${computerChoice}`
    }
    return { gameEndMessage, humanScore, computerScore };

    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let result = playRound(humanSelection,computerSelection,humanScore,computerScore)
    //playRound(humanSelection,computerSelection);
    humanScore = result.humanScore
    computerScore = result.computerScore

    console.log(result.gameEndMessage);
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
}



playGame();
