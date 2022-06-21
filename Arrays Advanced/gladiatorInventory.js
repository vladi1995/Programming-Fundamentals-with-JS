function gladiatorInventory(arrOfStrings) {
    let inventory = arrOfStrings[0].split(' ');
    arrOfStrings.splice(0,1);

    function buy (inventory, elToFilter) {
        let filteredInventory = inventory.filter(el=>el == elToFilter);
        if (filteredInventory.length == 0) {
            inventory.push(elToFilter);
        } 
        return inventory;
    }

    function trash(inventory, elToFilter) {
        if (elToFilter != -1) {
            inventory.splice(elToFilter,1);
        }
        return inventory;
    }

    function repair(inventory, elToFilter, elementToDo) {
        if (elToFilter >= 0) {
            inventory.splice(elToFilter, 1);
            inventory.push(elementToDo);
        }
        return inventory;
    }

    function upgrade(inventory, elementToDo) {
        let splittedName = elementToDo.split('-');
        let indexOfFound = inventory.indexOf(splittedName[0]);
        let elementToPut = `${splittedName[0]}:${splittedName[1]}`;
        if (indexOfFound != -1) {
            inventory.splice(indexOfFound+1, 0, elementToPut);
        }
        return inventory;
    }
    
    for (element of arrOfStrings) {
        let splittedCommands = element.split(' ');
        let command = splittedCommands[0];
        let elementToDo = splittedCommands[1];
        let indexOfFound = inventory.indexOf(elementToDo);

        if (command == "Buy") {
            buy(inventory, elementToDo);
        } else if (command == "Trash") {
            trash(inventory, indexOfFound);
        } else if (command == "Repair") {
            repair(inventory, indexOfFound, elementToDo);
        } else if (command == "Upgrade") {
            upgrade(inventory, elementToDo);
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);