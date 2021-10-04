function translate(dic, sentence) {
    var words = sentence.split(" ")
    var translated = []
    for (var i = 0; i < words.length; i++) {
        if (dic[words[i]] !== undefined) {
            // console.log(dic[words[i]]);
            translated.push(dic[words[i]])
        }
        else {
            return "Error: missing value"
        }
    }
    return translated.join(" ")
}

console.log(translate({"je": "I", "suis": "am", "pere": "father", "ton": "your"}, "je suis ton pere"))
console.log(translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is cute"))
console.log(translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is fluffy"))