function convertToObj(objToConvert) {
    let converted = JSON.parse(objToConvert);
    for (let key in converted) {
        console.log(`${key}: ${converted[key]}`);
    }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');