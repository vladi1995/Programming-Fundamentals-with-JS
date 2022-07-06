function aMinerTask(arrOfStrings) {
    let result = {};
    let map = new Map();
    for (let i = 0; i < arrOfStrings.length; i+=2) {
        let resource = arrOfStrings[i];
        let quantity = arrOfStrings[i+1];
        if (map.has(resource)) {
            let newQuantity = map.get(resource);
            map.set(resource, Number(quantity)+Number(newQuantity));
        } else {
            map.set(resource, quantity);
        }
    }

    for (let [resource, quantity] of map) {
        console.log(resource + ' -> ' + quantity);
    }
}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]    
    );