/*
function palindromeIntegers(arr) {
    function result (arr) {
    for (let i = 0; i < arr.length; i++) {
        function isPalindromeForward (currNumber) {
            let currNumberAsString = currNumber.toString();
            let newArrForward = [];
            
            for (let j = 0; j < currNumberAsString.length; j++) {
                newArrForward.push(currNumberAsString[j]);
            }
            return newArrForward.join('');
        }
        function isPalindromeBackward (currNumber) {
            let currNumberAsString = currNumber.toString();
            let newArrBackward = [];

            for (let k = currNumberAsString.length-1; k >= 0; k--) {
                newArrBackward.push(currNumberAsString[k]);
            }
            return newArrBackward.join('');
        }
        
        console.log((isPalindromeForward(arr[i]) == isPalindromeBackward(arr[i])) ? "true" : "false");
    }
}
result (arr);
}
*/
function palindromeIntegers(arr) {
    function result (arr) {
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i].toString();
        let currNumAsArray = currNum.split('');
        let currNumAsArrayReversed = currNum.split('').reverse();
        
        if (currNumAsArray.join('') == currNumAsArrayReversed.join('')) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
result (arr);
}

palindromeIntegers([32,2,232,1010]);