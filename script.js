let humanScore = 0;
let computerScore = 0;

function getComputerChoice(max) {
  let number = Math.floor(Math.random() * max);
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else if (number === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  let request = prompt("Stiamo giocando a carta-forbice-sasso. Qual è la tua scelta?");
  if (request === "rock" || request === "paper" || request === "scissors") {
    console.log(request);
    return request;
  } else {
    return getHumanChoice();
  }
}

function playRound(computerChoice, humanChoice) {
  computerChoice = getComputerChoice(3);
  humanChoice = getHumanChoice();

  if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("Hai vinto!");
    humanScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("Il computer ha vinto");
    computerScore++;
  } else if (computerChoice === "rock" && humanChoice === "rock") {
    console.log("Pareggio!");
  } else if (computerChoice === "paper" && humanChoice === "paper") {
    console.log("Pareggio!");
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("Hai vinto!");
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("Il computer ha vinto!");
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("Il computer ha vinto!");
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "scissors") {
    console.log("Pareggio!");
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("Hai vinto!");
    humanScore++;
  }
}

playRound();