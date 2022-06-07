function nonDecreasing(arrayNum) {
    let firstNum = arrayNum[0];
    let dataPrint = firstNum + ' ';
    for (let i = 1; i < arrayNum.length; i++) {
        if (arrayNum[i] >= firstNum) {
            firstNum = arrayNum[i];
            dataPrint += firstNum + ' ';
        }
    }
    console.log(dataPrint);
}

nonDecreasing([20,3,2,15,6,1]);