var key = {
  text: document.querySelectorAll('.storyPage-text'),
  verification: document.querySelector('.storyPage-verification'),
  index: 0,
  timer:'',
};

var listText = [ 
 {
  "content": " Il y a plus d’un siècle est apparu sur Terre une nouvelle espèce humanoïde, les titans, prédateurs naturelles de l’homme. ",
 },
 {
  "content": " Il existe entre l’homme et lui une différence de force si colossale que l’humanité a failli disparaitre en très peu de temps.",
 },
 {
  "content": " Les survivants ont batti trois remparts en cercle concentrique, le mur Maria ,Rose et Sina.  ",
 },
 {
  "content": "Ces murs leurs ont permis de vivre près d’un siècle en paix. Jusqu’au au jour ou tout a basculé . ",
 },
 {
  "content": "En l’an 845 avec l’apparition soudaine du titan colossale et du titan cuirassé , le quotidien de l’homme a volé en éclat en même temps que le mur . ",
 },
 {
  "content": "En 850, le Titan colossale est réapparu qui a de nouveau détruit le mur , laissant encore une fois les humains a la merci des titans . ",
 },
];

function addText(){
  key.text[0].innerHTML = listText[0].content;
  key.text[1].innerHTML = listText[1].content;
  key.text[2].innerHTML = listText[2].content;
  key.text[3].innerHTML = listText[3].content;
  key.text[4].innerHTML = listText[4].content;
  key.text[5].innerHTML = listText[5].content;
}

key.timer = setInterval(showQuotes, 7000);

function showQuotes(){
  key.text[key.index].style.display='block';
  key.text[key.index].style.opacity='1';
  key.text[key.index].style.transition='all 2s ease';
  setTimeout(function(){key.verification.style.display='block';}, 42000);
  setTimeout(function(){key.text[key.index].style.display='none'; }, 6800);
  setTimeout(function(){key.text[key.index].style.opacity='0'; }, 5000);
  setTimeout(function(){key.text[key.index].style.transition='all 2s ease'; }, 5000);
  setTimeout(function(){key.index++; }, 6800);


  if (key.index === key.text.length) {
    clearInterval(key.timer);
  }

}

window.addEventListener('load',function(){
  addText();
  showQuotes();
})
