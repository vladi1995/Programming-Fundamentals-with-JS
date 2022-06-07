function account(input) {
    let arrOfInputs = [];
    let index = 0;
    for (let i = 0; i < input.length; i++) {
        arrOfInputs.push(input[i]);
    }
    let gamesPlayed = arrOfInputs.shift();
    let arrOfGamesPlayed = gamesPlayed.split(' ');

    let stringOfWords = arrOfInputs.join(' ');
    let arrOfWords = stringOfWords.split(' ');

    for (let i = 0; i < arrOfWords.length; i++) {
        let command = arrOfWords[i];
        if (command == "Play!") {
            break;
        }
        let ifIncludes = arrOfGamesPlayed.includes(arrOfWords[i+1]);
        if (command == "Install") {
            if (!ifIncludes) {
                arrOfGamesPlayed.push(arrOfWords[i+1]);
            }
        } else if (command == "Uninstall") {
            if (ifIncludes) {
                for (let j = 0; j < arrOfGamesPlayed.length; j++) {
                    if (arrOfGamesPlayed[j] == arrOfWords[i+1]) {
                        arrOfGamesPlayed.splice(j,1);
                    }
                }
            }
        } else if (command == "Update") {
            if (ifIncludes) {
                for (let j = 0; j < arrOfGamesPlayed.length; j++) {
                    if (arrOfGamesPlayed[j] == arrOfWords[i+1]) {
                        arrOfGamesPlayed.splice(j,1);
                    }
                }
                arrOfGamesPlayed.push(arrOfWords[i+1]);
            }
        } else if (command == "Expansion") {
            let arrOfWordExp = [arrOfWords[i+1]];
            let joinedArrOfWordExp = arrOfWordExp.join('');
            let splitArrOfWordExp = joinedArrOfWordExp.split('-');
            let joinedArrNew = splitArrOfWordExp.join(':')
            let ifIncludesExp = "";

            for (let k = 0; k < splitArrOfWordExp.length; k++) {
                for (let m = 0; m < arrOfGamesPlayed.length; m++) {
                    if (arrOfGamesPlayed[m] == splitArrOfWordExp[k]) {
                        index = m;
                    }
                }
                ifIncludesExp = arrOfGamesPlayed.includes(splitArrOfWordExp[k]);
                if (ifIncludesExp) {
                    arrOfGamesPlayed.splice(index+1,0,joinedArrNew);
                    break;
                }
            }
     
        }
    }
    console.log(arrOfGamesPlayed.join(' '));
}

account(['CS WoW Diablo', 'Update CS', 'Uninstall WoW', 'Expansion CS-Go', 'Expansion Civ-V', 'Play!']);