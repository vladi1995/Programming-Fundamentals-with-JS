function farming(str) {
    function winner(obj, item) {
        switch (item) {
            case 'motes':
                console.log('Dragonwrath obtained!');
                break;
            case 'fragments':
                console.log('Valanyr obtained!');
                break;
            case 'shards':
                console.log('Shadowmourne obtained!');
                break;
        }
        obj[item] -= 250;
    }
    let arrOfQuantity = str.split(' ');
    let mappedArr = arrOfQuantity.map(el => {
        if (!isNaN(el)) {
            el = Number(el);
        } else {
            el = el.toLowerCase();
        }
        return el;
    });

    let obj = {};
    let newValue = 0;
    for (let i = 0; i < mappedArr.length; i = i + 2) {

        if (obj.hasOwnProperty(mappedArr[i + 1])) {
            let currentValue = obj[mappedArr[i + 1]];
            newValue = currentValue + mappedArr[i];
        } else {
            newValue = mappedArr[i];
        }

        obj[mappedArr[i + 1]] = newValue;
        if (obj[mappedArr[i + 1]] >= 250 && (mappedArr[i+1] == 'fragments' || mappedArr[i+1] == 'motes' || mappedArr[i+1] == 'shards')) {
            let item = mappedArr[i + 1];
            winner(obj, item);
            break;
        }
    }

    if (!obj.hasOwnProperty('fragments')) {
        obj['fragments'] = 0;
    }
    if (!obj.hasOwnProperty('motes')) {
        obj['motes'] = 0;
    }
    if (!obj.hasOwnProperty('shards')) {
        obj['shards'] = 0;
    }
    let entries = Object.entries(obj);
    let mainArr = [];
    let secondayArr = [];

    for (let i = 0; i < entries.length; i++) {
        if (entries[i].includes('fragments') || entries[i].includes('motes') || entries[i].includes('shards')) {
           mainArr.push(entries[i]);
        } else {
           secondayArr.push(entries[i]);
        }
    }
    mainArr.sort((a,b)=>(b[1]-a[1]) || (a[0].localeCompare(b[0])));
    secondayArr.sort((a,b)=>a[0].localeCompare(b[0]));
    for (let el of mainArr) {
        console.log(el.join(': '));
    }
    for (let el of secondayArr) {
        console.log(el.join(': '));
    }
}

farming('250 fragments 30 shards 0 motes 10 shards 20 wood 0 motes 0 gold');