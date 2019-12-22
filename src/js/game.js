import { globals, randomColor } from "./util";

class Game {
  constructor(canvas) {
    this.gameStates = ["PAUSED", "PLAYING", "RESET"];
    this.state = this.gameStates[0];

    // interface setup
    // play/pause button
    // reset button
    // x dimension slider
    // y dimension slider
    // speed slider
    // color picker
    this.playButton = document.querySelector("#play");
    this.playButton.addEventListener("click", () => {
      if (this.state === "PLAYING") {
        this.state = this.gameStates[0];
        this.playButton.innerHTML = "Paused";
      } else if (this.state === "PAUSED") {
        this.state = this.gameStates[1];
        this.playButton.innerHTML = "Playing";
      }
    });

    // setup game variables
    this.gridXSize = 16;
    this.squareWidth = globals.screenWidth / this.gridXSize;
    this.gridYSize = 12;
    this.squareHeight = globals.screenHeight / this.gridYSize;
    this.grid = [];
    this.setupGrid();

    // setup canvas
    this.canvas = canvas;
    this.canvas.width = globals.screenWidth;
    this.canvas.height = globals.screenHeight;
    this.ctx = canvas.getContext("2d");

    // interaction with grid
    this.clickGrid = this.clickGrid.bind(this);
    this.canvas.addEventListener("click", this.clickGrid);

    // setup animation
    this.fps = 10;
    this.fpsInterval = 1000 / this.fps;
    this.then = Date.now();
    this.animate = this.animate.bind(this);
    this.animate();
  }

  animate() {
    // how much time passed since this was last called?
    let now = Date.now();
    const timeElapsed = now - this.then;

    // update if enough time passed
    if (timeElapsed > this.fpsInterval) {
      this.then = now - (timeElapsed % this.fpsInterval);
      if (this.state === "PLAYING") {
        this.calculateNextGrid();
      }
      this.render();
    }

    requestAnimationFrame(this.animate);
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
      let newCol = [];
      for (let rows = 0; rows < this.gridYSize; rows++) {
        // manually pushing in values here
        newCol.push(true);
      }
      this.grid.push(newCol);
    }
  }

  drawGrid() {
    for (let x = 0; x < this.gridXSize; x++) {
      for (let y = 0; y < this.gridYSize; y++) {
        if (this.grid[x][y]) {
          this.ctx.fillStyle = "indigo";
          this.ctx.fillRect(
            x * this.squareWidth,
            y * this.squareHeight,
            this.squareWidth,
            this.squareHeight
          );
        }
      }
    }
  }

  clickGrid(e) {
    // make sure the game is paused
    this.state = this.gameStates[0];
    this.playButton.innerHTML = "Paused";

    const xPos = Math.floor((e.offsetX / globals.screenWidth) * this.gridXSize);
    const yPos = Math.floor(
      (e.offsetY / globals.screenHeight) * this.gridYSize
    );

    this.grid[xPos][yPos] = !this.grid[xPos][yPos];
    this.render();
  }

  calculateNextGrid() {
    let newGrid = [];

    // make a blank grid
    for (let i = 0; i < this.gridXSize; i++) {
      let newCol = [];
      for (let j = 0; j < this.gridYSize; j++) {
        newCol.push("x");
      }
      newGrid.push(newCol);
    }

    for (let x = 0; x < this.gridXSize; x++) {
      for (let y = 0; y < this.gridYSize; y++) {
        let neighbors = this.countNeighbors(x, y);

        // rules for life here
        if (this.grid[x][y]) {
          if (neighbors < 2) {
            newGrid[x][y] = false; // die from underpopulation
          } else if (neighbors > 3) {
            newGrid[x][y] = false; // die from overpopulation
          } else {
            newGrid[x][y] = true; // lives to next round
          }
        } else {
          if (neighbors === 3) {
            newGrid[x][y] = true; // new life
          } else {
            newGrid[x][y] = false; // stays dead
          }
        }
      }
    }

    this.grid = newGrid;
  }

  countNeighbors(col, row) {
    let neighbors = 0;

    if (this.grid[col - 1]) {
      if (this.grid[col - 1][row]) neighbors++;
      if (this.grid[col - 1][row - 1]) neighbors++;
      if (this.grid[col - 1][row + 1]) neighbors++;
    }

    if (this.grid[col + 1]) {
      if (this.grid[col + 1][row]) neighbors++;
      if (this.grid[col + 1][row - 1]) neighbors++;
      if (this.grid[col + 1][row + 1]) neighbors++;
    }

    if (this.grid[col][row - 1]) neighbors++;
    if (this.grid[col][row + 1]) neighbors++;

    return neighbors;
  }
}

export default Game;
