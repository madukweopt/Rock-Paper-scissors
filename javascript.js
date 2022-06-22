
// This function will randomly return a value from the array of choices.
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];

}

// This function plays a single round of the game.
function playRound(playerSelection, computerSelection) {
    console.log('1. ', playerSelection, '2. ', computerSelection);

    if (playerSelection === computerSelection) {
        return 'Draw! you made the same selection with the computer'

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return 'computer wins! paper covers rock'

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return 'computer wins! scissors cuts paper'

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        return 'computer wins! rock blunts scissors'

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'you win! paper covers rock'

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'you win! scissors cuts paper'

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'you win! rock blunts scissors'
        
    }
    
}
let computerScore = 0;
let playerScore = 0;

// this function plays the game for 5 rounds and returns a winner.
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection =  prompt('enter what to throw',  'rock, paper, scissors').toLowerCase();
        const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        return 'you beat the computer! make some noise1'

    } else if (playerScore < computerScore)  {
        return 'you were beaten by the computer! practice more'

    } else {
        return 'you tie with the computer! not too bad'
    
    }
}
console.log(game());