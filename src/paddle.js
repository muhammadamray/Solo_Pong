// Paddle class definition
export default class Paddle {
  // Constructor function
  constructor(dimensions, xPosition) {
    this.dimensions = dimensions;
    this.width = 10; // Width of the paddle
    this.height = 80; // Height of the paddle
    this.y = dimensions.height / 2 - this.height / 2; // Initial y-position of the paddle
    this.x = xPosition; // Initial x-position of the paddle
  }

  // Method to set a new random y-position for the paddle
  setPosition() {
    this.y = Math.random() * (this.dimensions.height - this.height);
  }

  // Method to get the bounding box of the paddle
  bounds() {
    return {
      left: this.x,
      right: this.x + this.width,
      top: this.y,
      bottom: this.y + this.height,
    };
  }

  // Method to draw the paddle on the canvas
  draw(ctx) {
    ctx.fillStyle = "white"; // Paddle color (adjust as needed)
    ctx.fillRect(this.x, this.y, this.width, this.height); // Draw the paddle
  }

  // Method to resize the height of the paddle
  resize() {
    this.height -= 5; // Reduce the height of the paddle by 5 units
  }
}
