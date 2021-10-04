"use strict";

document.addEventListener("DOMContentLoaded", function() {

    const colors = ["blue", "red", "yellow", "green", "black"]

    colors.forEach( function(color) {

        document.getElementById(color).addEventListener("mouseover", function(event) {
            document.getElementById("square").style.backgroundColor = event.target.id
        });

    });

});