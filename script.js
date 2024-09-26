

function getComputerChoice(max) {
    let number = Math.floor(Math.random() * max);
    if (number === 0) {
        console.log("Rock")
    } else if (number === 1) {
        console.log("Paper")
    } else {
        console.log("Scissors")
    }

}


console.log(getComputerChoice(3))