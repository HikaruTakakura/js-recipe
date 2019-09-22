const display = document.getElementById("display")
const stopButton = document.getElementById("stop-button")
const startButton = document.getElementById("start-button")


let count = 0;

const countup = function(){
    count ++
    display.textContent = count
};

let id = setInterval(countup,1000);

stopButton.onclick = function(){
    clearInterval(id)
};

startButton.onclick = function(){
    id = setInterval(countup,1000);
};
