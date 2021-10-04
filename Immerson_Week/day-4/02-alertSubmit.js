"use strict";

document.addEventListener("DOMContentLoaded", function() {

    document.getElementsByTagName("form")[0].addEventListener("submit", function(event) {
        alert("You have submitted the form!")
    });

});