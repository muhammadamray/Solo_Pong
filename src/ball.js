// Constants
const BALL_RADIUS = 15;

// Ball class definition
export default class Ball {
  // Constructor function
  constructor(dimensions) {
    // Initialize ball properties
    this.dimensions = dimensions;
    this.x = this.dimensions.width / 2;
    this.y = this.dimensions.height / 2;
    this.dx = 3; // Horizontal velocity
    this.dy = 0; // Vertical velocity
    this.outOfBounds = this.outOfBounds.bind(this);
    this.radius = BALL_RADIUS;

    // Trail properties
    this.trail = []; // Array to store previous positions
    this.trailMaxLength = 6; // Adjust the length of the trail
  }

  // Method to add a position to the trail
  addToTrail(x, y) {
    this.trail.unshift({ x, y });
    if (this.trail.length > this.trailMaxLength) {
      this.trail.pop();
    }
  }

  // Method to draw the ball's trail
  drawTrail(ctx) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
    for (const pos of this.trail) {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, this.radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  // Method to make the ball jump
  jump() {
    this.dy = -8; // Adjust the value for the desired jump strength
  }

  // Method to move the ball
  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.dy += 0.4; // Adjust the gravity value as needed
  }

  // Method to reverse the horizontal direction of the ball
  reverseDirection() {
    this.dx *= -1; // Reverse the horizontal direction
  }

  // Method to draw the ball
  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Method to animate the ball's movement and trail
  animate(ctx) {
    this.draw(ctx);
    this.move(ctx);
    this.addToTrail(this.x, this.y);
    this.drawTrail(ctx);
  }

  // Method to get the bounding box of the ball
  bounds() {
    return {
      left: this.x - this.radius,
      right: this.x + this.radius,
      top: this.y - this.radius,
      bottom: this.y + this.radius,
    };
  }

  // Method to check if the ball is out of bounds
  outOfBounds() {
    const aboveTheTop = this.y <= 0;
    const belowTheBottom = this.y >= this.dimensions.height;
    const beyondLeft = this.x < -1 * this.radius;
    const beyondRight = this.x > this.dimensions.width;

    return aboveTheTop || belowTheBottom || beyondLeft || beyondRight;
  }
}
