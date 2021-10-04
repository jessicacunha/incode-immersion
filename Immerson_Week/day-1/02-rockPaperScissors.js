function rockPaperScissors(first, second) {
    // this example uses a ternary statement :) 
    if (first === "rock") {
        console.log(second === "paper" ? "Second player wins" :
            second === "scissors" ? "First player wins" : "Draw")
    }
    else if (first === "paper") {
        console.log(second === "rock" ? "First player wins" :
            second === "scissors" ? "Second player wins" : "Draw")
    }
    else {
        console.log(second === "rock" ? "Second player wins" :
            second === "paper" ? "First player wins" : "Draw")
    }
}

rockPaperScissors("rock", "rock");
rockPaperScissors("rock", "paper");
rockPaperScissors("rock", "scissors");
rockPaperScissors("paper", "scissors");