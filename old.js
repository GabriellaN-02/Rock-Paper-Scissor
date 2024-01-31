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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  //best of 5 games
  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Enter your choice:");
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    // Update scores based on the result of each round
    if (playRound(playerSelection, computerSelection).includes("You win")) {
      playerScore++;
    } else if (playRound(playerSelection, computerSelection).includes("You lose")) {
      computerScore++;
    }
  }

  // Determine the winner after five rounds
  if (playerScore > computerScore) {
    return "Congratulations! You Win!";
  } else if (computerScore > playerScore) {
    return "Sorry. You lose";
  } else {
    return "It's a tie.";
  }
}

console.log(game());
