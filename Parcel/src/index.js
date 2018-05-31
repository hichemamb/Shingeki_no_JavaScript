import 'flexboxgrid';
import './style/style.scss';


/*var key = {
  text : document.querySelectorAll('.storyPage-text'),
  index : 0,
};*/

var text = document.querySelectorAll('.storyPage-text') ;
var index = 0;
var timer;



timer = setInterval(showQuotes, 6000);

function showQuotes(){
  text[index].style.display='block';
  text[index].style.opacity='1';
  setTimeout(function(){text[0].style.opacity='0';text[0].style.transition="all 2s ease"; }, 4000);
  setTimeout(function(){text[1].style.opacity='0';text[1].style.transition="all 2s ease"; }, 10000);
  setTimeout(function(){text[2].style.opacity='0';text[2].style.transition="all 2s ease"; }, 16000);
  setTimeout(function(){text[3].style.opacity='0';text[3].style.transition="all 2s ease"; }, 22000);
  setTimeout(function(){text[4].style.opacity='0';text[4].style.transition="all 2s ease"; }, 28000);
  setTimeout(function(){text[0].style.display='none'; }, 5800);
  setTimeout(function(){text[1].style.display='none'; }, 11800);
  setTimeout(function(){text[2].style.display='none'; }, 17800);
  setTimeout(function(){text[3].style.display='none'; }, 23800);
  setTimeout(function(){text[4].style.display='none'; }, 29800);
  index++;

  if (index === text.length) {
    clearInterval(timer);
  }
}

window.addEventListener('load',function(){
  showQuotes();

})
