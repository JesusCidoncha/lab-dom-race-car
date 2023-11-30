window.addEventListener("load", () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const game = new Game();
  function startGame() {
    console.log("start game");
    game.start();
  }
  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
  }

  document.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.code === "ArrowUp" || event.code === "KeyW") {
      game.player.directionY = -1;
    }
    if (event.code === "ArrowDown" || event.code === "KeyS") {
      console.log("go down");
      game.player.directionY = 1;
    }
    if (event.code === "ArrowLeft" || event.code === "KeyA") {
      console.log("go left");
      game.player.directionX = -1;
    }
    if (event.code === "ArrowRight" || event.code === "KeyD") {
      console.log("go right");
      game.player.directionX = 1;
    }
  });
  document.addEventListener("keyup", (event) => {
    if (
      event.code === "ArrowUp" ||
      event.code === "KeyW" ||
      event.code === "ArrowDown" ||
      event.code === "KeyS"
    ) {
      console.log("go up");
      game.player.directionY = 0;
    }

    if (
      event.code === "ArrowLeft" ||
      event.code === "KeyA" ||
      event.code === "ArrowRight" ||
      event.code === "KeyD"
    ) {
      console.log("go left");
      game.player.directionX = 0;
    }
  });
});
