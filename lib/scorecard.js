Frame = require("./frame");

class Scorecard {
  constructor() {
    this.framesArray = [];
  }

  totalScore() {
    let score = 0;

    for (let i = 0; i < this.framesArray.length; i++) {
      score += this.framesArray[i].calculateFramePoints();

      if (this.framesArray[i].strike()) {
        let nextFrame = this.framesArray[i + 1];
        let bonusPoints = nextFrame.calculateFramePoints();
        score += bonusPoints;
      } else if (this.framesArray[i].spare()) {
        let nextFrame = this.framesArray[i + 1];
        let bonusPoints = nextFrame.roll1;
        score += bonusPoints;
      }
    }
    return score;
  }

  addFrame(roll1, roll2) {
    let newFrame = new Frame(roll1, roll2);
    this.framesArray.push(newFrame);
  }
}

module.exports = Scorecard;
