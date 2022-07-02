
function smallestNumber(num1, num2, num3) {
    /*
    let smallest = function (num1, num2, num3) {
        let small = 0;
        small = Math.min(num1, num2, num3);
        return small;
    }
    */
    let smallest = (num1,num2,num3) => Math.min(num1,num2,num3);
    console.log(smallest(num1,num2,num3));
}

smallestNumber(2,5,3);

/*
function smallestNumber(num1, num2, num3) {
    let smallestNumber = function (num1, num2, num3) {
        if (num1 <= num2 && num1 <= num3) {
            smallestNumber = num1;
        } else if (num2 <= num1 && num2 <= num3) {
            smallestNumber = num2;
        } else {
            smallestNumber = num3;
        }
        return smallestNumber; 
    }
    console.log(smallestNumber(num1,num2,num3));
}

smallestNumber(2,5,3);
*/