let score = 0;

document.getElementById("score").innerHTML = "Current total: " + score;

document.getElementById("play").addEventListener("click", function() {
  DiceGame();
});

document.getElementById("restart").addEventListener("click", function() {
  score = 0;
  document.getElementById("score").innerHTML = "Current total: " + score;
  document.getElementById("message").innerHTML = "";
});

const roll = () => {
  let result = Math.floor(Math.random() * 6) + 1;
  return result;
};

const checkScore = score => {
  if (score >= 20) {
    document.getElementById("message").innerHTML = "You win!";
    score = 0;
  }
};

const DiceGame = () => {
  if (document.getElementById("message").innerHTML == "") {
    turn = roll();
    switch (turn) {
      case 1:
        document.getElementById("dicePic").src = "../img/dice1.png";
        score += turn;
        document.getElementById("message").innerHTML =
          "Game over, you rolled a one!";
        score = 0;
        break;
      case 2:
        document.getElementById("dicePic").src = "../img/dice2.png";
        score += turn;
        document.getElementById("score").innerHTML = "Current total: " + score;
        checkScore(score);
        break;
      case 3:
        document.getElementById("dicePic").src = "../img/dice3.png";
        score += turn;
        document.getElementById("score").innerHTML = "Current total: " + score;
        checkScore(score);
        break;
      case 4:
        document.getElementById("dicePic").src = "../img/dice4.png";
        score += turn;
        document.getElementById("score").innerHTML = "Current total: " + score;
        checkScore(score);
        break;
      case 5:
        document.getElementById("dicePic").src = "../img/dice5.png";
        score += turn;
        document.getElementById("score").innerHTML = "Current total: " + score;
        checkScore(score);
        break;
      case 6:
        document.getElementById("dicePic").src = "../img/dice6.png";
        score += turn;
        document.getElementById("score").innerHTML = "Current total: " + score;
        checkScore(score);
        break;
    }
  }
};
