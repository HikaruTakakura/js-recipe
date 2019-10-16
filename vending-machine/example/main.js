const firstDrinkImage = document.getElementById("first_drink_image")
const firstPriceDisplay = document.getElementById("first-price-display")
const firstDrinkButton = document.getElementById("first-drink-button")
const moneyDisplay = document.getElementById("money-display")
const coinButton = document.getElementById("coin-button")
const drinkImage = document.getElementById("drink-image")

const drinks = [
    {
        id:1,
        name:"cola",
        price:150,
        image:"cola-bottle.png"
    },
]

const reloadView = function(){
    firstDrinkImage.src = "./images/" + drinks[0].image
    firstPriceDisplay.textContent = drinks[0].price + "円"
    moneyDisplay.textContent = "0円"
    console.log(drinks)
}

let inputMoney =0 

const hideImage = function(){
    drinkImage.src = "./images/"
    moneyDisplay.textContent =  "0円"
    drinkImage.classList.add("hidden")
}

firstDrinkButton.onclick = function(){
    moneyDisplay.textContent = "お釣り:"　+ (inputMoney - drinks[0].price) + "円"
    inputMoney  = 0
    drinkImage.src = "./images/" + drinks[0].image
    firstDrinkButton.disabled = true
    drinkImage.classList.remove("hidden")
    setTimeout(hideImage, 3000);
};

coinButton.onclick = function(){
    inputMoney = inputMoney + 100
    moneyDisplay.textContent = inputMoney + "円"
    if(inputMoney >= drinks[0].price){
        firstDrinkButton.disabled = false
    }
};

reloadView()