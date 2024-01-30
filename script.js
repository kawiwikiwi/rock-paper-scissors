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
let playerSelection;

function getComputerChoice() {
    const randomSelection = Math.floor(Math.random() * choice.length);
    const computerSelection = choice[randomSelection];

    return computerSelection;
}

console.log(getComputerChoice());

function playRound() {
   let userInput = prompt('Rock, Paper, Scissors', '');
   playerSelection = userInput.toLowerCase();
   const computerSelection = getComputerChoice();

   console.log('Player Selection:', playerSelection);
   console.log('Comp Selection:', computerSelection);

   let result;
   const playerWin = 'You Won!';
   const playerLose = 'You Lost...';
   const tied = 'Looks Like You Tied!';
   
   switch (playerSelection) {
    case 'rock':
        if (computerSelection === 'scissors') {
            result = playerWin
        } else if (computerSelection === 'paper') {
            result = playerLose
        } else {
            result = tied
        }
        break;
    case 'paper':
        if (computerSelection === 'rock') {
            result = playerWin
        } else if (computerSelection === 'scissors') {
            result = playerLose
        } else {
            result = tied
        }
        break;
    case 'scissors':
        if (computerSelection === 'paper') {
            result = playerWin
        } else if (computerSelection === 'rock') {
            result = playerLose
        } else {
            result = tied
        }
        break;
    default:
        result = 'Please enter either rock, paper or scissors to play!'
   }

   return result;
}

console.log(playRound());


