function janNotation(arrOfInputs) {
    let arrOfNum = [];
    let arrOfStrings = [];

    let arrOfCheckNum = [];
    let arrOfCheckStr = [];

    for (let i = 0; i < arrOfInputs.length; i++) {
        if (!isNaN(arrOfInputs[i])) {
            arrOfCheckNum.push(Number(arrOfInputs[i]));
        } else {
            arrOfCheckStr.push(arrOfInputs[i]);
        }
    }

    if (arrOfCheckNum.length <= arrOfCheckStr.length) {
        console.log("Error: not enough operands!");
    } else if (arrOfCheckNum.length - arrOfCheckStr.length > 1) {
        console.log("Error: too many operands!");
    } else {
        for (let i = 0; i < arrOfInputs.length; i++) {
            if (!isNaN(arrOfInputs[i])) {
                arrOfNum.push(Number(arrOfInputs[i]));
            } else {
                let result = 0;
                let newArrLastTwo = arrOfNum.slice(-2);
                let firstNum = newArrLastTwo[0];
                let secondNum = newArrLastTwo[1];
                let operationToApply = arrOfInputs[i];
                switch (operationToApply) {
                    case "+":
                        result = sum(firstNum, secondNum);
                        arrOfNum.splice(-2, 2, result);
                        break;
                    case "-":
                        result = subtr(firstNum, secondNum);
                        arrOfNum.splice(-2, 2, result);
                        break;
                    case "*":
                        result = mult(firstNum, secondNum);
                        arrOfNum.splice(-2, 2, result);
                        break;
                    case "/":
                        result = divi(firstNum, secondNum);
                        arrOfNum.splice(-2, 2, result);
                        break;
                }
            }
        }
        console.log(arrOfNum.join(' '));

        function sum(a, b) {
            return a + b;
        }

        function subtr(a, b) {
            return a - b;
        }

        function mult(a, b) {
            return a * b;
        }

        function divi(a, b) {
            return a / b;
        }
        
    }
}

janNotation([3, 4, '+']);