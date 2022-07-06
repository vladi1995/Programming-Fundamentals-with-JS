function arenaTier(arrOfStrings) {
    let gladiatorTier = {};
    let currentTechnique = [];
    let copiedObj = {};

    for (let el of arrOfStrings) {
        if (el == 'Ave Cesar') {
            break;
        }
        if (!el.includes('vs')) {
            let [gladiator, technique, skill] = el.split(' -> ');
            currentTechnique = [];

            if (gladiatorTier.hasOwnProperty(gladiator)) {
                currentTechnique = gladiatorTier[gladiator];
                if (currentTechnique.includes(technique)) {
                    let oldTechnique = Number(currentTechnique[currentTechnique.indexOf(technique) + 1]);
                    let newTechnique = Number(skill);

                    if (oldTechnique < newTechnique) {
                        currentTechnique.splice(currentTechnique.indexOf(technique), 2);
                        currentTechnique.push(technique, skill);
                    } else {
                        continue;
                    }
                } else {
                    currentTechnique.push(technique, skill);
                }
                gladiatorTier[gladiator] = currentTechnique;
            } else {
                currentTechnique.push(technique, skill);
                gladiatorTier[gladiator] = currentTechnique;
            }
            copiedObj = { ...gladiatorTier };
        } else {
            let [gladiator1, gladiator2] = el.split(' vs ');

            if (gladiatorTier.hasOwnProperty(gladiator1) && gladiatorTier.hasOwnProperty(gladiator2)) {
                for (let i = 0; i < gladiatorTier[gladiator1].length; i = i + 2) {
                    for (let j = 0; j < gladiatorTier[gladiator2].length; j = j + 2) {
                        if (gladiatorTier[gladiator2][j] == gladiatorTier[gladiator1][i]) {
                            let gladOneSkill = gladiatorTier[gladiator1][i + 1];
                            let gladTwoSkill = gladiatorTier[gladiator2][j + 1];

                            if (gladOneSkill > gladTwoSkill) {
                                delete copiedObj[gladiator2];
                            } else if (gladOneSkill < gladTwoSkill) {
                                delete copiedObj[gladiator1];
                            }
                        }
                    }
                }
            }
        }
    }
    let entries = Object.entries(copiedObj);
    let sum = 0;
    for (let el of entries) {
        let nameOfPerson = el.shift();
        sum = 0;
        for (let eachEl of el) {
            for (let eachElOfEachEl of eachEl) {
                if (!isNaN(eachElOfEachEl)) {
                    sum+=Number(eachElOfEachEl);
                }
            }
        }
        
        el.unshift(nameOfPerson);
        el.unshift(sum);
    }

    entries.sort((a,b)=>(b[0]-a[0]) || b[1].localeCompare(a[1]));

    for (let el of entries) {
        let points = el.shift();
        let nameOfPerson = el.shift();
        console.log(`${nameOfPerson}: ${points} skill`);
        for (let el2 of el) {
            let objOfEl = {};
            for (let i=0;i < el2.length;i=i+2) {
                objOfEl[el2[i]] = el2[i+1];
            }
            
            let arrOfObj = Object.entries(objOfEl);
            arrOfObj.sort((a,b)=>b[1]-a[1]);
            for (let el of arrOfObj) {
                let [technique, skill] = el;
                console.log('- ' + technique + ' <!> ' + skill);
            }
        }   
    }
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    
    
);