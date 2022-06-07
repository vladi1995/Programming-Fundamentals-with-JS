function spiralMatrix(rows, cols) {
    let startRow = 0;
    let startCol = 0;
    let endRow = rows - 1;
    let endCol = cols - 1;
    let counter = 1;

    let result = [];
    for (let i = 0; i < rows; i++) {
        result.push([]);
    }
    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    console.log(result.map(row=>row.join(" ")).join("\n"));
   // result = result.forEach(row => console.log(row.join(' ')));
    
}

spiralMatrix(5, 5);