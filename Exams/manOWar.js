function manOWar(arrayOfCommands) {
    let statusOfPirateShip = arrayOfCommands.shift().split('>').map(Number);
    let statusOfWarShip = arrayOfCommands.shift().split('>').map(Number);
    const maximumHealth = Number(arrayOfCommands.shift());
    let isLost = 0;

    let command = arrayOfCommands.shift();
    while (command != 'Retire') {
        if (isLost) {
            break;
        }
        let arrayOfEveryCommand = command.split(' ');
        if (arrayOfEveryCommand.includes('Fire')) {
            //Pirate ship attacks the War ship
            let index = Number(arrayOfEveryCommand[1]);
            let damage = Number(arrayOfEveryCommand[2]);

            if (index >= 0 && index < statusOfWarShip.length) {
                statusOfWarShip[index] -= damage;
                if (statusOfWarShip[index] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    isLost = 1;
                    break;
                }
            }
        } else if (arrayOfEveryCommand.includes('Defend')) {
            //War ship attacks the Pirate ship
            let startIndex = Number(arrayOfEveryCommand[1]);
            let endIndex = Number(arrayOfEveryCommand[2]);
            let damage = Number(arrayOfEveryCommand[3]);

            if ((startIndex >= 0 && startIndex < statusOfPirateShip.length) && (endIndex >= startIndex && endIndex < statusOfPirateShip.length)) {
                for (let i = startIndex; i <= endIndex; i++) {
                    statusOfPirateShip.splice(i, 1, statusOfPirateShip[i] -= damage);
                    
                    if (statusOfPirateShip[i] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        isLost = 1;
                        break;
                    }
                }
            }
        } else if (arrayOfEveryCommand.includes('Repair')) {
            let index = Number(arrayOfEveryCommand[1]);
            let health = Number(arrayOfEveryCommand[2]);

            if (index >= 0 && index < statusOfPirateShip.length) {
                statusOfPirateShip[index] += health;
                if (statusOfPirateShip[index] > maximumHealth) {
                    statusOfPirateShip[index] = maximumHealth;
                } 
            }
        } else if (arrayOfEveryCommand.includes('Status')) {
            let countRepair = 0;
            for (let el of statusOfPirateShip) {
                if (el < maximumHealth * 0.2) {
                    countRepair++;
                }
            }
            console.log(`${countRepair} sections need repair.`);
        }
        command = arrayOfCommands.shift();
    }
    if (!isLost) {
        let sumPirate = statusOfPirateShip.reduce((sum, curr) => sum + curr, 0);
        let sumWar = statusOfWarShip.reduce((sum, curr) => sum + curr, 0);
        console.log(`Pirate ship status: ${sumPirate}`);
        console.log(`Warship status: ${sumWar}`);
    }
}
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]
);