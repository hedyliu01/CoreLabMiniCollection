// define our first variable, the red circle
let orangeSquare = document.querySelector(".orange-square");

// what happens when someone interacts with the red circle
function turnOrange() {
   document.body.style.background = "orange";
}

// add an event listener
// when someone clicks on the red circle, change the background red

orangeSquare.addEventListener("click", turnOrange);

// defining the variable blue circle
let blackSquare = document.querySelector(".black-square");

function turnBlack() {
    document.body.style.background = "black";
 }

 blackSquare.addEventListener("click", turnBlack);