function numberModification(num) {
    let modifiedNumber = (num) => {
        let averageDigits = 0;
        while (averageDigits < 5) {
            let currNumberAsString = num.toString();
            let counterDigits = 0;
            let counter = 0;

            for (let j = 0; j < currNumberAsString.length; j++) {
                counterDigits+=Number(currNumberAsString[j]);
                counter++;
            }

            averageDigits = counterDigits / counter;
            if (averageDigits > 5) {
                break;
            } else {
                num+="9";
            }
        }
        return num;
    }
    console.log(modifiedNumber(num));
}

numberModification(101);