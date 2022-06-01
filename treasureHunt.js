function treasureHunt(arrOfPieces) {
    let initialLoot = arrOfPieces.shift().split('|');
    let index = 0;
    let command = arrOfPieces[index];
    let stolenItems = [];

    function loot (param) {
        if (!initialLoot.includes(param)) {
            initialLoot.unshift(param);
        }
    }

    function drop (param) {
        let elementToDrop = initialLoot[param];
        initialLoot.splice(param, 1);
        initialLoot.push(elementToDrop);
    }

    function steal(param) {
        if (initialLoot.length < param) {
            stolenItems = initialLoot.splice(-initialLoot.length);
        } else {
            stolenItems = initialLoot.splice(-param);
        }
        return stolenItems.join(', ');
    }

    while (command != "Yohoho!") {
        let splCommand = command.split(' ');
        let firstCommand = splCommand.shift();

        for (let el of splCommand) {
            if (firstCommand == "Loot") {
                loot (el);
            } else if (firstCommand == "Drop") {
                let elNum = Number(el);
                if (elNum >= 0 && elNum < initialLoot.length) {
                    drop(elNum);
                } else {
                    continue;
                }
            } else if (firstCommand == "Steal") {
                let elNum = Number(el);
                console.log(steal(elNum));
            }
        }
        index++;
        command = arrOfPieces[index];
    }
    
    if (initialLoot.length > 0) {
        let sum = 0;
        for (let el of initialLoot) {
            sum += el.length;
        }
        console.log(`Average treasure gain: ${(sum / initialLoot.length).toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
