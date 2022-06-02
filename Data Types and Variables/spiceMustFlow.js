function spiceMustFlow(startingYield) {
    let operationYield = Number(startingYield);
    let accYield = 0;
    let numOfDays = 0;

    while (operationYield >= 100) {
        numOfDays++;
        accYield += operationYield;
        if (accYield >= 26) {
            accYield -= 26;
        }
        operationYield-=10; 
    }
    if (accYield >= 26) {
        accYield = accYield-26;
    }
    console.log(numOfDays);
    console.log(accYield);
}

spiceMustFlow(50);