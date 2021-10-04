Write a function `groupFamilies` that takes an array of objects with `name` and `surname` keys.

It will return an object with surnames as keys, and the associated names in an array.


Here are a few test cases:

Test:   groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}])
Return:
```{ Obama: [ 'Barack', 'Michelle' ] }
```

Test:   groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}, {"name": "Donald", "surname": "Trump"}])
Return:
```{ Obama: [ 'Barack', 'Michelle' ], Trump: [ 'Donald' ] }
```
