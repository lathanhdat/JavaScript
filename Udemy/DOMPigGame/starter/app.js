/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*Using querySelector
Setter way
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>' //HTML code

Getter way
var x = document.querySelector('#current-' + activePlayer).textContent;
console.log(x);
*/

/*We can use getElementById if we have ID instade of using querySelector*/

var scores, roundScore, activePlayer, gamePlaying;

const initGame = ()=>{
  scores = [0,0]
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none'; // Use '.' to select class display is property and none is value
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = "Player1";
  document.getElementById('name-1').textContent = "Player2";
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.add('active');
}

const nextPlayer = ()=>{
    activePlayer = activePlayer === 0 ? 1 : 0;

    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-roll').addEventListener('click',()=>{
  if(gamePlaying === true){
    let lastdice;
    let dice = Math.floor((Math.random() * 6)) + 1; //Create a random number between 1 and 6;
    let diceDoom = document.querySelector('.dice')
    diceDoom.style.display = 'block';
    diceDoom.src = 'dice-'+dice +'.png';

    if(lastdice == 6 && dice == 6)
    {
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      nextPlayer();
    }
    if(dice !== 1){
      roundScore += dice;
      lastdice = dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else{
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click',()=>{
  if(gamePlaying === true){
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 20){
      gamePlaying = false;
      document.getElementById('name-' + activePlayer).textContent = "Winner";
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }
    else{
      nextPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click',initGame);
initGame();