function rageQuit(inputString) {
    let pattern = /(?<foundString>[^0-9]+)(?<foundNumber>[0-9]+)/g;
    let match = pattern.exec(inputString);

    let arrOfStrings = [];
    let arrOfNumbers = [];

    while (match != null) {
        if (match.groups.foundNumber != '0') {
            arrOfStrings.push(match.groups.foundString);
            arrOfNumbers.push(match.groups.foundNumber);
        }
        match = pattern.exec(inputString);
    }
    
    let setOfStrings = new Set(arrOfStrings.join('').toUpperCase().split(''));
    let newArrResult = [];

    for (let i = 0; i < arrOfStrings.length; i++) {
        newArrResult.push(arrOfStrings[i].toUpperCase().repeat(Number(arrOfNumbers[i])));
    }

    console.log(`Unique symbols used: ${setOfStrings.size}`);
    console.log(newArrResult.join(''));
}

rageQuit('a0')