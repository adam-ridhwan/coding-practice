const isValidSubsequence = require('./index');

describe('isValidSubsequence Tests', () => {
  test('Testcase #1: Basic positive case', () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [1, 6, -1, 10];
    expect(isValidSubsequence(array, sequence)).toBe(true);
  });

  test('Testcase #2: Sequence longer than array', () => {
    const array = [1, 2, 3];
    const sequence = [1, 2, 3, 4];
    expect(isValidSubsequence(array, sequence)).toBe(false);
  });

  test('Testcase #3: Correct elements, wrong order', () => {
    const array = [1, 2, 3, 4];
    const sequence = [4, 3];
    expect(isValidSubsequence(array, sequence)).toBe(false);
  });

  test('Testcase #4: Empty sequence', () => {
    const array = [1, 2, 3, 4];
    const sequence = [];
    expect(isValidSubsequence(array, sequence)).toBe(true);
  });

  test('Testcase #5: Sequence not present in array', () => {
    const array = [1, 3, 4];
    const sequence = [2];
    expect(isValidSubsequence(array, sequence)).toBe(false);
  });

  test('Testcase #6: Array and sequence are the same', () => {
    const array = [1, 2, 3];
    const sequence = [1, 2, 3];
    expect(isValidSubsequence(array, sequence)).toBe(true);
  });

  test('Testcase #7: Array contains repeated elements', () => {
    const array = [1, 2, 1, 2, 3];
    const sequence = [1, 2, 3];
    expect(isValidSubsequence(array, sequence)).toBe(true);
  });

  test('Testcase #8: Sequence contains repeated elements, not in order in array', () => {
    const array = [1, 2, 3, 4];
    const sequence = [2, 2];
    expect(isValidSubsequence(array, sequence)).toBe(false);
  });

  // Additional Test Cases
  test('Testcase #9: Sequence partially present in array', () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [1, 22, 10, 12];
    expect(isValidSubsequence(array, sequence)).toBe(false);
  });

  test('Testcase #10: Array has one element not in sequence', () => {
    const array = [1];
    const sequence = [2];
    expect(isValidSubsequence(array, sequence)).toBe(false);
  });
});
