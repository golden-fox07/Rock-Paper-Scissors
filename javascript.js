document.addEventListener("DOMContentLoaded", () => {

    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissor = document.querySelector("#scissor");
    const results = document.querySelector("#results");
    const restartBtn = document.querySelector("#restart"); 

    results.textContent = "There are only 3 rounds in this game. Good luck!";

    let HumanScore = 0;
    let ComputerScore = 0;
    let RoundsPlayed = 0;

    const choice = ["Rock", "Paper", "Scissor"];

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choice.length);
        return choice[randomIndex];
    }

    function PlayRound(HumanChoice, ComputerChoice) {
        let resultText = "";

        if (HumanChoice === "Rock" && ComputerChoice === "Paper") {
            ComputerScore++;
            resultText = "You lose! Paper beats Rock.";
        } 
        else if (HumanChoice === "Paper" && ComputerChoice === "Scissor") {
            ComputerScore++;
            resultText = "You lose! Scissor beats Paper.";
        } 
        else if (HumanChoice === "Scissor" && ComputerChoice === "Rock") {
            ComputerScore++;
            resultText = "You lose! Rock beats Scissor.";
        } 
        else if (HumanChoice === "Paper" && ComputerChoice === "Rock") {
            HumanScore++;
            resultText = "You win! Paper beats Rock.";
        } 
        else if (HumanChoice === "Scissor" && ComputerChoice === "Paper") {
            HumanScore++;
            resultText = "You win! Scissor beats Paper.";
        } 
        else if (HumanChoice === "Rock" && ComputerChoice === "Scissor") {
            HumanScore++;
            resultText = "You win! Rock beats Scissor.";
        } 
        else if (HumanChoice === ComputerChoice) {
            resultText = "It's a tie!";
        } 
        else {
            resultText = "Invalid input!";
        }

        return resultText;
    }

    function handleClick(humanChoice) {
        if (RoundsPlayed >= 3) return;

        const HumanChoice = humanChoice;
        const ComputerChoice = getComputerChoice();

        const roundResult = PlayRound(HumanChoice, ComputerChoice);

        RoundsPlayed++;

        results.textContent = roundResult + "\n";
        results.textContent += "Human: " + HumanScore + "\n";
        results.textContent += "Computer: " + ComputerScore + "\n";
        results.textContent += "Round: " + RoundsPlayed;



        if (RoundsPlayed === 3) {
            const finalMessage = count();

            results.textContent += `\nFinal Result: ${finalMessage}\n`;
        }
    }

    function count() {
        if (HumanScore > ComputerScore) {
            return "YOU ARE THE WINNER!";
        } 
        else if (HumanScore < ComputerScore) {
            return "COMPUTER IS THE WINNER!";
        } 
        else {
            return "IT'S A TIE!";
        }
    }

    // Add click event listeners to game buttons
    rock.addEventListener("click", () => handleClick("Rock"));
    paper.addEventListener("click", () => handleClick("Paper"));
    scissor.addEventListener("click", () => handleClick("Scissor"));

    // NEW: Restart button functionality
    restartBtn.addEventListener("click", () => {
        HumanScore = 0;
        ComputerScore = 0;
        RoundsPlayed = 0;

        results.textContent = "Game has been reset. There are only 3 rounds. Good luck!";
    });

});
