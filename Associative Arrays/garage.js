function garage(arrOfStrings) {
    let resultObj = {};

    for (let el of arrOfStrings) {
        let [garageNumber, ...rest] = el.split(' - ');

        if (resultObj.hasOwnProperty(garageNumber)) {
            let currentInfo = resultObj[garageNumber];
            currentInfo.push(rest.join());
        } else {
            resultObj[garageNumber] = rest;
        }
    }

    for (let [garageNumber, carInfo] of Object.entries(resultObj)) {
        console.log(`Garage № ${garageNumber}`);
        let printData = '';
        for (let el of carInfo) {
            let splitted = el.split(/[:,]/g);
            printData = '';
            for (let i = 0; i < splitted.length; i=i+2) {
                if (i == splitted.length-2) {
                    printData += `${splitted[i].trim()} - ${splitted[i+1].trim()}`;
                } else {
                    printData += `${splitted[i].trim()} - ${splitted[i+1].trim()}, `;
                }
            }
            console.log(`--- ${printData}`);
        }
    }
}

garage(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']
);