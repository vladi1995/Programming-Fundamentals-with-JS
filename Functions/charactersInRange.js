function charactersInRange(charOne, charTwo) {
    //Initialize the variables and convert them to numbers
    let convertedCharOne = charOne.charCodeAt(0);
    let convertedCharTwo = charTwo.charCodeAt(0);
    //Find the minimum and maximum of the converted chars
    
    //Arrow functin regarding minChar
    let minChar = (convertedCharOne, convertedCharTwo) => Math.min(convertedCharOne, convertedCharTwo);

    //Arrow function regarding maxChar
    let maxChar = (convertedCharOne, convertedCharTwo) => {
        if (minChar(convertedCharOne, convertedCharTwo) == convertedCharOne) {
            maxChar = convertedCharTwo;
        } else {
            maxChar = convertedCharOne;
        }
        return maxChar;
    }

    //Initialize the results from minChar and maxChar
    let minCharResult = minChar(convertedCharOne+1, convertedCharTwo+1);
    let maxCharResult = maxChar(convertedCharOne, convertedCharTwo);

    //Function regarding the result from min and max char functions
    function result (minCharResult, maxCharResult) {
    let printLine = [];
    for (let i = minCharResult; i < maxCharResult; i++) {
        printLine.push(String.fromCharCode(i));
    }
    return printLine.join(' ');
    }
    console.log(result(minCharResult, maxCharResult));
}

charactersInRange('C','#');