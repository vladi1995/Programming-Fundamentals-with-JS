function maxSequence(arr) {
    let counter = 1;
    let isFound = 0;
    let newArr = [];
    let max = 0;
    let maxArr = [];

    for (let i = 0; i < arr.length; i++) {
        let firstEl = arr[i];
        counter = 1;
        isFound = 0;
    
        for (let j = i+1; j < arr.length; j++) {
            let secondEl = arr[j];
            if (firstEl == secondEl) {
                counter++;
                isFound = 1;
                i++;
                newArr = [];
              
                for (k = 0; k < counter; k++) {
                    newArr.push(secondEl);
                }
            } else {
                break;
            } 
        }
        if(isFound) {   
            if (counter > max) {
                max = counter;
                maxArr = newArr;
            }
        }
    }
    console.log(maxArr.join(' '));
}

maxSequence([2,1,1,2,3,3,2,2,2,1]);