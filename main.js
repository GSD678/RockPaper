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
            console.log("You Lose! Paper beats Rock");
            return "c";
        }
        else if (computer == "rock")
        {
            console.log("its a tie!");
            return "t";
        }
        else if (computer == "scissor")
        {
            console.log("You win! Rock beats Scissors");
            return "p";
        }
        
    }
    if (player == "paper")
    {
        if (computer == "paper") {
            console.log("its a tie!");
            return "t";
        }
        else if (computer == "rock")
        {
            console.log("You win! Paper beats Rock");
            return "p";
        }
        else if (computer == "scissor")
        {
            console.log("You lose! Rock beats Scissors");
            return "c";
        }
        
    }
    if (player == "scissor")
    {
        if (computer == "paper") {
            console.log("You Win! Scissor beats Paper");
            return "p";
        }
        else if (computer == "rock")
        {
            console.log("You lose! Rock beats Scissors");
            return "c";
        }
        else if (computer == "scissor")
        {
            console.log("its a tie!");
            return "t";
        }
        
    }
}

function game()
{
    let player = 0;
    let computer = 0;
    let round;

    for (let i = 0; i < 5; i++)
    {
        round = playRound(prompt(), computerPlay());
        if (round == "p")
        {
            player += 1;
        }
        else if (round == "c")
        {
            computer += 1;
        }
    }

    if (player >= 3)
    {
        console.log("Player Wins!");
    }
    else
    {
        console.log("Computer Wins!");
    }
}

game()