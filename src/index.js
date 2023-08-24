document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#canvas')
    // you can in here instantiate a new JS object that receives the canvas element as an argument

    const ctx = canvas.getContext("2d");

    
    canvas.width = 600; 
    canvas.height = 400; 

    // Drawing on the canvas
    ctx.fillStyle = "black"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

})

