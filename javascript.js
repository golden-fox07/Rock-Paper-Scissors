document.addEventListener("DOMContentLoaded", () => {
    // Selecting buttons and result display elements
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissor = document.querySelector("#scissor");
    const results = document.querySelector("#results");
    const Human_Score = document.querySelector(".Human_Score");
    const Computer_Score = document.querySelector(".Computer_Score");   
    const restartBtn = document.querySelector("#restart"); 
    const playerImage = document.querySelector("#player-image");
    const computerImage = document.querySelector("#computer-image");

    results.textContent = "There are only 3 rounds in this game. Good luck!";

    let HumanScore = 0;
    let ComputerScore = 0;
    let RoundsPlayed = 0;
    const choice = ["Rock", "Paper", "Scissor"];

    // Function to get a random choice for the computer
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choice.length);
        return choice[randomIndex];
    }

// Function to update the computer image based on the computer's choice
    function updateComputerImage(choice) {
    switch (choice) {
        case "Rock":
            computerImage.src = "img/Rock.png";
            break;
        case "Paper":
            computerImage.src = "img/Paper.png";
            break;
        case "Scissor":
            computerImage.src = "img/Scissor.png";
            break;
        default:
            computerImage.src = "";
    }
}
// Function to play a round of Rock-Paper-Scissors
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
    // Function to update the player image based on the player's choice
    function updatePlayerImage(humanChoice) {
       
        switch (humanChoice) {
            case "Rock":
                playerImage.src = "img/Rock.png";
                break;
            case "Paper":
                playerImage.src = "img/Paper.png";
                break;
            case "Scissor":
                playerImage.src = "img/Scissor.png";
                break;
            default:
                playerImage.src = "";
        }
    }
    // Function to handle the click event for each game button
    function handleClick(humanChoice) {
        if (RoundsPlayed >= 3) return;

        updatePlayerImage(humanChoice)

        const HumanChoice = humanChoice;
        const ComputerChoice = getComputerChoice();
        updateComputerImage(ComputerChoice);
        const roundResult = PlayRound(HumanChoice, ComputerChoice);

        RoundsPlayed++;

        results.innerHTML = roundResult + "<br>";
        Human_Score.innerHTML = "You: "+ HumanScore;
        Computer_Score.innerHTML = "Computer: " + ComputerScore;
        results.innerHTML += "Round: " + RoundsPlayed + "<br>";

        if (RoundsPlayed === 3) {
            const finalMessage = score_count();
            results.innerHTML += `<br><strong>Final Result: ${finalMessage}</strong><br>`;
        }
    }
// Function to determine the final score after 3 rounds
    function score_count() {
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

    // Adding click event listeners to game buttons
    rock.addEventListener("click", () => handleClick("Rock"));
    paper.addEventListener("click", () => handleClick("Paper"));
    scissor.addEventListener("click", () => handleClick("Scissor"));

    // Restart button functionality
    restartBtn.addEventListener("click", () => {
    HumanScore = 0;
    ComputerScore = 0;
    RoundsPlayed = 0;

    results.textContent = "Game has been reset. There are only 3 rounds. Good luck!";
    Human_Score.textContent = "You: 0";
    Computer_Score.textContent = "Computer: 0";
    });
});

