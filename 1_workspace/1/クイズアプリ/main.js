const　display = document.getElementById("display")
const　button1 = document.getElementById("button1")
const　button2 = document.getElementById("button2")
const　button3 = document.getElementById("button3")


const answer = ["正解。(全然いけてない)","不正解。(目標的にはこれくらいいきたいけど、いけてない)","不正解(そんなにいけたら、もっと痩せてる。。。)"]
const messege = function(n){
    display.textContent = answer[n]
}

button1.onclick = function(){
    messege(0)
}

button2.onclick = function(){
    messege(1)
}

button3.onclick = function(){
    messege(2)
}


const yuya ={
    name: "ゆーや",
    age: 19,
    birthDay: 2001/2/16,
    hobbies: ["筋トレ","ラグビー","音楽"],
    messege :function(){
        console.log("よろしくお願いします！！")
    } 

}
