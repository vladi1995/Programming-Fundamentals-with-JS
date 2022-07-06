function oddOccurences(singleString) {
    let arrOfStrings = singleString.split(' ');
    let result = {};

    for (let el of arrOfStrings) {
        let lower = el.toLocaleLowerCase();
        result[lower] = 0;
    }
    
    for (let el of arrOfStrings) {
        let lower = el.toLocaleLowerCase();
        if (result.hasOwnProperty(lower)) {
            result[lower] += 1;
        }
    }
    
    /*
    let printWords = "";
    for (let word in result) {
        if(result[word]%2!=0) {
            printWords += word + " ";
        }
    }
    console.log(printWords);
    */
   
   let filtered = Object.entries(result);
   let filtArr = filtered.
   filter(([word, times]) => times%2 == 1)
   .map(x=>x[0])
   .join(' ');
   console.log(filtArr);

}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');