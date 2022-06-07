function equalSums(arr) {
    let sumLeft = 0;
    let sumRight = 0;
    let isFound = 0;
    let numberj = 0;

    for (let i = 0; i < arr.length; i++) {
        sumLeft = 0;
        sumRight = 0;

        for (let j = 0; j < arr.length; j++) {
            if (j < i) {
                sumLeft += arr[j];
            } else if (j > i) {
                sumRight += arr[j];
            } 
        }
        if (sumLeft == sumRight) {
            isFound = 1;
            numberj = i;
            break;
        } 
    }
    if (isFound == 1) {
        console.log(numberj);
    } else {
        console.log('no');
    }
}

equalSums([1,2]);