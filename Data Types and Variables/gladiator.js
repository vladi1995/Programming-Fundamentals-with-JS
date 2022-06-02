function gladiator(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetTimes = 0;
    let swordTimes = 0;
    let shieldTimes = 0;
    let armorTimes = 0;

    for (let i = 1; i <= lostFightCount; i++) {
        if (i%6 == 0) {
            helmetTimes++;
            swordTimes++;
            shieldTimes++;
            if (shieldTimes%2 == 0) {
                armorTimes++;
            }
        }
        else if (i%2 == 0) {
            helmetTimes++;
        } else if (i%3 == 0) {
            swordTimes++;
        }
    }
    let expenses = helmetTimes*helmetPrice+swordTimes*swordPrice+shieldTimes*shieldPrice+armorTimes*armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiator(23,12.50,21.50,40,200);