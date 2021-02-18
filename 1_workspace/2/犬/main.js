const imageElement = document.getElementById("dog-image")
const imageElement1 = document.getElementById("dog-image1")
const imageElement2 = document.getElementById("dog-image2")
const button = document.getElementById("next")

button.onclick = function(){


// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random/3")
  .then((res)=>{
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data)=>{
    imageElement.src = data.message[0],
    imageElement1.src = data.message[1],
    imageElement2.src = data.message[2] // 画像を表示する
  })
}