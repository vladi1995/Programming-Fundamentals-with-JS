function convertToJson(name, lastName, hairColor) {
    let emptyObj = {
        name,
        lastName,
        hairColor,
    };
    console.log(JSON.stringify(emptyObj));
}

convertToJson('George', 'Jones', 'Brown');