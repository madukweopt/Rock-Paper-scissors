let computerScore = 0;
let playerScore = 0;
const rockbtn = document.querySelector('.rockbtn');
const paperbtn = document.querySelector('.paperbtn');
const scissorsbtn = document.querySelector('.scissorsbtn');
const displayResults = document.querySelector('.display-results');


// This function will randomly return a value from the array of choices.
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];

}

// This function plays a single round of the game.
function playRound(playerSelection, computerSelection) {
    console.log('1. ', playerSelection, '2. ', computerSelection);

    if (playerSelection === computerSelection) {
        displayResults.textContent = `Draw! ${playerSelection} ties with ${computerSelection}`;

    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
    )   {
        computerScore++
        displayResults.textContent = `computer wins! ${computerSelection} beats ${playerSelection}`

    } else {
        playerScore++
        displayResults.textContent = `you win! ${playerSelection} beats ${computerSelection}`
        
    }
    
}

rockbtn.addEventListener('click', function() {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    console.log(playRound(playerSelection, computerSelection));
})
paperbtn.addEventListener('click', function() {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    console.log(playRound(playerSelection, computerSelection));
})
scissorsbtn.addEventListener('click', function() {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    console.log(playRound(playerSelection, computerSelection));
})


/*
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
*/