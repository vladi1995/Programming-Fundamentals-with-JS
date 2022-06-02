function latinLetters(n) {
    let nAsNum = Number(n);
    for (let i = 1; i <= n; i++) {
        for (j = 1; j <= n; j++) {
            for (k = 1; k <= n; k++) {
                console.log(`${String.fromCharCode(i+96)}${String.fromCharCode(j+96)}${String.fromCharCode(k+96)}`);
            }
        }
    }
}

latinLetters('3');