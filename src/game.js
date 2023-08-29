import Ball from "./ball"; // Import your Ball class
import Paddle from "./paddle"; // Import your Paddle class

export default class AlmostPongGame {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.registerEvents();
    // this.restart = this.restart.bind(this)
    this.restart();
    this.score = 0;
  }

  updateScore() {
    const scoreValueElement = document.getElementById("score-value");
    scoreValueElement.textContent = this.score;
  }

  play() {
    this.running = true;
    this.animate();
  }

  restart() {
    this.running = false;
    this.score = 0;
    this.ball = new Ball(this.dimensions); // Create an instance of your Ball class
    this.leftPaddle = new Paddle(this.dimensions, 11); // Create an instance of your Paddle class
    this.rightPaddle = new Paddle(this.dimensions, this.dimensions.width - 21); // Create another instance of your Paddle class

    this.animate();
  }

  registerEvents() {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        this.ball.jump();
      }
    });
  }

  click(e) {
    if (!this.running) {
      this.play();
    }
  }

  gameOver() {
    return this.ball.outOfBounds();
  }

  getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }

  hit() {
    const ballBounds = this.ball.bounds();
    const leftPaddleBounds = this.leftPaddle.bounds();
    const rightPaddleBounds = this.rightPaddle.bounds();

    // Check for X-axis collision with left paddle
    if (
      ballBounds.right >= leftPaddleBounds.left &&
      ballBounds.left <= leftPaddleBounds.right
    ) {
      // Check for Y-axis collision with left paddle
      if (
        ballBounds.bottom >= leftPaddleBounds.top &&
        ballBounds.top <= leftPaddleBounds.bottom
      ) {
        // Reverse ball's X-direction and adjust its position
        this.ball.reverseDirection();
        this.leftPaddle.setPosition(this.ctx);
        this.score++;
        this.ball.x = leftPaddleBounds.right + this.ball.radius;
      }
    }

    // Check for X-axis collision with right paddle
    if (
      ballBounds.right >= rightPaddleBounds.left &&
      ballBounds.left <= rightPaddleBounds.right
    ) {
      // Check for Y-axis collision with right paddle
      if (
        ballBounds.bottom >= rightPaddleBounds.top &&
        ballBounds.top <= rightPaddleBounds.bottom
      ) {
        // Reverse ball's X-direction and adjust its position
        this.ball.reverseDirection();
        this.rightPaddle.setPosition(this.ctx);
        this.score++;
        this.ball.x = rightPaddleBounds.left - this.ball.radius;
      }
    }
  }

  paddleSize() {
    if (this.score != 0 && this.score % 10 === 0) {
      this.paddle.resize();
    }
  }

  animate() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Set neon blue border
    this.ctx.strokeStyle = "#00FFFF"; // Neon blue color
    this.ctx.lineWidth = 5;
    this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);

    this.leftPaddle.draw(this.ctx);
    this.rightPaddle.draw(this.ctx);
    this.ball.animate(this.ctx);

    this.hit(this.ctx);
    this.updateScore(this.ctx);

    // Check for game over condition
    if (this.gameOver()) {
      alert("Game Over"); // Display a game over message
      this.restart();
    }

    requestAnimationFrame(this.animate.bind(this));
  }
}
