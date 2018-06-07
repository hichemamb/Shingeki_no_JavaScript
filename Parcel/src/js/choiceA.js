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
  titanSol: document.querySelector('.titanSol'),
  armyAttack: document.querySelector('.armyAttack'),
  armyAttackBackground: document.querySelector('.armyAttack-background'),
  surpriseHero: document.querySelector('.surpriseHero'),
  surpriseBlock1: document.querySelector('.surpriseHero-blockImg1'),
  surpriseBlock2: document.querySelector('.surpriseHero-blockImg2'),
  surpriseHeroBack: document.querySelector('.surpriseHero-back'),
  solo: document.querySelector('#solo'),
  help: document.querySelector('#help'),
  heroSoldat: document.querySelector('.heroSoldat'),
  heroSoldatBlock1: document.querySelector('.heroSoldat-blockImg1'),
  runHero: document.querySelector('.runHero'),
  runHeroBlock1: document.querySelector('.runHero-blockImg1'),
  runHeroBlock2: document.querySelector('.runHero-blockImg2'),
  runHeroBack: document.querySelector('.runHero-back'),
  erenAttack: document.querySelector('.erenAttack'),
  erenJambe: document.querySelector('.erenJambe'),
  erenDie: document.querySelector('.erenDie'),
  erenDieBlock1: document.querySelector('.erenDie-blockImg1'),
  erenDieBlock2: document.querySelector('.erenDie-blockImg2'),
  erenDieText: document.querySelector('.erenDie-text'),
  titanReturn: document.querySelector('.titanReturn'),
  titanReturnBlock: document.querySelector('.titanReturn-blockImg'),
  titanReturnBack: document.querySelector('.titanReturn-back'),
  miam: document.querySelector('.miam'),
  attaquer: document.querySelector('#attaquer'),
  miamBack: document.querySelector('.miam-back'),
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
    rotateZ:-10
  }, {
    duration:2000,
    delay: 2500
  });

  Velocity(key.block2, {
    opacity: [1,0],
    rotateZ:10
  }, {
    duration:2000,
    delay: 5500
  });

  Velocity(key.block3, {
    opacity: [1,0],
    rotateZ:-10
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
  key.heroAttack.style.display='none';
  key.armyAttack.style.display='block';
  Velocity(key.armyAttackBackground, {
    translateY : [2000,-2000]
  }, {
    duration: 3500
  });

  setTimeout(function(){
    key.armyAttack.style.animationName='fadeOut';
    key.armyAttack.style.animationDuration='2s';
  },3500);
  setTimeout(function(){
    key.surpriseHero.style.animationName='fadeIn';
    key.surpriseHero.style.animationDuration='2s';
  },3800);
  setTimeout(function(){
    key.armyAttack.style.display='none';
    key.surpriseHero.style.display='block';
  },4000);

  Velocity(key.surpriseBlock1, {
    opacity: [1,0]
  }, {
    duration:2000,
    delay: 5000
  });

  Velocity(key.surpriseBlock2, {
    opacity: [1,0]
  }, {
    duration:2000,
    delay: 7000
  });

  Velocity(key.surpriseHeroBack, {
    opacity: [0.7,0]
  }, {
    duration:2000,
    delay: 9000
  });

})

help.addEventListener('click',function(){
  key.surpriseHero.style.display='none';
  key.heroSoldat.style.display='block';

  Velocity(key.heroSoldatBlock1, {
    opacity: [1,0]
  }, {
    duration:2000,
    delay: 2000
  });

  setTimeout(function(){
    key.heroSoldat.style.animationName='fadeOut';
    key.heroSoldat.style.animationDuration='2s';
  },4000);
  setTimeout(function(){
    key.runHero.style.animationName='fadeIn';
    key.runHero.style.animationDuration='2s';
  },4800);
  setTimeout(function(){
    key.heroSoldat.style.display='none';
    key.runHero.style.display='block';
  },5000);

  Velocity(key.runHeroBlock1, {
    opacity: [1,0]
  }, {
    duration:2000,
    delay: 8000
  });

  Velocity(key.runHeroBlock2, {
    opacity: [1,0]
  }, {
    duration:2000,
    delay: 11000
  });
  setTimeout(function(){
    key.runHeroBack.style.opacity='0.7';
    key.runHeroBack.style.transition='all 2s ease';
  },14000)
})

solo.addEventListener('click',function(){
  key.surpriseHero.style.display='none';
  key.erenAttack.style.display='block';
  setTimeout(function(){
    key.erenAttack.style.display='none';
    key.erenJambe.style.display='block';
  },1000)
  setTimeout(function(){
    key.erenJambe.style.display='none';
    key.erenDie.style.display='block';
  },2000)


  Velocity(key.erenDieBlock1, {
    opacity: [1,0]
  }, {
    duration:2000,
    delay: 4000
  });


  Velocity(key.erenDieBlock2, {
    opacity: [1,0]
  }, {
    duration:2000,
    delay: 9000
  });

  var erenText = new Typewriter(key.erenDieText, {
    cursor: ''
  });

  setTimeout(function(){
  erenText.typeString('Tiens bon Eren !')
  .start();
},5000)

setTimeout(function(){
key.erenDieText.style.display='none';
},8000)

})


sol.addEventListener('click',function(){
    key.erenAttack.style.display='none';
    key.erenDie.style.display='none';
    key.heroAttack.style.display='none';
    key.titanSol.style.display='block';
    setTimeout(function(){
      key.titanSol.style.animationName='fadeOut';
      key.titanSol.style.animationDuration='2s';
    },3000);
    setTimeout(function(){
      key.titanReturn.style.animationName='fadeIn';
      key.titanReturn.style.animationDuration='2s';
    },3800);
    setTimeout(function(){
      key.titanSol.style.display='none';
      key.titanReturn.style.display='block';
    },4000);
    Velocity(key.titanReturnBlock, {
      opacity: [1,0]
    }, {
      duration:2000,
      delay: 6000
    });
    setTimeout(function(){
      key.titanReturnBack.style.opacity='0.7';
      key.titanReturnBack.style.transition='all 2s ease';
    },9000)

})

attaquer.addEventListener('click',function(){
  key.titanReturn.style.display='none';
  key.miam.style.display='block';
  setTimeout(function(){
    key.miamBack.style.opacity='0.7';
    key.miamBack.style.transition='all 2s ease';
  },4000)
})
