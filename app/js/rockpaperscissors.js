////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    // Return move value otherwise getInput
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    // Return move value otherwise randomPlay
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
      winner = "The result is a tie!";
    } else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper')) {
      winner = "Player";
        } else {
      winner = "Computer";
    }
        return winner;
    }

function playToFive() {
console.log("Let's play Rock, Paper, Scissors");
var playerWins = 0;
var computerWins = 0;
// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
// Call function playToFive() to run game
    
while ((playerWins < 5) && (computerWins < 5)) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove,computerMove);
   
    if (playerMove === computerMove) {
        console.log("The result is a tie! You both threw " +playerMove +' Current Player score is ' +playerWins + ' ' + 'and Computer score is ' +computerWins);
        
    } else if (winner === "Player") {
        playerWins +=1;
        console.log('Player wins by choosing ' +playerMove + ' while computer chose ' +computerMove  + '. Current Player score is ' +playerWins + ' ' + 'and Computer score is ' +computerWins);
        
    } else if (winner === "Computer") {
        computerWins +=1;
        console.log('Computer wins by choosing ' +computerMove + ' while player chose ' +playerMove  + '. Current Player score is ' +playerWins + ' ' + 'and Computer score is ' +computerWins);
    } if ((playerWins === 5) || (computerWins ===5)) {
        console.log ('Game Over! Player scored ' +playerWins +' while Computer scored ' +computerWins + '. The winner is ' +winner);
        }
}
    return [playerWins, computerWins];
}

