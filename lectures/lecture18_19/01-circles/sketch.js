function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    let y = 0;
    let w = 50;
    let x = 0;
    while (y <= 600) {
        fill('red');
        circle (x += 8, 200, w);
        
        fill('blue');
        circle (100, y, w);
        circle (300, y * 1.5, w);
        circle (500, y, w);
        circle (700, y * 1.5, w);
        y += 5;
        w += 1;
    }

    drawGrid(canvasWidth, canvasHeight);
}
