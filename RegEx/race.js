function race(arrOfStrings) {
    let listOfParticipants = arrOfStrings.shift().split(', ');
    let patternName = /[A-Za-z]+/g;
    let patternDigits = /[0-9]/g;
    let arrOfNames = [];

    for (let el of arrOfStrings) {
        if (el == "end of race") {
            break;
        } else {
            let currName = el.match(patternName).join('');
            let currDigits = el.match(patternDigits);

            if (listOfParticipants.includes(currName)) {
                arrOfNames.push(currName);
                arrOfNames.push(currDigits);
            }
        }
    }

    let sum = 0;
    let isFound = 0;
    let newArr = [];
    let newArrDigits = [];

    for (let i = 0; i < arrOfNames.length; i = i + 2) {
        if (isFound == arrOfNames[i]) {
            isFound = 0;
        } else {
            let nameOfPerson = arrOfNames[i];
            let arrOfDigits = arrOfNames[i + 1];
            sum = 0;

            for (let el of arrOfDigits) {
                sum += Number(el);
            }
            for (let j = i + 2; j < arrOfNames.length; j = j + 2) {
                let nextPerson = arrOfNames[j];
                let nextArrOfDigits = arrOfNames[j + 1];
                if (nextPerson == nameOfPerson) {
                    for (let el of nextArrOfDigits) {
                        sum += Number(el);
                    }
                    isFound = nextPerson;
                    break;
                }
            }
            //console.log(nameOfPerson);
            //console.log(sum);
            newArr.push(nameOfPerson, sum);
            newArrDigits.push(Number(sum));
        }
    }
    let counter = 0;
    newArrDigits.sort((a, b) => b - a);
    
    for (let el of newArrDigits) {
        for (let i = 0; i < newArr.length; i++) {
            if (el == Number(newArr[i])) {
                counter++;
                if (counter == 1) {
                    console.log(`1st place: ${newArr[i - 1]}`);
                } else if (counter == 2) {
                    console.log(`2nd place: ${newArr[i - 1]}`);
                } else if (counter == 3) {
                    console.log(`3rd place: ${newArr[i - 1]}`);
                }
                i=i+2;
            }
        }
    }
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
);