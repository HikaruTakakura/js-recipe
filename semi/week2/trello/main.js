const main = document.getElementById("main")
let i = 1
function addEdg(e) {
  i++
  const cardL = document.createElement("div")
  const h1 = document.createElement("h1")
  const inputL = document.createElement("input")
  const buttonL = document.createElement("button")
  const displayL = document.createElement("div")
  cardL.id = "card-${i}"
}

function addTodo(val) {
  let valId = val.id
  const display = document.getElementById("display-" + valId)
  console.log("input-" + valId)
  const input = document.getElementById("input-" + valId)
  console.dir(input)
  if (input.value) {
    console.log("working")
    const card = document.createElement("div")
    const span = document.createElement("span")
    const delBtn = document.createElement("button")
    console.log(input.value)
    span.textContent = input.value
    delBtn.textContent = "×"
    delBtn.onclick = function() {
      display.removeChild(card)
    }
    card.appendChild(span)
    card.appendChild(delBtn)
    card.className = "card"
    display.appendChild(card)
    input.value = ""
  }
}
