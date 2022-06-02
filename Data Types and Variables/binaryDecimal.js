function binaryDecimal(binaryNumber) {
    let binary = binaryNumber.toString();
    let digit = parseInt(binary, 2);
    console.log(digit);
}

binaryDecimal('00001001');