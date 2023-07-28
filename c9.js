function spiral(n) {
    const matrix = [];
    const arrSpiral = [];

    for(let i = 0; i < n; i++) {
        matrix.push([]);
    };
     
     let nilai = 0;
     let startRow = 0;
     let endRow = n;
     let startColumn = 0;
     let endColumn =  n;
    
    while (startRow < endRow) {
        for(let i = startColumn; i < endColumn; i++) {
            matrix[startRow][i] = nilai;
            nilai++;
        };
        startRow++;
        
    }
    
    let firstRow = 0;
    let edgeRow = n - 1;
    let firstColumn = 0;
    let edgeColumn = n - 1;
    
    while (firstColumn <= edgeColumn && firstRow <= edgeRow) {

    for (let i = firstColumn; i <= edgeColumn; i++) {
        arrSpiral.push(matrix[firstColumn][i])
    }
    
    firstRow++;

    for (let i = firstRow; i <= edgeRow; i++) {
        arrSpiral.push(matrix[i][edgeColumn]);  
    }

    edgeColumn--;

    for (let i = edgeColumn; i >= firstColumn; i--) {
        arrSpiral.push(matrix[edgeRow][i]);
    }

    edgeRow--;
    
    for (let i = edgeRow; i >= firstRow; i--) {
        arrSpiral.push(matrix[i][firstColumn]);
    }
    
    firstColumn++;

    }
    return arrSpiral
    
}

console.log(spiral(5));
console.log(spiral(6));
console.log(spiral(7));