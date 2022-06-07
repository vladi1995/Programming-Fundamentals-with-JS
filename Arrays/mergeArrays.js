function mergeArrays(arrStr1, arrStr2) {
    let newArr = [];
    for (let i = 0; i < arrStr1.length; i++) {
        if (i%2 == 0) {
            newArr.push(Number(arrStr1[i])+Number(arrStr2[i]));
        } else {
            newArr.push(`${arrStr1[i]}${arrStr2[i]}`);
        }
    }
    console.log(newArr.join(' - '));
}

mergeArrays(['13','12312','5','77','4'], ['22','333','5','122','44']);