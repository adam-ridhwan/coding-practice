const sortedSquaredArray = require('./index');

describe('sortedSquaredArray Tests', () => {
  test('Testcase #1: Mixed positive and negative numbers', () => {
    const array = [-7, -3, 1, 9, 22, 30];
    const expectedOutput = [1, 9, 49, 81, 484, 900];
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });

  test('Testcase #2: All positive numbers', () => {
    const array = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 4, 9, 16, 25];
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });

  test('Testcase #3: All negative numbers', () => {
    const array = [-5, -4, -3, -2, -1];
    const expectedOutput = [1, 4, 9, 16, 25];
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });

  test('Testcase #4: Empty array', () => {
    const array = [];
    const expectedOutput = [];
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });

  test('Testcase #5: Single element array', () => {
    const array = [6];
    const expectedOutput = [36];
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });

  test('Testcase #6: Array with zeroes', () => {
    const array = [0, -1, 2, -3];
    const expectedOutput = [0, 1, 4, 9];
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });

  test('Testcase #7: Large numbers', () => {
    const array = [-1000, -500, 500, 1000];
    const expectedOutput = [250000, 250000, 1000000, 1000000];
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });

  test('Testcase #8: Array with repeated elements', () => {
    const array = [2, 2, 3, 3];
    const expectedOutput = [4, 4, 9, 9];
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });

  test('Testcase #9: Array with a single zero', () => {
    const array = [0];
    const expectedOutput = [0];
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });

  test('Testcase #10: Large array', () => {
    const array = new Array(1000).fill(1).map((_, i) => i - 500);
    const expectedOutput = new Array(1000)
      .fill(1)
      .map((_, i) => (i - 500) ** 2)
      .sort((a, b) => a - b);
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });

  test('Testcase #11: Array with only one positive number', () => {
    const array = [-3, -2, -1, 5];
    const expectedOutput = [1, 4, 9, 25];
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });

  test('Testcase #12: Array with only one negative number', () => {
    const array = [-5, 1, 2, 3];
    const expectedOutput = [1, 4, 9, 25];
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });

  test('Testcase #13: Sorted array in descending order', () => {
    const array = [4, 3, 2, 1];
    const expectedOutput = [1, 4, 9, 16];
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });

  test('Testcase #14: Negative and positive numbers of same absolute value', () => {
    const array = [-2, -1, 1, 2];
    const expectedOutput = [1, 1, 4, 4];
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });
  test('Testcase #15: All elements are the same positive number', () => {
    const array = [3, 3, 3, 3];
    const expectedOutput = [9, 9, 9, 9];
    expect(sortedSquaredArray(array)).toEqual(expectedOutput);
  });
});
