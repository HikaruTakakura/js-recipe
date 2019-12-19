new Vue({
  el: "#app",
  data: {
    red: 0,
    green: 0,
    colors: [
      // { red: 0, green: 0 }
    ]
  },
  methods: {
    // マウスの位置に応じて色を変える
    changeColor(e) {
      this.red = e.offsetX;
      this.green = e.offsetY;
    },
    // 色を選んでミニパレットに追加する
    pickColor() {
      const newColor = {
        red: this.red,
        green: this.green
      };
      this.colors.push(newColor);
    },
    // パレットに指定した色を表示する
    showColor(color) {
      this.red = color.red;
      this.green = color.green;
    }
  },
  computed: {
    paletteStyle() {
      return {
        backgroundColor: `rgba(${this.red}, ${this.green}, 200, 0.5)`
      };
    }
  }
});
