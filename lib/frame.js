class Frame {
  constructor (roll1, roll2) {
    this.roll1 = roll1
    this.roll2 = roll2
  }

  calculateFramePoints() {
    return this.roll1 + this.roll2
  }

  strike() {
    if (this.roll1 === 10) {
      return true
    }
  }

  spare() {
    if ((this.roll1 < 10) && (this.roll1 + this.roll2 === 10)) {
      return true
    }
  }
}

module.exports = Frame;