function cardGame(arrOfStrings) {
    let set = new Set();
    let collectionOfPowers = {
        "1":1,
        "2":2,
        "3":3,
        "4":4,
        "5":5,
        "6":6,
        "7":7,
        "8":8,
        "9":9,
        "10":10,
        "J":11,
        "Q":12,
        "K":13,
        "A":14
    };
    let collectionOfMultipliers = {
        "S":4,
        "H":3,
        "D":2,
        "C":1
    };
    let objOfNames = {};
    let newArr = [];
    let sum = 0;

    for (let el of arrOfStrings) {
        let ar=el.split(':');
        let nameOfPerson = ar[0];
        let edittedArr = el.replace(':', ' ').replace(/[,]/g, '').split(' ');

        if (objOfNames.hasOwnProperty(nameOfPerson)) {
            let oldAr = objOfNames[nameOfPerson];
            objOfNames[nameOfPerson] = edittedArr.toString() + ',' + oldAr;
        } else {
            objOfNames[nameOfPerson] = edittedArr.toString();
        }
        newArr = Object.entries(objOfNames);
    }
    //console.log(newArr);
    for (let [nameOfPerson, card] of newArr) {
        let splitted = card.split(',');
        
        set.clear();
        for (let el of splitted) {
            set.add(el);
        }
        sum=0;
        for (let eachCard of set) {
            let cardAsArr = eachCard.split('');
            let typeOfCard = cardAsArr.pop();
            let joinedArr = cardAsArr.join('');
            
            if (collectionOfPowers.hasOwnProperty(joinedArr)) {
                if (collectionOfMultipliers.hasOwnProperty(typeOfCard)) {
                    sum+=collectionOfPowers[joinedArr]*collectionOfMultipliers[typeOfCard];
                }
            }
        }
       console.log(nameOfPerson + ': ' + sum);
    }  
}

cardGame(
    [
        'John Snow: 2C, 4H, 9H, AS, QS',
        'Slav: 3H, 10S, JC, KD, 5S, 10S',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Slav: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'John Snow: JD, JD, JD, JD'
        ]
    );