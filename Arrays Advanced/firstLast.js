function firstLast(arr) {
    let numArr = arr.map(Number);
    let firstElement = numArr.shift();
    let lastElement = numArr.pop();

    return firstElement+lastElement;
}

console.log(firstLast(['5','10']));