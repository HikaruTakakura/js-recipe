const display = document.getElementById("display")
const click = document.getElementById("click")
const fibDisplay = document.getElementById("fibDisplay")

let count = 0


click.onclick = function(){
    count  += 1
    display.textContent = count
    fidDisplay.textContent = fib(count)

}

const fib = function(n){
    if (n===1){
        return 1
    }else if(n===2){
        return 1
    }else{
        return fib(n-2)+fib(n-1)
    }
}


setInterval(countUp,1000)


