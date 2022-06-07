function commonElements(arrString1, arrString2) {
    let lenArrString1 = arrString1.length;
    let lenArrString2 = arrString2.length;
    let max = Math.max(lenArrString1, lenArrString2);

    for (let i = 0; i < arrString1.length; i++) {
        for (let j = 0; j < arrString2.length; j++) {
            if (arrString1[i] === arrString2[j]) {
                console.log(arrString2[j]);
            }
        }
    } 
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);