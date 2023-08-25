// const CONSTANTS = {
//   GRAVITY: 0.4,
//   FLAP_SPEED: 8,
//   TERMINAL_VEL: 12,
//   BALL_RADIUS: 15, // Adjust this value as needed
// };

// export default class Ball {
//   constructor(dimensions, radius = CONSTANTS.BALL_RADIUS) {
//     this.dimensions = dimensions;
//     this.radius = radius;
//     this.x = this.dimensions.width / 2;
//     this.y = this.dimensions.height / 2;
//     this.dx = 2; // Adjust this value for horizontal speed
//     this.dy = 0; // Vertical velocity
//   }

//   setSize(radius) {
//     this.radius = radius;
//   }

//   moveBall() {
//     // Update ball position based on velocity
//     this.x += this.dx;
//     this.y += this.dy;

//     // Apply gravity and terminal velocity
//     this.dy += CONSTANTS.GRAVITY;
//     if (Math.abs(this.dy) > CONSTANTS.TERMINAL_VEL) {
//       this.dy = Math.sign(this.dy) * CONSTANTS.TERMINAL_VEL;
//     }
//   }

//   reverseDirection() {
//     this.dx *= -1; // Reverse the horizontal direction
//   }

//   draw(ctx) {
//     ctx.fillStyle = "white"; // Adjust color as needed
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//     ctx.fill();
//   }

//   bounds() {
//     return {
//       left: this.x - this.radius,
//       right: this.x + this.radius,
//       top: this.y - this.radius,
//       bottom: this.y + this.radius,
//     };
//   }

//   outofBounds() {
//     const aboveTheTop = this.y - this.radius < 0;
//     const belowTheBottom = this.y + this.radius > this.dimensions.height;
//     const beyondLeft = this.x - this.radius < 0;
//     const beyondRight = this.x + this.radius > this.dimensions.width;
//     return aboveTheTop || belowTheBottom || beyondLeft || beyondRight;
//   }
// }

const BALL_RADIUS = 15;

export default class Ball {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.x = this.dimensions.width / 2;
    this.y = this.dimensions.height / 2;
    this.dx = -2;
    this.dy = 0; // Vertical velocity
    this.outOfBounds = this.outOfBounds.bind(this)
    this.radius = BALL_RADIUS
  }

  jump() {
    this.dy = -8; // Adjust the value for the desired jump strength
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.dy += 0.4; // Adjust the gravity value as needed

    // Ensure the ball stays within bounds
    if (this.y + BALL_RADIUS > this.dimensions.height) {
      this.y = this.dimensions.height - BALL_RADIUS;
      this.dy = 0;
    }
  }

  reverseDirection() {
    this.dx *= -1; // Reverse the horizontal direction
  }

  animate(ctx) {
    this.move();
    this.draw(ctx);
  }

  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
  }

  outOfBounds() {
    const aboveTheTop = this.y - this.radius < 0;
    const belowTheBottom = this.y + this.radius > this.dimensions.height;
    const beyondLeft = this.x - this.radius < 0;
    const beyondRight = this.x + this.radius > this.dimensions.width;
    // debugger
    return aboveTheTop || belowTheBottom || beyondLeft || beyondRight;
  }
  
}
