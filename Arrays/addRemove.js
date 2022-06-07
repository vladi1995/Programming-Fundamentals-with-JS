function addRemove(arrString) {
    let newArr = [];
    let counter = 1;
    for (let i = 0; i < arrString.length; i++) {
        if (arrString[i] === 'add') {
            newArr.push(counter);
        } else if (arrString[i] === 'remove') {
            newArr.pop();
        }
        counter++;
    }
    if (newArr.length == 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}

addRemove(['remove', 'remove', 'remove']);