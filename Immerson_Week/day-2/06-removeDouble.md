Write a function `removeDouble` that takes an array and removes all the duplicates, leaving only the last occurence.

The array must be modified *in-place*, meaning it's the original array you modify (you don't build a new array).


Here are a few test cases:

Test sequence:
```
var stuff = ["suit", "clock", "butter", "suit"]
removeDouble(stuff)
console.log(stuff)
```
Output:
```
[ 'clock', 'butter', 'suit' ]
```

Test sequence:
```
var mixed = ["hello", "hello", 23, -3, 23, "hello"]
removeDouble(mixed)
console.log(mixed)
```
Output:
```
[ -3, 23, 'hello' ]
```
