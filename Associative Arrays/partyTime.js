function partyTime(arrOfStrings) {
    let index = 0;
    let command  = arrOfStrings[index];
    let guestsBefore = [];
    let charAtZero = 0;
    let beforeParty = {};

    //Make an array - people before party
    while (command !== "PARTY") {
        guestsBefore.push(command);
        index++;
        charAtZero = command.charCodeAt(0);
        if (charAtZero >= 48 && charAtZero <= 57) {
            beforeParty[command] = "VIP";
        } else {
            beforeParty[command] = "regular";
        }
        command = arrOfStrings[index];
    }
    let indexOfParty = arrOfStrings.indexOf("PARTY");
    let guestsAfter = [];

    //Make an array - people after party
    if (indexOfParty == arrOfStrings.length-1) {
        guestsAfter = arrOfStrings.splice(indexOfParty+1);
    } else {
        guestsAfter = arrOfStrings.splice(-arrOfStrings.length+indexOfParty+1);
    }

    //People who did not come to the party
    for (let el of guestsAfter) {
        if (beforeParty.hasOwnProperty(el)) {
            guestsBefore.splice(guestsBefore.indexOf(el),1);    
        }
    }

    console.log(guestsBefore.length);
    let newArr = [];
    
    //Print the result
    for (let el of guestsBefore) {
        charAtZero = el.charCodeAt(0);
        if (charAtZero >= 48 && charAtZero <= 57) {
            console.log(el);
        } else {
            newArr.push(el);
        }
    }  
    console.log(newArr.join('\n'));
}

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

);