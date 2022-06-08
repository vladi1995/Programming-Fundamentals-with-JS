function simpleCalculator(num1, num2, operator) {
    let multiply = x => num1*num2;
    let divide = x => num1/num2;
    let add = x => num1+num2;
    let subtract = x => num1-num2;

    switch (operator) {
        case "multiply":
            return multiply(num1,num2);
            break;
        case "divide":
            return divide(num1,num2);
            break;
        case "add":
            return add(num1,num2);
            break;
        case "subtract":
            return subtract(num1,num2);
            break;
    }
}

console.log(simpleCalculator(50,13,"multiply"));