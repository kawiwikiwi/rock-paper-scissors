// create array of rock, paper, scissors
// create getComputerChoice to randomly select item in array
// return value to computerSelection

// create playerSelection prompt to select rock, paper or scissors
// convert input to lower case
// store value in playerSelection

// create playRound 
// compare playerSelection and computerSelection
// paper > rock, rock > scissors, scissors > paper, same === draw
// return string with winner/tie 

const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomSelection = Math.floor(Math.random() * choice.length);
    const computerSelection = choice[randomSelection];
    return computerSelection;
}

console.log(getComputerChoice());
