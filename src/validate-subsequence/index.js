/**
 * isValidSubsequence
 * @param array
 * @param sequence
 *
 * array = [5, 1, 22, 25, 6, -1, 8, 10]
 * sequence = [1, 6, -1, 10]
 *
 * return -> TRUE
 *
 * forEach - we use a for loop to loop through the array
 * [currentSequenceIndex] - reference to keep track of the current sequence index
 * [count] - reference to count all the values from sequence that are present in the array
 */

const isValidSubsequence = (array, sequence) => {
  let currentSequenceIndex = 0;
  let count = 0;

  array.forEach(value => {
    if (sequence[currentSequenceIndex] === value) {
      count++;
      currentSequenceIndex++;
    }
  });

  return count === sequence.length;
};

module.exports = isValidSubsequence;
