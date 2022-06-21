function firstAndLast (arr) {
    let k = arr.splice(0,1).join();
    let first = arr.slice(0,k);
    let last = arr.slice(arr.length-k, arr.length);
    console.log(first.join(' '));
    console.log(last.join(' '));
}

firstAndLast([3,6,7,8,9]);