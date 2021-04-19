const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const display = document.getElementById("display")

const text = ["残念・・・", "正解！"]

const ansImg1 = document.createElement("img")
ansImg1.src = "./pugg.jpeg"
const ansImg3 = document.createElement("img")
ansImg3.src = "./pom.jpeg"

button1.addEventListener("click", () => {
  display.textContent = text[0]
  console.log("it working")
  display.appendChild(ansImg1)
  location.href = "https://note.com/siororo/n/n38ceee1d21a8"
})
button2.addEventListener("click", () => {
  display.textContent = text[1]
})
button3.addEventListener("click", () => {
  display.textContent = text[0]
  display.appendChild(ansImg3)
})

const sio = {
  seyHello: function() {
    console.log("こんにちは！")
  },
  seeNote: function() {
    window.open("https://note.com/siororo/n/n38ceee1d21a8", "_blank")
  },
  name: "Yu ooshio",
  age: 23,
  mentor: true,
  hobby: ["coffee", "JP drum", "YouTube"],
}
console.log(sio)
sio.seeNote
