const Scorecard = require('../lib/scorecard');

describe("Scorecard", () => {
  it("constructs with a total score of 0 ", () => {
    const scorecard = new Scorecard();
    expect(scorecard.totalScore()).toEqual(0);
  });
})