function storeProvision(currStockArr, orderedArr) {
    let resultObject = {};

    for (let i = 0; i < currStockArr.length; i=i+2) {
        let typeOfProduct = currStockArr[i];
        let quantity = Number(currStockArr[i+1]);

        resultObject[typeOfProduct] = quantity;
    }
    
    for (let i = 0; i < orderedArr.length; i=i+2) {
        let typeOfProduct = orderedArr[i];
        let quantity = Number(orderedArr[i+1]);

        if (resultObject.hasOwnProperty(typeOfProduct)) {
            resultObject[typeOfProduct] += quantity;
        } else {
            resultObject[typeOfProduct] = quantity;
        }
    }
    
    for (let [key, value] of Object.entries(resultObject)) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    
);