function removeDouble(arr) {
    for (var i = 0; i < arr.length; ) {
        if (arr.indexOf(arr[i], i + 1) > 0) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
}

var stuff = ['suit', 'suit', 'clock', 'butter', 'suit'];
removeDouble(stuff);
console.log(stuff);

var mixed = ['hello', 'hello', 23, -3, 23, 5, 5, 5, 5, 5, 5, 5, 5, 5, 'hello'];
removeDouble(mixed);
console.log(mixed);
