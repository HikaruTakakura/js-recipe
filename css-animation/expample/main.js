const display = document.getElementById("display")
const button = document.getElementById("button")

button.onclick = function toggleStyle(){
    display.classList.toggle('add-color');
}