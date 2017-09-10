/* ===================================
   NIM Game
   1. 16 dots/
   2. Whose turn
   3. Player selects a number/
   4. Remove dots/
   5. Print remaining dots/
   6. Who wins?

   DEFINE YOUR STATE
   WRITE YOUR ACTIONS
   CALL FUNCTIONS (Kick everything off)
=====================================*/

var dotBoard = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
//var dotBoard = "****************";
var isPlayer1Turn = true;
var dotsRemaining = "";

function printBoard() {
	console.log(dotBoard[0], dotBoard[1], dotBoard[2], dotBoard[3]);
	console.log(dotBoard[4], dotBoard[5], dotBoard[6], dotBoard[7]);
	console.log(dotBoard[8], dotBoard[9], dotBoard[10], dotBoard[11]);
	console.log(dotBoard[12], dotBoard[13], dotBoard[14], dotBoard[15]);
	console.log("====================");
}
function removeDots (howManyDotsRemoved) {
	dotBoard.splice(0, howManyDotsRemoved);
	printBoard();
	console.log(dotsRemaining = dotBoard.length);
	checkForWinner(dotsRemaining);
}
function userInput() {
	var howManyDotsRemoved = "";
	if (isPlayer1Turn) {
		howManyDotsRemoved = prompt("Player 1, how many dots do you want to remove?")
	} else {
		howManyDotsRemoved = prompt("Player 2, how many dots do you want to remove?")
	}
	removeDots(howManyDotsRemoved);
}
function checkForWinner (dotsRemaining) {
	if (dotsRemaining == 0 && isPlayer1Turn) {
		alert("Player 1 wins");
	} else if (dotsRemaining == 0 && isPlayer1Turn == false) {
			alert("Player 2 wins");
	} else {
		isPlayer1Turn = !isPlayer1Turn;
		userInput();
	}

}

//printBoard();
userInput();

