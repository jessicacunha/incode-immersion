function rockPaperScissors(first, second) {
    if (first === "rock") {
        if (second === "paper") return "Second player wins"
        if (second === "scissors") return  "First player wins"
        if (second === "rock") return "Draw"
        return "Argument error"
    }
    else if (first === "paper") {
        if (second === "rock") return "First player wins"
        if (second === "scissors") return "Second player wins"
        if (second === "paper") return "Draw"
        return "Argument error"
    }
    else if (first === "scissors") {
        if (second === "rock") return "Second player wins"
        if (second === "paper") return "First player wins"
        if (second === "scissors") return "Draw"
        return "Argument error"
    }
    return "Argument error"
}

rockPaperScissors("paper", "scissors");
rockPaperScissors("rock", "potatoes");
rockPaperScissors("glue", "scissors");
rockPaperScissors("rock", "rock");