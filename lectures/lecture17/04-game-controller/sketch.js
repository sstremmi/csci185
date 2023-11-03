let x = 100;
let y = 200;
let width = 150;
let fillColor = "white";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    drawCreature(x, y, fillColor, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down
    if (ev.code === "ArrowUp"){
        y = y - 2;
    } else if (ev.code === "ArrowDown"){
        y = y + 2;
    } else if (ev.code === "ArrowLeft"){
        x = x - 2;
    } else if (ev.code === "ArrowRight"){
        x = x + 2;
    } else if (ev.code === "Space"){
        width = width + 2;
    } else if (ev.code === "Backspace"){
        width = width - 2
    } else if (ev.code === "KeyR"){
        fillColor = "red";
    } else if (ev.code === "KeyG"){
        fillColor = "green";
    } else if (ev.code === "KeyB"){
        fillColor = "blue";
    } else if (ev.code === "KeyY"){
        fillColor = "yellow";
    }



    // redraw circle:
    clear();
    fill(fillColor);
    drawCreature(x, y, fillColor, width);
    drawGrid(canvasWidth, canvasHeight);
}

function drawCreature(x, y, color){
    fill(color)
    circle(x, y, width);
    fill("white")
    circle(x - 15, y - 10, 30);
    fill("white")
    circle(x + 15, y - 10, 30);
    fill("black")
    circle(x - 15, y - 10, 20);
    fill("black")
    circle(x + 15, y - 10, 20);
}

// Add event listener on keydown
document.addEventListener("keydown", moveController);
