function processOdd(arr) {
    let newArr = arr.filter
    ((x, index) => index%2 !== 0)
    .map(x=>2*x)
    .reverse()
    .join(' ');
    
    return newArr;
}

console.log(processOdd([10,15,20,25]));