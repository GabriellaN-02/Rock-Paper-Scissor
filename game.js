// icon containers for both PC and player
const questionMarkPC = document.querySelector("#questionMarkPC");
const questionMarkPlayer = document.querySelector("#questionMarkPlayer");

// icons
const rockIcon = document.querySelector("#rock");
const paperIcon = document.querySelector("#paper");
const scissorsIcon = document.querySelector("#scissors");

const mainResult = document.querySelector("#mainResult");
const result = document.createElement("span");
const resultElement = document.createElement("span");

const youScoreDiv = document.querySelector("#playerScore");
const pcScoreDiv = document.querySelector("#pcScore");
const youScoreChild = document.createElement("span");
const pcScoreChild = document.createElement("span");

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Display initial question mark on both PC and player sections
questionMarkPC.textContent = "?";
questionMarkPlayer.textContent = "?";

// Function to get computer's choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      questionMarkPC.textContent = "";
      return "rock";
    case 1:
      questionMarkPC.textContent = "";
      return "paper";
    case 2:
      questionMarkPC.textContent = "";
      return "scissors";
  }
}

// Add click events to all game icons for the player
function playerMove() {
  // let playerChoice = "";
  return new Promise((resolve) => {
    rockIcon.addEventListener("click", () => {
      questionMarkPlayer.textContent = "";
      playerChoice = "rock";
      resolve(playerChoice);
    });

    paperIcon.addEventListener("click", () => {
      questionMarkPlayer.textContent = "";
      playerChoice = "paper";
      resolve(playerChoice);
    });

    scissorsIcon.addEventListener("click", () => {
      questionMarkPlayer.textContent = "";
      playerChoice = "scissors";
      resolve(playerChoice);
    });
  });
}

// 1 round of game
function playRound(playerChoice, computerChoice) {
  // Display player's and computer's choices
  questionMarkPlayer.appendChild(document.getElementById(playerChoice).cloneNode(true));
  questionMarkPC.appendChild(document.getElementById(computerChoice).cloneNode(true));

  if (playerChoice === computerChoice) {
    resultElement.textContent = "It's a tie";
    mainResult.style.color = "black";
  } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
    resultElement.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    playerScore++;
    youScoreChild.textContent = playerScore;
    youScoreDiv.appendChild(youScoreChild);
    mainResult.style.color = "green";
  } else {
    resultElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
    pcScoreChild.textContent = computerScore;
    pcScoreDiv.appendChild(pcScoreChild);
    mainResult.style.color = "red";
  }
  mainResult.innerHTML = "Result:";
  mainResult.appendChild(resultElement);
}

// game
async function game() {
  for (let i = 1; i <= 5; i++) {
    const playerChoice = await playerMove(); // Player picks their move
    const computerChoice = getComputerChoice(); // Computer picks its move

    playRound(playerChoice, computerChoice);

    // Wait for a moment before the next round
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  // Determine the winner after 5 games
  if (playerScore > computerScore) {
    result.textContent = "Congratulations, you win! 🎊";
    Object.assign(result.style, { fontSize: "x-large", color: "green" });
  } else if (computerScore > playerScore) {
    result.textContent = "Sorry, you lose 💔";
    Object.assign(result.style, { fontSize: "x-large", color: "red" });
  } else if (computerScore === playerScore) {
    result.textContent = "It's a tie";
    result.style.fontSize = "x-large";
  }

  // Clear previous content in mainResult and append the final result
  mainResult.innerHTML = "";
  mainResult.appendChild(result);
}

// Start the game
game();
