export default class Paddle {
  constructor(dimensions, xPosition) {
    this.dimensions = dimensions;
    this.width = 10;
    this.height = 80;
    this.y = (dimensions.height / 2) - (this.height / 2);
    this.x = xPosition;
  }

  setPosition() {
    // Set a new random y-position for the paddle
    this.y = Math.random() * (this.dimensions.height - this.height);
  }

  bounds() {
    return {
      left: this.x,
      right: this.x + this.width,
      top: this.y,
      bottom: this.y + this.height,
    };
  }

  draw(ctx) {
    ctx.fillStyle = "white"; // Adjust color as needed
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  resize(){
    this.height -= 5;
  }
}
