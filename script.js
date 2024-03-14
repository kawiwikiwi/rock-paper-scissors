

function getComputerChoice() {
    const randomSelection = Math.floor(Math.random() * choice.length);
    const computerSelection = choice[randomSelection];

    return computerSelection;
}



function initializeButtonEvents() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
      button.addEventListener('click', event => {
        let target = event.target;
        if (target.matches('button')) {
          playerSelection = target.id
          playRound();
          
        }
      })
    })
}





function playRound() {
  const computerSelection = getComputerChoice();

  console.log('Player Selection:', playerSelection);
  console.log('Comp Selection:', computerSelection);

  const result = getResult(playerSelection, computerSelection);

  getScore(result);

  let player = document.querySelector('#player');
  let computer = document.querySelector('#comp');
  player.textContent = `Player: ${playerScore}`
  computer.textContent =  `Computer: ${computerScore}`

  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}

function getResult(playerSelection, computerSelection) {

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

function getScore(result) {
  console.log(result)
  if (result === playerWin) {
    ++playerScore;
  } else if (result === playerLose) {
    ++computerScore;
  } 
  
}

function endGame() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.disabled = true;
  });

  const div = document.querySelector('#playAgain');

  const winnerText = document.createElement('span')
  winnerText.classList.add('winnerText')
  if (playerScore === 5) {
    winnerText.textContent = 'Player Wins!'
  } else if (computerScore === 5) {
    winnerText.textContent = 'Computer Wins!'
  }

  const playAgainButton = document.createElement('button');
  playAgainButton.textContent = 'Play Again?';
  playAgainButton.classList.add('playAgain')

  div.appendChild(winnerText);
  div.appendChild(playAgainButton);

  playAgainButton.addEventListener('click', () => {
    resetGame();
  });
}

function resetGame () {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.disabled = false;
  });

  const div = document.querySelector('#playAgain');

  const playAgainButton = document.querySelector('.playAgain');

  const winnerText = document.querySelector('.winnerText');

  div.removeChild(playAgainButton);
  div.removeChild(winnerText);

  playerScore = 0;
  computerScore = 0;

  let player = document.querySelector('#player');
  let computer = document.querySelector('#comp');
  player.textContent = `Player: ${playerScore}`
  computer.textContent =  `Computer: ${computerScore}`

}


// function playGame() {

//     let result;

//     for (let i = 1; i < 6; i++) {
//         console.log(`Round ${i}`);
//         result = playRound();
//         if (result === playerWin) {
//             ++playerScore;
//         } else if (result === playerLose) {
//             ++computerScore;
//         } else if (result === tied) {
//             ++playerScore;
//             ++computerScore;
//         } else {
//             console.log('Invalid Round');
//         }
//         console.log(`Your Score: ${playerScore} Computer Score: ${computerScore}`);
//         console.log(result);
//     }
//     if (playerScore > computerScore) {
//         console.log('Player Wins!');
//     } else if (playerScore < computerScore) {
//         console.log('Computer Wins!');
//     } else {
//         console.log('It\'s a Draw!');
//     }
// }

const choice = ['rock', 'paper', 'scissors'];
let playerSelection;
const playerWin = 'You Won!';
const playerLose = 'You Lost...';
const tied = 'Looks Like You Tied!';
let playerScore = 0;
let computerScore = 0;
let result;



initializeButtonEvents();

