let night = 1;

function startGame() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
}

function choose(option) {
  night++;

  document.getElementById("night").textContent = "Night " + night;
  const story = document.getElementById("story");

  if (option === 1) {
    story.textContent = "You tell a tale of courage and hope under the moonlight.";
  } else if (option === 2) {
    story.textContent = "A dark and mysterious story fills the chamber with tension.";
  } else {
    story.textContent = "Your silence makes the king uneasy, waiting for your next move.";
  }

  if (night === 10) {
    story.textContent =
      "🌙 Dawn breaks. The king lowers his sword. Your stories have saved your life.";
    document.querySelector(".choices").style.display = "none";
  }
}
