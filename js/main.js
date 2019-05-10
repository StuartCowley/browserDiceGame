// Initialise the game

let scoreboard = {
  player1: 0,
  player2: 0,
  player1Name: "Player 1",
  player2Name: "Player 2"
};
let player = "player1";
Player1Name.className = "blinkEffect";

document.getElementById("player1Score").innerHTML =
  "Current Total: " + scoreboard.player1;
document.getElementById("player2Score").innerHTML =
  "Current Total: " + scoreboard.player2;

// Button functions
document.getElementById("play").addEventListener("click", function() {
  onClick();
});

document.getElementById("restart").addEventListener("click", function() {
  scoreboard.player1 = 0;
  scoreboard.player2 = 0;
  document.getElementById("player1Score").innerHTML =
    "Current Total: " + scoreboard.player1;
  document.getElementById("player2Score").innerHTML =
    "Current Total: " + scoreboard.player2;
  document.getElementById("message").innerHTML = "";
  player = "player1";
  Player2Name.className = "";
  Player1Name.className = "blinkEffect";
});

const checkScore = score => {
  if (score >= 20) {
    document.getElementById("message").innerHTML = "You win!";
    score = 0;
  }
};

const roll = () => {
  let result = Math.floor(Math.random() * 6) + 1;
  return result;
};

const switchPlayer = () => {
  if (player == "player1") {
    player = "player2";
    Player1Name.className = "";
    Player2Name.className = "blinkEffect";
  } else {
    player = "player1";
    Player2Name.className = "";
    Player1Name.className = "blinkEffect";
  }
};

const onClick = () => {
  if (document.getElementById("message").innerHTML == "") {
    turn = roll();
    switch (turn) {
      case 1:
        document.getElementById("dicePic").src = "../img/dice1.png";
        scoreboard.player += turn;
        document.getElementById("message").innerHTML =
          "You rolled a one, you lose!";
        scoreboard.player = 0;
        break;
      case 2:
        document.getElementById("dicePic").src = "../img/dice2.png";
        scoreboard[player] += turn;
        console.log(scoreboard[player]);
        document.getElementById(player + "Score").innerHTML =
          "Current Total: " + scoreboard[player];
        checkScore(scoreboard[player]);
        switchPlayer();
        break;
      case 3:
        document.getElementById("dicePic").src = "../img/dice3.png";
        scoreboard[player] += turn;
        document.getElementById(player + "Score").innerHTML =
          "Current Total: " + scoreboard[player];
        checkScore(scoreboard[player]);
        switchPlayer();
        break;
      case 4:
        document.getElementById("dicePic").src = "../img/dice4.png";
        scoreboard[player] += turn;
        document.getElementById(player + "Score").innerHTML =
          "Current Total: " + scoreboard[player];
        checkScore(scoreboard[player]);
        switchPlayer();
        break;
      case 5:
        document.getElementById("dicePic").src = "../img/dice5.png";
        scoreboard[player] += turn;
        document.getElementById(player + "Score").innerHTML =
          "Current Total: " + scoreboard[player];
        checkScore(scoreboard[player]);
        switchPlayer();
        break;
      case 6:
        document.getElementById("dicePic").src = "../img/dice6.png";
        scoreboard[player] += turn;
        document.getElementById(player + "Score").innerHTML =
          "Current Total: " + scoreboard[player];
        checkScore(scoreboard[player]);
        switchPlayer();
        break;
    }
  }
};
