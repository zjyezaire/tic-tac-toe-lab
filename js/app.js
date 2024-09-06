/*-------------------------------- Constants --------------------------------*/

const squareEls = document.querySelectorAll("sqr");
console.log(squareEls);

const messageEl = document.getElementById("message");
console.log(messageEl);

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

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
function updateBoard() {
  board.forEach((value, index) => {
    squareEls[index].textContent = value;
  });
}

function updateMessage() {
  if (!winner && !tie) {
    messageEl.textContent = `Turn: ${turn}`;
  } else if (!winner && tie) {
    messageEl.textContent = "It's a tie!";
  } else {
    messageEl.textContent = `Congratulations ${
      turn === "X" ? "O" : "X"
    }! You won!`;
  }
}

function render() {
  updateBoard;
  updateMessage;
}
function init() {
  board = ["x", "", "", "", "", "", "", "", ""];
  console.log("The game has started");
  turn = "X";
  winner = false;
  tie = false;
  render();
}

init();

/*
function checkForWinner() {
    winningCombos.forEach((combo)   =>)

}

*/

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
  square.addEventListener("click", handleSquareClick);
});

// Handle click events on the squares
function handleSquareClick(evt) {
  const index = parseInt(evt.target.id);
  if (board[index] || winner) return;
  board[index] = turn;
  turn = turn === "X" ? "O" : "X";
  // Check for winner or tie logic would go here
  render();
}
