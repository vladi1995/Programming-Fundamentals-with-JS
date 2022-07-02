function factorialDivision(num1, num2) {
    let factorialNum1 = (num) => {
        let resultFactorialNum = 1;
        for (let i = num; i >= 1; i--) {
            resultFactorialNum *= i; 
        }
        return resultFactorialNum;
    }
    console.log((factorialNum1(num1)/factorialNum1(num2)).toFixed(2));
}

factorialDivision(6,2);