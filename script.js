let rounds = 5;

let choices = ['rock', 'paper', 'scissors']
let humanScore = 0;
let computerScore = 0;

function playGame() {
    function getComputerChoice() {
        let pick = Math.floor(Math.random() * 3);
        return choices[pick];
    }

    function getHumanChoice() {
        let choice = prompt("Enter your choice: ");
        choice = choice.toLowerCase();
        if (choices.includes(choice)) {
            return choice;
        }
        return getHumanChoice();
    }

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log(`It's a tie! between ${humanChoice} and ${computerChoice}`)
            return playRound(humanChoice=getHumanChoice, computerChoice=getComputerChoice);
        }
        else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } else if (humanChoice == 'rock' && computerChoice == 'paper') {
            console.log("You lose! Paper beats Rock.");
            computerScore++
        } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
            console.log("You lose! Paper loses to Scissors");
            computerScore++;
        } else if (humanChoice == 'paper' && computerChoice == 'rock') {
            console.log("You won! Paper beats rock");
            humanScore++;
        } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            console.log("You won! Scissors cuts Paper.");
            humanScore++;
        } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
            console.log("You lose! Rock cuts Scissors.")
            computerScore;
        } else {
            console.log(`UNDECIDED! between ${humanChoice} and ${computerChoice}`);
        }
    }

    playRound(humanChoice, computerChoice);
}

for (let i = 0; i < rounds; i++)
    playGame()
console.log(`Computer: ${computerScore}
    You: ${humanScore}`);