function amazingNumber(numAmazing) {
    /*
    let numAsString = numAmazing.toString();
    let sum = 0;
    let isFound = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum+=Number(numAsString[i]);
    }
    let sumAsString = sum.toString();
    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i]==='9') {
            isFound = 1;
            break;
        }
    }
    console.log(`${numAmazing} Amazing? ${isFound ? `True` : `False`}`);
    */
    let numAsString = numAmazing.toString();
    let sum = 0;
    let isFound = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum+=Number(numAsString[i]);
    }
    let result = sum.toString();
    console.log(`${numAmazing} Amazing? ${result.includes(9) ? `True` : `False`}`);
}

amazingNumber(999);