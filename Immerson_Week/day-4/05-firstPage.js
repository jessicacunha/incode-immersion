"use strict";

document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("title").textContent = "My first (dynamic) webpage";

    let h2s = document.querySelectorAll("h2")

    h2s[0].addEventListener("click", function() {
        alert("The Beatles (January 13, 1969)");
    });
    h2s[1].addEventListener("click", function() {
        alert("Carly Rae Jepsen (March 1, 2012)");
    });

});
