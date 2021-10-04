function countOccurences(sentence) {
    var words = sentence.split(" ")

    var occurencesPerWord = {}
    for (const word of words) {
        if (occurencesPerWord[word] === undefined) {
            occurencesPerWord[word] = 0
        }
        occurencesPerWord[word] += 1
    }

    var occurences = {}
    for (const word in occurencesPerWord) {
        if (occurences[occurencesPerWord[word]] === undefined) {
            occurences[occurencesPerWord[word]] = []
        }
        occurences[occurencesPerWord[word]].push(word)
    }
    return occurences
}

console.log(countOccurences("hello is it you hello hello"))
console.log(countOccurences("hey mama hey mama"))