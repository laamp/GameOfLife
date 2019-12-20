import {
    globals,
    randomColor
} from "./util";

class Game {
    constructor(canvas) {
        // setup game variables
        this.gridXSize = 20;
        this.squareWidth = globals.screenWidth / this.gridXSize;
        this.gridYSize = 15;
        this.squareHeight = globals.screenHeight / this.gridYSize;
        this.grid = [];
        this.setupGrid();

        window.grid = this.grid;

        // setup canvas
        this.canvas = canvas;
        this.canvas.addEventListener("click", e => {
            console.log(`x: ${e.offsetX}, y: ${e.offsetY}`);
        });
        this.canvas.width = globals.screenWidth;
        this.canvas.height = globals.screenHeight;
        this.ctx = canvas.getContext("2d");

        // setup animation
        this.fps = 2;
        this.fpsInterval = 1000 / this.fps;
        this.then = Date.now();
        this.animate = this.animate.bind(this);
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate);

        // how much time passed since this was last called?
        let now = Date.now();
        const timeElapsed = now - this.then;

        // update if enough time passed
        if (timeElapsed > this.fpsInterval) {
            this.then = now - (timeElapsed % this.fpsInterval);

            this.render();
        }
    }

    render() {
        // clear canvas before drawing
        this.ctx.clearRect(0, 0, globals.screenWidth, globals.screenHeight);

        // draw the grid
        this.drawGrid();
    }

    setupGrid() {
        // populate the 2d array that represent the grid
        for (let cols = 0; cols < this.gridXSize; cols++) {
            let bool = false;
            if (cols % 2 === 0) {
                bool = true;
            }
            let newCol = [];
            for (let rows = 0; rows < this.gridYSize; rows++) {
                bool = !bool;
                newCol.push(bool);
            }
            this.grid.push(newCol);
        }
    }

    drawGrid() {
        this.grid.forEach((col, i) => {
            col.forEach((square, j) => {
                if (square) {
                    this.ctx.fillStyle = randomColor();
                    this.ctx.fillRect(
                        i * this.squareWidth,
                        j * this.squareHeight,
                        this.squareWidth,
                        this.squareHeight
                    );
                }
            });
        });
    }
}

export default Game;
