const answerContent = document.getElementById("answer-content")
const fButton = document.getElementById("answer-1st")
const gButton = document.getElementById("answer-2nd")
const wButton = document.getElementById("answer-3rd")
const hiddenContent = document.getElementById("hidden")


const answers = {
    'f':'❌','g':'❌','w':'⭕️',
};

fButton.onclick = function(){
    answerContent.textContent = answers.f
    hiddenContent.classList.add('hidden')
};

gButton.onclick = function(){
    answerContent.textContent = answers.g
    hiddenContent.classList.add('hidden')
};

wButton.onclick = function(){
    answerContent.textContent = answers.w
    hiddenContent.classList.remove('hidden')
};