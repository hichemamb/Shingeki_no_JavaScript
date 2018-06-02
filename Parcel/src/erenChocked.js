var banner = document.querySelector('.erenChockedContainer-banner');
var rose = document.querySelector('.erenChockedContainer-rose');
var maria = document.querySelector('.erenChockedContainer-maria');
var text = document.querySelector('.erenChockedContainer-text');


Velocity(banner, {
  translateY : [0,-2000]
}, {
  duration: 2000
});

Velocity(maria, {
  opacity: [1,0]
}, {
  duration:2000,
  delay: 2000
});

Velocity(rose, {
  opacity: [1,0]
}, {
  duration:2000,
  delay: 3000
});

var erenText = new Typewriter(text, {
  cursor: ''
});

erenText.typeString('Eren Jäger est abasourdi, les murs ont été détruit !')
.start();
