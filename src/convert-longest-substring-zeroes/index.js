/**
 * 00100010100101 -> 001###10100101
 *
 * [currentIndex] - keeps track of the current index while looping
 * [currentLength] - the current length
 * [longestIndex] - the index of the first value of the longest substring
 * [longestLongest] - keeps track of the longest substring of zeroes
 *
 * 00 1 000 1 0 1 00 1 0 1
 */

const convertLongestSubstring = str => {
  if (str.length === 1 && str === '0') {
    return '#';
  }

  let currentIndex = 0;
  let currentLength = 0;
  let longestIndex = 0;
  let longestLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      if (currentLength === 0) {
        currentIndex = i;
      }
      currentLength++;

      if (i === str.length - 1 && str[i - 1] === '0') {
        longestLength = currentLength;
        longestIndex = currentIndex;
      }
    }

    if (str[i] === '1') {
      if (currentLength > longestLength) {
        longestLength = currentLength;
        longestIndex = currentIndex;
      }

      currentLength = 0;
    }
  }

  const first = str.substring(0, longestIndex);
  const longest = str.substring(longestIndex, longestIndex + longestLength);
  const last = str.substring(longestIndex + longestLength, str.length);

  return first + longest.replace(/./g, '#') + last;
};

module.exports = convertLongestSubstring;
