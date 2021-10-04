function abbrev(word) {
    const abr = word.slice(0, 3)
    const abrPadding = abr.padEnd(3, " ")
    console.log(abrPadding + " " + word.length)
}

abbrev("Nice");
abbrev("I am your father");
abbrev("Supercalifragilisticexpialidocious");
abbrev("!");
abbrev("Yo");