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
  }

  play() {
    this.running = true;
    this.animate();
  }

  restart() {
    this.running = false;
    this.score = 0;
    this.ball = new Ball(this.dimensions); // Create an instance of your Ball class
    this.leftPaddle = new Paddle(this.dimensions, 0); // Create an instance of your Paddle class
    this.rightPaddle = new Paddle(this.dimensions, this.dimensions.width - 10); // Create another instance of your Paddle class

    this.animate();
  }

  registerEvents() {
    // this.boundClickHandler = this.click.bind(this);
    // this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
    // add event listner to the doc, listening to keydown (anon function => check to see if event value = "space")
    // invoke restart game
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
    // Call the appropriate method to move your paddles
    // this.leftPaddle.moveUp();
    // this.rightPaddle.moveUp();
  }

  gameOver() {
    // Add collision detection and out-of-bounds checks for the ball and paddles
    return this.ball.outOfBounds();
    //   || this.ball.collidesWith(this.leftPaddle.bounds()) ||
    //   this.ball.collidesWith(this.rightPaddle.bounds())
  }

  getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }

  // MAKES THE ENTIRE WALL REVERSE THE DIRECTION
  // hit() {
  //   // Calculate the distance between the ball and both paddles
  //   const distanceToLeftPaddle = this.getDistance(
  //     this.ball.x,
  //     this.ball.y,
  //     this.leftPaddle.x,
  //     this.leftPaddle.y
  //   );
  //   const distanceToLeftPaddle2 = this.getDistance(
  //     this.ball.x,
  //     this.ball.y,
  //     this.leftPaddle.x,
  //     this.leftPaddle.y + this.leftPaddle.height
  //   );
  //   const distanceToRightPaddle = this.getDistance(
  //     this.ball.x,
  //     this.ball.y,
  //     this.rightPaddle.x,
  //     this.rightPaddle.y
  //   );

  //   const isTouchingPaddleX =
  //     this.ball.x <= this.leftPaddle.x ||
  //     this.ball.x + this.ball.radius >= this.rightPaddle.x;
  //   const isTouchingPaddleY =
  //     this.ball.y >= this.leftPaddle.y ||
  //     this.ball.y + this.ball.radius <=
  //       this.leftPaddle.y + this.leftPaddle.height ||
  //     this.ball.y >= this.rightPaddle.y ||
  //     this.ball.y + this.ball.radius <=
  //       this.rightPaddle.y + this.rightPaddle.height;

  //   // console.log({ isTouchingPaddleX, isTouchingPaddleY });
  //   if (isTouchingPaddleX && isTouchingPaddleY) {
  //     console.log("reverse");
  //     return this.ball.reverseDirection(this.ctx);
  //   }

  //   // Check if the ball is colliding with the right paddle
  //   if (
  //     distanceToRightPaddle < this.ball.radius + this.rightPaddle.width &&
  //     this.ball.x > this.rightPaddle.x
  //   ) {
  //     return this.ball.reverseDirection(this.ctx);
  //   }
  // }

  //  THIS HIT FUNCTION MAKES THE BALL GLITCH AND IT GOES THROGUH THE PADDLE
  // hit() {
  //   const ballBounds = this.ball.bounds();
  //   const leftPaddleBounds = this.leftPaddle.bounds();
  //   const rightPaddleBounds = this.rightPaddle.bounds();

  //   // Check if the ball collides with the left paddle
  //   if (
  //     ballBounds.right >= leftPaddleBounds.left &&
  //     ballBounds.left <= leftPaddleBounds.right &&
  //     ballBounds.bottom >= leftPaddleBounds.top &&
  //     ballBounds.top <= leftPaddleBounds.bottom
  //   ) {
  //     this.ball.reverseDirection();
  //   }

  //   // Check if the ball collides with the right paddle
  //   if (
  //     ballBounds.right >= rightPaddleBounds.left &&
  //     ballBounds.left <= rightPaddleBounds.right &&
  //     ballBounds.bottom >= rightPaddleBounds.top &&
  //     ballBounds.top <= rightPaddleBounds.bottom
  //   ) {
  //     this.ball.reverseDirection();
  //   }
  // }

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
        this.ball.x = rightPaddleBounds.left - this.ball.radius;
      }
    }
  }

  animate() {
    // Move and draw the ball
    // this.ball.animate(this.ctx);

    // Move and draw the paddles
    // this.leftPaddle.draw(this.ctx);
    // this.rightPaddle.draw(this.ctx);

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
