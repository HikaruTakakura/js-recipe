const display = document.getElementById("display")
const button = document.getElementById("button")
let count = 0

const countUp = function(){
    count += 1
    display.textContent = count/100
}

let id = null

button.onclick = function(){
    if (id === null) { 
        id = setInterval(countUp, 10)
        button.textContent = "stop"
    } else { 
        clearInterval(id)
        id = null
        button.textContent = "start"
    }
}