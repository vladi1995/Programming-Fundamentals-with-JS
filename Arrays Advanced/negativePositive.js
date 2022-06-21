function negativePositive(arr) {
    let arrAsNum = arr.map(Number);
    let newArr = [];
    for (element of arrAsNum) {
        if (element < 0) {
            newArr.unshift(element);
        } else {
            newArr.push(element);
        }
    }
    console.log(newArr.join('\n'));
}

negativePositive(['3','-2','0','-1']);