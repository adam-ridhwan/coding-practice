const lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['0', '1','2','3','4','5','6','7','8','9',]

function rotationalCipher(input, rotationFactor) {
  let result = '';
  const lengthOfAlphabetsArray = 26;
  const lengthOfNumbersArray = 10;

  for (let i = 0; i < input.length; i++) {
    if (lowerCaseCharacters.includes(input[i])) {
      const indexInArray = lowerCaseCharacters.indexOf(input[i])
      const indexInArrayAddedBy3 =
        indexInArray < 23
          ? indexInArray + rotationFactor
          : lengthOfAlphabetsArray - indexInArray + (rotationFactor - 2 + (indexInArray - lengthOfAlphabetsArray))

      // console.log('lower', input[i], indexInArray, indexInArrayAddedBy3);
      result += lowerCaseCharacters[indexInArrayAddedBy3]

    } else if (upperCaseCharacters.includes(input[i])){
      const indexInArray = upperCaseCharacters.indexOf(input[i])
      const indexInArrayAddedBy3 =
        indexInArray < 23
          ? indexInArray + rotationFactor
          : lengthOfAlphabetsArray - indexInArray + (rotationFactor - 2 + (indexInArray - lengthOfAlphabetsArray))

      // console.log('upper', input[i], indexInArray, indexInArrayAddedBy3);
      result += upperCaseCharacters[indexInArrayAddedBy3]

    } else if (numbers.includes(input[i])) {
      const indexInArray = numbers.indexOf(input[i])
      const indexInArrayAddedBy3 =
        indexInArray < 7
          ? indexInArray + rotationFactor
          : lengthOfNumbersArray - indexInArray + (rotationFactor - 1 + (indexInArray - lengthOfNumbersArray))

      result += numbers[indexInArrayAddedBy3]
      // console.log('number', input[i], indexInArray, indexInArrayAddedBy3);

    } else {
      result += input[i]
      // console.log('symbol', input[i]);
    }
  }
  return result;
}

console.log(rotationalCipher('All-convoYs-9-be:Alert1.',4),'Epp-gsrzsCw-3-fi:Epivx5.');
console.log(rotationalCipher('All-convoYs-9-be:Alert1.',4) === 'Epp-gsrzsCw-3-fi:Epivx5.');
// console.log(rotationalCipher('Zebra-493?', 3));
