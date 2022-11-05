import { multiply, revertStr, getPercents } from "../index.js";

describe("test multiply", () => {
  it("multiply 1 * 0 to equal 0", () => {
    const result = multiply(1, 0);
    expect(result).toBe(0);
  }),
  it("multiply 1 * 1 to equal 1", () => {
    const result = multiply(1, 1);
    expect(result).toBe(1);
  });
});

describe('Test reverted string', () => {
  it('Is reverted', () => {
    const result = revertStr('Test');

    expect(result).toBe('tseT');
  })
});

describe ('Test get persent', () => {
  it('20% of 1000', () => {
    const result = getPercents(20, 1000);

    expect(result).toBe('20% от 1000 = 200');
  }),
  it('percent argument is string', () => {
    const result = getPercents('blabla', 1000);

    expect(result).toBe('blabla is not a number');
  })
  it('percent argument is null', () => {
    const result = getPercents(null, 1000);

    expect(result).toBe('Can`t count null%');
  })
});
