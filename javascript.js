document.addEventListener("DOMContentLoaded", () => {
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const results = document.querySelector("#results")

results.textContent = "There are only 5 rounds in this game. Good luck!";

// Declaring the intial players score (variables)
let HumanScore = 0
let ComputerScore = 0
let RoundsPlayed = 0

const choice = ["Rock","Paper","Scissor"]

// function to get the computer choice 
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random()*choice.length)
    return choice[randomIndex]
}

function PlayRound(HumanChoice, ComputerChoice) {
    if (HumanChoice === "Rock" && ComputerChoice === "Paper") {
        ComputerScore++;
        results.textContent =  "You lose! Paper beats Rock.";
    } else if (HumanChoice === "Paper" && ComputerChoice === "Scissor") {
        ComputerScore++;
        results.textContent =  "You lose! Scissor beats Paper.";
    } else if (HumanChoice === "Scissor" && ComputerChoice === "Rock") {
        ComputerScore++;
        results.textContent = "You lose! Rock beats Scissor.";
    } else if (HumanChoice === "Paper" && ComputerChoice === "Rock") {
        HumanScore++;
        results.textContent = "You win! Paper beats Rock.";
    } else if (HumanChoice === "Scissor" && ComputerChoice === "Paper") {
        HumanScore++;
        results.textContent = "You win! Scissor beats Paper.";
    } else if (HumanChoice === "Rock" && ComputerChoice === "Scissor") {
        HumanScore++;
        results.textContent =  "You win! Rock beats Scissor.";
    } else if (HumanChoice === ComputerChoice) {
        results.textContent =  "It's a tie!";
    } else {
        results.textContent =  "Invalid input!";
    }
}


function handleClick(humanChoice) {
    if (RoundsPlayed >= 3) return;

    const HumanChoice = humanChoice;
    const ComputerChoice = getComputerChoice();
    const roundResult = PlayRound(HumanChoice, ComputerChoice);
    RoundsPlayed++;

    console.log("your choice: ", HumanChoice);
    console.log("computer choice: ", ComputerChoice);
    console.log(roundResult);

    if (RoundsPlayed === 3) {
        console.log("\nFinal Score:");
        console.log(`Human: ${HumanScore}`);
        console.log(`Computer: ${ComputerScore}`);
        console.log(count());
    }
}

// Add event listeners to buttons
rock.addEventListener("click", () => handleClick("Rock"));
paper.addEventListener("click", () => handleClick("Paper"));
scissor.addEventListener("click", () => handleClick("Scissor"));


// function to count the scores
function count(){
    if (HumanScore > ComputerScore)
        return("YOU ARE THE WINNER!")
    else if (HumanScore < ComputerScore)
        return("COMPUTER IS THE WINNER!")
    else if (HumanScore === ComputerScore)
        return("IT'S A TIE!")
}


if (RoundsPlayed === 3) {
    console.log("\nFinal Score:");
    console.log(`Human: ${HumanScore}`);
    console.log(`Computer: ${ComputerScore}`);
    console.log(count());
}})

