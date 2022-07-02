function catalogue(arrOfStrings) {
    let obj = {};
    arrOfStrings.sort((a,b)=>(a.localeCompare(b)));
    let isF = 0;
    let arrOfStartWords = [];
    for (let el of arrOfStrings) {
        let splitted = el.split(' : ');
        let [productName, productPrice] = [splitted.shift(), Number(splitted)];
        obj[productName] = productPrice;    
    }
    
    for (let [key, value] of Object.entries(obj)) {
        let startWord = key[0];
        arrOfStartWords.push(startWord);
        if (arrOfStartWords.length == 1 || arrOfStartWords[arrOfStartWords.length-1] != arrOfStartWords[arrOfStartWords.length-2]) {
            console.log(arrOfStartWords[arrOfStartWords.length-1]);
        }
        console.log(`  ${key}: ${value}`);
    }
}

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]    
    );