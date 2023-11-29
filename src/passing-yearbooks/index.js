// Link:
// https://www.metacareers.com/profile/coding_practice_question/?problem_id=146466059993201&psid=275492097255885&practice_plan=0&p=GENERAL_SWE&b=0111122

function findSignatureCounts(arr) {
  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    let currentStudent = i + 1;
    resultArray.push(1);

    if (currentStudent !== arr[i]) {
      resultArray[i] = resultArray[i] + 1;
    }
  }
  return resultArray;
}

console.log(findSignatureCounts([2, 1]));
// console.log(findSignatureCounts([1, 2]))
