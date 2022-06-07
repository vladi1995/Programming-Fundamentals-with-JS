function spiralMatrix(x, y) {
    let arrayNum = [];
    let counter = 1;

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            arrayNum.push(counter);
            counter++;
        }
    }
    let joinedArr = arrayNum.join(' ');
    let splittedArr = joinedArr.slice(0,5);
    console.log(splittedArr);
   

    let topLeft = arrayNum[0];
    let topRight = arrayNum[x-1];
    let bottomRight = arrayNum[x*y-1];
    let bottomLeft = arrayNum[x*y-x];

}

spiralMatrix(5,5);