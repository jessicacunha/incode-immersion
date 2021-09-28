function subDigits(num) {
    if( num >= 0) {
        digits = num.toString().split('');
        r_digits = digits.map(Number)
        for (i in r_digits) {
            num -= r_digits[i]
        }
        console.log(num)
    } else {
        return console.log('Argument Error')
    }
    
}

subDigits(12)
