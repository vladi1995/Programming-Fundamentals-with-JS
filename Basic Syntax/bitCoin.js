function bitCoin(input) {
    let shift = 0;
    const gold = 67.51;
    const bitCoin = 11949.16;
    let allSum = 0;
    let boughtBC = 0;
    let firstDay = 0;
    let minDay = input.length;
    let realBuy = 0;

    for (let i = 0; i < input.length; i++) {
        shift = Number(input[i]);
        if ((i+1)%3===0) {
            allSum += shift*0.7*gold;
        } else {
            allSum += shift*gold;
        }
        if (allSum >= bitCoin) {
            firstDay = i+1;
            if (firstDay < minDay) {
                minDay = firstDay;
            }
            realBuy = Math.floor(allSum/bitCoin);
            allSum -= (realBuy*bitCoin);
            boughtBC+=realBuy;
        }
    }

    console.log(`Bought bitcoins: ${boughtBC}`);
    if (boughtBC > 0) {
        console.log(`Day of the first purchased bitcoin: ${minDay}`);
    }
    console.log(`Left money: ${allSum.toFixed(2)} lv.`);
}
bitCoin([100,200,300]);