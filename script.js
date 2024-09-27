

function getComputerChoice(max) {
    let number = Math.floor(Math.random() * max);
    if (number === 0) {
        console.log("rock")
    } else if (number === 1) {
        console.log("paper")
    } else if (number === 2) {
        console.log("scissors")
    }

}

function getHumanChoice() {
    let request = prompt("Stiamo giocando a carta-forbice-sasso. Qual è la tua scelta?");
    if (request === "rock") {
        console.log("Hai inserito una scelta VALIDA")
    } else if (request === "paper") {
        console.log("Hai inserito una scelta VALIDA")
    } else if (request === "scissors") {
        console.log("Hai inserito una scelta VALIDA") 
    } else {
        getHumanChoice()
    }
}


getComputerChoice(3);
getHumanChoice();