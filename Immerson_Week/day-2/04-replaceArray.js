function replaceArray(words) {
    for (var i = 0; i < words.length; i++){
        if (words[i][0] === "h" || words[i][0] === "H") {
            words[i] = words[i].toUpperCase()
        }
    }
    console.log(words)
}

replaceArray(["banana", "suit", "hammer"]);
replaceArray(["Hello", "there"]);
replaceArray(["Hey!", "hey..."]);