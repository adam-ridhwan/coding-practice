/**
 * sortedSquareArray (non-optimal solution)
 * @param array
 * @returns {*}
 */
// const sortedSquaredArray = array => {
//   const squaredArray = array.map(value => value * value);
//
//   return squaredArray.sort((a, b) => a - b);
// };

/**
 * sortedSquaredArray (optimal)
 * @param array
 * @returns sorted array
 *
 * array = [-7, -3, 1, 9, 22, 30]
 *
 * [resultArray[]] - [0, 0, 0, 0, 0, 0]
 * [currentIndex] - current index of [resultArray]
 *
 * [startIndex] - first index
 * [lastIndex] - last index
 *
 */
const sortedSquaredArray = array => {
  const resultArray = Array.from({ length: array.length }, () => 0);
  let currentIndex = array.length - 1;
  let startIndex = 0;
  let lastIndex = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    const firstValue = array[startIndex] * array[startIndex];
    const lastValue = array[lastIndex] * array[lastIndex];

    if (firstValue > lastValue) {
      resultArray[currentIndex--] = firstValue;
      startIndex++;
    } else {
      resultArray[currentIndex--] = lastValue;
      lastIndex--;
    }
  }

  return resultArray;
};

module.exports = sortedSquaredArray;
