const Scorecard = require('../lib/scorecard.js');

describe("integration", () => {
  it("adds a frame with 2 regular rolls to the scorecard", () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(4, 2);
    expect(scorecard.totalScore()).toEqual(6);
  });

  it("adds 2 frames with 2 regular rolls to the scorecard", () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(4, 2)
    scorecard.addFrame(2, 1)
    expect(scorecard.totalScore()).toBe(9);
  });

  it("tracks 1 strike and adds the bonus from the following 2 rolls", () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(10, 0);
    scorecard.addFrame(4, 2);
    expect(scorecard.totalScore()).toBe(22);
  });

  it("tracks 1 spare and adds the bonus from the following 2 rolls", () => {
    const scorecard = new Scorecard();
    scorecard.addFrame(9, 1)
    scorecard.addFrame(4, 2)
    expect(scorecard.totalScore()).toBe(20);
  });

  // more integration tests to be added
})