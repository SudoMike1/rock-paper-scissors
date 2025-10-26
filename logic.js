let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = Math.random();
  if (choice < 0.33) {
    return "rock";
  } else if (choice < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Enter your choice (rock, paper, or scissors):");
}

function playRound(human, computer) {
  const finalHuman = human.toLowerCase();

  if (finalHuman === computer) {
    console.log(`Both chose ${computer}. It's a tie!`);
  } else if (
    (finalHuman === "rock" && computer === "scissors") ||
    (finalHuman === "scissors" && computer === "paper") ||
    (finalHuman === "paper" && computer === "rock")
  ) {
    humanScore++;
    console.log(`You win! ${finalHuman} beats ${computer}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computer} beats ${finalHuman}`);
  }

  console.log(`Score → You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore === 5) {
    console.log("You won! Congrats :)");
  } else {
    console.log("You lost! Thanks for playing :(");
  }
}

console.log(playGame());
