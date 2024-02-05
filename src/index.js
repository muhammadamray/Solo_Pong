// Importing the Ball class from the "ball.js" file
import Ball from "./ball.js";

// Importing the Paddle class from the "paddle.js" file
import Paddle from "./paddle.js";

// Importing the AlmostPongGame class from the "game.js" file
import AlmostPongGame from "./game.js";

// Event listener for the DOMContentLoaded event, ensuring the DOM is fully loaded before executing the code inside
document.addEventListener("DOMContentLoaded", () => {
  // Selecting the canvas element from the HTML using its id "canvas"
  const canvas = document.querySelector("#canvas");

  // Creating a new instance of the AlmostPongGame class, passing the canvas element as an argument
  const game = new AlmostPongGame(canvas);

  // Selecting the start button from the HTML
  const button = document.querySelector(".start-button");

  // Adding a click event listener to the start button
  button.addEventListener("click", (event) => {
    // Preventing the default behavior of the button click (e.g., form submission)
    event.preventDefault();
    // Stopping the event from propagating up the DOM, preventing unintended side effects
    event.stopPropagation();

    // Initiating the game by calling the play method
    game.play();

    // Hiding the start page instructions after the game is started
    const instructions = document.querySelector(".start-page");
    instructions.style.display = "none";
  });

  // Selecting the restart button from the HTML
  const restartButton = document.querySelector(".restart-button");

  // Adding a click event listener to the restart button
  restartButton.addEventListener("click", (event) => {
    // Preventing the default behavior of the button click
    event.preventDefault();
    // Stopping the event from propagating up the DOM
    event.stopPropagation();

    // Restarting the game by calling the restart method and then initiating the game with the play method
    game.restart();
    game.play();

    // Hiding the game over message after restarting the game
    const gameover = document.querySelector(".game-over");
    gameover.style.display = "none";
  });
});
