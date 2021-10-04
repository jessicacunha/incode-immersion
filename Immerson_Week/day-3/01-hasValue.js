function hasValue(dic, value) {
    for (const key in dic) {
        if (dic[key] === value) {
            return true
        }
    }
    return false
}

console.log(hasValue({"hello": "bonjour", "my": "mon"}, "bonjour"))
console.log(hasValue({"hello": "bonjour", "my": "mon"}, "hello"))
console.log(hasValue({"hello": "bonjour", "my": "mon"}, "tasty"))