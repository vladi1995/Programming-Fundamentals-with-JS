function equalNeighbours(arrOfStrings) {
    let counter = 0;
    for (let i = 0; i < arrOfStrings.length; i++) {
        for (let j = 0; j < arrOfStrings[i].length; j++) {
            if (j != arrOfStrings[i].length-1 && arrOfStrings[i][j] == arrOfStrings[i][j+1]) {
                counter++;
            } 
            if (i != arrOfStrings.length-1 && arrOfStrings[i][j] == arrOfStrings[i+1][j]) {
                counter++;
            }
        }
    }
    console.log(counter);
}

//equalNeighbours([['2','3','4','7','0'],['4','0','5','3','4'],['2','3','5','4','2'],['9','8','7','5','4']]);
//equalNeighbours([['test','yo','yo','ho'],['well','done','no','6'],['not','done','yet','5']]);
equalNeighbours([['2','2','5','7','4'],['4','0','5','3','4'],['2','5','5','4','2']]);