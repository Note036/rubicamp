const matrix = (n) => {
    const results = [];for (let i = 0; i < n; i++) {
      results.push([]);
    }let counter = 0;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
      // Top row
      for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
        console.log(results)
      }
      startRow++;// Right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
        console.log(results)
      }
      endColumn--;// Bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
        console.log(results)
      }
      endRow--;// start column
      for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
        console.log(results)
      }
      startColumn++;
    }
    return results;
  }

  console.log(matrix(5))

