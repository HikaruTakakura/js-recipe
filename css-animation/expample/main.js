const display = document.getElementById("display")
const squareButton = document.getElementById("square-button")
const circleButton = document.getElementById("circle-button")


squareButton.onclick = function (){
    display.classList.remove('circle');
    display.classList.add('square');
};

circleButton.onclick = function (){
    display.classList.add('circle');
    display.classList.remove('square');
};