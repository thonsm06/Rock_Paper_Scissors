let playerScore = 0;
let computerScore = 0;
let roundNum = 1;

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}

function playRound(playerSelection, getComputerSelection) {
    let result = "";
    if ((playerSelection === 'rock' && getComputerSelection === 'scissors') ||
        (playerSelection === 'paper' && getComputerSelection === 'rock') ||
        (playerSelection === 'scissors' && getComputerSelection === 'paper'))
    {
        //player win
        playerScore++;
        result = "You win this round";
        if (playerScore === 5)
        {
            result += "<br>You WIN the game";
            disabled();
        }
    }
    else if (playerSelection === getComputerSelection)
    { 
        //tie
        result = "Tie round";
    }
    else
    {
        //computer win
        computerScore++;
        result = "You lose this round";
        if (computerScore === 5)
        {
            result += "<br>You LOSE the game";
            disabled();
        }
    }

    return result;
}



function displayResult(value, computerValue, result) {
    const resultString = document.querySelector('.result');
    const content = document.createElement('div');
    content.classList.add('content')
    content.textContent = result;
    resultString.appendChild(content)
    resultString.innerHTML = content.textContent + " Player " + value + " | " + "Computer " + computerValue;
}
const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', function() {
    const getComputerSelection = getComputerChoice();
    const result = playRound(button.value, getComputerSelection);
    displayResult(button.value, getComputerSelection, result);
    const pScore = document.querySelector('.playerScore');
    const cScore = document.querySelector('.computerScore');
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}));

function disabled() {
    buttons.forEach(e => {
        e.disabled = true;
    })
}
