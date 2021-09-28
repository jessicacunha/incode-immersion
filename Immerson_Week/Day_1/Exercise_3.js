function rockPaperScissors(firstPlayer, secondPlayer) {
  if (firstPlayer == secondPlayer) {
    return console.log("Draw");
  }
  if (firstPlayer == "rock" && secondPlayer == "scissors") {
    return console.log("First player wins");
  }
  if (firstPlayer == "scissors" && secondPlayer == "paper") {
    return console.log("First player wins");
  }
  if (firstPlayer == "paper" && secondPlayer == "rock") {
    return console.log("First player wins");
  }
  if (secondPlayer == "rock" && firstPlayer == "scissors") {
    return console.log("Second player wins");
  }
  if (secondPlayer == "scissors" && firstPlayer == "paper") {
    return console.log("Second player wins");
  }
  if (secondPlayer == "paper" && firstPlayer == "rock") {
    return console.log("Second player wins");
  } else {
    return console.log("Argument error");
  }
}

rockPaperScissors("paper", "scissors");

//Test can be done with
//rockPaperScissors("rock", "potatoes")
//rockPaperScissors("glue", "scissors")
//rockPaperScissors("rock", "rock")
