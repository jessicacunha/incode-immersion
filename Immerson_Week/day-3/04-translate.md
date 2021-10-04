Write a function `translate` that takes a dictionary object and a sentence as arguments, and returns the translation of the sentence according to the values in the dictionary.

If a word to be translated doesn't exist in the dictionary, the function will return "Error: missing value".


Here are a few test cases:

Test:   translate({"je": "I", "suis": "am", "pere": "father", "ton": "your"}, "je suis ton pere")
Return:
```'I am your father'
```

Test:   translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is cute")
Return:
```'le chien est mignon'
```

Test:   translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is fluffy")
Return:
```'Error: missing value'
```
