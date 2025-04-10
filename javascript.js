// Declaring the intial players score (variables)
let HumanScore = 0
let ComputerScore = 0

// function to get the computer choice 
const choice = ["Rock","Paper","Scissor"]
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random()*choice.length)
    return choice[randomIndex]
}

// function to get the human choice
function getHumanChoice(){
    let input = prompt("what do you wish to choice? (Rock, Paper, Scissor)")
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}

function PlayRound(HumanChoice, ComputerChoice){
    switch(true){
        case (HumanChoice === "Rock" && ComputerChoice === "Paper"):
        case (HumanChoice === "Paper" && ComputerChoice === "Scissor"):
        case (HumanChoice === "Scissor" && ComputerChoice === "Rock"):
            ComputerScore++
            return ("You lose!");
        case (HumanChoice === "Paper" && ComputerChoice === "Rock"):
        case (HumanChoice === "Scissor" && ComputerChoice === "Paper"):
        case (HumanChoice === "Rock" && ComputerChoice === "Scissor"):
            HumanScore++
            return ("You win!");
        case (HumanChoice === ComputerChoice):
            return ("It's a tie!");
    }
}
// adding for loop for 3 rounds of rock-paper-scissor
for (let round = 1; round <= 3; round++){
    const HumanChoice = getHumanChoice()
    const ComputerChoice = getComputerChoice()

    console.log("your choice : " ,HumanChoice) 
    console.log("computer choice: ",ComputerChoice)
    console.log(PlayRound(HumanChoice,ComputerChoice))
}
// functiom to count the scores
function count(){
    if (HumanScore > ComputerScore)
        return("YOU ARE THE WINNER!")
    else if (HumanScore < ComputerScore)
        return("COMPUTER IS THE WINNER!")
    else if (HumanScore === ComputerScore)
        return("IT'S A TIE!")
}


console.log("\nFinal Score:");
console.log(`Human: ${HumanScore}`)
console.log(`Computer ${ComputerScore}`)
console.log(count())
