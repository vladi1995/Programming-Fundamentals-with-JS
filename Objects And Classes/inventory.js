function inventory(arrOfStrings) {
    let arrOfObj = [];

    for (let el of arrOfStrings) {
        let splittedArr = el.split(' / ');
        let [nameOfHero, heroLevel, items] = [splittedArr.shift(), Number(splittedArr.shift()), splittedArr];
        arrOfObj.push({name: nameOfHero, level: heroLevel, items: items});    
    }
    let sortedArr = arrOfObj.sort((a, b) => a.level-b.level);
    sortedArr.forEach(el=>{
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    })
}

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]    
    );