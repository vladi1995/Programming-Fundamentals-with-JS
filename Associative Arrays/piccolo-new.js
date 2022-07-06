function piccolo(arrOfStrings) {
    let set = new Set();
    for (let el of arrOfStrings) {
        let [position, numOfCar] = el.split(', ');

        if (position == "IN") {
            set.add(numOfCar);
        } else if (position == "OUT") {
            set.delete(numOfCar);
        }
    }
    let arrOfSet = Array.from(set).sort();
    if (!set.size) {
        console.log('Parking Lot is Empty');
    } else {
        console.log(arrOfSet.join('\n'));
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);