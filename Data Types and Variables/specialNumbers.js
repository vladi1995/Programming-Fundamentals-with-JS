function specialNumbers(n) {
    /*
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let numAsString = i.toString();
        sum = 0;
        for (let j = 0; j < numAsString.length; j++) {
            sum += Number(numAsString[j]);
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
    */
    let sum = 0;
    let lastDigit = 0;
    let n1 = 0;

    for (let i = 1; i <= n; i++) {
        n1 = i.toString();
        sum=0;
        for (let j = 0; j < n1.length; j++) {
            n1 = Number(n1);
            lastDigit=n1%10;
            sum+=lastDigit;
            n1=Math.trunc(n1/10);
            sum+=n1;
        }
        
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(15);