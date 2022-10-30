function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}

function playRound(playerSelection, getComputerSelection) {
    if (playerSelection == 'rock')
    {
        if (getComputerSelection == 'rock')
        {
            return "You tie!";
        }
        else if (getComputerSelection == 'paper')
        {
            return "You lose!";
        }
        else
        {
            return "You win!";
        }
    }
    else if (playerSelection == 'paper')
    {
        if (getComputerSelection == 'rock')
        {
            return "You win!";
        }
        else if (getComputerSelection == 'paper')
        {
            return "You tie!";
        }
        else
        {
            return "You lose!";
        }
    }
    else //player is scissors
    {
        if (getComputerSelection == 'rock')
        {
            return "You lose!";
        }
        else if (getComputerSelection == 'paper')
        {
            return "You win!";
        }
        else
        {
            return "You tie!";
        }
    }

}
const getComputerSelection = getComputerChoice();
let string = prompt("Enter Rock, Paper, Scissors");
playerSelection = string.toLowerCase();
if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors')
{
    console.log(playerSelection, getComputerSelection);
}

function game(){
    for (let i = 0; i < 5; i++)
    {
        playRound(playerSelection, getComputerSelection);
    }
}


