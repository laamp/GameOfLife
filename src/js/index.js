import Game from "./game";

import "../css/index";

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const game = new Game(canvas);
});
