const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
const container = document.querySelector('container');




function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    var choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection){
    result = "";
    let computerSelection = computerPlay();
    result = "You chosed " + playerSelection + " and computer chose " + computerSelection + ". ";
    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase == "paper"){
        computerScore += 1;
        result += "<br><br> Computer Wins <br> Score: player score " + playerScore + " computer score " + computerScore;
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        computerScore += 1;
        result += "<br><br> Computer Wins <br> Score: player score " + playerScore + " computer score " + computerScore;
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        computerScore += 1;
        result += "<br><br> Computer Wins <br> Score: player score " + playerScore + " computer score " + computerScore;
    }
    else if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        result += "<br><br> Its a Tie <br> Score: player score " + playerScore + " computer score " + computerScore;
    }
    else{
        playerScore += 1;
        result += "<br><br> You Win! <br> Score: player score " + playerScore + " computer score " + computerScore;
    }
    if(playerScore == 5){
        disableButtons();
        result = "You Win the game!";
    }
    else if(computerScore == 5){
        disableButtons();
        result = "You Lost the game!";
    }

   document.getElementById('result').innerHTML = result; 
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

function disableButtons(){
    buttons.forEach((button) => {
        button.disabled = true;
    });
}