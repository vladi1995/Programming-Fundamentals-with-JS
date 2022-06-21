function products(arr) {
    let sortedArr = arr => arr.sort();
    let i = 1;
    for (element of sortedArr(arr)) {
        console.log(`${i}.${element}`);
        i++;
    }
}

products(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);