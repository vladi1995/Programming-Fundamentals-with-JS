/*
//First main FUNCTION
function addAndSubtract(num1, num2, num3) {
    //Second function - SUM
    let sum = function (num1, num2) {
        let sum = num1+num2;
        //Third function - nested in sum
        let subtract = function (sum, num3) {
            let subtract = sum-num3;
            return subtract;
        }
        //Console log third function
        console.log(subtract(sum,num3));
    }
    //Call function sum
    sum(num1,num2);
}

//Call function addAndSubtract - main function
addAndSubtract(42,58,100);
*/
/*
function addAndSubtract(num1, num2, num3) {
    function add(num1, num2) {
        return num1+num2;
    }
    let sum = add(num1, num2);
    
    function subtract(sum, num3) {
        return sum-num3;
    }
    let subtract2 = subtract(sum,num3);
    console.log(subtract2);
}
addAndSubtract(42,58,100);
*/
function addAndSubtract(num1, num2, num3) {
    let add = (num1, num2) => num1+num2;
    let sum = add(num1, num2);

    let subtract = (sum,num3) => sum - num3;
    console.log(subtract(sum, num3)); 
}
addAndSubtract(42,58,100);