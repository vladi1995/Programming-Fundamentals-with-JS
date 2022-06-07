function equalArrays(strArr1, strArr2) {
    let notIdentical=0;
    let diff=0;
    let sum = 0;

    for (let i = 0; i < strArr1.length; i++) {
        strArr1[i]=Number(strArr1[i]);
        strArr2[i]=Number(strArr2[i]);
    }
    for (let i = 0; i < strArr1.length; i++) {
        if (strArr1[i] !== strArr2[i]) {
            diff = i;
            notIdentical=1;
            break;
        } else {
            sum+=strArr1[i];
        }
    }
    if(notIdentical==1) {
        console.log(`Arrays are not identical. Found difference at ${diff} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['1'], ['10']);