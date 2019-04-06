var dropzone;
let c = 45;
const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Przeciągnij zdjęcie z pulpitu', 'do zakreskowanej strefy',''] 
const elements = document.querySelector('.rotate');
const skew = document.querySelector('.skew');
const scaleUp = document.querySelector('.scaleUp');
const matrix = document.querySelector('.matrix');
const scaleDown = document.querySelector('.scaleDown');
const containerNav = document.getElementById("container-nav")
const widthofImg = document.querySelector('.width');
const sizeofImg = document.querySelector('.size');
const srcImg = document.querySelector('.src');
const popup = document.querySelector('.popup');
const introduce = document.getElementById("introduction");

//Sekcja dropzone
function setup() {
dropzone = select('#dropzone');
dropzone.dragOver(highlight);
dropzone.dragLeave(unhighlight);
dropzone.drop(gotFile, unhighlight);
}

function gotFile(file) {
 
var img = createImg(file.data);
img.size(200, 200);

if(true){
  console.log(file.name + ' ' + file.type + ' ' + file.size + ' bytes')
}
document.getElementById("dropzone").style.display = 'none';
document.getElementById("selectcontainer").style.display = 'block';
containerNav.style.display = 'block';
introduce.style.display = "none";
}

function highlight() {
dropzone.style('background-color','#2ECC40');
}

function unhighlight() {
dropzone.style('background-color','#FF4136');
}
//Koniec sekcji dropzone

//Sekcja poczatkowy napis

let activeLetter = -15;
let activeText = 0;

const addLetter = () => {
if (activeLetter >= 0) {
spnText.textContent += txt[activeText][activeLetter];
}
activeLetter++;
if (activeLetter === txt[activeText].length) {
activeText++;
if (activeText === txt.length) return;
return setTimeout(() => {
 activeLetter = -15;
 spnText.textContent = '';
 addLetter();
}, 500)
}
setTimeout(addLetter, 60)
if(activeText === txt.length){
alert('dziala')
}
}
addLetter(); 

const cursorAnimation = () => {
spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);

//Koniec sekcji początkowy napis

//Sekcja select Image animation
elements.addEventListener('click',function(){
document.querySelector('img').classList.add('animation')
if(document.querySelector('img').classList.contains('animation')){
  document.querySelector('img').classList.remove('animationSkew','animationScaleUp','animationMatrix','animationScaleDown')
}
})

skew.addEventListener('click',function(){
document.querySelector('img').classList.add('animationSkew');
if(document.querySelector('img').classList.contains('animationSkew')){
  document.querySelector('img').classList.remove('animationScaleUp', 'animation','animationMatrix','animationScaleDown');
}
})
scaleUp.addEventListener('click',function(){
document.querySelector('img').classList.add('animationScaleUp');
if(document.querySelector('img').classList.contains('animationScaleUp')){
  document.querySelector('img').classList.remove('animationSkew', 'animation','animationMatrix','animationScaleDown');
}
})

matrix.addEventListener('click',function(){
document.querySelector('img').classList.add('animationMatrix');
if(document.querySelector('img').classList.contains('animationMatrix')){
  document.querySelector('img').classList.remove('animationSkew', 'animation','animationScaleUp','animationScaleDown');
}
})
scaleDown.addEventListener('click',function(){
document.querySelector('img').classList.add('animationScaleDown');
if(document.querySelector('img').classList.contains('animationScaleDown')){
  document.querySelector('img').classList.remove('animationSkew', 'animation','animationScaleUp','animationMatrix');
}
})

//Koniec sekcji Image animation

//Sekcja backgroud body
function draw(){
document.documentElement.style.setProperty('--direction', c++ + 'deg');
requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
//Koniec sekcji backgroud body

//Sekcja właściwości img
(function() {
var hamburger = {
navToggle: document.querySelector('.nav-toggle'),
nav: document.querySelector('nav'),

doToggle: function(e) {
  e.preventDefault();
  this.navToggle.classList.toggle('expanded');
  this.nav.classList.toggle('expanded');
}
};
hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());

srcImg.addEventListener('click',function(){
var x = document.querySelector('img');
var source = x.getAttribute("src");
popup.style.display = 'block';
popup.style.overflow = 'hidden';
popup.innerHTML = source + '<i class="fas fa-times"></i>';
document.querySelector("img").style.display = 'none';
var quit = document.querySelector('i');
quit.addEventListener('click',function(){
popup.style.display = 'none';
x.style.display = 'block';
})
})

sizeofImg.addEventListener('click', function(){
var xv1 = document.querySelector("img");
var x = document.querySelector("img").naturalHeight;
popup.style.display = 'block';
popup.innerHTML = x + ' px' + '<i class="fas fa-times"></i>';
document.querySelector("img").style.display = 'none';
var quit = document.querySelector('i');
quit.addEventListener('click',function(){
popup.style.display = 'none';
xv1.style.display = 'block';
})
})

widthofImg.addEventListener('click',function(){
var xV1 = document.querySelector("img");
var x = document.querySelector("img").naturalWidth;
popup.style.display = 'block';
popup.innerHTML = x + ' px' + '<i class="fas fa-times"></i>';
document.querySelector("img").style.display = 'none';
var quit = document.querySelector('i');
quit.addEventListener('click',function(){
popup.style.display = 'none';
xV1.style.display = 'block';
document.querySelector('img').classList.remove('animationSkew', 'animation','animationScaleUp','animationMatrix','animationScaleDown')
})
})
//Koniec sekcji właściwośći img
