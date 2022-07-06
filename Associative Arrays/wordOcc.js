function wordOcc(arrOfWords) {
    let result = {};
    let previousCounter = 0;

    for (let el of arrOfWords) {
        previousCounter = 1;
        if (result.hasOwnProperty(el)) {
            previousCounter = result[el];
            previousCounter+=1;
        }  
        result[el] = previousCounter;
    }
    let arr = Object.entries(result).sort((a,b)=>b[1]-a[1]);

    for (let el of arr) {
        let [word, counts] = el;
        console.log(`${word} -> ${counts} times`);
    }
}

wordOcc(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);