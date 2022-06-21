function airPollution(arrOfStrings, actions) {
    let splittedArr = [];
    for (let element of arrOfStrings) {
        splittedArr.push(element.split(' '));
    }
    for (let i = 0; i < splittedArr.length; i++) {
        for (let j = 0; j < splittedArr.length; j++) {
            splittedArr[i][j] = Number(splittedArr[i][j]);
        }
    }

    let actArr = [];

    for (let element of actions) {
        actArr.push(element.split(' '));
    }

    for (let k = 0; k < actArr.length; k++) {
        for (let l = 0; l < 2; l++) {
            for (let j = 0; j < splittedArr.length; j++) {
                if (actArr[k][l] == "breeze") {
                    let stoinost = actArr[k][l+1];
                    if(splittedArr[stoinost][j] - 15 >= 0) {
                        splittedArr[stoinost][j] -= 15;
                    }
                } else if (actArr[k][l] == "gale") {
                    let stoinost = actArr[k][l+1];
                    if(splittedArr[j][stoinost] - 20 >= 0) {
                        splittedArr[j][stoinost] -= 20;
                    }
                } else if (actArr[k][l] == "smog") {
                    let stoinost = Number(actArr[k][l+1]);
                    for (let i = 0; i < splittedArr.length; i++) {
                        splittedArr[j][i] += stoinost;
                    }
                }
            }
        }
    }
    let dataPrint = [];
    for (let i = 0; i < splittedArr.length; i++) {
        for (let j = 0; j < splittedArr.length; j++) {
            if (splittedArr[i][j] >= 50) {
                dataPrint.push(` [${i}-${j}]`);
            }
        }
    }
    if (dataPrint.length > 0) {
        console.log(`Polluted areas:${dataPrint}`);
    } else {
        console.log("No polluted areas");
    }
    //console.table(splittedArr);
}

airPollution(
    ['5 7 72 14 4',
        '41 35 37 27 33',
        '23 16 27 42 12',
        '2 20 28 39 14',
        '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']
);

airPollution(
    ['5 7 3 28 32',
        '41 12 49 30 33',
        '3 16 20 42 12',
        '2 20 10 39 14',
        '7 34 4 27 24'],
    ['smog 11', 'gale 3', 'breeze 1', 'smog 2']
);

airPollution(
    ['5 7 2 14 4',
        '21 14 2 5 3',
        '3 16 7 42 12',
        '2 20 8 39 14',
        '7 34 1 10 24'],
    ['breeze 1', 'gale 2', 'smog 35']
);