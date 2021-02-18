var app = new Vue({
  el: '#app',
  data: {
    currentMoney: 0,
    totalDrink: [],
    inputText: "",
  },

  methods: {
    addButton: function(){
      this.currentMoney += Number(this.inputText);
    },
    buyDrink: function(){
      this.currentMoney -= 100;
      this.totalDrink.push("購入したよ");
    }
  },
})

const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")




let list = []
if (localStorage.list) {
  const stringifiedList = localStorage.list
  list = JSON.parse(stringifiedList)

  for (let i = 0; i < list.length; i++) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = list[i]
  card.append(todo)
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function(){
    localStorage.clear(card)

  }
  card.append(deleteButton)
  container.append(card)
  }

}



const createCard = function(text){
  
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  list.push(text)
  localStorage.list = JSON.stringify(list)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function(){
    card.remove()
  }
  card.append(deleteButton)


  return card
  

  
}



addButton.onclick = function(){
  
  const card = createCard(inputElement.value)
  container.append(card)

  inputElement.value = ''
}

inputElement.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    const card = createCard(inputElement.value)
    container.append(card)
    inputElement.value = ''
  }
})













