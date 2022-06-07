function account(input) {
    let firstArray = [];
    for (let i = 0; i < input.length; i++) {
        firstArray.push(input[i]);
    }
    //Get the first element
    let firstElementGames = firstArray.shift();
    //Make upper an array
    let arrayGames = firstElementGames.split(' ');
    console.log(arrayGames);
    
}

account(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);