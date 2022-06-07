function dungeonestDark(input) {
    //Initialize first elements
    let initialHealth = 100;
    let initialCoins = 0;
    let countRooms = 0;
    let isFound = 0;

    //Take the input as a string
    let newArray = input[0];
    //Convert the string to array by splitting the elements on every '|'
    let arrSplitOne = newArray.split('|');
    //Join the new array and make it string
    let arrOne = arrSplitOne.join(' ');
    //Convert the new string to array by splitting the elements ot every ' '
    let arrSplitTwo = arrOne.split(' ');

    for(let i = 0; i < arrSplitTwo.length; i++) {
        countRooms++;
        let command = arrSplitTwo[i];
        let commandNumber = Number(arrSplitTwo[i+1]);
        if (command == "potion") {
            if (initialHealth < 100) {
                if ((initialHealth+commandNumber < 100)) {
                    initialHealth += commandNumber;
                    console.log(`You healed for ${commandNumber} hp.`);
                } else {
                    console.log(`You healed for ${100-initialHealth} hp.`);
                    initialHealth = 100;
                }
            }
            console.log(`Current health: ${initialHealth} hp.`);
            i++;
        } else if (command == "chest") {
            initialCoins += commandNumber;
            console.log(`You found ${commandNumber} coins.`);
            i++;
        } else {
            if (initialHealth > commandNumber) {
                console.log(`You slayed ${command}.`);
                initialHealth -= commandNumber;
                i++;
            } else {
                console.log(`You died! Killed by ${command}.`);
                isFound = 1;
                break;
            }
        }
    }
    if (isFound == 1) {
        console.log(`Best room: ${countRooms}`);
    } else {
        console.log(`You've made it!`);
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);