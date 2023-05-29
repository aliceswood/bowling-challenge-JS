const Frame = require('../lib/frame');

describe("Frame", () => {
  it("returns 0 when two gutter balls are rolled", () => {
    const frame = new Frame(0, 0);
    expect(frame.calculateFramePoints()).toBe(0);
  });

  it("returns 6 for a 4 and a 2 rolled - regular roll", () => {
    const frame = new Frame(4, 2);
    expect(frame.calculateFramePoints()).toBe(6);
  });

  it("returns 10 for a spare and recognises it is a spare", () => {
    const frame = new Frame(4, 6);
    expect(frame.calculateFramePoints()).toBe(10);
    expect(frame.spare()).toBe(true);
  });

  it("recognises if the first roll was a strike", () => {
    const frame = new Frame(10, 0);
    expect(frame.calculateFramePoints()).toBe(10);
    expect(frame.strike()).toEqual (true);
  });
})