let x = 100;
let y = 200;

let x1 = 1920;
let y1 = 100;

let width = 50;
let speed = 10;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
function draw() {
    x += speed;
    y -= 2;

    clear();
    noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);

    x1 -= speed;
    y1 += 2;
    noFill();
    circle(x1, y1, width);
}
