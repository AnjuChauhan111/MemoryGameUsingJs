const emojis=['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
let canFlip=true;
let flippedCard=[];
let moves=0;

function createGame(){

    const gameGrid = document.querySelector('.game-grid');
    gameGrid.innerHTML='';
    const gameEmojis =[...emojis,...emojis].sort(()=>Math.random() - 0.5);

    gameEmojis.forEach(emoji=>{
        const card=document.createElement('div');//creating element
        card.className='card';//giving class to it  
        //(``backtick)
        card.innerHTML=`
            <div class="card-inner">
                    <div class="front"></div>
                    <div class="back">${emoji}</div>
            </div>
        `
        card.addEventListener('click',()=>flipCard(card))
        gameGrid.appendChild(card);
    })
   
     
}
 function flipCard(card){
    
    if(!canFlip || card.classList.contains('flipped') || flippedCard.length>=2) return;
  
    card.classList.add('flipped');
    flippedCard.push(card);

    if(flippedCard.length===2){
        canFlip=false;
        moves++;
        document.getElementById('moves').textContent=moves;
        checkMatch();
    }

   

 }
function checkMatch(){
    const [card1,card2]=flippedCard;
    const emoji1=card1.querySelector('.back').textContent;
    const emoji2=card2.querySelector('.back').textContent;

    if(emoji1===emoji2){
        flippedCard=[];
        canFlip=true;
        checkWin();
    }else{
        setTimeout(()=>{
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCard=[];
            canFlip=true;
        },1000);
        
    }
}

function checkWin(){
        const allcards=document.querySelectorAll('.card');
        const allflipped=[...allcards].every(card=>card.classList.contains('flipped'));//means all cards are flipped

        if(allflipped){
            setTimeout(()=>{
        alert(`Congratulations! You Won ${moves} moves`)
        },500);
        } 
}

function restartGame(){
    flippedCard=[];
    moves=0;
    document.getElementById('moves').textContent = moves;
    createGame();
}

//calling createGame
createGame();
 
// const emojis = ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼'];
// let canFlip = true;
// let flippedCard = [];
// let moves = 0;

// function createGame() {
//   const gameGrid = document.querySelector('.game-grid');
//   gameGrid.innerHTML = '';
//   const gameEmojis = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

//   gameEmojis.forEach(emoji => {
//     const card = document.createElement('div');
//     card.className = 'card';
//     card.innerHTML = `
//       <div class="card-inner">
//         <div class="front"></div>
//         <div class="back">${emoji}</div>
//       </div>
//     `;
//     card.addEventListener('click', () => flipCard(card));
//     gameGrid.appendChild(card);
//   });
// }

// function flipCard(card) {
//   if (!canFlip || card.classList.contains('flipped') || flippedCard.length >= 2) return;

//   card.classList.add('flipped');
//   flippedCard.push(card);

//   if (flippedCard.length === 2) {
//     canFlip = false;
//     moves++;
//     document.getElementById('moves').textContent = moves;
//     checkMatch();
//   }
// }

// function checkMatch() {
//   const [card1, card2] = flippedCard;
//   const emoji1 = card1.querySelector('.back').textContent;
//   const emoji2 = card2.querySelector('.back').textContent;

//   if (emoji1 === emoji2) {
//     flippedCard = [];
//     canFlip = true;
//     checkWin();
//   } else {
//     setTimeout(() => {
//       card1.classList.remove('flipped');
//       card2.classList.remove('flipped');
//       flippedCard = [];
//       canFlip = true;
//     }, 1000);
//   }
// }

// function checkWin() {
//   const allCards = document.querySelectorAll('.card');
//   const allFlipped = [...allCards].every(card => card.classList.contains('flipped'));

//   if (allFlipped) {
//     alert(`Congratulations! You won in ${moves} moves.`);
//   }
// }

// function restartGame() {
//   flippedCard = [];
//   moves = 0;
//   document.getElementById('moves').textContent = moves;
//   createGame();
// }

// // Initialize the game on page load
// createGame();
