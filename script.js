let night = 1;

function choose(option) {
  night++;

  const story = document.getElementById("story");

  if (option === 1) {
    story.textContent = `Night ${night}: Your words weave magic through the palace...`;
  } else if (option === 2) {
    story.textContent = `Night ${night}: A new twist surprises the king...`;
  } else {
    story.textContent = `Night ${night}: Silence fills the chamber, heavy with meaning...`;
  }

  if (night === 5) {
    story.textContent += " 🌙 The night fades into legend...";
    document.querySelector(".choices").style.display = "none";
  }
}
