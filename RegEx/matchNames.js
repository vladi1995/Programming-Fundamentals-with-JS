function matchNames(arr) {
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let validName = pattern.exec(arr);
    let validNames = [];

    while(validName !== null) {
        validNames.push(validName[0]);
        validName = pattern.exec(arr);
    }
    console.log(validNames.join(' '));
}

matchNames(["Ivan Ivanov", "Ivan ivanov", "ivan Ivanov", "IVan Ivanov", "Test Testov", "Ivan  Ivanov"]);