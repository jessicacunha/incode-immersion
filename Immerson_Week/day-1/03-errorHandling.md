Modify the `rockPaperScissors` function so that it *returns* the result rather than *displays* it.

You will also change your function to handle errors. If one of the argument given to the function is neither `"rock"`, `"paper"` or `"scissors"`, the function will return `Argument error`.


Here are a few test cases:

Test:   rockPaperScissors("paper", "scissors")
Return: 
```'Second player wins'
```

Test:   rockPaperScissors("rock", "potatoes")
Return: 
```'Argument error'
```

Test:   rockPaperScissors("glue", "scissors")
Return: 
```'Argument error'
```

Test:   rockPaperScissors("rock", "rock")
Return: 
```'Draw'
```
