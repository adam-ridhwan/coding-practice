/**
 * [0, 1], [1, 2], [2, 3]
 * [0, 1, 2], [1, 2, 3]
 * [0, 1, 2, 3]
 * */

/**
 * [0, 1], [1, 2], [2, 3]
 * [0, 1, 2], [1, 2, 3]
 * [0, 1, 2, 3]
 *
 * [2, 1, 3, 4], [1, 3, 2, 4], [1, 2, 4, 3]
 * [3, 2, 1, 4], [1, 4, 3, 2]
 * [4, 3, 2, 1]
 * */

const reverse = array => {
  let swapIndex = 0;

  while (swapIndex < array.length / 2) {
    const lastIndex = array.length - 1 - swapIndex;
    [array[lastIndex], array[swapIndex]] = [array[swapIndex], array[lastIndex]];
    swapIndex++;
  }
  return array;
};

function areTheyEqual(array_a, array_b) {
  if (array_a.length !== array_b.length) return false;
  if (array_a.every((value, index) => value === array_b[index])) return true;

  let subArrayIndex = 1;

  while (subArrayIndex < array_a.length) {
    for (let i = 0; i < array_a.length - subArrayIndex; i++) {
      const arrayCopy = [...array_a];

      const arrayToReverse = arrayCopy.slice(i, subArrayIndex + i + 1);

      const reversedArray = [
        ...arrayCopy.slice(0, i),
        ...reverse(arrayToReverse),
        ...arrayCopy.slice(i + subArrayIndex + 1),
      ];

      if (reversedArray.every((value, index) => value === array_b[index])) {
        return true;
      }
    }
    subArrayIndex++;
  }
  return false;
}

console.log(areTheyEqual([1, 2, 3, 4], [1, 4, 3, 2]));
console.log(areTheyEqual([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(areTheyEqual([1, 2, 3, 4], [1, 4, 3, 2, 5]));
console.log(areTheyEqual([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]));
console.log(areTheyEqual([1, 2, 3, 4], [1, 3, 2, 3]));
console.log(areTheyEqual([1, 2, 3, 4], [1, 2, 4, 3]));
console.log(areTheyEqual([1, 2, 3, 4], [1, 3, 2, 4]));
console.log(areTheyEqual([1, 2, 3, 4], [4, 3, 2, 1]));
console.log(areTheyEqual([1, 2, 3, 4], [1, 2, 3, 4, 5, 6]));
console.log(areTheyEqual([1, 2, 3, 4], [1, 2, 3, 5]));
