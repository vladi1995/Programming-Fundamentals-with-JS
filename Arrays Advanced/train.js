function train(arr) {
    //Train with passengers in every wagon
    let numOfPassengersInWagon = arr.shift().split(' ').map(Number);
    //max capacity of every wagon
    let maxCapacity = Number(arr.shift());
    
    function trainCommands(arr) {
        for (element of arr) {
            let splittedArray = element.split(' ');
            if (splittedArray[0] == "Add") {
                addWagons(Number(splittedArray[1]));
            } else {
                addPassengers(numOfPassengersInWagon, Number(splittedArray[0]), maxCapacity);
            }
        }
    }

    function addWagons (wagonToPush) {
        numOfPassengersInWagon.push(wagonToPush);
    }

    function addPassengers (numOfPassengersInWagon, passengersToPush, maxCapacity) {
        let returnedWagons = 
        numOfPassengersInWagon.filter(element => (element + passengersToPush) <= maxCapacity);
        let wagonToPush = returnedWagons.shift();
        let indexToPush = numOfPassengersInWagon.indexOf(wagonToPush);
        numOfPassengersInWagon.splice(indexToPush,1,wagonToPush+passengersToPush);
    }

    trainCommands(arr);
    console.log(numOfPassengersInWagon.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);