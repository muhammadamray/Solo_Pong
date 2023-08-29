import Ball from './ball.js';
import Paddle from './paddle.js';
import AlmostPongGame from './game.js';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#canvas');
    const game = new AlmostPongGame(canvas)
    const ctx = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 400;

});
