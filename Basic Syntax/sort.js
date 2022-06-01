function sort(num1, num2, num3) {
    let arrayNum = [num1, num2, num3];
    arrayNum.sort().reverse();
    for (let i = 0; i <= 2; i++) {
        console.log(arrayNum[i]);
    }
}

sort(0,0,2);