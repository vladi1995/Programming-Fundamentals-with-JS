/*
function evenOddSubstraction(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i]=Number(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 == 0) {
            sumEven+=arr[i];
        } else {
            sumOdd+=arr[i];
        }
    }
    console.log(sumEven-sumOdd);
}
*/
function evenOddSubstraction(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i]=Number(arr[i]);
    }
    for (num of arr) {
        if (num%2 == 0) {
            sumEven+=num;
        } else {
            sumOdd+=num;
        }
    }
    console.log(sumEven-sumOdd);
}
evenOddSubstraction([1,2,3,4,5,6]);