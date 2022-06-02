function integerFloat(num1, num2, num3) {
    /*
    let sum = num1+num2+num3;
    let type = '';
    if (sum%1 === 0) {
        type='Integer';
    } else {
        type='Float';
    }
    console.log(`${sum} - ${type}`);
    */
   /*
   let sum = num1+num2+num3;
   let result = Math.round(sum);
   let type = '';
   if (sum === result) {
       type = 'Integer';
   } else {
       type = 'Float';
   }
   console.log(`${sum} - ${type}`);
   */
  /*
   let sum = num1+num2+num3;
   let result = parseInt(sum);
   let type = '';
   if (sum === result) {
       type = 'Integer';
   } else {
       type = 'Float';
   }
   console.log(`${sum} - ${type}`);
   */
   let sum = num1+num2+num3;
   let sumString = sum.toString();
   let type = 'Integer';
   for (let i = 0; i < sumString.length; i++) {
       if(sumString[i]==='.') {
           type='Float';
       }
   }
   let output = sum%1 === 0 ? `${sum} - Integer` : `${sum} - Float`;
   console.log(output);
   console.log(`${sum} - ${type}`);
} 

integerFloat(9,100,1.1);