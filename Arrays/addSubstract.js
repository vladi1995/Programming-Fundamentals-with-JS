function addSubstract (arrNumbers) {
    let sumOriginal = 0;
    let sumNew = 0;
    for (let i = 0; i < arrNumbers.length; i++) {
        arrNumbers[i]=Number(arrNumbers[i]);
        sumOriginal+=arrNumbers[i];
    }
    let newArr=[];
    for (let i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i]%2 == 0) {
            arrNumbers[i]+=i;
        } else {
            arrNumbers[i]-=i;
        }
        newArr.push(arrNumbers[i]);
        sumNew+=newArr[i];
    }
    console.log(newArr);
    console.log(sumOriginal);
    console.log(sumNew);
}

addSubstract([-5,11,3,0,2]);