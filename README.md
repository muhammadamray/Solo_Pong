Solo Pong - A Gravity Ball Survival Game

## Introduction
Solo Pong is an innovative take on the classic Pong game while offering a unique gameplay experience. Players control a ball's movement using the space bar, aiming to keep the ball afloat for as long as possible. The ball navigates by staying afloat while gravity continuously pulls it downward.

To Play, please click this link: https://muhammadamray.github.io/Solo_Pong/

## Gameplay Screen

![Gameplay Screen](images/gamescreen.png)

## Wireframes

https://wireframe.cc/pro/pp/0f26898c6676892

- Navigation links provide easy access to the project's GitHub repository, my LinkedIn and AngelList.
- The game screen showcases the layout of the game and the general idea of how the ball will travel.
- High scores and game controls are prominently displayed at the top of the game board.

## Technologies, Libraries, APIs
This project will leverage the following technologies:

- HTML5 Canvas API for rendering the game environment and ball
- Webpack to bundle and transpile the JavaScript code
- npm for effective management of project dependencies

## Features

**Ball Hit:**
```
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
```

**Collision Detection and Ball Interaction:** 
One of the standout features in Solo Pong is the precise collision detection and ball interaction with paddles. Achieving accurate collision detection on both the X and Y axes was crucial to maintain the game's responsiveness and player experience. Designing a system that seamlessly reversed the ball's X-direction upon collision, adjusted its position to prevent overlaps, and incremented the player's score presented a significant challenge. Through careful coding and iterative testing, I engineered a solution that flawlessly handles collisions with both left and right paddles, ensuring intuitive gameplay and enhancing the overall enjoyment of the game. This feature showcases my technical expertise in problem-solving and my commitment to delivering a polished and engaging gaming experience.





**Ball Trail:**

```
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
```
**Dynamic Ball Trail Animation:** 
The dynamic ball trail animation in Solo Pong adds a visually appealing and immersive aspect to the gameplay. Creating a smooth and natural-looking trail that accurately represents the ball's movement path required careful consideration of animation principles and rendering techniques. A challenge I encountered was ensuring that the trail remained visible without causing performance issues, as rendering multiple trail segments in each frame could lead to a drop in frame rate. To address this, I implemented a trail buffer that stored a limited number of previous ball positions, allowing for a balance between visual quality and performance. By carefully managing the trail's size and refreshing rate, I successfully created an eye-catching trail that follows the ball's trajectory, enhancing the game's visual appeal while maintaining optimal performance. This feature exemplifies my attention to detail and dedication to optimizing visual effects within the constraints of real-time rendering.


## Future Implementations

As Solo Pong continues to evolve, several exciting features and enhancements are planned to further elevate the gameplay experience:

1. **Resizable Paddles for Adaptive Gameplay:** To add an additional layer of strategy and challenge, future iterations of Solo Pong will introduce resizable paddles. Players will have the opportunity to adjust the size of their paddles based on their gameplay preferences and the current difficulty level. This feature will require careful balancing to ensure that gameplay remains engaging and fair, while allowing players to tailor their experience to their skill level.

2. **Explosive Ball Effect upon Game Over:** To add an exhilarating climax to the gameplay experience, a captivating explosive ball effect will be implemented specifically when the game ends due to the ball colliding with the outer boundaries. When the player's ball ventures out of bounds, it will culminate in a dynamic explosion of particles, creating a visually striking display that celebrates the player's journey and high score accomplishments. This visually impactful effect will serve as a gratifying conclusion to each gameplay session, motivating players to improve their skills and achieve even higher scores. By triggering the explosive effect only during game-over situations caused by out-of-bounds collisions, this feature will heighten the emotional impact of each game's conclusion and reward players for their efforts.

3. **Dynamic Difficulty Levels with Random Paddle Generation:** To keep players engaged and challenged, dynamic difficulty levels will be introduced. These difficulty levels will include random paddle generation on the game board, increasing the unpredictability of the gameplay and requiring players to adapt quickly to changing obstacles. This feature will ensure that Solo Pong remains fresh and engaging, providing endless hours of entertainment for players of all skill levels.

4. **Future Implementation: Immersive Sound Effects**
To enhance player engagement and create a more immersive gaming experience, Solo Pong will feature dynamic sound effects that respond to key in-game actions. A satisfying jump sound will accompany each space bar tap, intensifying the tactile feedback of ball movement. The collision of the ball with paddles will be accentuated by a distinctive hit sound, heightening the sense of impact. Additionally, the climactic moment of a game over scenario, when the ball collides with the outer boundaries, will be marked by an explosion sound effect, adding emotional weight to the player's accomplishments. By integrating these sound effects, Solo Pong will create a more immersive and enjoyable gameplay environment.

These future implementations are designed to enhance Solo Pong's gameplay depth, visual appeal, and replayability, making it an even more immersive and captivating experience for players seeking both skill-based challenges and visual gratification.




## Credits
Solo Pong - A Gravity Ball Survival Game is the result of dedicated effort, creative exploration, and collaborative learning. While the initial inspiration came from Lessmilk's "Almost Pong" game, I've invested considerable time and effort to develop the core mechanics and innovative features that make Solo Pong unique. The project's realization was greatly facilitated by the guidance and insights of mentors and peers, who provided crucial feedback and support throughout the development process. The collective contributions of all involved have culminated in the creation of Solo Pong, offering players a thrilling and challenging journey.


https://www.lessmilk.com/almost-pong/

https://www.youtube.com/watch?v=EO6OkltgudE&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&ab_channel=ChrisCourses

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial



