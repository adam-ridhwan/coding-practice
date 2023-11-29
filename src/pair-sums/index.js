// function numberOfWays(arr, k) {
//   let currentSubIndex = 1;
//   let total = 0
//
//   while (currentSubIndex < arr.length) {
//     const firstValue = arr[currentSubIndex-1]
//
//     for (let i = currentSubIndex; i < arr.length; i++) {
//       if (firstValue + arr[i] === k) {
//         total++
//       }
//     }
//
//     currentSubIndex++
//   }
//
//   return total
// }

function numberOfWays(arr, k) {
  const elementCount = new Map();
  let pairCount = 0;

  for (let num of arr) {

    const difference = elementCount.get(k - num)
    console.log(elementCount);
    console.log(`6 - ${num}: `,difference);


    if(difference) {
      pairCount += difference
    }

    elementCount.set(num, (elementCount.get(num) || 0) + 1)

    console.log(elementCount);

    console.log('\n');
  }
  return pairCount;
}

console.log(numberOfWays([1, 2, 3, 4, 3], 6));
