// icon containers for both PC and player
const questionMarkPC = document.querySelector("#questionMarkPC");
const questionMarkPlayer = document.querySelector("#questionMarkPlayer");

// icons
const rockIcon = document.querySelector("#rock");
const paperIcon = document.querySelector("#paper");
const scissorsIcon = document.querySelector("#scissors");

const mainResult = document.querySelector("#mainResult");
const result = document.createElement("span");

const youScore = document.querySelector("#playerScore");
const pcScore = document.querySelector("#pcScore");

function getComputerChoice() {
  questionMarkPC.textContent = "?";
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      questionMarkPC.appendChild(rockIcon.cloneNode(true));
      return "rock";
    case 1:
      questionMarkPC.appendChild(paperIcon.cloneNode(true));
      return "paper";
    case 2:
      questionMarkPC.appendChild(scissorsIcon.cloneNode(true));
      return "scissors";
  }
}

// Add click events to all game icons for the player
function playerMove() {
  let playerChoice = "";
  questionMarkPlayer.textContent = "?";

  return new Promise((resolve) => {
    rockIcon.addEventListener("click", () => {
      questionMarkPlayer.appendChild(rockIcon.cloneNode(true));
      playerChoice = "rock";
      resolve(playerChoice);
    });

    paperIcon.addEventListener("click", () => {
      questionMarkPlayer.appendChild(paperIcon.cloneNode(true));
      playerChoice = "paper";
      resolve(playerChoice);
    });

    scissorsIcon.addEventListener("click", () => {
      questionMarkPlayer.appendChild(scissorsIcon.cloneNode(true));
      playerChoice = "scissors";
      resolve(playerChoice);
    });
  });
}

// 1 round of game
function playRound(playerChoice, computerChoice) {
  let playerScore = 0;
  let computerScore = 0;

  // Display player's choice
  questionMarkPlayer.appendChild(document.getElementById(playerChoice).cloneNode(true));
  questionMarkPC.appendChild(document.getElementById(computerChoice).cloneNode(true));
  const resultElement = document.createElement("span");

  if (playerChoice === computerChoice) {
    resultElement.textContent = "It's a tie";
  } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
    resultElement.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    playerScore++;
    youScore.appendChild(playerScore);
  } else {
    resultElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  }
  mainResult.appendChild(resultElement);
}

// game
async function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    await playerMove(); // Player picks their move
    const computerChoice = getComputerChoice(); // Computer picks its move

    playRound(playerChoice, computerChoice);

    // Wait for a moment before the next round
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  // Determine the winner after 5 games
  if (playerScore > computerScore) {
    result.textContent = "Congratulations, you win! 🎊";
  } else if (computerScore > playerScore) {
    result.textContent = "Sorry, you lose 💔";
  } else {
    result.textContent = "It's a tie";
  }

  // Clear previous content in mainResult and append the final result
  mainResult.innerHTML = "";
  mainResult.appendChild(result);
}

// Start the game
game();
