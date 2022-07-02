/*
function oddAndEvenSum(singleNumber) {
    //convert num as string
    let singleNumberAsString = singleNumber.toString();
    //count num of digits
    let countNumDigits = singleNumberAsString.length;
    //initialize the variables for sum

    let sum = (countNumDigits) => {
        let sumOdd = 0;
        let sumEven = 0;
        for (let i = 0; i < countNumDigits; i++) {
            let currentDigit = singleNumberAsString.charAt(i);
            let currentDigitAsNum = Number(currentDigit);

            if (currentDigitAsNum % 2 == 0) {
                sumEven += currentDigitAsNum;
            } else {
                sumOdd += currentDigitAsNum;
            }
        }
        return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
    }
    console.log(sum(countNumDigits));
}
*/

function oddAndEvenSum(singleNumber) {
    //convert num as string
    let singleNumberAsString = singleNumber.toString();
    //count num of digits
    let countNumDigits = singleNumberAsString.length;
    //initialize the variables for sum

    function oddSum (countNumDigits) {
        let oddSum = 0;
        for (let i = 0; i < countNumDigits; i++) {
            let currentDigit = Number(singleNumberAsString[i]);
            if (currentDigit%2 !== 0) {
                oddSum+=currentDigit;
            }
        }
        return oddSum;
    }

    function evenSum (countNumDigits) {
        let evenSum = 0;
        for (let i = 0; i < countNumDigits; i++) {
            let currentDigit = Number(singleNumberAsString[i]);
            if (currentDigit%2 === 0) {
                evenSum+=currentDigit;
            }
        }
        return evenSum;
    }
    console.log(`Odd sum = ${oddSum(countNumDigits)}, Even sum = ${evenSum(countNumDigits)}`);
}

oddAndEvenSum(3495892137259234);