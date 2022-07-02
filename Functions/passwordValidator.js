function passwordValidator(givenPassword) {
    function isValidFirst (password) {
        let passwordAsString = password.toString();
        let firstRule = (passwordAsString.length >= 6 && passwordAsString.length <= 10);
        return firstRule;
    }

    function isValidSecond (password) {
        let isValid = 0;

        for (let iterator of password) {
            let currChar = iterator.charCodeAt(0);
            if ((currChar >= 97 && currChar <= 122) ||
            (currChar >= 65 && currChar <= 90) ||
            (currChar >= 48 && currChar <= 57)) {
                isValid = 1;
            } else {
                isValid = 0;
                break;
            }
        }
        return isValid;
    }

    function isValidThree (password) {
        let sumNumbers = 0;
        for (let iterator of password) {
            if ((iterator.charCodeAt(0) >= 48 && iterator.charCodeAt(0) <= 57)) {
                sumNumbers++;
            }
        }
        return (sumNumbers >= 2 ? true : false);
    }

    if (isValidFirst(givenPassword) && isValidSecond(givenPassword) && isValidThree(givenPassword)) {
        console.log("Password is valid");
    } else {
        if (!isValidFirst(givenPassword)) {
            console.log("Password must be between 6 and 10 characters");
        } 
        if (!isValidSecond(givenPassword)) {
            console.log("Password must consist only of letters and digits");
        } 
        if (!isValidThree(givenPassword)) {
            console.log("Password must have at least 2 digits");
        }
    }
}

passwordValidator('Pass12');