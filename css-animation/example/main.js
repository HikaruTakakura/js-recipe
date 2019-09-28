const figure = document.getElementById("figure")

let isSquare = true

figure.onclick = function (){
    if (isSquare) {
        figure.classList.add('rounded')
        isSquare = false
    } else {
        figure.classList.remove('rounded')
        isSquare = true
    }
}