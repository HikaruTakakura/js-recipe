new Vue({
  el: "#app",
  data: {
    feedback: "",
    quiz: {
      text: "この星の名前は何でしょう？",
      image: "Ganymede.jpg",
      choices: [
        {
          text: "ゴリアテ",
          isCorrect: false,
          feedback:
            "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
        },
        {
          text: "ゼニガメ",
          isCorrect: false,
          feedback:
            "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
        },
        {
          text: "ガニメデ",
          isCorrect: true,
          feedback: "正解！ガニメデは、木星の第三惑星だよ！",
        },
      ],
    },
  },
  methods: {
    choiced(choice) {
      this.feedback = choice.feedback

      if (choice.isCorrect) {
        // 次の問題へ
      }
    },
  },
  computed: {
    quizImagePath() {
      return "./images/" + this.quiz.image
    },
  },
})
