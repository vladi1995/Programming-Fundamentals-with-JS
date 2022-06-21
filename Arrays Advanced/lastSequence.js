function lastSequence(n,k) {
    let resultArray = [];
    resultArray.push(1);
    
    for (let i = 0; i < n-1; i++) {
        let newArr = resultArray.slice(-k);
        let sum=0;
        for (element of newArr) {
            sum+=element;
        }
        resultArray.push(sum);
    }
    console.log(resultArray.join(' '));
}

lastSequence(8,2);