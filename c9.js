function spiral(n) {
    const matrix = [];
    const result = [];
    let firstRow = 0, lastRow = n - 1, firstColumn = 0, lastColumn = n - 1;
    let nilai = 0, counter = 0;

    for (let i = 0; i < n; i++) matrix.push([]);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = nilai;
            nilai++;
        }
    }

    while (firstColumn <= lastColumn && firstRow <= lastRow) {
        for (let i = firstColumn; i <= lastColumn; i++) result.push(matrix[firstRow][i])
        firstRow++
        for (let i = firstRow; i <= lastRow; i++) result.push(matrix[i][lastColumn])
        lastColumn--
        for (let i = lastColumn; i >= firstColumn; i--) result.push(matrix[lastRow][i])
        lastRow--
        for (let i = lastRow; i >= firstRow; i--) result.push(matrix[i][firstColumn])
        firstColumn++
    } console.log(result)
}

spiral(5);
spiral(6);
spiral(7);