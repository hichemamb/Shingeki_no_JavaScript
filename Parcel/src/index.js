import 'flexboxgrid';
import './style/style.scss';



var two = document.querySelector('.Header-two');
var three = document.querySelector('.Header-three');
var four = document.querySelector('.Header-four');
var head = document.querySelector('.Header');


window.addEventListener('load',function(){
  two.style.right="0px";
  two.style.transition="all 2s ease";
  setTimeout(function(){
  three.style.right="0px";
  three.style.transition="all 3s ease"
  four.style.right="0px";
  four.style.transition="all 5s ease"
   }, 150);

   two.style.width="750px";
   two.style.transition="all 2s ease";
   three.style.opacity="1";
   three.style.transition="all 10s";
   four.style.opacity="1";
   four.style.transition="all 10s";
})
