function netherRealms(str) {
    let arrOfMonsters = str.split(/ *, */g);
    arrOfMonsters.sort((a,b)=>a.localeCompare(b));
    let patternHealth = /[\^]*[^\d+\+\-\*\/\.\s\,]/g;
    let patternDamage = /[+]?[-]?\d+[.]?\d*/g;

    let healthOfMonster = {};
    let damageOfMonster = {};

    let sumHealth = 0;
    let sumDamage = 0;

    for (let el of arrOfMonsters) {
        let trimmedEl = el.trim();
        healthOfMonster = patternHealth.exec(trimmedEl);
        damageOfMonster = patternDamage.exec(trimmedEl);
        sumHealth = 0;
        sumDamage = 0;

        while (healthOfMonster != null) {
            let charOfHealth = healthOfMonster[0].charCodeAt(0);
            sumHealth += charOfHealth;
            healthOfMonster = patternHealth.exec(trimmedEl);
        }

        while (damageOfMonster != null) {
            sumDamage += Number(damageOfMonster[0]);
            damageOfMonster = patternDamage.exec(trimmedEl);
        }

        for (let i = 0; i < trimmedEl.length; i++) {
            if (trimmedEl[i] == "*") {
                sumDamage *= 2;
            } else if (trimmedEl[i] == "/") {
                sumDamage /= 2;
            }
        }

        console.log(`${trimmedEl} - ${sumHealth} health, ${sumDamage.toFixed(2)} damage`);
    }
}

netherRealms("M3ph-1.0st0**, Azazel, Gos/ho");