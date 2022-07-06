function wordsTracker(arrOfStrings) {
    let result = {};
    let firstSentence = arrOfStrings.shift().split(' ');

    for (let el of firstSentence) {
        result[el] = 0;
    }

    for (let el of arrOfStrings) {
        if (result.hasOwnProperty(el)) {
            result[el] += 1;
        }
    }
    
    let entries = Object.entries(result);
    entries.sort((a,b)=>b[1]-a[1]);

    for (let [word, times] of entries) {
        console.log(word + ' - ' + times);
    }
}

wordsTracker(['is the', 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);