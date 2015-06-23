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
    return(getInput());
}

function getComputerMove(move) {
    return (randomPlay());
}
var playerMove;
var computerMove;
var winner;
function getWinner() {
playerMove=getPlayerMove();
computerMove=getComputerMove();
if(playerMove===computerMove){
    winner="tie";
}
else if(playerMove==="rock"&&computerMove==="scissors"){
    winner="player";
}
else if(playerMove==="rock"&&computerMove==="paper"){
    winner="computer";
}
else if(playerMove==="scissors"&&computerMove==="paper"){
    winner="player";
}
else if(playerMove==="scissors"&&computerMove==="rock"){
    winner="computer";
}
else if(playerMove==="paper"&&computerMove==="scissors"){
    winner="computer";
}
else if(playerMove==="paper"&&computerMove==="rock"){
    winner="player";
}
else{
    winner==="Only rock paper scissors in this game!";
}
    return(winner,playerMove,computerMove); 
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while(playerWins<5&&computerWins<5){
    getWinner();
    if(winner==="player"){
        playerWins ++;
    }
    else if(winner==="computer"){
        computerWins ++;
    }
    console.log("You chose "+[playerMove]+" and the computer chose "+[computerMove]+"! The winner is "+[winner]+", and the score is "+[playerWins]+" to "+[computerWins]+"!");
    }
}

