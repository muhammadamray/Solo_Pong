import Ball from "./ball"; // Import your Ball class
import Paddle from "./paddle"; // Import your Paddle class

export default class AlmostPongGame {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.registerEvents();
    // this.restart = this.restart.bind(this)
    this.restart();
  }

  play() {
    this.running = true;
    this.animate();
  }

  restart() {
    this.running = false;
    this.score = 0;
    this.ball = new Ball(this.dimensions); // Create an instance of your Ball class
    // this.leftPaddle = new Paddle(10, this.dimensions.height / 2 - 30); // Create an instance of your Paddle class
    // this.rightPaddle = new Paddle( this.dimensions.width - 20, this.dimensions.height / 2 - 30); // Create another instance of your Paddle class

    this.animate();
  }

  registerEvents() {
    this.boundClickHandler = this.click.bind(this);
    this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
  // add event listner to the doc, listening to keydown (anon function => check to see if event value = "space")
   // invoke restart game  
 }

  click(e) {
    if (!this.running) {
      this.play();
    }
    // Call the appropriate method to move your paddles
    // this.leftPaddle.moveUp();
    // this.rightPaddle.moveUp();
  }

  gameOver() {
    // Add collision detection and out-of-bounds checks for the ball and paddles
    return (
      this.ball.outOfBounds(this.dimensions) 
    //   || this.ball.collidesWith(this.leftPaddle.bounds()) ||
    //   this.ball.collidesWith(this.rightPaddle.bounds())
    );
  }

  animate() {
    // Move and draw the ball
    this.ball.animate(this.ctx);

    // Move and draw the paddles
    // this.leftPaddle.draw(this.ctx);
    // this.rightPaddle.draw(this.ctx);

    // Check for game over condition
    if (this.gameOver()) {
      alert("Game Over"); // Display a game over message
      this.restart();
    }

    // If the game is running, continue animating
    // if (this.running) {
      requestAnimationFrame(this.animate.bind(this));
    // }
  }
}
