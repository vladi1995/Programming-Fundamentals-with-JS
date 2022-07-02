function sequences(arrOfStrings) {
    let sortedArrays = [];
    for (let el of arrOfStrings) {
        let convertedToObj = JSON.parse(el);
        let sorted = convertedToObj.sort((a,b)=>(b-a));
        sortedArrays.push(sorted);
    }

    let copiedArr = sortedArrays.slice();

    for (let i = 0; i < sortedArrays.length; i++) {
        for (let j = i+1; j < sortedArrays.length; j++) {
            if (sortedArrays[i].length == sortedArrays[j].length && sortedArrays[i].every((item, index) => item == sortedArrays[j][index])) {
                copiedArr.splice(sortedArrays.indexOf(sortedArrays[j]),1);
                break;
            }
        }
    }

    copiedArr.sort((a,b)=>(a.length-b.length));
    



    copiedArr.forEach(el=>console.log(`[${el.join(', ')}]`));
}

sequences(["[-3, -2, -1, 0, 1, 4]",
"[10, 1, -17, 0, 2, 13]",
"[5, 6, 4]",
"[1, 2, 3]",
"[3, 2, 1]",
"[4, -3, 3]"]
);