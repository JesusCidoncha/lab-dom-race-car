class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.top = -100;
    this.height = 80;
    this.width = 40;
    this.left = Math.floor(Math.random() * (440 - this.width - 60) + 60);

    this.element = document.createElement("img");
    this.element.src = "../images/redCar.png";
    this.element.style.position = "absolute";

    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.top += 1;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}
