import 'flexboxgrid';
import './style/style.scss';


var key = {
  text: document.querySelectorAll('.storyPage-text'),
  verification: document.querySelector('.storyPage-verification'),
  index: 0,
  timer:'',
};

/*var text = document.querySelectorAll('.storyPage-text') ;
var verification = document.querySelector('.storyPage-verification');
var index = 0;
var timer;*/

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


  if (key.index === text.length) {
    clearInterval(key.timer);
  }

}



window.addEventListener('load',function(){
  showQuotes();
})
