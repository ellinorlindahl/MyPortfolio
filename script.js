

// Responsive navbar to hamburger

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += "responsive";
    } else {
        x.className = "navbar";
    }
}




















///*––––––––––––––––––––––––––––––––––––––––––––––––––
//YOU CAN IGNORE ANYTHING BELOW THIS LINE, IT IS NOT DONE, JUST IDEAS :)
















// Get the modal
var modal = document.getElementById("frisqModal");

// Get the button that opens the modal
var img = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
img.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





    ///*––––––––––––––––––––––––––––––––––––––––––––––––––
    //YOU CAN IGNORE ANYTHING BELOW THIS LINE, IT IS NOT DONE, JUST IDEAS :)









    // COLLAPSIBLE ABOUT ME JS (IDEA I WANT TO IMPLEMENT)
    // Put the education/work experience tables on the HOME page but make it foldable with js





























    // TIMELINE JS - ABOUT ME PAGE
    (function () {
        "use strict";

        // define variables
        var items = document.querySelectorAll(".timeline li");

        // check if an element is in viewport
        // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
                if (isElementInViewport(items[i])) {
                    items[i].classList.add("in-view");
                }
            }
        }

        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
    })();