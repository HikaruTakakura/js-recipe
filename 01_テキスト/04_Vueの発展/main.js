// new Vue がたくさんありますが、驚かないでください
// Vue はページの一部分（ el で指定した範囲）に適用できるので、1ページにいっぱいあっても大丈夫です

new Vue({
  el: '#v-if',
  data: {
    seen: false
  },
  methods: {
    hyouji: function () {
      this.seen = true
    }
  }
})

new Vue({
  el: "#v-if-sign-in",
  data: {
    user: null
  },
  methods: {
    signIn() {
      this.user = {
        name: "ギーク太郎"
      }
    },
    signOut() {
      this.user = null
    }
  },
})

new Vue({
  el: "#v-for",
  data: {
    animals: ["ふらみんご", "ごりら", "らいおん"],
  }
})

new Vue({
  el: "#v-for-push",
  data: {
    animals: ["ふらみんご", "ごりら", "らいおん"],
  },
  methods: {
    addAnimal: function () {
      this.animals.push("んらいおん")
    },
  },
})

new Vue({
  el: "#v-bind",
  data: {
    helloClass: "hello",
  },
})

new Vue({
  el: "#computed",
  data: {
    items: [
      {
        name: "りんご",
        price: 150,
        amount: 3,
      },
      {
        name: "みかん",
        price: 100,
        amount: 5,
      },
      {
        name: "ぶどう",
        price: 400,
        amount: 1,
      },
    ],
  },
  computed: {
    totalPrice: function () {
      let price = 0
      for (let i = 0; i < this.items.length; i++) {
        price += this.items[i].price * this.items[i].amount
      }
      return price
    },
  },
})

new Vue({
  el: "#computed-recalculate",
  data: {
    items: [
      {
        name: "りんご",
        price: 150,
        amount: 3,
      },
      {
        name: "みかん",
        price: 100,
        amount: 5,
      },
      {
        name: "ぶどう",
        price: 400,
        amount: 1,
      },
    ],
  },
  computed: {
    totalPrice: function () {
      let price = 0
      for (let i = 0; i < this.items.length; i++) {
        price += this.items[i].price * this.items[i].amount
      }
      return price
    },
  },
  methods: {
    addItem: function (item) {
      item.amount += 1
    },
  },
})

new Vue({
  el: "#v-model",
  data: {
    inputValue: "",
  },
})

new Vue({
  el: "#created",
  data: {
    inputValue: "",
    memo: "",
  },
  created: function () {
    const storedMemo = localStorage.memo
    if (storedMemo) {
      this.memo = storedMemo
    }
  },
  methods: {
    save: function () {
      localStorage.memo = this.inputValue
    },
  },
})
