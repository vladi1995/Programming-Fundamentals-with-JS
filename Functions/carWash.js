function carWash(arrayOfCommands) {
    let resultCarWash = (arrayOfCommands) => {
        let resultCarWash = 0;
        for (currCommand of arrayOfCommands) {
            switch (currCommand) {
                case 'soap':
                    resultCarWash += 10;
                    break;
                case 'vacuum cleaner':
                    resultCarWash *= 1.25;
                    break;
                case 'water':
                    resultCarWash *= 1.20;
                    break;
                case 'mud':
                    resultCarWash *= 0.90;
                    break;
            }
        }
        return resultCarWash;
    }
    console.log(`The car is ${(resultCarWash(arrayOfCommands)).toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(['soap', 'water', 'mud', 'mud', 'water', 'mud', 'vacuum cleaner']);