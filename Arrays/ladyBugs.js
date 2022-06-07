function ladyBugs(initialArray) {
    //Number of fields
    let countField = Number(initialArray[0]);
    //Remove the first element from the array
    initialArray.splice(0, 1);
    //Get the indexex
    let arrayIndex = initialArray[0];
    //Make the upper string to array
    let arrIn = arrayIndex.split(' ');
    //Remove the first element from the array
    initialArray.splice(0, 1);
    //Join the array to string
    let newArrayToString = initialArray.join(' ');
    //Split the string to array when ' ' is found
    let newArray = newArrayToString.split(' ');
    //Count of array loops
    let countOfLoop = (newArray.length) / 3;
    if (countOfLoop < 1) {
        countOfLoop = 0;
    }
    let counter = 0;
    let arrayOfLadyBug = [];

    for (let j = 0; j < countField; j++) {
        arrayOfLadyBug[j] = 0;
    }

    for (let i = 0; i < arrIn.length; i++) {
        for (let j = 0; j < countField; j++) {
            if (j === Number(arrIn[i]) && arrIn[0] !== '' && j <= Number(arrIn[i])) {
                arrayOfLadyBug[j] = 1;
            }
        }
    }

    let indexOfLadyBug = 0;
    let positionOfLadyBug = "";
    let lengthOfMovement = 0;

    for (let i = 1; i <= countOfLoop; i++) {
        for (let j = counter; j < 3 * i; j++) {
            indexOfLadyBug = Number(newArray[j]);
            positionOfLadyBug = newArray[j + 1];
            lengthOfMovement = Number(newArray[j + 2]);
            if (positionOfLadyBug == "right") {
                if (indexOfLadyBug < arrayOfLadyBug.length) {
                    if (arrayOfLadyBug[indexOfLadyBug] == 1) {
                        arrayOfLadyBug[indexOfLadyBug] = 0;
                        if (indexOfLadyBug + lengthOfMovement <= arrayOfLadyBug.length - 1) {
                            if (arrayOfLadyBug[indexOfLadyBug + lengthOfMovement] == 1) {
                                if (indexOfLadyBug + 2 * lengthOfMovement <= arrayOfLadyBug.length - 1) {
                                    arrayOfLadyBug[indexOfLadyBug + lengthOfMovement + lengthOfMovement] = 1;
                                    break;
                                }
                            } else {
                                arrayOfLadyBug[indexOfLadyBug + lengthOfMovement] = 1;
                                break;
                            }
                        }
                    }
                }
            } else if (positionOfLadyBug == "left") {
                if (indexOfLadyBug < arrayOfLadyBug.length) {
                    if (arrayOfLadyBug[indexOfLadyBug] == 1) {
                        arrayOfLadyBug[indexOfLadyBug] = 0;
                        if (indexOfLadyBug - lengthOfMovement >= 0) {
                            if (arrayOfLadyBug[indexOfLadyBug - lengthOfMovement] == 1) {
                                if (indexOfLadyBug - 2 * lengthOfMovement >= 0) {
                                    arrayOfLadyBug[indexOfLadyBug - lengthOfMovement - lengthOfMovement] = 1;
                                    break;
                                }
                            } else {
                                arrayOfLadyBug[indexOfLadyBug - lengthOfMovement] = 1;
                                break;
                            }
                        }
                    }
                }
            }
        }
        counter += 3;

    }
    console.log(arrayOfLadyBug.join(' '));
}

ladyBugs([5, '6', '0 right 1', '6 right 22']);