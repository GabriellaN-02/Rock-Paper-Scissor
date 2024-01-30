//icon containers for both PC and player
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
  let randomNumber = Math.floor(Math.random() * 3);
  questionMarkPC.innerHTML = "?";

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
  questionMarkPlayer.innerHTML = "?";

  rockIcon.addEventListener("click", () => {
    questionMarkPlayer.appendChild(rockIcon.cloneNode(true));
    playerChoice = "rock";
  });

  paperIcon.addEventListener("click", () => {
    questionMarkPlayer.appendChild(paperIcon.cloneNode(true));
    playerChoice = "paper";
  });

  scissorsIcon.addEventListener("click", () => {
    questionMarkPlayer.appendChild(scissorsIcon.cloneNode(true));
    playerChoice = "scissors";

    return playerChoice;
  });
}

// 1 round of game
function playRound(playerChoice, computerChoice) {
  // Tie
  if (playerChoice === computerChoice) {
    result.textContent = "It's a tie";
  }
  // Player wins
  else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
    result.textContent += `You win ${playerChoice} beats ${computerChoice}`;
  }
  // Computer wins
  else {
    result.textContent += `You lose ${computerChoice} beats ${playerChoice}`;
  }
  mainResult.appendChild(result);
}

// game
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const playerChoice = playerMove();
    const computerChoice = getComputerChoice();

    const roundResult = playRound(playerChoice, computerChoice);

    if (roundResult.includes("You win")) {
      playerScore++;
    } else if (roundResult.includes("You lose")) {
      computerScore++;
    }
    mainResult.appendChild(result);
  }

  // Determine the winner after 5 games
  if (playerScore > computerScore) {
    result.textContent = "Congratulations, you win! 🎊";
    mainResult.innerHTML = "";
    mainResult.appendChild(result);
  } else if (computerScore > playerScore) {
    result.textContent = "Sorry, you lose 💔";
    mainResult.innerHTML = "";
    mainResult.appendChild(result);
  } else {
    result.textContent = "It's a tie";
    mainResult.innerHTML = "";
    mainResult.appendChild(result);
  }
}

game();
