const FizzFunction = function(number){
  for (let n=1; n<=number; n++) {
    if (n % 15 === 0) {
      console.log(n+"FizzBuzz")
    } else if(n % 5 ===0) {
      console.log(n+"Buzz")
    }else if(n % 15 ===0) {
      console.log(n+"Fizz")
    }else{
      console.log(n)
    }

  }
}