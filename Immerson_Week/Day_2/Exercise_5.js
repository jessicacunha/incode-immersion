let stuff = ["hello", "hello", 23, -3, 23, "hello"]


let removeDouble = [];
stuff .forEach((c) => {
    if (!removeDouble.includes(c)) {
        removeDouble.push(c);
    }
});

console.log(removeDouble);