import { globals, randomColor } from "./util";

class Game {
  constructor(canvas) {
    // setup game variables
    this.gridXSize = 4;
    this.squareWidth = globals.screenWidth / this.gridXSize;
    this.gridYSize = 3;
    this.squareHeight = globals.screenHeight / this.gridYSize;
    this.grid = [];
    this.setupGrid();

    window.grid = this.grid;

    // setup canvas
    this.canvas = canvas;
    this.canvas.width = globals.screenWidth;
    this.canvas.height = globals.screenHeight;
    this.ctx = canvas.getContext("2d");

    // interaction with grid
    this.clickGrid = this.clickGrid.bind(this);
    this.canvas.addEventListener("click", this.clickGrid);

    // setup animation
    this.fps = 1;
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
      this.calculateNextGrid();
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

      // alternate for each column
      // if (cols % 2 === 0) {
      //   bool = true;
      // }

      let newCol = [];
      for (let rows = 0; rows < this.gridYSize; rows++) {
        // select every other square
        // bool = !bool;

        // randomly activate a square
        if (Math.random() > 0.5) {
          bool = false;
        } else {
          bool = true;
        }

        newCol.push(bool);
      }
      this.grid.push(newCol);
    }
  }

  drawGrid() {
    this.grid.forEach((col, i) => {
      col.forEach((square, j) => {
        if (square) {
          this.ctx.fillStyle = "green";
          // this.ctx.fillStyle = randomColor();
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

  clickGrid(e) {
    const xPos = Math.floor((e.offsetX / globals.screenWidth) * this.gridXSize);
    const yPos = Math.floor(
      (e.offsetY / globals.screenHeight) * this.gridYSize
    );

    this.grid[xPos][yPos] = !this.grid[xPos][yPos];
    this.render();
  }

  calculateNextGrid() {
    let nextGrid = [];

    this.grid.forEach((col, i) => {
      let newCol = [];
      col.forEach((square, j) => {
        // invert each square
        newCol.push(this.grid[i][j]);
        // console.log(i, j);
        this.countNeighbors(i, j);
      });
      nextGrid.push(newCol);
    });

    this.grid = nextGrid;
  }

  countNeighbors(col, row) {
    let neighbors = 0;
    // console.log(this.grid[col - 1][row]);

    // this.grid[col][row]
    // if (this.grid[col - 1][row + 1]) neighbors++;
    // if (this.grid[col][row + 1]) neighbors++;
    // if (this.grid[col + 1][row + 1]) neighbors++;
    // if (this.grid[col - 1][row]) neighbors++;
    // if (this.grid[col + 1][row]) neighbors++;
    // if (this.grid[col - 1][row - 1]) neighbors++;
    // if (this.grid[col][row - 1]) neighbors++;
    // if (this.grid[col + 1][row - 1]) neighbors++;

    return neighbors;
  }
}

export default Game;
