function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    drawCreature(100, 400, "purple");
    drawCreature(250, 100, "yellow");
    drawCreature(400, 20, "red");
    drawCreature(550, 10, "blue");
    drawCreature(700, 40, "white");

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function drawCreature(x, y, color){
    fill(color)
    circle(x, y, 150);
    fill("white")
    circle(x - 15, y - 10, 30);
    fill("white")
    circle(x + 15, y - 10, 30);
    fill("black")
    circle(x - 15, y - 10, 20);
    fill("black")
    circle(x + 15, y - 10, 20);
}