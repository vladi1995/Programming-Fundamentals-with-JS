function max(arr) {
    let counter = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        counter = 0;
        for (let j = i+1; j < arr.length; j++) {
            if (a > arr[j]) {
                counter++;
            } else {
                break;
            }
        }

        if (counter == (arr.length-i-1)) {
            newArr.push(a);
        }
    }
    console.log(newArr.join(' '));
}

max([1,4,3,2]);