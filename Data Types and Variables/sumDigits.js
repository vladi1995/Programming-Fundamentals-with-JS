function sumDigits(singleNumber) {
    /*
    let numberAsString = singleNumber.toString();
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        sum+=Number(numberAsString[i]);
    }
    console.log(sum);
    */
   /*
   let numberAsString = singleNumber.toString();
   let sum = 0;
   for (let i = 0; i < numberAsString.length; i++) {
    sum += Number(singleNumber%10);
    singleNumber=Math.trunc(singleNumber/10);
   }
   console.log(sum);
   */
  /*
   let numberAsString = singleNumber.toString();
   let sum = 0;
   for (const char of numberAsString) {
       sum+=Number(char);
   }
   console.log(sum);
   */
  /*
   let numberAsString = singleNumber.toString();
   let sum = 0;
   numberAsString.split('').forEach(function(char) {
       sum+=Number(char);
   });
   console.log(sum);
   */
   let numberAsString = singleNumber.toString();
   let sum = 0;
   numberAsString.split('').map(function(char) {
       sum+=Number(char);
   });
   console.log(sum);
}

sumDigits(245678);