function perfectNumber(perfectNumber) {
    let resultFunction = (perfectNumber) => {
        let arrayOfDivisors = [];
        for (let i = 1; i <= perfectNumber/2; i++) {
            if (perfectNumber % i == 0) {
                arrayOfDivisors.push(i);
            }
        }
        let sumOfDivisors = 0;

        for (let currNum of arrayOfDivisors) {
            sumOfDivisors+=currNum;
        }
        return (sumOfDivisors==perfectNumber ? "We have a perfect number!" : "It's not so perfect.");
    }
    console.log(resultFunction(perfectNumber));
}

perfectNumber(1236498);