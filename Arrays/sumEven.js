/*
function sumEven(arrOfStrings) {
   let arrOfNumbers = [];
   let sum = 0;

   for (let i = 0; i < arrOfStrings.length; i++) {
    arrOfNumbers.push(Number(arrOfStrings[i]));
   }

   for (let i = 0; i < arrOfNumbers.length; i++) {
    if (arrOfNumbers[i]%2==0) {
        sum+=arrOfNumbers[i];
    }
   }
   console.log(sum);
}
*/
function sumEven(arrOfStrings) {
    let arrOfNumbers = [];
    let sum = 0;
 
    for (let i = 0; i < arrOfStrings.length; i++) {
     arrOfNumbers[i]=Number(arrOfStrings[i]);
    }

    for (let num of arrOfNumbers) {
        if (num%2 == 0) {
            sum+=num;
        }
    }

    console.log(sum);
 }
sumEven(['1','2','3','4','5','6']);