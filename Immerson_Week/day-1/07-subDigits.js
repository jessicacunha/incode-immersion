function subDigits(n) {
    if (n < 0) console.log("Argument Error")
    else {
        const str = n.toString()
        var sum = 0
        for (var i = 0; i < str.length; i++) {
            sum += parseInt(str[i])
        }
        console.log(n - sum)
    }
}

subDigits(12)
subDigits(4000000)
subDigits(0)
subDigits(451)
subDigits(-12)