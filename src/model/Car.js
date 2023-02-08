const RandomGenerator = require('./RandomGenerator');
class Car {
  #name;
  #distance;
  #histories;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
    this.#histories = [];
  }

  move() {
    const randomNumber = RandomGenerator.getBetween0And9();
    if (randomNumber < 4) {
      this.addHistory();
      return;
    }
    this.#distance += 1;
    this.addHistory();
  }
}

module.exports = Car;
