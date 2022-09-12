function starEnigma(arrOfStrings) {
    let countOfMessages = Number(arrOfStrings.shift());
    let defeatedPlanets = [];
    let attackPlanets = [];
    let pattern = /[star]/gmi;
    let charToNum = 0;
    let newArr = [];
    let patternNew = /[^@\-!:>]*@(?<planetName>[A-Za-z]+)[^@\-!:>]*:(?<planetPopulation>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*\->(?<soldierCount>\d+)[^@\-!:>]*/;
    let broi = 0;
    let stringPatternNew = {};
    let newEl = '';
    let lengthOfStringPattern = 0;

    for (let el of arrOfStrings) {
        broi++;
        if (broi > countOfMessages) {
            break;
        }
        let stringPattern = el.match(pattern);
        lengthOfStringPattern = 0;
        if (stringPattern != null) {
            lengthOfStringPattern = stringPattern.length;
        }

        newArr = [];
        if (patternNew.exec(el) == null) {
            for (let i = 0; i < el.length; i++) {
                charToNum = el[i].charCodeAt(0) - lengthOfStringPattern;
                newArr.push(String.fromCharCode(charToNum));
                newEl = newArr.join('');
            }
        } else {
            newArr.push(el);
            newEl = newArr;
        }
        stringPatternNew = patternNew.exec(newEl);

        if (stringPatternNew != null) {
            if (stringPatternNew.groups.attackType == "D") {
                defeatedPlanets.push(stringPatternNew[1]);
            } else if (stringPatternNew.groups.attackType == "A") {
                attackPlanets.push(stringPatternNew[1]);
            }
        }


    }

    attackPlanets.sort((a, b) => (a.localeCompare(b)));
    defeatedPlanets.sort((a, b) => (a.localeCompare(b)));

    console.log(`Attacked planets: ${attackPlanets.length}`);
    for (let el of attackPlanets) {
        console.log(`-> ${el}`);
    }
    console.log(`Destroyed planets: ${defeatedPlanets.length}`);
    for (let el of defeatedPlanets) {
        console.log(`-> ${el}`);
    }
}

starEnigma(['5',
    'CDoghudd4=63333$D$053333',
    'pp$##@Coruscant:2000000000!A!->5000',
    '@Crantonica:3000!A!->4000NM',
    'pp$##@Caruscant2:2000000000!A!->5000',
    'PQ@lde1:30000!D!->20000']
);