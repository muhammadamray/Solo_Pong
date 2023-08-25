// import Ball from './ball.js';

// document.addEventListener('DOMContentLoaded', () => {
//   const canvas = document.querySelector('#canvas');
//   const ctx = canvas.getContext('2d');

//   canvas.width = 600;
//   canvas.height = 400;

//   const ball = new Ball({height: canvas.height, width: canvas.width}, 10); // Adjust radius as needed
//   console.log(ball)
//   function gameLoop() {
//     // console.log(ball)
//     // debugger
//     // Clear canvas and draw background
//     ctx.fillStyle = 'black';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // Draw the ball
//     ball.draw(ctx);

//     // Call the game loop recursively
//     requestAnimationFrame(gameLoop);
//   }

//   // Start the game loop
//   gameLoop();
// });
import Ball from './ball.js';
import AlmostPongGame from './game.js';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#canvas');
    const game = new AlmostPongGame(canvas)
    const ctx = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 400;

    const ball = new Ball({ width: canvas.width, height: canvas.height });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            ball.jump();
        }
    });

    function animate() {
        // Set black background
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set neon blue border
        ctx.strokeStyle = "#00FFFF"; // Neon blue color
        ctx.lineWidth = 5;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        ball.move();
        ball.draw(ctx);

        requestAnimationFrame(animate);
    }

    animate();
});
