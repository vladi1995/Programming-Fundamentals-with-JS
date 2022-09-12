function race(arrOfStrings) {
    let nameOfParticipants = arrOfStrings.shift().split(', ');
    let patternName = /[A-Za-z]+/g;
    let patternDigits = /[0-9]/g;
    let objOfPeople = {};
    let sum = 0;

    for (let el of arrOfStrings) {
        if (el == 'end of race') {
            break;
        }
        let currName = el.match(patternName).join('');
        let currDigit = el.match(patternDigits);
        sum = 0;

        if (nameOfParticipants.includes(currName)) {
            for (let dig of currDigit) {
                sum+=Number(dig);
            }

            if (objOfPeople.hasOwnProperty (currName)) {
                objOfPeople[currName] += sum;
            } else {
                objOfPeople[currName] = sum;
            }
        }
    }
    let arrOfPeople = Object.keys(objOfPeople).sort((a,b)=>objOfPeople[b]-objOfPeople[a]);
    console.log(`1st place: ${arrOfPeople[0]}`);
    console.log(`2nd place: ${arrOfPeople[1]}`);
    console.log(`3rd place: ${arrOfPeople[2]}`);
}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']

);