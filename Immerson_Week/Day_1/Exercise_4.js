function printVowels(string) {
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    words = string.split('');
    vowelsFound = [];

    for (i in words) {
        if (vowels.includes(words[i])) {
            vowelsFound.push(words[i])
        }
    }
    return console.log(vowelsFound.join(''));
}

printVowels("hello world")

//Test can be done with
//printVowels("kangaroo")
//printVowels("cheeseburger")
//printVowels("rhythm")