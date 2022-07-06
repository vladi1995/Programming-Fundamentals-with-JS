function storage(arrOfStrings) {
    let newMap = new Map();
    let existing = 0;
    for (let el of arrOfStrings) {
        let [product, quantity] = el.split(' ');
        quantity = Number(quantity);

        if (newMap.has(product)) {
            existing = newMap.get(product);
            quantity += existing;
        } 
        newMap.set(product, quantity);
    }
    
    let arrOfMaps = Array.from(newMap);
    arrOfMaps.forEach(el=>{
        console.log(el.join(' -> '));
    })
}

storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']

);