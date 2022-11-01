let playerScore = 0;
let computerScore = 0;
let roundNum = 1;

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
            computerScore++;
            return "You lose!";
        }
        else
        {
            playerScore++;
            return "You win!";
        }
    }
    else if (playerSelection == 'paper')
    {
        if (getComputerSelection == 'rock')
        {
            playerScore++;
            return "You win!";
        }
        else if (getComputerSelection == 'paper')
        {
            return "You tie!";
        }
        else
        {
            computerScore++;
            return "You lose!";
        }
    }
    else //player is scissors
    {
        if (getComputerSelection == 'rock')
        {
            computerScore++;
            return "You lose!";
        }
        else if (getComputerSelection == 'paper')
        {
            playerScore++;
            return "You win!";
        }
        else
        {
            return "You tie!";
        }
    }

}

window.addEventListener('click', function(e) {
    const button = document.querySelector('.button');
})

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', function (e){
    console.log(e);
}));

/*
function game(){
    for (let i = 0; i < 5; i++)
    {
        let playerSelection = getUserChoice();
        playerSelection = playerSelection.toLocaleLowerCase();
        let getComputerSelection = getComputerChoice();
        if ((playerSelection === 'rock') || (playerSelection === 'paper') || (playerSelection === 'scissors'))
        {
            playRound(playerSelection, getComputerSelection);
            ++roundNum;
        }
        else {
            i--;
            continue;
        }
        
        if (i == 4)
        {
            if (playerScore > computerScore)
            {
                console.log("Player: " + playerScore, "Computer: " + computerScore);
                console.log("You Win!");
            }
            else if (playerScore < computerScore)
            {
                console.log("Player: " + playerScore, "Computer: " + computerScore);
                console.log("You Lose!")
            }
            else
            {
                console.log("Player: " + playerScore, "Computer: " + computerScore);
                console.log("Tie game!")
            }
        }
    }
}
*/
//game();
