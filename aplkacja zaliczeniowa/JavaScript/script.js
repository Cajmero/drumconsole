document.addEventListener("mousedown", handleClick);
document.addEventListener("keydown", handleKeyPress);



function handleClick(event) {
  const key = event.target.closest(".key");
  if (key) {
    playSound(key.dataset.key);

    key.classList.add("playeffect");
  }
}

function handleKeyPress(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (key) {
    playSound(event.keyCode);

    key.classList.add("playeffect");
  }
}

function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

const keys = document.querySelectorAll(".key");
keys.forEach(key =>
  key.addEventListener("transitionend", function (event) {
    if (event.propertyName === "transform") {
      key.classList.remove("playeffect");
    }
  })
);

let keyHistory = [];

window.addEventListener('keydown', function(e) {
  const keyCode = e.keyCode;
  keyHistory.push(`Key ${keyCode}`);
  displayKeyHistory();
});

window.addEventListener('mousedown', function(e) {
  const button = e.button;
  keyHistory.push(`Mouse Button ${button}`);
  displayKeyHistory();
});

function displayKeyHistory() {
  const historyDiv = document.querySelector('.key-history');
  historyDiv.textContent = keyHistory.join("  //  ");
}