import Ball from "./ball.js";
import Paddle from "./paddle.js";
import AlmostPongGame from "./game.js";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("#canvas");
  const game = new AlmostPongGame(canvas);

  const button = document.querySelector(".start-button")
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    game.play();

    const instructions = document.querySelector(".start-page");
    instructions.style.display = "none";
  });

  const restartButton = document.querySelector(".restart-button")
  restartButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    game.restart();
    game.play();

    const gameover = document.querySelector(".game-over");
    gameover.style.display = "none";
  });
});

