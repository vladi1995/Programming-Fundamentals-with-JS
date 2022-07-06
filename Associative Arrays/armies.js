function armies(arrOfInputs) {
    let splittedEl = [];
    let leaders = {};
    let armyLeaders = [];

    for (let el of arrOfInputs) {
        if (el.includes('arrives')) {
            splittedEl = el.split(' ');
            splittedEl.pop();
            let leaderName = splittedEl.join(' ');
            leaders[leaderName] = {
                armiesName: {},
                totalArmyCount: 0,
            };
            armyLeaders.push(leaderName);
        } else if (el.includes('defeated')) {
            splittedEl = el.split(' ');
            splittedEl.pop();
            let leaderName = splittedEl.join(' ');
            armyLeaders.splice(armyLeaders.indexOf(leaderName), 1);
            delete leaders[leaderName];
        } else if (el.includes(':')) {
            splittedEl = el.split(/[:,]/g);
            let [leader, armyName, armyCount] = splittedEl;
            armyName = armyName.trim();
            if (leaders.hasOwnProperty(leader)) {
                 if (!leaders[leader].armiesName.hasOwnProperty(armyName)) {
                    leaders[leader].armiesName[armyName] = Number(armyCount);
                    leaders[leader].totalArmyCount += Number(armyCount);
                 } 
            } 
        } else if (el.includes(' + ')) {
            let splittedEl = el.split(' + ');
            let [armyName, armyCount] = splittedEl;
            armyLeaders.forEach(el => {
            if(leaders[el].armiesName.hasOwnProperty(armyName)) {
                leaders[el].armiesName[armyName] += Number(armyCount);
                leaders[el].totalArmyCount += Number(armyCount);
            }
            })
        }
    }
    
    let entries = Object.entries(leaders);
    entries.sort((a,b)=>b[1].totalArmyCount-a[1].totalArmyCount).forEach(army=>{
        console.log(`${army[0]}: ${army[1].totalArmyCount}`);
        Object.values(army[1]).forEach(el=>{
            Object.entries(el).sort((a,b)=>b[1]-a[1]).forEach(a=>{
                console.log(`>>> ${a[0]} - ${a[1]}`);
            })
        })
    });
}

armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);