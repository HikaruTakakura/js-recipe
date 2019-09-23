const coffeeButton = document.getElementById("coffee-button")
const colaButton = document.getElementById("cola-button")
const teaButton = document.getElementById("tea-button")
const correntMoney = document.getElementById("money")
const hundredCoin = document.getElementById("hundred-yen")
const halfHundredCoin = document.getElementById("half-hundred-yen")
const tenCoin = document.getElementById("ten-yen")
const outlet = document.getElementById("outlet")
const buyCoffee = document.getElementById("buy-coffee")
const buyCola = document.getElementById("buy-cola")
const buyTea = document.getElementById("buy-tea")
const changes = document.getElementById("changes")

let hasMoney = 0;

coffeeButton.onclick = function(){
    if (hasMoney >= 180) {
        if (hasMoney > 180) {
            hasMoney = 0
            correntMoney.textContent = hasMoney
            coffeeButton.classList.remove('can-buy')
            colaButton.classList.remove('can-buy')
            teaButton.classList.remove('can-buy')
            buyCoffee.classList.remove('hidden')
            setTimeout(() => {
                buyCoffee.classList.add('hidden')
            }, 5000);
            changes.classList.remove('hidden')
            setTimeout(() => {
                changes.classList.add('hidden')
            }, 5000);
        } else {
            hasMoney = 0
            correntMoney.textContent = hasMoney
            coffeeButton.classList.remove('can-buy')
            colaButton.classList.remove('can-buy')
            teaButton.classList.remove('can-buy')
            buyCoffee.classList.remove('hidden')
            setTimeout(() => {
                buyCoffee.classList.add('hidden')
            }, 5000);
        }
    }else{
        return false
    }
};

colaButton.onclick = function(){
    if (hasMoney >= 150) {
        if (hasMoney > 150) {
            hasMoney = 0
            correntMoney.textContent = hasMoney
            coffeeButton.classList.remove('can-buy')
            colaButton.classList.remove('can-buy')
            teaButton.classList.remove('can-buy')
            buyCola.classList.remove('hidden')
            setTimeout(() => {
                buyCola.classList.add('hidden')
            }, 5000);
            changes.classList.remove('hidden')
            setTimeout(() => {
                changes.classList.add('hidden')
            }, 5000);
        } else {
            hasMoney = 0
            correntMoney.textContent = hasMoney
            coffeeButton.classList.remove('can-buy')
            colaButton.classList.remove('can-buy')
            teaButton.classList.remove('can-buy')
            buyCola.classList.remove('hidden')
            setTimeout(() => {
                buyCola.classList.add('hidden')
            }, 5000);
        }
    }else{
        return false
    }
};

teaButton.onclick = function(){
    if (hasMoney >= 120) {
        if (hasMoney > 120) {
            hasMoney = 0
            correntMoney.textContent = hasMoney
            coffeeButton.classList.remove('can-buy')
            colaButton.classList.remove('can-buy')
            teaButton.classList.remove('can-buy')
            buyTea.classList.remove('hidden')
            setTimeout(() => {
                buyTea.classList.add('hidden')
            }, 5000);
            changes.classList.remove('hidden')
            setTimeout(() => {
                changes.classList.add('hidden')
            }, 5000);
        } else {
            hasMoney = 0
            correntMoney.textContent = hasMoney
            coffeeButton.classList.remove('can-buy')
            colaButton.classList.remove('can-buy')
            teaButton.classList.remove('can-buy')
            buyTea.classList.remove('hidden')
            setTimeout(() => {
                buyTea.classList.add('hidden')
            }, 5000);
        }
    }else{
        return false
    }
};

hundredCoin.onclick = function(){
    hasMoney = hasMoney + 100
    correntMoney.textContent = hasMoney
    if (hasMoney >= 180) {
        coffeeButton.classList.add('can-buy')
    }
    if (hasMoney >= 150) {
        colaButton.classList.add('can-buy')
    }
    if (hasMoney >= 120) {
        teaButton.classList.add('can-buy')
    }
};

halfHundredCoin.onclick = function(){
    hasMoney = hasMoney + 50
    correntMoney.textContent = hasMoney
    if (hasMoney >= 180) {
        coffeeButton.classList.add('can-buy')
    }
    if (hasMoney >= 150) {
        colaButton.classList.add('can-buy')
    }
    if (hasMoney >= 120) {
        teaButton.classList.add('can-buy')
    }
};

tenCoin.onclick = function(){
    hasMoney = hasMoney + 10
    correntMoney.textContent = hasMoney
    if (hasMoney >= 180) {
        coffeeButton.classList.add('can-buy')
    }
    if (hasMoney >= 150) {
        colaButton.classList.add('can-buy')
    }
    if (hasMoney >= 120) {
        teaButton.classList.add('can-buy')
    }
};