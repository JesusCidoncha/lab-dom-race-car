class Player {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = 230;
    this.top = 540;
    this.height = 80;
    this.width = 40;
    this.directionX = 0;
    this.directionY = 0;

    this.element = document.createElement("img");
    this.element.src = "../images/car.png";
    this.element.style.position = "absolute";

    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    if (this.left >= 60) {
      this.left += this.directionX;
    } else {
      this.left = 60;
    }
    if (this.left <= 440 - this.width) {
      this.left += this.directionX;
    } else {
      this.left = 440 - this.width;
    }
    if (this.top >= 0) {
      this.top += this.directionY;
    } else {
      this.top = 0;
    }
    if (this.top <= 640 - this.height) {
      this.top += this.directionY;
    } else {
      this.top = 640 - this.height;
    }

    this.updatePosition();
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
