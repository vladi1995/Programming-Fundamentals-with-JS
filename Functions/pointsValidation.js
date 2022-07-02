function pointsValidation(arrOfNumbers) {
    function firstCondition (arr) {
        let result = Math.sqrt(Math.pow((0-arr[0]),2)+Math.pow((0-arr[1]),2));
        let booleanResult = Number.isInteger(result);
        return booleanResult;
    }

    function secondCondition (arr) {
        let result = Math.sqrt(Math.pow((arr[2]),2)+Math.pow((arr[3]),2));
        let booleanResult = Number.isInteger(result);
        return booleanResult;
    }

    function thirdCondition (arr) {
        let result = Math.sqrt(Math.pow((arr[2]-arr[0]),2)+Math.pow((arr[3]-arr[1]),2));
        let booleanResult = Number.isInteger(result);
        return booleanResult;
    }

    console.log(firstCondition(arrOfNumbers) ? `{${arrOfNumbers[0]}, ${arrOfNumbers[1]}} to {0, 0} is valid` : 
    `{${arrOfNumbers[0]}, ${arrOfNumbers[1]}} to {0, 0} is invalid`);

    console.log(secondCondition(arrOfNumbers) ? `{${arrOfNumbers[2]}, ${arrOfNumbers[3]}} to {0, 0} is valid` : 
    `{${arrOfNumbers[2]}, ${arrOfNumbers[3]}} to {0, 0} is invalid`);

    console.log(thirdCondition(arrOfNumbers) ? `{${arrOfNumbers[0]}, ${arrOfNumbers[1]}} to {${arrOfNumbers[2]}, ${arrOfNumbers[3]}} is valid` : 
    `{${arrOfNumbers[0]}, ${arrOfNumbers[1]}} to {${arrOfNumbers[2]}, ${arrOfNumbers[3]}} is invalid`);
}

pointsValidation([3,0,0,4]);