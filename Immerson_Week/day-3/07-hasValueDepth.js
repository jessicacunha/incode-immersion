function hasValueDepth(obj, value) {
    for (const property in obj) {
        if (typeof obj[property] === "object") {
            if (hasValueDepth(obj[property], value)) {
                return true
            }
        }
        else if (obj[property] === value) {
            return true
        }
    }
    return false
}

var obj = {
    "hello": "world",
    "goDeeper": {
        1961: "Barack Obama",
        1964: "Michelle Obama",
        1935: "Elvis Presley",
        1984: {
            "author": "George Orwell",
            "genre": "dystopia",
        }
    }
}

console.log(hasValueDepth(obj, "hello"))
console.log(hasValueDepth(obj, "Elvis Presley"))
console.log(hasValueDepth(obj, "author"))
console.log(hasValueDepth(obj, "dystopia"))