function rockPaperScissors(firstPlayer, secondPlayer) {
  if (firstPlayer == secondPlayer) {
    console.log("Draw");
  }
  if (firstPlayer == "rock" && secondPlayer == "scissors") {
    console.log("First player wins");
  }
  if (firstPlayer == "scissors" && secondPlayer == "paper") {
    console.log("First player wins");
  }
  if (firstPlayer == "paper" && secondPlayer == "rock") {
    console.log("First player wins");
  }
  if (secondPlayer == "rock" && firstPlayer == "scissors") {
    console.log("Second player wins");
  }
  if (secondPlayer == "scissors" && firstPlayer == "paper") {
    console.log("Second player wins");
  }
  if (secondPlayer == "paper" && firstPlayer == "rock") {
    console.log("Second player wins");
  }
  
}

rockPaperScissors("rock", "rock");

//Test can be done with
//rockPaperScissors("rock", "paper");
//rockPaperScissors("rock", "scissors");
//rockPaperScissors("paper", "scissors");
