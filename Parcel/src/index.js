import 'flexboxgrid';
import './style/style.scss';


var one = document.querySelector('.Header-one');
var two = document.querySelector('.Header-two');
var head = document.querySelector('.Header');


document.addEventListener('mouseover',function(){
  one.style.left="100px";
  two.style.right="100px";
  one.style.transition="all 2s ease";
  two.style.transition="all 2s ease";
})
