const startWindow = document.getElementById("start-window");
const startButton = document.getElementById("start-button");

const mondaiWindow = document.getElementById("mondai-window");
const mondaiDisplay = document.getElementById("mondai-display");
const input = document.getElementById("input");
const timeDisplay = document.getElementById("time-display");

const resultWindow = document.getElementById("result-window");
const resultDisplay = document.getElementById("result-display");
const resetButton = document.getElementById("reset-button");

// 問題
const mondais = [
  "今日はいい天気ですね。",
  "しかし、昨日は雨でした。",
  "そして、お出かけは中止になりました。",
  "今日がいい天気でもなんの意味もない。"
];
let currentMondaiIndex = 0;
let timerId = null;
let time = 0;

startButton.onclick = function() {
  mondaiDisplay.textContent = mondais[0];
  startWindow.style.display = "none";
  mondaiWindow.style.display = "block";
  input.focus();
  timerId = setInterval(function() {
    time += 1;
    timeDisplay.textContent = time / 10 + " 秒";
  }, 100);
};

const nextMondai = function() {
  currentMondaiIndex += 1;
  if (currentMondaiIndex < mondais.length) {
    mondaiDisplay.textContent = mondais[currentMondaiIndex];
  } else {
    clearInterval(timerId);
    resultDisplay.textContent = "結果： " + time / 10 + " 秒";
    mondaiWindow.style.display = "none";
    resultWindow.style.display = "block";
  }
};

// エンターキーを押したとき、正誤判定する
input.onkeyup = function(e) {
  if (e.key === "Enter") {
    if (input.value === mondais[currentMondaiIndex]) {
      // 正解
      input.value = "";
      nextMondai();
    }
  }
};

// リセットボタン
resetButton.onclick = function() {
  time = 0;
  currentMondaiIndex = 0;
  resultWindow.style.display = "none";
  startWindow.style.display = "block";
  startButton.focus();
};

startButton.focus();
