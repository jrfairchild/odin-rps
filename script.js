let winner;
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;    
let result;
let finalWinner;

document.addEventListener("click", (e) => {
    document.querySelector('#winner').innerHTML = '';
    playerSelection = e.target.id;
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
        return;
    }
    computerSelection = computerPlay();
    winner = playRound(playerSelection, computerSelection);
    keepScore(winner);
});

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    console.log(num);
    let computerSelection;
    if (num == 0) {
        computerSelection = "rock";
    } else if (num == 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock") {
        switch(computerSelection) {
            case "rock":
                winner = "tie";
                return winner;
                break;
            case "paper":
                winner = "computer";
                return winner;
                break;
            case "scissors":
                winner = "player"
                return winner;
                break;
        }
    } else if (playerSelection == "paper") {
        switch(computerSelection) {
            case "rock":
                winner = "player";
                return winner;
                break;
            case "paper":
                winner = "tie";
                return winner;
                break;
            case "scissors":
                winner = "computer";
                return winner;
                break;
        }
    } else {
        switch(computerSelection) {
            case "rock":
                winner = "computer";
                return winner;
                break;
            case "paper":
                winner = "player";
                return winner;
                break;
            case "scissors":
                winner = "tie";
                return winner;
                break;
        }
    }
}

function keepScore(winner) {

    if (winner == "player") {
        result = "You win!";
        playerScore++;
    } else if (winner == "computer") {
        result = "Computer wins!";
        computerScore++;
    } else {
        result = "It's a tie!";
        playerScore += 0;
        computerScore += 0;
    }
        
    document.querySelector('#choice').innerHTML = `You chose ${playerSelection}. The computer chose ${computerSelection}. ${result}`;
    document.querySelector('#score').innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;

    if (playerScore == 5) {
        finalWinner = "You win!";
        document.querySelector('#winner').innerHTML = `${finalWinner}`;
        playerScore = 0;
        computerScore = 0;
        return;
    } else if (computerScore == 5) {
        finalWinner = "Computer wins!";
        document.querySelector('#winner').innerHTML = `${finalWinner}`;
        playerScore = 0;
        computerScore = 0;
        return;
    }

}