function displayFullName(name){
    let nameArray = name.split(' ');
    let lastName = nameArray[nameArray.length -1];

    returnString = `My name is ${lastName}, ${name}!`;

    return returnString;
}

console.log(displayFullName('James Bond'));