function playRound(playerSelection, computerSelection) {
    console.log(getComputerChoice());
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

