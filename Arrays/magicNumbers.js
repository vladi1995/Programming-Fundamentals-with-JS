function magicNumbers(arr, magicNum) {
    for(let i = 0; i < arr.length; i++) {
        let firstNum = arr[i];
        for (let j = i; j < arr.length; j++) {
            let secondNum = arr[j];
            if (firstNum + secondNum == magicNum && i != j) {
                console.log(`${firstNum} ${secondNum}`);
            }
        }
    }
}

magicNumbers([1,2,3,4,5,6], 6)