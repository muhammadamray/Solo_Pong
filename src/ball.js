const CONSTANTS = {
  GRAVITY: 0.4,
  FLAP_SPEED: 8,
  TERMINAL_VEL: 12,
  BALL_RADIUS: 15, // Adjust this value as needed
};

export default class Ball {
  constructor(dimensions, radius = CONSTANTS.BALL_RADIUS) {
    this.dimensions = dimensions;
    this.radius = radius;
    this.x = this.dimensions.width / 2;
    this.y = this.dimensions.height / 2;
    this.dx = 2; // Adjust this value for horizontal speed
    this.dy = 0; // Vertical velocity
  }

  setSize(radius) {
    this.radius = radius;
  }

  moveBall() {
    // Update ball position based on velocity
    this.x += this.dx;
    this.y += this.dy;

    // Apply gravity and terminal velocity
    this.dy += CONSTANTS.GRAVITY;
    if (Math.abs(this.dy) > CONSTANTS.TERMINAL_VEL) {
      this.dy = Math.sign(this.dy) * CONSTANTS.TERMINAL_VEL;
    }
  }

  reverseDirection() {
    this.dx *= -1; // Reverse the horizontal direction
  }

  drawBall(ctx) {
    ctx.fillStyle = "#FFFFFF"; // Neon white color
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  bounds() {
    return {
      left: this.x - this.radius,
      right: this.x + this.radius,
      top: this.y - this.radius,
      bottom: this.y + this.radius,
    };
  }

  outofBounds() {
    const aboveTheTop = this.y - this.radius < 0;
    const belowTheBottom = this.y + this.radius > this.dimensions.height;
    const beyondLeft = this.x - this.radius < 0;
    const beyondRight = this.x + this.radius > this.dimensions.width;
    return aboveTheTop || belowTheBottom || beyondLeft || beyondRight;
  }
}
