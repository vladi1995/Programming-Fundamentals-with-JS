function sumOfOdd (n){
    let sum = 0;
    for (let i = 1; i <= 2*n; i=i+2) {
        sum += i;
        console.log(i);
    }
    console.log(`Sum: ${sum}`);
}

sumOfOdd(3);