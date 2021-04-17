const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const display = document.getElementById("display")

const text = ["残念・・・", "正解！"]

const ansImg1 = document.createElement("img")
ansImg1.src = "pugg.jpeg"
const ansImg3 = document.createElement("img")
ansImg3.src = "pom.jpeg"

button1.addEventListener("click", () => {
  display.textContent = text[0]
  console.log("it working")
  display.appendChild(ansImg1)
})
button2.addEventListener("click", () => {
  display.textContent = text[1]
})
button3.addEventListener("click", () => {
  display.textContent = text[0]
  display.appendChild(ansImg3)
})
