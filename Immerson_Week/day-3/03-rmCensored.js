function rmCensored(obj) {
    for (const property in obj) {
        if (property.indexOf("*") > 0 || obj[property].indexOf("*") > 0) {
            delete obj[property]
        }
    }
}

var swearWords = {"s*it": "m*rde", "sweet jesus": "doux jesus", "f***": "", "omg": "w*sh"}
rmCensored(swearWords)
console.log(swearWords)

var veggies = {"potato": "starch", "spin*ch": "green", "collard": "green", "tomato": "fr*it"}
rmCensored(veggies)
console.log(veggies)