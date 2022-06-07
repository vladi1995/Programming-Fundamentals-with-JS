/*
function rotateArray(arrString) {
    let numOfRotations = arrString[arrString.length-1];
    arrString.pop();

    for (let i = 0; i < numOfRotations; i++) {
        for (let j = 0; j < arrString.length; j++) {
            let temp = arrString[j];
            arrString[j]=arrString[arrString.length-1];
            arrString[arrString.length-1]=temp;
        }
    }
    console.log(arrString.join(' '));
}
*/
function rotateArray(arrString) {
    let numOfRotations = arrString[arrString.length-1];
    arrString.pop();

    for (let i = 0; i < numOfRotations; i++) {
        arrString.unshift(arrString[arrString.length-1]);
        arrString.pop();
    }
    console.log(arrString.join(' '));
}

rotateArray(['1','2','3','4','2']);