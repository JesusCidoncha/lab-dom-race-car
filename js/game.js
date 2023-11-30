class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.height = 600;
    this.width = 500;
    this.player = null;
    this.obstacles = [];
    this.animateId = null;
    this.score = 0;
    this.lives = 3;
    this.isGameOver = false;
  }
  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.player = new Player(this.gameScreen);
    this.gameLoop();
  }
  gameLoop() {
    this.player.move();

    const nextObstacles = [];
    this.obstacles.forEach((currentObstacle) => {
      currentObstacle.move();
      if (currentObstacle.top < 640) {
        if (this.player.didCollide(currentObstacle)) {
          this.lives -= 1;
          document.getElementById("lives").innerText = `${this.lives}`;
          currentObstacle.element.remove();

          if (this.lives === 0) {
            this.isGameOver = true;
            this.gameScreen.style.display = "none";
            this.gameEndScreen.style.display = "block";
          }
        } else {
          nextObstacles.push(currentObstacle);
        }
      } else {
        this.score += 10;
        document.getElementById("score").innerText = `${this.score}`;
        currentObstacle.element.remove();
      }
    });
    this.obstacles = nextObstacles;

    if (this.animateId % 300 === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }

    this.animateId = requestAnimationFrame(() => {
      this.gameLoop();
    });
  }
}
