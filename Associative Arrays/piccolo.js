function piccolo(arrOfStrings) {
    let result = {};
    let piccoloCars = [];

    for (let el of arrOfStrings) {
        let [direction, carNumber] = el.split(',');
        result[carNumber] = direction;
    }
    
    let entries = Object.entries(result);
    for (let [carNumber, direction] of entries) {
        if(result.hasOwnProperty(carNumber)) {
            if (result[carNumber] == 'IN') {
                piccoloCars.push(carNumber);
            }
        }
    }
    let sortedPiccoloCars = piccoloCars.sort((a,b)=>a.localeCompare(b));
    if (sortedPiccoloCars.length == 0) {
        console.log('Parking Lot is Empty');
    } else {
        console.log(sortedPiccoloCars.map(x=>console.log(x)).join(' '));
    }
}

piccolo(['OUT, CA2844AA',
]
);