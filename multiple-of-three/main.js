  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  let number = 1;


for (let n=1; n<=number; n++) {
    const log_1 = function(number){
    console.log(`${number}!!!!!!!`)
    }
    const log_2 = function(number){
    console.log(number)
    }
    if (n % 3 === 0) {
    setInterval(log_1, 1000)
    } else {
    setInterval(log_2, 1000)
    }

    number =+ 1
}
