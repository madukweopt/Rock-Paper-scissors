let computerScore = document.querySelector('.computer-score');
let playerScore = document.querySelector('.player-score');
const rockbtn = document.querySelector('.rockbtn');
const paperbtn = document.querySelector('.paperbtn');
const scissorsbtn = document.querySelector('.scissorsbtn');
let displayResults = document.querySelector('.display-results');

// This function will randomly return a value from the array of choices.
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];

}

// This function plays a single round of the game.
function playRound(playerSelection, computerSelection) {
    
    displayResults.style.fontSize = '30px';
    console.log('1. ', playerSelection, '2. ', computerSelection);

    if (playerSelection === computerSelection) {
        displayResults.textContent = `Draw! ${playerSelection} ties with ${computerSelection}`;
        displayResults.style.color = 'white';
        

    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
    )   {

        displayResults.textContent = `computer wins! ${computerSelection} beats ${playerSelection}`
        displayResults.style.color = 'red';
        computerScore.textContent++;
      
        if(computerScore.textContent == 5) {
            displayResults.textContent = 'COMPUTER WON';
            displayResults.style.cssText = "font-size: 50px";
            computerScore.textContent = 0;
            playerScore.textContent = 0;
        }      

    } else {
        displayResults.textContent = `you win! ${playerSelection} beats ${computerSelection}`
        displayResults.style.color = 'blue';
        playerScore.textContent++;
       

        if(playerScore.textContent == 5) {
            displayResults.textContent = 'YOU WON THE COMPUTER';
            displayResults.style.fontSize = '50px';
            playerScore.textContent = 0;
            computerScore.textContent = 0;
            
            
        }   
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
