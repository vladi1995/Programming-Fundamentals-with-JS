function orbit(input) {
    let rows = Number(input[0]);
    let cols = Number(input[1]);
    let starRow = Number(input[2]);
    let starCol = Number(input[3]);
    
    let result = [];
    for (let i = 0; i < rows; i++) {
        result.push([]);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[i][j]=Math.max(Math.abs(i-starRow), Math.abs(j-starCol))+1;
        }
    }
    result = result.forEach(row => console.log(row.join(' ')));
}

orbit([4,4,0,0]);