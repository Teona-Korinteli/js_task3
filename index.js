const moveSpace = document.querySelectorAll('.graph');
const gameScore=document.querySelector('.score');
const restartGame=document.querySelector('.restart-btn');
let activePlayer='x'
let numberOfMove=0;

const winningStreak = () =>{
  if (numberOfMove === moveSpace.length) console.log('draw');
  if (moveSpace[0].textContent=== activePlayer && 
    moveSpace[1].textContent=== activePlayer &&  
    moveSpace[2].textContent=== activePlayer)
  {
  
    gameScore.textContent=`winner is ${activePlayer}`;
    reset();
  } else   if (moveSpace[3].textContent=== activePlayer && 
    moveSpace[4].textContent=== activePlayer &&  
    moveSpace[5].textContent=== activePlayer)
  {
    gameScore.textContent=`winner is ${activePlayer}`;
    reset();
    
  }else   if (moveSpace[6].textContent=== activePlayer && 
    moveSpace[7].textContent=== activePlayer &&  
    moveSpace[8].textContent=== activePlayer)
  {
    gameScore.textContent=`winner is ${activePlayer}`;
    reset();
  }
  else   if (moveSpace[0].textContent=== activePlayer && 
    moveSpace[4].textContent=== activePlayer &&  
    moveSpace[8].textContent=== activePlayer)
  {
    gameScore.textContent=`winner is ${activePlayer}`;
    reset();
  }else   if (moveSpace[2].textContent=== activePlayer && 
    moveSpace[4].textContent=== activePlayer &&  
    moveSpace[6].textContent=== activePlayer)
  {
    gameScore.textContent=`winner is ${activePlayer}`;
    reset();
    
  } 
  else   if (moveSpace[0].textContent=== activePlayer && 
    moveSpace[3].textContent=== activePlayer &&  
    moveSpace[6].textContent=== activePlayer)
  {
    gameScore.textContent=`winner is ${activePlayer}`;
    reset();
    
  } else   if (moveSpace[1].textContent=== activePlayer && 
    moveSpace[4].textContent=== activePlayer &&  
    moveSpace[7].textContent=== activePlayer)
  {
    gameScore.textContent=`winner is ${activePlayer}`;
    reset();
    
  } else   if (moveSpace[2].textContent=== activePlayer && 
    moveSpace[5].textContent=== activePlayer &&  
    moveSpace[8].textContent=== activePlayer)
  {
    gameScore.textContent=`winner is ${activePlayer}`;
    reset();
    
  } 
  
};
reset=()=> {

  numberOfMove=0;
  activePlayer='x';
  for (let i = 0; i < moveSpace.length; i++) {
    moveSpace[i].textContent='';
  }

}
for (let i=0; i<moveSpace.length; i++){   
  moveSpace[i].addEventListener('click', ()=> {
    if (moveSpace[i].textContent) return; 
    numberOfMove+=1;
    moveSpace[i].textContent=activePlayer;
    winningStreak();
    
    
    activePlayer = activePlayer === 'x'? 'o': 'x';

  });

};


restartGame.addEventListener('click',reset);
