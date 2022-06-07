/*
function arrayRotation(arrNum, numOfRotations) {
    let temp = 0;
    let temp2 = 0;
    let counter = 0;

    while (counter < numOfRotations) {
    counter++;
    for (let i = 0; i < arrNum.length-1; i++) {
        if (i == 0) {
            temp = arrNum[i];
            arrNum[i]=arrNum[arrNum.length-1];
            arrNum[arrNum.length-1]=temp;
        } else {
            temp2 = arrNum[i];
            arrNum[i]=arrNum[i-1];
            arrNum[i-1]=temp2; 
        }
    }
    }
    console.log(arrNum.join(' '));
}
*/
//let newArr = [];
function arrayRotation(arrNum, numOfRotations) {
    for (let i = 0; i < numOfRotations; i++) {
        let a = arrNum.shift();
        arrNum.push(a);
    }
    console.log(arrNum.join(' '));
}

arrayRotation([51,47,32,61,21],2)