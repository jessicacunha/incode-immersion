Write a function `abbrev` that takes a string as argument, and returns an abbreviation of the string.

The abbreviation will be made of the first 3 characters of the string, followed by a space and the total number of characters in the string.

If the string is shorter than 3 characters, it will be padded with spaces. (Look at the examples!)


Here are a few test cases:

Test:   abbrev("Nice")
Return:
```'Nic 4'
```

Test:   abbrev("I am your father")
Return:
```'I a 16'
```

Test:   abbrev("Supercalifragilisticexpialidocious")
Return:
```'Sup 34'
```

Test:   abbrev("!")
Return:
```'!   1'
```

Test:   abbrev("Yo")
```'Yo  2'
```
