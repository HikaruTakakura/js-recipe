/**
 * ふつうの JavaScript
 * localStorage の値が最初に表示されない実装ミスあり
 */
const input = document.getElementById("input")
const button = document.getElementById("button")
const container = document.getElementById("container")

// データ（状態）
const list = JSON.parse(localStorage.list || "[]")
// 以下と同じ意味
// let list = []
// if (localStorage.list) {
//   list = JSON.parse(localStorage.list)
// }

button.onclick = function() {
  const text = input.value

  // データを更新するコード
  list.push(text)
  localStorage.list = JSON.stringify(list)

  // データを表示するコード
  const card = document.createElement("div")
  card.textContent = text
  container.appendChild(card)
}

/**
 * Vue
 */
new Vue({
  el: '#app',
  data: {
    text: "",
    list: JSON.parse(localStorage.list || "[]") // ["こんにちは", "おっす"]
  },
  methods: {
    addCard: function(){
      this.list.push(this.text)
      localStorage.list = JSON.stringify(this.list)
    }
  }
})