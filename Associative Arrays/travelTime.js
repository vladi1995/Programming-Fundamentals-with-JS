function travelTime(arrOfStrings) {
    let result = {};
    let strOfInfo = '';
    let currentInfo = '';

    for (let el of arrOfStrings) {
        let [country, town, travelPrice] = el.split(' > ');
        strOfInfo = '';
        currentInfo = '';
        strOfInfo = town + ', ' + travelPrice;

        if (result.hasOwnProperty(country)) {
            currentInfo = result[country] + ', ' + strOfInfo;
        } else {
            currentInfo = strOfInfo;
        }
        result[country] = currentInfo;
    }
    let valuesOfResult = Object.entries(result);
    let objOfTowns = {};
    let objFinal = {};

    for (let [country, el] of valuesOfResult) {
        let arrOfEl = el.split(', ');
        objOfTowns = {};

        for (let i = 0; i < arrOfEl.length; i = i + 2) {
            if (objOfTowns.hasOwnProperty(arrOfEl[i])) {
                let minEl = objOfTowns[arrOfEl[i]];
                if (minEl < arrOfEl[i + 1]) {
                    objOfTowns[arrOfEl[i]] = minEl;
                } else {
                    objOfTowns[arrOfEl[i]] = arrOfEl[i + 1];
                }
            } else {
                objOfTowns[arrOfEl[i]] = arrOfEl[i + 1];
            }
        }
        
        objFinal[country] = objOfTowns;
    }
    let arrOfObj = Object.entries(objFinal).sort((a, b) => a[0].localeCompare(b[0]));
    let finalObj = {};
    for (let [key, value] of arrOfObj) {
        let arrOfValues = Object.entries(value);
        arrOfValues.sort((a, b) => (a[1] - b[1]));
        finalObj[key] = arrOfValues;
    }
    let finalArr = Object.entries(finalObj);
    let printData = '';
    let counter = 0;
    for (let [key, value] of finalArr) {
        printData = '';
        counter = 0;
        for (let el of value) {
            printData += el.join(' -> ') + ' ';

        }
        console.log(`${key} -> ${printData}`);
    }
}

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]

);