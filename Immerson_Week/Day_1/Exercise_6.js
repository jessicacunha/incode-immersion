function pyramid(base) {
    hashtag = 1
    spaces = (base - 1) / 2
    Even = base % 2
    while (hashtag <= base) {
        if (Even != 0) {
            console.log(' '.repeat(spaces) + '#'.repeat(hashtag) + ' '.repeat(spaces))
            hashtag +=2
            spaces -=1
        } else {
            console.log(' '.repeat(spaces) + '#'.repeat(hashtag + 1) + ' '.repeat(spaces))
            hashtag +=2
            spaces -=1
        }
    }
}

pyramid(9)
