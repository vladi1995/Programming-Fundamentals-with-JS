function rightPlace(firstString, character, secondString) {
    /*
    let dataPrint = "";
    for (let i = 0; i < firstString.length; i++) {
        if (firstString[i] === '_') {
            dataPrint += character;
        } else {
            dataPrint += firstString[i];
        }
    }
    if (secondString !== dataPrint) {
        console.log(`Not Matched`);
    } else {
        console.log('Matched');
    }
    */
    let result = firstString.replace('_', character);
    if (result === secondString) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong');