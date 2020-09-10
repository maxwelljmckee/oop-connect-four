import { Game } from "./games.js";

let game;

const updateUI = () => {
    const clickTargets = document.getElementById('click-targets');
  if (!game) {
    document.getElementById("board-holder").classList.add("is-invisible");
  } else {
    document.getElementById("board-holder").classList.remove("is-invisible");
    document.getElementById("game-name").innerHTML = game.getName();
  }
  if (game.currentPlayer === 1) {
    clickTargets.classList.add('red');
    clickTargets.classList.remove('black');
} else {
    clickTargets.classList.add('black');
    clickTargets.classList.remove('red');
  }
};

window.addEventListener("DOMContentLoaded", (e) => {
  const newGameBtn = document.querySelector("button");
  const player1 = document.getElementById("player-1-name");
  const player2 = document.getElementById("player-2-name");
  const formHolder = document.getElementById("form-holder");
  const clickTargets = document.getElementById('click-targets');

  formHolder.addEventListener("keyup", (e) => {
    if (player1.value && player2.value) {
      newGameBtn.removeAttribute("disabled");
    } else {
      newGameBtn.setAttribute("disabled", null);
    }
  });

  newGameBtn.addEventListener("click", (e) => {
    game = new Game(player1.value, player2.value);
    newGameBtn.setAttribute("disabled", true);
    player1.value = "";
    player2.value = "";
    updateUI();
  });

  clickTargets.addEventListener('click', e => {
      updateUI();
      game.playInColumn();
  })
});
