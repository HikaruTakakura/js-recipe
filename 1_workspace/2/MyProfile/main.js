const addButton = document.getElementById("opning")
const inButton = document.getElementById("main-container")



addButton.addEventListener('click', function(){
  addButton.classList.add('fadeout');
  setTimeout(function(){ 
    addButton.style.display = "none"; 
    inButton.style.display = ""; 
  }, 1000);
  inButton.classList.add('fade_in_up')

}, false);


var body = document.getElementsByTagName('body')[0];

function fadeOut() {
    body.classList.add('bodyfadeout');
}

function linkUrl() {
  location.pathname = '/js-recipe/1_workspace/2/MyProfile/quiz.html'
}
var bt1 = document.getElementById('button1');
bt1.addEventListener('click', function() {
    fadeOut();
    setTimeout(linkUrl, 1500);
});


