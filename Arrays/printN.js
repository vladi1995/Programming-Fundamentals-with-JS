function printN (arrStr) {
    let step = Number(arrStr[arrStr.length-1]);
    let dataPrint = "";
    for (let i = 0; i < arrStr.length-1; i=i+step) {
        dataPrint += arrStr[i] + ' ';
    }
    console.log(dataPrint);
}

printN(['1','2','3','4','5','6']);