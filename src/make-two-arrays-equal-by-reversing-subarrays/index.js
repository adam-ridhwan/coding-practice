/**
 *
 * @param target
 * @param arr
 * @returns {boolean}
 *
 * target = [1, 2, 3, 4]
 * arr = [2, 4, 1, 3]
 *
 * return -> true
 */

const canBeEqual = (target, arr) => {
  if (target.length !== arr.length) return false;

  const targetMap = new Map();
  const arrMap = new Map();

  target.forEach((_, index) => {
    if (targetMap.has(target[index])) targetMap.set(target[index], targetMap.get(target[index]) + 1);
    else targetMap.set(target[index], 1);

    if (arrMap.has(arr[index])) arrMap.set(arr[index], arrMap.get(arr[index]) + 1);
    else arrMap.set(arr[index], 1);
  });

  for (let [key, value] of targetMap) {
    if (value !== arrMap.get(key)) {
      return false;
    }
  }

  return true;
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
