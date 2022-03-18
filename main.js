function computerPlay()
{
    let play = ["Rock", "Paper", "Scissor"];
    return play[Math.floor(Math.random() * 3)];
}
function playRound(player1, computer1)
{
    let player = player1.toLowerCase();
    let computer = computer1.toLowerCase();

    if (player == "rock")
    {
        if (computer == "paper") {
            return "You Lose! Paper beats Rock";
        }
        else if (computer == "rock")
        {
            return "its a tie!";
        }
        else if (computer == "scissor")
        {
            return "You win! Rock beats Scissors";
        }
        
    }
    if (player == "paper")
    {
        if (computer == "paper") {
            return "its a tie!";
        }
        else if (computer == "rock")
        {
            return "You win! Paper beats Rock";
        }
        else if (computer == "scissor")
        {
            return "You lose! Rock beats Scissors";
        }
        
    }
    if (player == "scissor")
    {
        if (computer == "paper") {
            return "You Win! Scissor beats Paper";
        }
        else if (computer == "rock")
        {
            return "You lose! Rock beats Scissors";
        }
        else if (computer == "scissor")
        {
            return "its a tie!";
        }
        
    }
}

let temp = computerPlay();
console.log(temp);
console.log(playRound("pApEr",temp));