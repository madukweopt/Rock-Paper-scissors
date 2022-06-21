
// This function will randomly return a value from the array of choices.
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];

}

// This function plays a single round of the game.
function singleRound(playerSelection, computerSelection) {
    console.log('1. ', playerSelection, '2. ', computerSelection);

    if (playerSelection === computerSelection) {
        return 'Draw! you made the same selection with the computer'

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'computer wins! paper covers rock'

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'computer wins! scissors cuts paper'

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'computer wins! rock blunts scissors'

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'you win! paper covers rock'

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'you win! scissors cuts paper'

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'you win! rock blunts scissors'
        
    }
    
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(singleRound(playerSelection, computerSelection));


