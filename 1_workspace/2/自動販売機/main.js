const coke = document.getElementById("coke")
const moneyDisplay = document.getElementById("money-display")
const addMoney = document.getElementById("addmoney")
const otsuri = document.getElementById("otsuri")
const wallet = document.getElementById("wallet")

let money = 0

addMoney.onclick = fanction(){
  money +=10
  moneyDisplay.textContent = money
}

coke.onclick = fanction(){
  if(money > 160){
    
  }
}