function averageMinMax(numbers) {
    var min = numbers[0]
    var max = numbers[0]
    var tot = numbers[0]

    for (var i = 1; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i]
        }
        if (max < numbers[i]) {
            max = numbers[i]
        }
        tot += numbers[i]
    }
    console.log("Min:", min)
    console.log("Max:", max)
    console.log("Average:", Math.floor(tot / numbers.length))
}

averageMinMax([-42, 0, 42])
averageMinMax([30, 20, 100])
averageMinMax([-23, -4, -12])