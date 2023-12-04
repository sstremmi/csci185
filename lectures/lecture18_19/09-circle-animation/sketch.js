 const circleData = [
    {x: 500, y: 50, d: 100, speedX: 3, speedY: 3, color: "purple"},
    {x: 300, y: 150, d: 50, speedX: 2, speedY: 0, color: "yellow"},
    {x: 400, y: 400, d: 25, speedX: 0, speedY: 1, color: "red"},
    {x: 40, y: 520, d: 80, speedX: 2, speedY: 0, color: "blue"},
    {x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5, color: "purple"},
    {x: 350, y: 350, d: 70, speedX: 1, speedY: 1, color: "yellow"}
 ];

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    clear()

    let counter = 0;
    while (counter < circleData.length) {
        strokeWeight(0);
        let x = circleData[counter].x;
        let y = circleData[counter].y;
        fill(circleData[counter].color);
        let d = circleData[counter].d;
        let speedX = circleData[counter].speedX;
        let speedY = circleData[counter].speedY;
        circle(x, y, d);

        circleData[counter].x += speedX;
        circleData[counter].y += speedY;

        drawGrid(canvasWidth, canvasHeight);
        counter += 1;
    }
}
