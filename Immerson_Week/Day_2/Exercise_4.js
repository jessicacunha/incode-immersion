function replaceArray(arr) {
    arrList = []
    arr.forEach(str => {
        ((str[0] === 'h' )|| (str[0] === 'H')) ? arrList.push(str.toUpperCase()) : arrList.push(str)
    })
    console.log(arrList);
}

replaceArray(["banana", "suit", "hammer"])
replaceArray(["Hello", "there"])
replaceArray(["Hey!", "hey..."])