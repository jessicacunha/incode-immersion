Write a function `rmCensored` that takes an object as argument, and will remove any property where the key and/or the value contains a `*`.

You have to modify the object *in-place*, you don't create a new one.


Here are a few test cases:

Test sequence:
```var swearWords = {"s*it": "m*rde", "sweet jesus": "doux jesus", "f***": "", "omg": "w*sh"}
rmCensored(swearWords)
console.log(swearWords)
```
Output:
```{ 'sweet jesus': 'doux jesus' }
```

Test sequence:
```var veggies = {"potato": "starch", "spin*ch": "green", "collard": "green", "tomato": "fr*it"}
rmCensored(veggies)
console.log(veggies)
```
Output:
```{ potato: 'starch', collard: 'green' }
``
