function abbrev(string) {
    if (string.length >= 3) {
        console.log(string.substr(0, 3) + ' ' + string.length);
    } 
    if (string.length == 2) {
        console.log(string.substr(0, 2) + ' ' + string.length);
    } 
    if (string.length == 1) {
        console.log(string.substr(0, 1) + '  ' + string.length);
    }
}

abbrev("Nice")

//Test can be done with
//abbrev("I am your father")
//abbrev("Supercalifragilisticexpialidocious")
//abbrev("!")
//abbrev("Yo")
