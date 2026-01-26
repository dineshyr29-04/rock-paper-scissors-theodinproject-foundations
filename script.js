let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let choices = ["Rock👊", "paper📄", "scissors✂️"]
    let choice = Math.floor(Math.random() * 3)
    console.log("computer: " + choices[choice])
    return choice
}

function getHumanChoice() {
    let choices = ["Rock👊", "paper📄", "scissors✂️"]
    let a = prompt("What is your choice? (1-rock, 2-paper, 3-scissors, q-quit)")
    if (0 <= parseInt(a) <= 2){
        console.log("human: " + choices[a])
        return parseInt(a)
    } else {
        console.log("Invalid choice, try again.")
    } if (a === q) {
        exit()
    }
}

function playRound(a, b) {
    if (a === 0 & b === 0) {
        console.log("tie!")
    } else if (a === 0 & b === 1 ) {
        console.log("human wins!")
        humanScore += 1
    } else if (a === 0 & b === 2) {
        console.log("computer wins!")
        computerScore += 1
    } else if (a === 1 & b === 0) {
        console.log("computer wins!")
        computerScore += 1
    } else if (a === 1 & b === 1) {
        console.log("tie!")
    } else if (a === 1 & b === 2) {
        console.log("human wins!")
        humanScore += 1
    } else if (a === 2 & b === 0) {
        console.log("human wins!")
        humanScore += 1
    } else if (a === 2 & b === 1) {
        console.log("computer wins!")
        computerScore += 1
    } else {
        console.log("tie!")
    }
}


function playGame() {
    for (let i = 0; i <= 4; i++) {
        let x = getHumanChoice()
        let y = getComputerChoice()
        playRound(y, x)
    }
    if (computerScore > humanScore) {
        console.log("You lose! Computer WINS!")
    } else if (humanScore > computerScore) {
        console.log("You WIN!")
    } else {
        console.log("TIE!")
    }
}

playGame()