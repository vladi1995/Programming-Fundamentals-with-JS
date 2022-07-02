function flightSchedule(arrOfArr) {
    let allFlights = arrOfArr.shift();
    let changed = arrOfArr.shift();
    let checkStatus = arrOfArr.shift();

    let objAll = {};
    let objChanged = {};

    for (let el of allFlights) {
        let splittedEl = el.split(' ');
        let numberOfFlight = splittedEl.shift();
        objAll[numberOfFlight] = splittedEl;
    }

    for (let el of changed) {
        let splittedEl = el.split(' ');
        let numberOfFlight = splittedEl.shift();
        objChanged[numberOfFlight] = splittedEl;
    }

    for (let keyAll of Object.keys(objAll)) {
        for (let keyChanged of Object.keys(objChanged)) {
            if (keyAll == keyChanged) {
                objAll[keyAll].unshift(objChanged[keyChanged]);
            }
        }
    }

    for (let [key, value] of Object.entries(objAll)) {

        if (checkStatus != 'Ready to fly') {
            let status = value.shift();
            if (Array.isArray(status)) {
                if (status.join(' ') == checkStatus) {
                    console.log(`{ Destination: '${value[0]}', Status: '${checkStatus}' }`);
                }
            }
        } else {
            if (value[0] != 'Cancelled') {
                console.log(`{ Destination: '${value.join(' ')}', Status: '${checkStatus}' }`);
            }
        }
    }
}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]

);