function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
    firstPointX = mouseX;
    firstPointY = mouseY
}

let shapeSize = document.getElementById('size');
let shapeColor = document.getElementById('color');
let shape = document.getElementById('shape');
let firstPointX, firstPointY;

function mouseDragged(){
    fill(shapeColor.value);
    if (shape.value === 'circle') {
        circle(mouseX, mouseY, shapeSize.value);
    } else if (shape.value === 'square') {
        square(mouseX, mouseY, shapeSize.value);
    } else if (shape.value === 'triangle') {
        triangle(firstPointX, firstPointY, mouseX, mouseY, mouseX + shapeSize.value, mouseY - shapeSize.value);
    }
}



/*
// Samples:

// https://p5js.org/reference/#/p5/circle
fill('pink');
circle(400, 400, 100);   // x, y, diameter

// https://p5js.org/reference/#/p5/square
fill('navy');
square(50, 300, 50);   // x (top left), y (top left), width

// https://p5js.org/reference/#/p5/triangle
fill('teal');
triangle(
    50, 50, // first point
    30, 80, // second point
    70, 80  // third point
)
*/