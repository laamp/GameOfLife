import {
    globals,
    randomColor
} from "./util";

class Game {
    constructor(canvas) {
        // setup canvas
        this.canvas = canvas;
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
        this.ctx.clearRect(0, 0, 800, 600);

        // do the drawing
        this.ctx.fillStyle = randomColor();
        this.ctx.fillRect(
            Math.random() * this.canvas.width,
            Math.random() * this.canvas.height,
            100, 100
        );
    }
}

export default Game;
