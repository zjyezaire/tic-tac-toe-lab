/*-------------------------------- Constants --------------------------------*/

const squareEls = document.querySelectorAll('.sqr');
console.log(squareEls);

const messageEl = document.querySelector('#message');
console.log(messageEl)

let board;
let turn;
let winner;
let tie;

/* Another way to write above stateemnt by using getElementByID
const messageEl = document.getElementById("message");
console.log(messageEl);
*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const placePiece = (index) => {
    board[index] = turn;
}


const handleClick = e => {
    if (winner === true) return 
        console.log([...e.target.classList].includes('sqr'))

        if (e.target.classList.contains('sqr')) {
            const squareIndex = e.target.id 
            if(board[squareIndex] === 'x' || board[squareIndex] === 'o') {
                return
            }

            placePiece(squareIndex)
        }
        return;
}

const checkForWinner = () => {
    for(let i = 0; i < winningCombos.length; i++) {
        for( let j = 0; j < winningCOmbos[i]; j++) {
            console.log(board[j])
        }
        console.log(winningCombos[i])
    }
}

document.querySelector('.board'). 
addEventListener('click', handleClick)

const init =() => {
  board = ["", "", "", "", "", "", "", "", ""];
  console.log("The game has started");
  turn = 'X';
  winner = false;
  tie = false;
  render();
}

init();




function updateBoard() {
  board.forEach((square, squareIndex) => {
    squareEls[squareIndex].textContent = square;
  });
}

function updateMessage() {
  if (!winner && !tie) {
    messageEl.tektContent = turn;
  } else if (!winner && tie) {
    messageEl.textContent = "It's a tie!";
  } else {
    messageEl.textContent = '${turn} is the winner!'
  }
    
   
  }


function render() {
  updateBoard();
  updateMessage();
  placePiece(6);
  console.log(board);
}



window.onload = () => {
    init()
}
/*
function checkForWinner() {
    winningCombos.forEach((combo)   =>)

}

*/

/*----------------------------- Event Listeners -----------------------------*/





squareEls.forEach((square) => {
  square.addEventListener("click", handleClick);
});
















/*

function handleClick(evt) {
  const index = parseInt(evt.target.id);
  if (board[index] || winner) return;
  board[index] = turn;
  turn = turn === "X" ? "O" : "X";
  // Check for winner or tie logic would go here
  render();

  */