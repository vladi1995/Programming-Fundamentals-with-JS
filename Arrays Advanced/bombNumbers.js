function bombNumbers(arrNum, arrCriteria) {
    let bombNum = arrCriteria[0];
    let magicNum = arrCriteria[1];

    let indexOfBombed = arrNum.indexOf(bombNum);
    
    while (indexOfBombed !== -1) {
        let startSplice = Math.max(0, indexOfBombed-magicNum);
        let lengthSplice = 2*magicNum+1;
        if (indexOfBombed - magicNum < 0) {
            lengthSplice = lengthSplice - (magicNum - indexOfBombed);
        }
        arrNum.splice(startSplice, lengthSplice);
        indexOfBombed = arrNum.indexOf(bombNum);
    }
    let sum = arrNum.reduce((a,b)=>a+b,0);
    console.log(sum);
}

bombNumbers([3, 3, 7, 9, 1, 3], [3, 1]);


