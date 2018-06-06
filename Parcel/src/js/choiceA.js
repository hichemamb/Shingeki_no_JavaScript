var key = {
  cross1: document.querySelector('.brokenWall-cross1'),
  cross2: document.querySelector('.brokenWall-cross2'),
  brokenWall: document.querySelector('.brokenWall'),
  titanComing: document.querySelector('.titanComing'),
  titanComingBack: document.querySelector('.titanComing-back'),
  teamChocked: document.querySelector('.teamChocked'),
  teamChockedBack: document.querySelector('.teamChocked-back'),
  yes: document.querySelector('#Yes'),
  titanEnter: document.querySelector('.titanEnter'),
  block1: document.querySelector('.titanEnter-blockImg1'),
  block2: document.querySelector('.titanEnter-blockImg2'),
  block3: document.querySelector('.titanEnter-blockImg3'),
  block4: document.querySelector('.titanEnter-blockImg4'),
  text: document.querySelector('.titanEnter-text'),
  heroAttack: document.querySelector('.heroAttack'),
  heroAttackBack: document.querySelector('.heroAttack-back'),
  toit: document.querySelector('#toit'),
  sol: document.querySelector('#sol'),
}


Velocity(key.cross1, {
  opacity: [1,0]
}, {
  duration:2000,
  delay: 1500
});

Velocity(key.cross2, {
  opacity: [1,0]
}, {
  duration:2000,
  delay: 1500
});


function changeSection(){
  setTimeout(function(){
    key.brokenWall.style.animationName='fadeOut';
    key.brokenWall.style.animationDuration='2s';
  },4500);
  setTimeout(function(){
    key.titanComing.style.animationName='fadeIn';
    key.titanComing.style.animationDuration='2s';
  },4800);
  setTimeout(function(){
    key.brokenWall.style.display='none';
    key.titanComing.style.display='block';
  },5000);
  setTimeout(function(){
    key.titanComingBack.style.opacity='0.7';
    key.titanComingBack.style.transition='all 2s ease';
  },7000)
  setTimeout(function(){
    key.titanComing.style.animationName='fadeOut';
    key.titanComing.style.animationDuration='2s';
  },11500);
  setTimeout(function(){
    key.teamChocked.style.animationName='fadeIn';
    key.teamChocked.style.animationDuration='2s';
  },11800);
  setTimeout(function(){
    key.titanComing.style.display='none';
    key.teamChocked.style.display='block';
  },12000)
  setTimeout(function(){
    key.teamChockedBack.style.opacity='0.7';
    key.teamChockedBack.style.transition='all 2s ease';
  },15000)

}

function afterYesChangeSection(){
  key.teamChocked.style.display='none';
  key.titanEnter.style.display='block';
letterSpacing: 5

  Velocity(key.text, {
    opacity: [0,1]
  }, {
    duration:2000,
    delay: 1500
  });

  Velocity(key.block1, {
    opacity: [1,0],
    rotateZ:-30
  }, {
    duration:2000,
    delay: 2500
  });

  Velocity(key.block2, {
    opacity: [1,0],
    rotateZ:20
  }, {
    duration:2000,
    delay: 5500
  });

  Velocity(key.block3, {
    opacity: [1,0],
    rotateZ:-25
  }, {
    duration:2000,
    delay: 8500
  });

  Velocity(key.block4, {
    opacity: [1,0],
    rotateZ:10
  }, {
    duration:2000,
    delay: 11500
  });

  setTimeout(function(){
    key.titanEnter.style.display='none';
    key.heroAttack.style.display='block';
  },15000);

  setTimeout(function(){
    key.heroAttackBack.style.opacity='0.7';
    key.heroAttackBack.style.transition='all 2s ease';
  },17000)

}



window.addEventListener('load',function(){
  changeSection();
})

yes.addEventListener('click',function(){
  afterYesChangeSection();
})

toit.addEventListener('click',function(){
  
})

sol.addEventListener('click',function(){

})
