function condenseArray(arrOfNumbers) {
    let newArr = [];
    let counter = arrOfNumbers.length;
    if (arrOfNumbers.length == 1) {
        console.log(arrOfNumbers[0]);
    } else {
    while (counter > 1) {
        newArr=[];
        for (let i = 0; i < counter-1; i++) {
            newArr.push(arrOfNumbers[i]+arrOfNumbers[i+1]);
        }
        arrOfNumbers=newArr;
        counter--;
    }
    console.log(newArr.join(' '));
}
}

condenseArray([2,10,3]);