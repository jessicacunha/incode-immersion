function printVowels(word) {
    var str = ""
    for (var i = 0; i < word.length; i++) {
        const l = word[i]
        if (l === "a" || l === "e" || l === "i" || l === "o" || l === "u") {
            str += l
        }
    }
    console.log(str)
}

printVowels("hello world");
printVowels("kangaroo");
printVowels("cheeseburger");
printVowels("rhythm");