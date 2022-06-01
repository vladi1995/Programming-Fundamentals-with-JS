function division (num) {
    let answer = 0;

    if (num%10 === 0) {
        answer = 10;    
    } else if (num%7 === 0) {
        answer = 7;
    } else if (num%6 === 0) {
        answer = 6;
    } else if (num%3 === 0) {
        answer = 3;
    } else if (num%2 === 0) {
        answer = 2;
    }
    if (answer !== 0) {
        console.log(`The number is divisible by ${answer}`);
    } else {
        console.log(`Not divisible`);
    }
}

division(30);
division(15);
division(12);
division(1643);