function diagonalAttack(arr) {
    //Initialize new array
    let numArr = [];
    //Join the given array - make it string
    let joinedArr = arr.join(' ');
    //Make the joined array to string with 25 elements
    let newArrSplitted = joinedArr.split(' ');

    //Make the 1D to 2D array
    for (let i = 0; i < newArrSplitted.length; i=i+arr.length) {
        numArr.push(newArrSplitted.slice(i, i+arr.length));   
    }
    
    //Make the string to number array
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < numArr.length; j++) {
            numArr[i][j] = Number(numArr[i][j]);
        }
    }
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < numArr.length; j++) {
            if (i==j) {
                sum1+=numArr[i][j];
            }
            if (j == numArr.length-1-i) {
                sum2+=numArr[i][j];
            }
        }
    }
    
    if (sum1 == sum2) {
        for (let i = 0; i < numArr.length; i++) {
            for (let j = 0; j < numArr.length; j++) {
                if (i!=j && j!=numArr.length-1-i) {
                    numArr[i][j]=sum1;
                }
            }
        }
        for (let i = 0; i < numArr.length; i++) {
            console.log(numArr[i].join(' '));
        }
    } else {
        for (let i = 0; i < numArr.length; i++) {
            console.log(numArr[i].join(' '));
        }
    }
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0',
]);