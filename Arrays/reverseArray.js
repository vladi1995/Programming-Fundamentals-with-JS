/*
function reverseArray(n, arr) {
    let newArr = [];
    let print = "";
    for (let i = 0; i < n; i++) {
        newArr = arr[n-i-1];
        print += newArr + ' ';
    }
    console.log(print);
}
*/
function reverseArray(n, arr) {
    let newArr = [];
    let print = "";
    for (let i = 0; i < n; i++) {
        newArr.push(arr[n-i-1]);
    }
    for (let i = 0; i < n; i++) {
        print += newArr[i] + ' ';
    }
    console.log(print);
}
reverseArray(3, [10,20,30,40,50]);