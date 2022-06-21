function bunnyKill(arrOfStrings) {
    let coordinatesBomb = arrOfStrings.pop().split(' ').join(',').split(',').map(Number);
    let splittedArr = [];
    let newArr = [];

    for (let element of arrOfStrings) {
        splittedArr.push(element.split(' '));
        newArr.push(element.split(' '));
    }

    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            newArr[i][j] = Number(newArr[i][j]);
            splittedArr[i][j] = Number(splittedArr[i][j]);
        }
    }
    let counter = 0;
    let broi = 0;
    for (let index = 0; index < coordinatesBomb.length; index = index + 2) {
        if (splittedArr[coordinatesBomb[index]][coordinatesBomb[index + 1]] > 0) {
            for (let i = 0; i < splittedArr.length; i++) {
                for (let j = 0; j < splittedArr.length; j++) {
                    if (Math.max(Math.abs(i - coordinatesBomb[index]), Math.abs(j - coordinatesBomb[index + 1])) == 1) {
                        splittedArr[i][j] -= splittedArr[coordinatesBomb[index]][coordinatesBomb[index + 1]];
                        if(splittedArr[coordinatesBomb[index]][coordinatesBomb[index + 1]]!=newArr[coordinatesBomb[index]][coordinatesBomb[index + 1]]) {
                            broi++;
                        }
                        if (splittedArr[i][j] < 0) {
                            splittedArr[i][j] = 0;
                        }
                    }
                }
            }
        }
    }
   // for (let element of splittedArr) {
   //     console.log(element);
  //  }

    let sum = 0;

    for (let i = 0; i < splittedArr.length; i++) {
        for (let j = 0; j < splittedArr.length; j++) {
            if (splittedArr[i][j] == 0 || splittedArr[i][j] < 0) {
                counter++;
            } else {
                sum += splittedArr[i][j];
            }
        }
    }

    let difference = splittedArr.length * splittedArr.length - counter;
    if (broi) {
        difference+=1;
        sum+=newArr[coordinatesBomb[0]][coordinatesBomb[1]];
    }
    console.log(sum);
    console.log(difference);
}

bunnyKill(['10 10 10', '10 10 10', '10 10 10', '0,0']);
bunnyKill(['5 10 15 20', '10 10 10 10', '10 15 10 10', '10 10 10 10', '0,0 0,1']);