let humanScore = 0
let computerScore = 0


function getComputerChoice(max) {
    let number = Math.floor(Math.random() * max);
    if (number === 0) {
        let computerRock = "rock"
    } else if (number === 1) {
        let computerPaper = "paper"
    } else if (number === 2) {
        let computerScissors = "scissors"
    }
}

function getHumanChoice() {
    let request = prompt("Stiamo giocando a carta-forbice-sasso. Qual è la tua scelta?");
    if (request === "rock") {
        let humanRock = console.log("rock")
    } else if (request === "paper") {
        let humanPaper = console.log("paper")
    } else if (request === "scissors") {
        let humanScissors = console.log("scissors") 
    } else {
        getHumanChoice()
    }
}


function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice(3);
    humanChoice = getHumanChoice();
    if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("Hai vinto!")
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Il computer ha vinto")
    } else if (computerChoice === "rock" && humanChoice === "rock") {
        console.log("Pareggio!")
    }

    if (computerChoice === "paper" && humanChoice === "paper") {
        console.log("Pareggio!")
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("Hai vinto")
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Il computer ha vinto!")
    } 

    if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Il computer ha vinto!")
    } else if (computerChoice === "scissors" && humanChoice === "scissors") {
        console.log("Pareggio!")
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("Hai vinto!")
    }
}

playRound()

/*
getComputerChoice(3);
getHumanChoice();
*/