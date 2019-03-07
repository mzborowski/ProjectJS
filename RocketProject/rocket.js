const about = document.getElementById('about');
const main = document.getElementById('main-section');
const bgcBg = document.querySelector('.bgc-container');
const cometa = document.querySelector('.cometa');
const cloudsBgc = document.getElementById('clouds');
const controls = document.querySelector('.control');

//Sekcja latająca rakieta
const flyRocket = document.querySelector('.fly');
var up = false,
    right = false,
    down = false,
    left = false,
    x = window.innerWidth/2-130/2,
    y = window.innerHeight/2-130/2
document.addEventListener('keydown',press)
function press(e){
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
    up = true
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    right = true
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
    down = true
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
    left = true
  }
}
document.addEventListener('keyup',release)
function release(e){
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
    up = false
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    right = false
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
    down = false
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
    left = false
  }
}
function gameLoop(){
  var div = document.querySelector('.fly')
  if (up){
    y = y - 10
  }
  if (right){
    x = x + 10
  }
  if (down){
    y = y + 10
  }
  if (left){
    x = x - 10
  }
  div.style.left = x+'px'
  div.style.top = y+'px'
  window.requestAnimationFrame(gameLoop)
}
window.requestAnimationFrame(gameLoop)



window.addEventListener('keypress', function(e){
  if(e.keyCode === 32){
  about.style.display = 'none';
  bgcBg.style.display = 'none';
  flyRocket.style.display = 'block';
  cloudsBgc.style.display = 'block';
  controls.style.display = 'block'
  document.body.style.backgroundColor = "#0074D9";
  }
 
})
// Koniec Sekcja latająca rakieta


//Background First | Początek strony
window.onload = function(){
	let sky = document.querySelector('#sky');
			const rocketOne = document.querySelector('#rocket-1');
		const rocketTwo = document.querySelector('#rocket-2');
       const rocketThree = document.querySelector('#rocket-3');
			 const rocketFour = document.querySelector('#cloud-4');

	sky.addEventListener('mousemove',function(e){
		var pageX = e.clientX - window.innerWidth/2,
                pageY = e.clientY - window.innerHeight/2;
  	rocketOne.style.transform = 'translateX(' + (5 + pageX/100) + '%) translateY(' + (5 + pageY/100) + '%)';
  	rocketTwo.style.transform = 'translateX(-' + (5 + pageX/150) + '%) translateY(-' + (5 + pageY/150) +  '%)';
  	rocketThree.style.transform = 'translateX(-' + (5 + pageX/200) + '%) translateY(' + (5 + pageY/200) +  '%)';
  	rocketFour.style.transform = 'translateX(-' + (5 + pageX/25) + '%) translateY(-' + (5 + pageY/25) + '%)';
	});
}

function bgc(){
about.style.display = 'block';
main.style.display = 'none';
bgcBg.style.display = 'block';

}
const span = document.querySelector('span');
window.addEventListener('keypress', function(e){
  if(e.keyCode === 48){
  span.style.animationPlayState = 'running';
  cometa.style.animationPlayState = 'running';
  }else{
    return;
  }
  setTimeout('bgc()',1000);
})
var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

//Koniec sekcji Background first