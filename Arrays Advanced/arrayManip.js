function arrayManip(arrNum, arrCommands) {
    let splittedArr = [];
    let newArrSum = [];

    for (let j = 0; j < arrCommands.length; j++) {
        splittedArr = arrCommands[j].split(' ');
        let command = splittedArr[0];
        let commandNum = Number(splittedArr[1]);
        if (command == "add") {
            arrNum.splice(commandNum, 0, Number(splittedArr[2]));
        } else if (command == "addMany") {
            let indexToAdd = Number(commandNum);
            for (let i = 2; i < splittedArr.length; i++) {
                arrNum.splice(indexToAdd, 0, Number(splittedArr[i]));
                indexToAdd++;
            }
        } else if (command == "contains") {
            console.log(arrNum.indexOf(commandNum));
        } else if (command == "remove") {
            arrNum.splice(commandNum, 1);
        } else if (command == "shift") {
            for (let k = 0; k < commandNum; k++) {
                let a = arrNum.shift();
                arrNum.push(a);
            }
        } else if (command == "sumPairs") {
            newArrSum = [];
            if (arrNum.length % 2 != 0) {
                arrNum.push(0);
            }
            for (let i = 0; i < arrNum.length - 1; i = i + 2) {
                newArrSum.push(arrNum[i] + arrNum[i + 1]);
            }
            arrNum = newArrSum.slice();
        } else if (command == "print") {
            arrNum[0] = '[ ' + arrNum[0];
            arrNum[arrNum.length - 1] = arrNum[arrNum.length - 1] + ' ]';
            let joinedArr = arrNum.join(', ');
            console.log(joinedArr);
            break;
        }
    }
}

arrayManip([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ['sumPairs', 'sumPairs', 'addMany 0 -1 -2 -3', 'print']);
