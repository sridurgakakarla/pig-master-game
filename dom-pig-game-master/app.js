/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/*var scores, roundScore, activePlayer, gamePlaying;

newGame();

function newGame() {
    if (activePlayer != undefined) {
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    }

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    restoreCurrentScore();

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById(`name-0`).textContent = 'Player 1';
    document.getElementById(`name-1`).textContent = 'Player 2';

    hideDice();
}

function nextPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;

    restoreCurrentScore();

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    hideDice();
}

function restoreCurrentScore() {
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}

function hideDice() {
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', newGame);

document.querySelector('.btn-roll').addEventListener('click', () => {

    if (!gamePlaying) return;

    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = `dice-${dice}.png`;

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    } else {
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', () => {
    
    if (!gamePlaying) return;

    scores[activePlayer] += roundScore;
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
        gamePlaying = false;
        document.getElementById(`name-${activePlayer}`).textContent = 'WINNER';
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
        hideDice();
    } else {
        nextPlayer();
    }
});*/




//********************************** pig game***********************************************

//****************************my   pig game code*****************/



/*var score,activePlayer,current,gameplay 
function init(){
    gameplay=true
 score=[0,0]
 activePlayer=0
 current=0
document.getElementById('score-0').textContent=0
document.getElementById('score-1').textContent=0
document.getElementById('current-0').textContent=0
document.getElementById('current-1').textContent=0
document.querySelector('.dice').style.display='none'
  }

function nextplayer(){
    document.querySelector('.dice').style.display='none'
    current=0
    document.querySelector('#current-'+activePlayer).textContent=current
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}
init()
function btn(){
   // init()
   if(gameplay){
   
 document.querySelector('.dice').style.display='block'
var dice= Math.floor( Math.random()*6)+1
//document.querySelector('#current-'+activePlayer).textContent=dice
document.querySelector('.dice').src=('dice-'+dice+'.png')

if(dice!==1){
    current+=dice
   document.querySelector('#current-'+activePlayer).textContent=current
    
}
else{
   /* document.querySelector('.dice').style.display='none'
    current=0
    document.querySelector('#current-'+activePlayer).textContent=current
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    */
 //******************   nextplayer()
/*}}

}
 
document.querySelector('.btn-roll').addEventListener('click',btn)
document.querySelector('.btn-hold').addEventListener('click',function(){
    
   if(gameplay){ 
    score[activePlayer]+=current
    if(score[activePlayer]>=20){
        gameplay=false


        document.querySelector('#name-'+activePlayer).textContent=('WINNER')
        document.querySelector('.dice').style.display='none'
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')
    
       // document.querySelector('#player-'+activePlayer+'-panel').classList.add=('winner')
    } 
    document.querySelector('#score-'+activePlayer).textContent=score[activePlayer]
    nextplayer()
}})
document.querySelector('.btn-new').addEventListener('click',function(){
    
    console.log(activePlayer)
    if(activePlayer != undefined){
        console.log("hiiiiiiiiiiiiiiiii")
        //document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner')
        //document.querySelector('.player-'+activePlayer+'-panel').classList.add('active') 
       // document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
       // document.querySelector('.player-1-panel').classList.remove('active');
       // document.querySelector('.player-0-panel').classList.add('active'); 
       document.querySelector(`.player-${activePlayer}-panel`).classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');  
    }

        document.querySelector('#name-0').textContent=('player1')
        
               document.querySelector('#name-1').textContent=('player2')
        
    init()

})*/




//math.random()
//console.log(dice+)
//*************************coding challenge 1*********** */
var score,activePlayer,current,gameplay,prev=0,winscore 
function init(){
    gameplay=true
 score=[0,0]
 activePlayer=0
 current=0
 
document.getElementById('score-0').textContent=0
document.getElementById('score-1').textContent=0
document.getElementById('current-0').textContent=0
document.getElementById('current-1').textContent=0
hidedice()//document.querySelector('.dice').style.display='none'
  }

function nextplayer(){
    hidedice()//document.querySelector('.dice').style.display='none'
    current=0
    document.querySelector('#current-'+activePlayer).textContent=current
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}
init()
function btn(){
   // init()
   if(gameplay){  
   
 document.querySelector('.dice').style.display='block'
 document.querySelector('.dice2').style.display='block'
var dice= Math.floor( Math.random()*6)+1
var dice2=Math.floor( Math.random()*6)+1
console.log(dice,prev)
//document.querySelector('#current-'+activePlayer).textContent=dice
document.querySelector('.dice').src=('dice-'+dice+'.png')
document.querySelector('.dice2').src=('dice-'+dice2+'.png')
if(dice==1||dice2==1){
    nextplayer()
}
/*if(prev===6&&dice===6){
    score[activePlayer]=0
    document.querySelector('#score-'+activePlayer).textContent=score[activePlayer]
    nextplayer()
}*/
// prev=dice
//console.log(prev,dice)
if(dice!==1||dice2!==1){
    current+=dice+dice2
   document.querySelector('#current-'+activePlayer).textContent=current

    
}

else{
   /* document.querySelector('.dice').style.display='none'
    current=0
    document.querySelector('#current-'+activePlayer).textContent=current
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    */
    nextplayer()
}}


}
 
document.querySelector('.btn-roll').addEventListener('click',btn)
document.querySelector('.btn-hold').addEventListener('click',function(){
    
   if(gameplay){ 
    score[activePlayer]+=current
    console.log("hi")
    var input=document.querySelector('.final_score').value
    console.log(input)
    if(input){
        winscore=input
    }
    else{
        winscore=100
    }
    if(score[activePlayer]>=winscore){
        gameplay=false


        document.querySelector('#name-'+activePlayer).textContent=('WINNER')
        hidedice()//document.querySelector('.dice').style.display='none'
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')
    
       // document.querySelector('#player-'+activePlayer+'-panel').classList.add=('winner')
    } 
    document.querySelector('#score-'+activePlayer).textContent=score[activePlayer]
    nextplayer()
}})
document.querySelector('.btn-new').addEventListener('click',function(){
    
    console.log(activePlayer)
    if(activePlayer != undefined){
        console.log("hiiiiiiiiiiiiiiiii")
        //document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner')
        //document.querySelector('.player-'+activePlayer+'-panel').classList.add('active') 
       // document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
       // document.querySelector('.player-1-panel').classList.remove('active');
       // document.querySelector('.player-0-panel').classList.add('active'); 
       document.querySelector(`.player-${activePlayer}-panel`).classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');  
    }

        document.querySelector('#name-0').textContent=('player1')
        
               document.querySelector('#name-1').textContent=('player2')
        
    init()

}

)
/*document.querySelector('.btn-winscore').addEventListener('click',function(){
  winscore= prompt(" please enter winning score")
})*/
function hidedice(){
    document.querySelector('.dice').style.display='none'
    document.querySelector('.dice2').style.display='none'
}