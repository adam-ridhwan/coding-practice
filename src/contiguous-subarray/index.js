/**
 * arr = [3, 4, 1, 6, 2]
 * output = [1, 3, 1, 5, 1]
 *
 * Explanation:
 * For index 0 - [3] is the only contiguous subarray that starts (or ends) at index 0 with the maximum value
 * in the subarray being 3.
 * For index 1 - [4], [3, 4], [4, 1]
 * For index 2 - [1]
 * For index 3 - [6], [6, 2], [1, 6], [4, 1, 6], [3, 4, 1, 6]
 * For index 4 - [2] So, the answer for the above input is [1, 3, 1, 5, 1]
 */

function countSubarrays(arr) {
  const resultArray = Array(arr.length).fill(1);

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    // checking the left side
    if (i !== arr.length - 1) {
      let currentIndex = i;

      while (currentIndex > 0 && currentNumber > arr[currentIndex - 1]) {
        resultArray[i] = resultArray[i] + 1;
        currentIndex--;
      }
    }

    // checking the right side
    if (i < arr.length - 1) {
      let currentIndex = i;

      while (currentIndex < arr.length && currentNumber > arr[currentIndex + 1]) {
        resultArray[i] = resultArray[i] + 1;
        currentIndex++;
      }
    }
  }

  return resultArray;
}

console.log(countSubarrays([3, 4, 1, 6, 2]));
