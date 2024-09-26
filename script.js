

function getComputerChoice(max) {
    let number = Math.floor(Math.random() * max);
    if (number === 0) {
        console.log("rock")
    } else if (number === 1) {
        console.log("paper")
    } else {
        console.log("scissors")
    }

}

function getHumanChoice() {
    
}


console.log(getComputerChoice(3))