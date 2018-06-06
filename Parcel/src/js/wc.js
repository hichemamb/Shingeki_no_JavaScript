var eren = document.querySelector('.wcContainer-erenCaca');
var poop = document.querySelector('.wcContainer-poop');
var text = document.querySelector('.wcContainer-text');
var textContainer = document.querySelector('.wcContainer-textContainer');
var dialog = document.querySelector('.wcContainer-dialog');



Velocity(eren, {
  translateY : [0,-800]
}, {
  duration: 2000
});

Velocity(poop, {
  opacity : [1,0],
  translateY : [100,-40],
}, {
  duration: 2000,
  delay:2000
});

Velocity(dialog, {
  opacity : [1,0],
}, {
  duration: 1000,
  delay:3000
});

Velocity(textContainer, {
  opacity : [1,0],
}, {
  duration: 2000,
  delay:3000
});


var erenText = new Typewriter(text, {
  cursor: ''
});

setTimeout(function(){
erenText.typeString('Ahhhh! Ca fait du bien par là ou ça passe ...')
.start(); }, 3500);
