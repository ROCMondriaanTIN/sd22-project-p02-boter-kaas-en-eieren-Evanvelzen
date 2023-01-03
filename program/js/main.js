console.log('main.js loaded');

const start = document.querySelector('.start');

start.addEventListener('click', moveToGame);

//ensures the enitre div is clickable like a ahref
function moveToGame(){
window.location.href = ('game.html');
}