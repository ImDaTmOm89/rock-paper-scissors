function getComputerChoice() {
    // return rock, paper, or scissors at random for the computer's turn
    const choices = ['rock', 'paper', 'scissors'];
    return choices [Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    // Get input from user
    while (true) {
        const input = prompt('Enter your choice: rock, paper, or scissors');
        // If user cancels game
        if (input === null)
            return null;
        // Get rid of whitespace and make lower case
        const choice = input.trim().toLowerCase();
        // Check to see if what the user entered is inside the array if not re-prompt
        if (['rock', 'paper', 'scissors'].includes(choice)) {
            return choice;
        }
        alert('Invalid choice. Please enter rock, paper, or scissors.');
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
// nested so this function can update the scores above
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log('It is a tie!');
            return;
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        }
    }
    
    for (let i = 0; i < 5; i++) {
        const humanSelect = getHumanChoice();
        // Player cancelled so end the game
        if (humanSelect === null) {
            console.log('GAME CANCELLED');
            return;
        }
        playRound(humanSelect, getComputerChoice());
    }
    // Log who the winner is
    console.log(`Final Score: You${humanScore}/ Computer${computerScore}`);

    if (humanScore > computerScore) {
        console.log('You Win The Game!');
    } else if (computerScore > humanScore) {
        console.log('You Lose The Game!');
    } else {
        console.log('It Is A Tie!');
    }
}
playGame();
