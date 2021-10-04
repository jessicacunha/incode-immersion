Write a function `subDigits` that takes an integer as argument, and returns it after substracting each digit to that integer.

For example, if the integer is 12, it returns 12 - 1 - 2 => 9.

If the integer is negative, the function returns "Argument Error".


Here are a few test cases:

Test:   subDigits(12)
Return:
```9
```

Test:   subDigits(4000000)
Return:
```3999996
```

Test:   subDigits(0)
Return:
```0
```

Test:   subDigits(451)
Return:
```441
```

Test:   subDigits(-12)
Return:
```'Argument Error'
```
