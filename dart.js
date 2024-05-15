// main.js

// Global variables
let players = [];
let currentPlayerIndex = 0;

// Function to start the game
function startBtn() {
    const gameMod = document.getElementById("gameMod").value;
    const number_ofPlayersi = document.getElementById("number_ofPlayer").value;

    // Initialize players
    players = [];
    for (let i = 1; i <= number_ofPlayersi; i++) {
        players.push({
            name:  i+"."+"Oyuncu ",
            score: parseInt(gameMod),
        });
    }

    // Display player list and current player's turn
    updatePlayerList();
    displayCurrentPlayer();

    // Show the game section
    document.getElementById("home").style.display = "none";
    document.getElementById("start").style.display = "block";
}

// Function to make a throw
function atisScore() {
    const scoreInput = document.getElementById("score");
    const multiplierSelect = document.getElementById("multipliers");

    const score = parseInt(scoreInput.value);
    const multiplier = parseInt(multiplierSelect.value);
    const points = score * multiplier;

    // Update player score
    players[currentPlayerIndex].score -= points;

    // Check for a winner
    if (players[currentPlayerIndex].score <= 0) {
        let winner = document.getElementById("winner").innerHTML= players[currentPlayerIndex].name + " kazandı!";
        resetGame();
        return;
    }

    // Move to the next player
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

    // Display player list and current player's turn
    updatePlayerList();
    displayCurrentPlayer();
}

// Function to update the player list
function updatePlayerList() {
    const playerList = document.getElementById("gamerList");
    playerList.innerHTML = "";

    players.forEach((player, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = ` ${player.name}: ${player.score} puan`;
        playerList.appendChild(listItem);
    });
}

// Function to display the current player's turn
function displayCurrentPlayer() {
    const currentPlayerDisplay = document.getElementById("currentPlayerDisplay");
    currentPlayerDisplay.textContent = "Sıra: " + players[currentPlayerIndex].name;
}

// Function to reset the game
function resetGame() {
    document.getElementById("home").style.display = "block";
    document.getElementById("start").style.display = "none";
    currentPlayerIndex = 0;
    
}

////
