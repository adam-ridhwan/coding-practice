const transposeMatrix = matrix => {
  const result = Array.from({ length: matrix[0].length }, () => []);

  for (let col = 0; col < matrix[0].length; col++) {
    for (let row = 0; row < matrix.length; row++) {
      result[col][row] = matrix[row][col];
    }
  }

  return result;
};

console.log(
  transposeMatrix([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
