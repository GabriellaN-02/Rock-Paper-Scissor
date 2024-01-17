function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  const lowercasePlayer = playerSelection.toLowerCase();
  const playerCapitalized = lowercasePlayer.charAt(0).toUpperCase() + lowercasePlayer.slice(1);
  const pcCapitalized = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
  // Tie
  if (lowercasePlayer === computerSelection) {
    return "It's a tie";
  }

  // Player wins
  if ((lowercasePlayer === "rock" && computerSelection === "scissors") || (lowercasePlayer === "paper" && computerSelection === "rock") || (lowercasePlayer === "scissors" && computerSelection === "paper")) {
    return "You win! " + playerCapitalized + " beats " + pcCapitalized;
  }

  // Computer wins
  else {
    return "You lose! " + pcCapitalized + " beats " + playerCapitalized;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
//console.log(computerSelection); // For printing the latest computer choice
console.log(playRound(playerSelection, computerSelection));
