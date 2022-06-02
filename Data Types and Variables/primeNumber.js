function primeNumber(numberPrime) {
    let isPrime = 0;

    for (let i = 2; i < numberPrime; i++) {
        if (numberPrime%i == 0) {
            isPrime = 1;
            break;
        }
    }

    console.log(isPrime ? 'false' : 'true');
}

primeNumber(81);