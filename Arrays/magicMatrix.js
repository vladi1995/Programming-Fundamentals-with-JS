function magicMatrix(arrayOfNumbers) {
    let sum1 = 0;
    let sum2 = 0;
    let isFound = 0;
    let newArrRows = [];
    let newArrCols = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum1 = 0;
        sum2 = 0;
        for (let j = 0; j < arrayOfNumbers.length; j++) {
            sum1 += Number(arrayOfNumbers[i][j]);
            sum2 += Number(arrayOfNumbers[j][i]);
        }
        newArrRows.push(sum1);
        newArrCols.push(sum2);
    }
    
    for (let i = 0; i < newArrRows.length; i++) {
       for (let j = 0; j < newArrRows.length; j++) {
           if (newArrRows[i] !== newArrRows[j]) {
               isFound = 1;
           } else if (newArrCols[i] !== newArrCols[j]) {
               isFound = 1;
           } else if (newArrRows[i] !== newArrCols[j]) {
               isFound = 1;
           }
       }
    }
    console.log(isFound ? false : true);
}

magicMatrix([[1,0,0],[0,0,1],[0,1,0]]);