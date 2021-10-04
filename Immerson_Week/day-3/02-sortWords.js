function sortWords(arr) {
    var sorted = {"odd": [], "even": []}
    for (const word of arr) {
        // even numbers halve with a remainder of 0...
        if (word.length % 2 === 0) {
            sorted.even.push(word)
        }
        else {
            sorted.odd.push(word)
        }
    }
    return sorted
}

console.log(sortWords([]))
console.log(sortWords(["work", "hard", "mommy"]))
console.log(sortWords(["oh!", "ah!", "hi", "my"]))