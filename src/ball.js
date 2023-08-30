const BALL_RADIUS = 15;

export default class Ball {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.x = this.dimensions.width / 2;
    this.y = this.dimensions.height / 2;
    this.dx = 3;
    this.dy = 0; // Vertical velocity
    this.outOfBounds = this.outOfBounds.bind(this);
    this.radius = BALL_RADIUS;

    this.trail = []; // Array to store previous positions
    this.trailMaxLength = 6; // Adjust the length of the trail
  }

  addToTrail(x, y) {
    this.trail.unshift({ x, y });
    if (this.trail.length > this.trailMaxLength) {
      this.trail.pop();
    }
  }

  drawTrail(ctx) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.2)"; 
    for (const pos of this.trail) {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, this.radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  jump() {
    this.dy = -8; // Adjust the value for the desired jump strength
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.dy += 0.4; // Adjust the gravity value as needed
  }

  reverseDirection() {
    this.dx *= -1; // Reverse the horizontal direction
  }

  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
  }

  animate(ctx) {
    this.draw(ctx);
    this.move(ctx);
    this.addToTrail(this.x, this.y);
    this.drawTrail(ctx);
  }

  bounds() {
    return {
      left: this.x - this.radius,
      right: this.x + this.radius,
      top: this.y - this.radius,
      bottom: this.y + this.radius,
    };
  }

  outOfBounds() {
    const aboveTheTop = this.y <= 0;
    const belowTheBottom = this.y >= this.dimensions.height;
    const beyondLeft = this.x < -1 * this.radius;
    const beyondRight = this.x > this.dimensions.width;

    return aboveTheTop || belowTheBottom || beyondLeft || beyondRight;
  }
}
