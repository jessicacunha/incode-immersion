"use strict";

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("hello").onclick = function() {helloClick()};
    
    function helloClick() {
      console.log("Well, hello there!");
    }

});