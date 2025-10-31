let humanScore = 0;
let computerScore = 0;
const MAX_SCORE = 5;

const scoreTitle = document.getElementById("score");
const currentScoreDisplay = document.getElementById("current-score");
const buttons = document.querySelectorAll(".button-section button"); 

currentScoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
scoreTitle.textContent = "Current Score";

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    const finalHuman = humanChoice.toLowerCase().trim();
    let roundMessage = "";

    if (finalHuman === computerChoice) {
        roundMessage = `Both chose ${computerChoice}. It's a tie!`;
    }
    else if (
        (finalHuman === "rock" && computerChoice === "scissors") ||
        (finalHuman === "scissors" && computerChoice === "paper") ||
        (finalHuman === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        roundMessage = `You win! ${finalHuman} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        roundMessage = `You lose! ${computerChoice} beats ${finalHuman}`;
    }

    scoreTitle.textContent = roundMessage;
    currentScoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    console.log(`Round: ${roundMessage} | Score -> You: ${humanScore}, Computer: ${computerScore}`);
}

function checkGameStatus() {
    if (humanScore === MAX_SCORE || computerScore === MAX_SCORE) {
        const winner = humanScore === MAX_SCORE ? "You" : "The Computer";
        const message = winner === "You" 
            ? "YOU WON THE GAME! Congratulations!"
            : "YOU LOST THE GAME! Better luck next time.";

        scoreTitle.textContent = "GAME OVER!";
        currentScoreDisplay.textContent = message;

        buttons.forEach(button => button.disabled = true);
        console.log(`FINAL RESULT: ${message}`);
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (humanScore >= MAX_SCORE || computerScore >= MAX_SCORE) {
            console.log("Game over! Please refresh to play again.");
            return;
        }

        let humanChoice = button.textContent; 

        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        checkGameStatus();
    });
});