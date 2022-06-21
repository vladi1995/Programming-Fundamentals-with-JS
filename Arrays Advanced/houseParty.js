function houseParty(arrOfStrings) {
    //Initialize two arrays - for names and the rest
    let arrOfNames = [];
    let joinedRest = [];

    //Split the first array and make new arrays - for names and the rest
    for (element of arrOfStrings) {
        let splitted = element.split(' ');
        arrOfNames.push(splitted[0]);
        splitted.splice(0,1);
        joinedRest.push(splitted.join(' '));
    }

    //new function
    function solver(arrOfNames, joinedRest) {
        let counter = 0;
        let newList = [];
        //Iteration process regarding the rest array
        for (iterator of joinedRest) {
            //first input
            if (iterator == "is going!") {
                if (!newList.includes(arrOfNames[counter])) {
                    newList.push(arrOfNames[counter]);
                } else {
                    console.log(`${arrOfNames[counter]} is already in the list!`);
                }
            //second input
            } else {
                if (newList.includes(arrOfNames[counter])) {
                    let index = newList.indexOf(arrOfNames[counter]);
                    newList.splice(index,1);
                } else {
                    console.log(`${arrOfNames[counter]} is not in the list!`);
                }
            }
            counter++;
        }
        return newList.join('\n');
    }

    console.log(solver(arrOfNames, joinedRest));
    
}

houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);