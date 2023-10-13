
//test commmit

//group all game buttons into one element.
let btn = document.getElementsByClassName("gameBTN")
let playerScore = 0;
let computerScore = 0;


function startGame() {
   for (let i = 0; i < btn.length; i++) {
       btn[i].style.visibility = "visible";
       btn[i].addEventListener("click", playGame);
    }
}   

function playGame(event)
{
    console.log(playRound(event.target.value,computerPlay()))

}

//generates a random number and multiplies by index of array to select random
function computerPlay()
{
    let play = ["Rock", "Paper", "Scissors"];
    return play[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection,computerSelection) {
    let result = ""

    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById("result").innerHTML = result
    return
}

function disableButtons() {
   for (let i = 0; i < btn.length; i++) {
       btn[i].disabled = "true";
    }

    document.getElementById("stopBTN").style.visibility = "visible";


}

