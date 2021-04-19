let flag = 0

let myInput = ""
const display = document.getElementById("display")

function update(val) {
  display.textContent = val
  myInput = val
  if (myInput) {
    flag = 1
    console.log("flag:" + flag)
  } else {
    flag = 0
    console.log("flag:" + flag)
  }
}

function append(val) {
  console.log(val)
  if ((val == "+" || val == "-" || val == "/" || val == "*") && flag == 1) {
    console.log("come")
    flag = 0
    myInput += val
    display.textContent = myInput
  } else if (!(val == "+" || val == "-" || val == "/" || val == "*")) {
    flag = 1
    myInput += val
    display.textContent = myInput
  }
}

function done() {
  if (flag) {
    const val = display.textContent
    let i = Function('"use strict";return (' + val + ")")().toString()
    update(i)
  }
}
