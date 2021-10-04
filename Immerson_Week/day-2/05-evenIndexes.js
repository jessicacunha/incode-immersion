function evenIndexes(word) {
    ret = []
    for (var i = 0; i < word.length; i += 2) {
        ret.push(word[i])
    }
    console.log(ret)
}

evenIndexes("lol")
evenIndexes("You're weird")
evenIndexes("")