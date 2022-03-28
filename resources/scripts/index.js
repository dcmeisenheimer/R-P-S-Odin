function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    var choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function singleRound(playerSelection, computerSelection){
    console.log("You chosed " + playerSelection);
    console.log("Computer chooses " + computerSelection);
    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase == "paper"){
        console.log("Computer Wins");
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        console.log("Computer Wins");
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        console.log("Computer Wins");
    }
    else if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        console.log("Its a tie!")
    }
    else{
        console.log("You Win!")
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Please enter rock, paper or scissors")
        let computerSelection = computerPlay();
        singleRound(playerSelection, computerSelection);
    }
}

game();
