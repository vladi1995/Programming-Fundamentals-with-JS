function postOffice(inputString) {
    //Make the string an array so it can be iterable
    let arrOfInput = Array.from(inputString);
    //Split the new array
    let [firstPart, secondPart, thirdPart] = arrOfInput.join('').split('|');
    //Regex for first and second part
    let firstPattern = /([#$%*&])(?<capitalLetters>[A-Z]+)\1/g;
    let secondPattern = /(?<AsciiCode>[6][5-9]|[78][0-9]|[9][0]):(?<Wordlength>[0-9][0-9])/g;

    //Matches for first and second part
    let matchFirst = firstPattern.exec(firstPart).groups.capitalLetters;
    let matchSecond = secondPattern.exec(secondPart);
    //Split the third part 
    let thirdPartSplitted = thirdPart.split(' ');

    //Initialize and object
    let objOfLetters = {};

    while (matchSecond != null) {
        for (let i = 0; i < matchFirst.length; i++) {
        let asciiCode = String.fromCharCode(matchSecond.groups.AsciiCode);
        let countWord = matchSecond.groups.Wordlength;
            if (matchFirst[i] == asciiCode) {
                objOfLetters[asciiCode] = Number(countWord);
            }
        }
        matchSecond = secondPattern.exec(secondPart);
    }

    //We must sort the obj to be P O A M L!
    let newObj = {};
    for (let i = 0; i < matchFirst.length; i++) {
    for (let [key, value] of Object.entries(objOfLetters)) {
            if (matchFirst[i] == key) {
                newObj[key] = value;
            }
        }
    }

    //Print the result
    for (let [key, value] of Object.entries(newObj)) {
        for (let el of thirdPartSplitted) {
            if (el[0] == key && el.length == value + 1) {
                console.log(el);
            }
        }
    }
}

postOffice('Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig');