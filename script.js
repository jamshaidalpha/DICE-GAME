/*'use strict';


//select element
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');


const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn-new');
const btnRoll=document.querySelector('.btn-roll');
const btnHold=document.querySelector('.btn-hold');


//conditon
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');


const scores=[0,0];
let currentScore=0;
let activeplayer=0;

//Roll Dice
btnRoll.addEventListener('click', function(){
    //generate randome dice number
     const dice=Math.trunc(Math.random()*6)+1;
     console.log(dice);
 
   //Display dice
    diceEl.classList.remove('hidden');
   diceEl.src=`dice-${dice}.png`;

   //check for roll
  if(dice!==1){
       //add dice to current score
       currentScore+=dice;
       document.getElementById(`current--${activePlayer}`).textContent=currentScore;  
  }else{
     //switch to next player
     activeplayer=activeplayer===0?1:0;
  }
});

*/
/*
'use strict';

// Select elementsfunction
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

/*
// Initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


let scores,currentScore,activePlayer,playing;
const init = function(){
 scores = [0, 0];
 currentScore = 0;
 activePlayer = 0;
 playing = true;


 score0El.textContent=0;
 score1El.textContent=0;
 current0El.textContent=0;
 current1El.textContent=0;

 diceEl.classList.add('hidden');
 player0El.classList.remove('player--winner');
 player1El.classList.remove('player--winner');
 player0El.classList.add('player--active');
 player1El.classList.remove('player--active');

};



// Roll Dice
init();
btnRoll.addEventListener('click', function () {
  // Generate random dice number
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // Check for roll
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // Reset current score
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    // Optionally, add visual feedback for active player switch
  }
});






btnHold.addEventListener('click', function () {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
  
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
    // 2. Check if player's score is >= 20
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  });
  



  /*
  btnNew.addEventListener('click',function(){
  document.getElementById(`score--${scores[0,0]}`);
  });
   
  
 

btnNew.addEventListener('click',function(){
 score0El.textContent=0;
score1El.textContent=0;
current0El.textContent=0;
current1El.classList.remove('player--winner');
player1El.classList.remove('player--winner');

});
*/




/*


'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score is >= 100         
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);




*/














































/*
'use strict'

const player0=document.querySelector('player--0');
const player1=document.querySelector('player--1');
const current0=document.querySelector('current--1');
const current1=document.document('current--0');
const score00=document.getElementById('.score--0');
const score11=document.querySelector('.score--1');

const btnNew=querySelector('btn--new');
const btnHold=querySelector('btn--hold');
const btnRoll=getElementById('btn--Roll');



let scores,score0,score1,playing
function init()
{
  scores=[0,0];
  score00=0;
  score11=0;
  playing =true;

  



}
const switchplayer()
if
player--active===player--active 0? 1: 0;

const dice( Math.trunc(Math.random()*6)+1);

btnRoll.addEventListener('click',function{
  src.dice-5.png




});

btnHold.addEventListener('click',function{

});


btnNew.addEventListener('click',function{

});

*/



/*

'use strict'

const score0=document.querySelector('#score--0');
const score1=document.querySelector('score--1');
const player0=document.querySelector('player--0');
const player1=document.querySelector('player--1');
const current0=document.querySelector('current--0');
const current1=document.querrySelector('current--1');

const dice1=document.querrySelector('.dice');
const btnNew=document.querrySelector('.btnNew');
const btnRoll=document.querrySelector('.btnRoll');
const btnHold=document.querrySelector('.btnHold');


let scores,activePlayer,currentScore,playing;
const init = function(){

 scores=[0,0];
 activePlayer=0;
 currentScore=0;
 playing=true;

 score0.textContent = 0;
 score1.textContent = 0;
 current0.textContent = 0;
 current1.textContent = 0;

  dice1.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};


btnRoll.addEventListener('click', function () {
  if (playing) {
  
    const dice = Math.trunc(Math.random() * 6) + 1;

    
    dice1.classList.remove('hidden');
    dice1.src = `dice-${dice}.png`;

    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }

  }
});
*/

























const player1=document.querySelector('.player--0');
const player2=document.querySelector('.player--1');
const score1=document.querySelector('#score--0');
const score2=document.getElementById('score--1');
const current1=document.getElementById('current--0');
const current2=document.getElementById('current--1');

const dice1=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

let scores, activePlayer,currentScore,playing;
const init=function(){
  scores=[0,0];
  activePlayer=0;
  currentScore=0;
  playing=true;

  score1.textContent=0;
  score2.textContent=0;
  current1.textContent=0;
  current2.textContent=0;


  dice1.classList.add('hidden');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');

}
init()
 const switchplayer=function(){
 document.getElementbyId(`current1--${activePlayer}`).textContent=0;
 currentScore=0;
 activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');

};

btnRoll.addEventListener('click', function () {
  if (playing) {
  
    const dice = Math.trunc(Math.random() * 6) + 1;

    
    dice1.classList.remove('hidden');
    dice1.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchplayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
  

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

       
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      dice1.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchplayer();
    }
  }
});

btnNew.addEventListener('click', init);