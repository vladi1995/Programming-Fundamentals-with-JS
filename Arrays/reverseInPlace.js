/*
function reverseInPlace(arrOfStrings) {
    let newArr = [];
    for (let i = 0; i < arrOfStrings.length; i++) {
        newArr.push(arrOfStrings[i]);
    }
    let result = "";

    for (let i = arrOfStrings.length-1; i >= 0; i--) {
        result += newArr[i]+' ';
    }
    console.log(result);
}
*/
function reverseInPlace(arrOfStrings) {
    for (let i = 0; i < arrOfStrings.length/2; i++) {
        let k = arrOfStrings.length-1-i;
        let temp = arrOfStrings[i];
        arrOfStrings[i]=arrOfStrings[k];
        arrOfStrings[k]=temp;
    }
    console.log(arrOfStrings.join(' '));
}

reverseInPlace(['a','b','c','d','e']);